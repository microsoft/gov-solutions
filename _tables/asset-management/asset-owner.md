---
title: Asset Owner
description: "Records the ownership history of assets, including the person and time period of ownership."
parent: asset-management
---

| Field Name           | Type     | Schema Name             |
|----------------------|----------|------------------------|
| Asset                | Lookup   | govcdm_Asset           |
| Name                 | Nvarchar | govcdm_Name            |
| Owned From Date Time | Datetime | govcdm_OwnedFromDateTime|
| Owned To Date Time   | Datetime | govcdm_OwnedToDateTime |
| Person               | Lookup   | govcdm_Person          |
