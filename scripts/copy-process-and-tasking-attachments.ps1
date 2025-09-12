# Copies attachments referenced by the migrated Process and Tasking docs into the assets folder.
# Run this from the repo root: .\scripts\copy-process-and-tasking-attachments.ps1

$sourceDocs = Get-ChildItem -Path .\.source-apps-wiki\Process-and-Tasking -Filter *.md -Recurse | Where-Object { $_.Name -ne 'Release-Notes.md' }
$attachments = @()

foreach ($doc in $sourceDocs) {
    $content = Get-Content $doc.FullName -Raw
    $allMatches = Select-String -InputObject $content -Pattern '/\.attachments/([^\)\s]+)' -AllMatches
    foreach ($m in $allMatches.Matches) {
        $attachments += $m.Groups[1].Value
    }
}

$attachments = $attachments | Sort-Object -Unique
$destDir = Join-Path -Path . -ChildPath 'assets\app-starter-kits\process-and-tasking'
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }

foreach ($file in $attachments) {
    $src = Join-Path -Path '.\.attachments' -ChildPath $file
    $dst = Join-Path -Path $destDir -ChildPath $file
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Copied $file"
    } else {
        Write-Warning "Source attachment not found: $src"
    }
}

Write-Host "Done. Copied $($attachments.Count) attachments to $destDir"
