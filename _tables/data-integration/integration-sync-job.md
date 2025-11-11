---
title: Integration Sync Job
description: "Manages synchronization jobs between systems, tracking job status, direction, entity types, and execution details."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| Direction           | Picklist | govcdm_Direction           |
| Entity Type         | Nvarchar | govcdm_EntityType          |
| Job ID              | Nvarchar | govcdm_Name                |
| Job Status          | Picklist | govcdm_JobStatus           |
| Source System Key   | Nvarchar | govcdm_SourceSystemKey     |
| Submitted Date Time | Datetime | govcdm_SubmittedDateTime   |