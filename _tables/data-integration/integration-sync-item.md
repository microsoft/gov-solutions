---
title: Integration Sync Item
description: "Represents individual data items within a synchronization job, tracking field-level changes, values, and processing status."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| Applied Date Time   | Datetime | govcdm_AppliedDateTime     |
| Field Name          | Nvarchar | govcdm_FieldName           |
| Integration Sync Job| Lookup   | govcdm_IntegrationSyncJob  |
| Item ID             | Nvarchar | govcdm_Name                |
| New Value           | Nvarchar | govcdm_NewValue            |
| Process Message     | Nvarchar | govcdm_ProcessMessage      |
| Target ID           | Nvarchar | govcdm_TargetID            |
| Target Table        | Nvarchar | govcdm_TargetTable         |