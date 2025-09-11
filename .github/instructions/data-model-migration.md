
# Overview

These are the instructions on how to migrate data model information from the source repo into this repo.

Data Models are currently cataloged in the .source-wiki folder.

Each data model has a <module>.md markdown page at that location. This overview page has a table of contents (TOC), Requirements section, Releases section, Entity Relationship Diagram section with a fenced mermaid diagram block, followed by a data dictionary list of tables in the data model.

Each data model also has a <module>/Release-Notes.md markdown page, which has entries for each of the releases for that data model.

# Migrating Data Models

These are the steps to migrate a data model from the source repo into this target repo.

1. Create a data model markdown page within the data_models collection (_data_models folder). The page name should be lowercase and hyphentated, matching the source name as closely as possible. Use the provided _data_models/_template.md as a template for the data model. Theumbnails are stored at /assets/use_cases/<module>.png

2. Extract the list of table names from the source data model page at .source-wiki\<module>.md. Create a descriptive explanation of how the various tables are to be used for the governemnt scenario.

3. Copy the mermaid diagram from the source <module>.md page into the data model page where the <Entity Relationship Mermaid Diagram Goes Here> placeholder is. Do not create a section heade for this diagram.

4. Create a folder in the tables collection (_tables folder). For each table listed in the data model, create a markdown page in that folder which includes the front matter and list of fields. See _tables/core/country.md for an example.

5. Use the information in the source <module>/Release-Notes.md file to create data model releases, with the corresponding version number. See the other data model releases for examples of the structure and format.