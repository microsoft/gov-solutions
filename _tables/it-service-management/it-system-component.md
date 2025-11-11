---
title: IT System Component
description: "Represents components or sub-systems of an IT system with detailed metadata for architecture, stewardship, and operational management."
parent: it-service-management
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Abbreviation | Nvarchar | govcdm_Abbreviation |
| Description | Ntext | govcdm_Description |
| IT Datacenter | Lookup | govcdm_ITDatacenter |
| IT Product | Lookup | govcdm_ITProduct |
| IT System | Lookup | govcdm_ITSystem |
| IT System Component Type | Lookup | govcdm_ITSystemComponentType |
| IT Technology | Lookup | govcdm_ITTechnology |
| Last Review Date | Datetime | govcdm_LastReviewDate |
| Name | Nvarchar | govcdm_Name |
| Next Review Date | Datetime | govcdm_NextReviewDate |
| Operational Status | Picklist | govcdm_OperationalStatus |
| Parent IT System Component | Lookup | govcdm_ParentITSystemComponent |
| Primary Steward | Lookup | govcdm_PrimarySteward |
| Security Classification | Picklist | govcdm_SecurityClassification |
| Tags | Ntext | govcdm_Tags |
| Visibility | Picklist | govcdm_Visibility |


