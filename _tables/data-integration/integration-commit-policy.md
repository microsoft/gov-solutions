---
title: Integration Commit Policy
description: "Defines policies for committing data during integration processes, including authorization sources, certification settings, and field-level commit modes."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| Authoritative Sources| Nvarchar | govcdm_AuthoritativeSources|
| Auto Certify        | Picklist | govcdm_AutoCertify         |
| Commit Mode         | Picklist | govcdm_CommitMode          |
| Field Name          | Nvarchar | govcdm_FieldName           |
| Policy ID           | Nvarchar | govcdm_Name                |
| Stale After Days    | Int      | govcdm_StaleAfterDays      |
| Target Table        | Nvarchar | govcdm_TargetTable         |