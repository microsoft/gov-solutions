---
title: HR Disciplinary Action
description: "Documents disciplinary actions, findings, and outcomes for personnel."
parent: hr-administration
---

| Field Name              | Type     | Schema Name                |
|-------------------------|----------|---------------------------|
| Action Decision Date    | Datetime | govcdm_ActionDecisionDate |
| Action Initiation Date  | Datetime | govcdm_ActionInitiationDate|
| Action Status           | Picklist | govcdm_ActionStatus       |
| Action Summary          | Ntext    | govcdm_ActionSummary      |
| Appeal Filed            | Picklist | govcdm_AppealFiled        |
| Disciplinary Action Type| Picklist | govcdm_DisciplinaryActionType|
| Effective From Date     | Datetime | govcdm_EffectiveFromDate  |
| Effective To Date       | Datetime | govcdm_EffectiveToDate    |
| Findings                | Ntext    | govcdm_Findings           |
| Incident Date           | Datetime | govcdm_IncidentDate       |
| Incident Details        | Ntext    | govcdm_IncidentDetails    |
| Name                    | Nvarchar | govcdm_Name               |
| Next Review Date        | Datetime | govcdm_NextReviewDate     |
| Person                  | Lookup   | govcdm_Person             |
| Review Status           | Picklist | govcdm_ReviewStatus       |
| Reviewer                | Lookup   | govcdm_Reviewer           |
| Reviewer (User)         | Lookup   | govcdm_ReviewerUser       |
| Union Notified          | Picklist | govcdm_UnionNotified      |
| Union Notified Date     | Datetime | govcdm_UnionNotifiedDate  |
| Union Response          | Ntext    | govcdm_UnionResponse      |
