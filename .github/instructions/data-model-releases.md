# Overview

Data model releases are a Jekyll collection which represent new version of the data model (Dataverse solution.zip files).

The actual files for the data models releases are stored in another repo, https://github.com/microsoft/gov-datamodels, under a modules/releases folder - one folder per module. For example, https://github.com/microsoft/gov-datamodels/tree/main/modules/asset-management/releases/v1.0.0.2 contains the solution.zip files for the Asset Management module.

Both the unmanaged version and managed version of the solution are made available. The file name formats are:

    - MSGov-Data-Models-<Module-Name> - v.X.X.X.X.zip
    - MSGov-Data-Models-<Module-Name>_managed - v.X.X.X.X.zip

# Formatting a Release

When asked to format a data model release, format the actual release notes content like the following example. Components are the tables, views, forms, etc. that changed. Use _data_model_releases/core/v1.0.2.2.md as an example. Leave the date if provided or insert today's date.

Also set the front matter metadata as much as possible. Include a short description summarizing the changes.

## MMM-DD, YYYY

-   **Component 1 Name**
    - Description of change (added, changed, removed, etc.)

-   **Component 2 Name**
    - Description of change (added, changed, removed, etc.)