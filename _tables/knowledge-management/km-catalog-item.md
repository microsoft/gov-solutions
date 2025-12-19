---
title: KM Catalog Item
description: "Catalog item representing a knowledge artifact, used to organize and expose content for discovery."
parent: knowledge-management
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Collection | Lookup | govcdm_Collection |
| Content | Ntext | govcdm_Content |
| Content Date | Datetime | govcdm_ContentDate |
| Description | Ntext | govcdm_Description |
| Highlight From Date | Datetime | govcdm_HighlightFromDate |
| Highlight To Date | Datetime | govcdm_HighlightToDate |
| Keywords | Ntext | govcdm_Keywords |
| KM Catalog Item Subtype | Nvarchar | govcdm_KMCatalogItemSubtype |
| KM Catalog Item Type | Lookup | govcdm_KMCatalogItemType |
| KM Category | Lookup | govcdm_KMCategory |
| Name | Nvarchar | govcdm_Name |
| Parent KM Catalog Item | Lookup | govcdm_ParentKMCatalogItem |
| Primary POC | Lookup | govcdm_PrimaryPOC |
| Publication Status | Picklist | govcdm_PublicationStatus |
| Thumbnail | Image | govcdm_Thumbnail |
| URL | Nvarchar | govcdm_URL |
