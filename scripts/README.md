# Data Model Documentation Generator

This script generates markdown documentation for Government Common Data Model modules by reading Dataverse solution files from the sibling `gov-datamodels` repository.

## Prerequisites

- The `gov-datamodels` repository should be located as a sibling to this repository
- Python 3.x with xml.etree.ElementTree support (standard library)

## Repository Structure Expected

```
parent-folder/
├── gov-solutions/           (this repository)
│   ├── scripts/
│   │   └── create_erd.py
│   └── _data_models/        (output location)
└── gov-datamodels/          (sibling repository)
    ├── modules/             (PAC CLI unpacked solutions)
    │   ├── core/
    │   ├── hr-administration/
    │   └── ...
    └── cross-module/        (cross-module solutions)
        └── data-integration/
```

## Usage

### Command Line Mode

Generate documentation for a specific module:

```bash
python scripts/create_erd.py <module-name>
```

Examples:
```bash
python scripts/create_erd.py core
python scripts/create_erd.py hr-administration  
python scripts/create_erd.py data-integration
```

### Interactive Mode

Run without arguments for an interactive selection process:

```bash
python scripts/create_erd.py
```

The interactive mode provides:
1. **Module Type Selection**: Choose between Standard Modules or Cross-Module Solutions
2. **Module Selection**: Browse modules within the selected type
3. **Navigation**: Go back to type selection or exit at any time

## Output

The script generates markdown files in the `.temp/` directory of the current repository. Each file includes:

- Module overview and requirements
- Release information with links
- Entity Relationship Diagram (Mermaid format)
- Detailed entity documentation with fields and metadata

## Features

- **Automatic Discovery**: Scans both `modules` and `cross-module` folders
- **Interactive Selection**: Two-stage selection (module type, then specific module)
- **Error Handling**: Gracefully handles missing files and parsing errors
- **Cross-Repository**: Reads from sibling repo, outputs to current repo's .temp folder
- **Flexible Naming**: Handles various module naming conventions
- **Safe Output**: Generates files in .temp directory to avoid overwriting existing documentation

## Error Handling

The script includes robust error handling for:
- Missing sibling repository
- Missing module folders
- Corrupted XML files
- Missing entity or relationship files

Warnings and errors are displayed to help diagnose issues.

## Workflow

1. **Generate Documentation**: Run the script to create updated documentation in the `.temp/` folder
2. **Review Changes**: Compare the generated files with existing ones in `_data_models/`
3. **Selective Update**: Copy or merge content from `.temp/` files to the main `_data_models/` files as needed
4. **Clean Up**: Remove files from `.temp/` once you've incorporated the changes

This workflow ensures you maintain control over what gets updated in your main documentation files.
