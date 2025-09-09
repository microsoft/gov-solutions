---
title: Data Entry Step
description: "Defines a step in a process that requires data entry or form completion."
parent: process-and-tasking
---

| Field Name                  | Type     | Schema Name                   |
|-----------------------------|----------|------------------------------|
| App Name                    | Nvarchar | govcdm_AppName               |
| Data Entry Step Order       | Int      | govcdm_DataEntryStepOrder    |
| Data Entry Type             | Picklist | govcdm_DataEntryType         |
| Description                 | Ntext    | govcdm_Description           |
| Form Applies to Schema Name | Nvarchar | govcdm_FormAppliestoSchemaName|
| Form Base URL               | Nvarchar | govcdm_FormBaseURL           |
| Name                        | Nvarchar | govcdm_Name                  |
| Parent Data Entry Step      | Lookup   | govcdm_ParentDataEntryStep   |
| Valid for Create            | Picklist | govcdm_ValidforCreate        |
