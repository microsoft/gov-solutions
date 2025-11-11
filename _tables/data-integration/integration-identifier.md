---
title: Integration Identifier
description: "Manages external identifiers and their mapping to internal system entities, tracking when identifiers are first and last seen."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| External Key        | Nvarchar | govcdm_ExternalKey         |
| First Seen Date Time| Datetime | govcdm_FirstSeenDateTime   |
| Identifier ID       | Nvarchar | govcdm_Name                |
| Last Seen Date Time | Datetime | govcdm_LastSeenDateTime    |
| Source System Key   | Nvarchar | govcdm_SourceSystemKey     |
| Target ID           | Nvarchar | govcdm_TargetID            |
| Target Table        | Nvarchar | govcdm_TargetTable         |