---
title: Organization Unit
description: "Represents government departments, divisions, or teams, supporting organizational structure and management."
parent: core
---

## Fields

| Field Name   | Type     | Schema              |
|--------------|----------|---------------------|
| Abbreviation | Nvarchar | govcdm_abbreviation |
| Description  | Nvarchar | govcdm_description  |
| Managed By   | Lookup   | govcdm_managedby    |
| Name         | Nvarchar | govcdm_name         |
| Org Code     | Nvarchar | govcdm_orgcode      |
| Organization Unit Type | Lookup | govcdm_organizationunittype |
| Parent Organization Unit | Lookup | govcdm_ParentOrganizationUnit |
