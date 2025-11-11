---
title: IT System
description: "Represents an IT system tracked for accreditation and operations, with comprehensive metadata for lifecycle, security, and operational management."
parent: it-service-management
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| ATO (Authority to Operate) | Lookup | govcdm_ATOAuthoritytoOperate |
| Abbreviation | Nvarchar | govcdm_Abbreviation |
| Catalog Status | Picklist | govcdm_CatalogStatus |
| Criticality | Picklist | govcdm_Criticality |
| Dependencies Summary | Ntext | govcdm_DependenciesSummary |
| Description | Ntext | govcdm_Description |
| IT Datacenter | Lookup | govcdm_ITDatacenter |
| Information Security Officer | Lookup | govcdm_InformationSecurityOfficer |
| Is Public API Available? | Picklist | govcdm_IsPublicAPIAvailable |
| Last Review Date | Datetime | govcdm_LastReviewDate |
| Lifecycle Stage | Picklist | govcdm_LifecycleStage |
| Name | Nvarchar | govcdm_Name |
| Next Review Date | Datetime | govcdm_NextReviewDate |
| Operational Status | Picklist | govcdm_OperationalStatus |
| Point of Contact | Lookup | govcdm_PointofContact |
| Primary IT Hosting Model | Picklist | govcdm_PrimaryITHostingModel |
| Primary Technology | Lookup | govcdm_PrimaryTechnology |
| Public API Endpoint | Nvarchar | govcdm_PublicAPIEndpoint |
| Security Classification | Picklist | govcdm_SecurityClassification |
| URL | Nvarchar | govcdm_URL |
| Visibility | Picklist | govcdm_Visibility |


