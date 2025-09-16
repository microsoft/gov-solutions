---
title: Personnel CV Trigger
description: "Tracks CV (continuous vetting) trigger events and intel sources that prompt review or investigation."
parent: personnel-security
---

| Field Name         | Type     | Schema Name               |
|--------------------|----------|---------------------------|
| Name               | Nvarchar | govcdm_Name               |
| Person             | Lookup   | govcdm_Person             |
| Trigger Date       | Datetime | govcdm_TriggerDate        |
| CV Intelligence Source | Picklist | govcdm_CVIntelligenceSource |
| CV Trigger Event   | Picklist | govcdm_CVTriggerEvent     |
| Details            | Ntext    | govcdm_Details            |
| Investigation Launched | Picklist | govcdm_InvestigationLaunched |
| Originating CV Trigger | Lookup | govcdm_OriginatingCVTrigger |
| Personnel Clearance | Lookup  | govcdm_PersonnelClearance |
| Source System      | Nvarchar | govcdm_SourceSystem       |
