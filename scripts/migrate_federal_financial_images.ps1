<#
.SYNOPSIS
Copies image files listed in the Federal Financial IMAGES_TO_COPY.txt from the repository `/.attachments/` folder into `assets/app-starter-kits/federal-financial/`.

.DESCRIPTION
The script reads `IMAGES_TO_COPY.txt` in the federal-financial assets folder and copies every referenced image file from `.attachments` into the target folder. It reports progress and missing files and returns a non-zero exit code if any images were not found.

.PARAMETER SourceDir
Optional path to the source attachments directory. Defaults to the repository `.attachments` folder.

.PARAMETER TargetDir
Optional path to the destination folder. Defaults to `assets/app-starter-kits/federal-financial` inside the repo.

.PARAMETER ListFile
Optional path to the images manifest file. Defaults to the IMAGES_TO_COPY.txt in the federal-financial assets folder.

.PARAMETER Force
If set, existing files in the destination will be overwritten.

.PARAMETER DryRun
If set, the script will only show what would be copied, without actually performing copy operations.
#>
param(
    [string]$SourceDir,
    [string]$TargetDir,
    [string]$ListFile,
    [switch]$Force,
    [switch]$DryRun
)

Set-StrictMode -Version Latest

# Resolve repository root based on script location
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Resolve-Path (Join-Path $scriptDir "..")

if (-not $SourceDir) {
    $SourceDir = Join-Path $repoRoot ".attachments"
}
if (-not $TargetDir) {
    $TargetDir = Join-Path $repoRoot "assets\app-starter-kits\federal-financial"
}
if (-not $ListFile) {
    $ListFile = Join-Path $TargetDir "IMAGES_TO_COPY.txt"
}

Write-Host "SourceDir: $SourceDir"
Write-Host "TargetDir: $TargetDir"
Write-Host "ListFile: $ListFile"

if (-not (Test-Path $ListFile)) {
    Write-Error "Images list file not found: $ListFile"
    exit 2
}

$lines = Get-Content -Path $ListFile -ErrorAction Stop

# Extract filenames from the manifest. Accept plain filenames or lines starting with '- '
$files = @()
foreach ($line in $lines) {
    $trim = $line.Trim()
    if ($trim -eq "" -or $trim.StartsWith("#") -or $trim.StartsWith("Note:")) { continue }

    if ($trim.StartsWith("- ") -or $trim.StartsWith("*\t") -or $trim.StartsWith("* ")) {
        $candidate = $trim.Substring(2).Trim()
    } else {
        $candidate = $trim
    }

    if ($candidate -match "^[\w\-]+\.[a-zA-Z]{2,4}$") {
        $files += $candidate
        continue
    }

    $m = [regex]::Match($candidate, "([\w\-]+\.(?:png|jpg|jpeg|gif|svg))")
    if ($m.Success) { $files += $m.Groups[1].Value }
}

if ($files.Count -eq 0) {
    Write-Warning "No image filenames parsed from $ListFile"
    exit 0
}

if (-not (Test-Path $TargetDir)) {
    Write-Host "Creating target directory: $TargetDir"
    if (-not $DryRun) { New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null }
}

$copied = 0
$skipped = 0
$missing = @()

foreach ($f in $files) {
    $src = Join-Path $SourceDir $f
    $dst = Join-Path $TargetDir $f

    if (-not (Test-Path $src)) {
        Write-Warning "Missing source image: $src"
        $missing += $f
        continue
    }

    if ((Test-Path $dst) -and (-not $Force)) {
        Write-Host "Skipping existing file (use -Force to overwrite): $dst"
        $skipped++
        continue
    }

    if ($DryRun) {
        Write-Host "[DryRun] Would copy: $src -> $dst"
    } else {
        try {
            Copy-Item -Path $src -Destination $dst -Force:$Force -ErrorAction Stop
            Write-Host "Copied: $f"
            $copied++
        } catch {
            $errMsg = $_.Exception.Message
            Write-Error "Failed to copy $($src) to $($dst): $errMsg"
            $missing += $f
        }
    }
}

Write-Host "---"
Write-Host "Copied: $copied"
Write-Host "Skipped (already existed): $skipped"
Write-Host "Missing: $($missing.Count)"
if ($missing.Count -gt 0) { $missing | ForEach-Object { Write-Host " - $_" } }

if ($missing.Count -gt 0) { exit 3 } else { exit 0 }
