---
title: Asset
description: "Tracks physical or digital items managed as assets, including ownership, category, and related details."
parent: asset-management
---

| Field Name         | Type     | Schema Name              |
|--------------------|----------|-------------------------|
| Acquired Date Time | Datetime | govcdm_AcquiredDateTime |
| Asset Category     | Lookup   | govcdm_AssetCategory    |
| Asset Number       | Nvarchar | govcdm_AssetNumber      |
| Current Owner      | Lookup   | govcdm_CurrentOwner     |
| Description        | Nvarchar | govcdm_Description      |
| Name               | Nvarchar | govcdm_Name             |
| Parent Asset       | Lookup   | govcdm_ParentAsset      |
| Related Product    | Lookup   | govcdm_RelatedProduct   |
