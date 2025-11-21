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
| Asset Status       | Choice   | govcdm_AssetStatus      |
| Current Owner      | Lookup   | govcdm_CurrentOwner     |
| Description        | Nvarchar | govcdm_Description      |
| Last Inventory Date| Date     | govcdm_LastInventoryDate|
| Location           | Lookup   | govcdm_Location         |
| Location Note      | Ntext    | govcdm_LocationNote     |
| Name               | Nvarchar | govcdm_Name             |
| Notes              | Ntext    | govcdm_Notes            |
| Organization Unit  | Lookup   | govcdm_OrganizationUnit |
| Parent Asset       | Lookup   | govcdm_ParentAsset      |
| Purchased Date     | Date     | govcdm_PurchasedDate    |
| Quantity           | Float    | govcdm_Quantity         |
| Related Product    | Lookup   | govcdm_RelatedProduct   |
| RF Tag             | Nvarchar | govcdm_RFTag            |
| Serial Number      | Nvarchar | govcdm_SerialNumber     |
| Service Tag        | Nvarchar | govcdm_ServiceTag       |
| Unit Cost          | Money    | govcdm_UnitCost         |
