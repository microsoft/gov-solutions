---
title: Executive Action
description: "Tracks executive actions, their status, deadlines, and all related coordination details."
parent: executive-coordination
---

| Field Name                  | Type     | Schema Name                   |
|-----------------------------|----------|------------------------------|
| Action Number               | Nvarchar | govcdm_ActionNumber          |
| Action Status               | Picklist | govcdm_ActionStatus          |
| Description                 | Ntext    | govcdm_Description           |
| Due Date Time               | Datetime | govcdm_DueDateTime           |
| Executive Action Category   | Picklist | govcdm_ExecutiveActionCategory|
| Executive Action Type       | Lookup   | govcdm_ExecutiveActionType   |
| Method of Receipt           | Picklist | govcdm_MethodofReceipt       |
| Name                        | Nvarchar | govcdm_Name                  |
| Outcome Summary             | Ntext    | govcdm_OutcomeSummary        |
| Parent Action               | Lookup   | govcdm_ParentAction          |
| Priority                    | Picklist | govcdm_Priority              |
| Received Date Time          | Datetime | govcdm_ReceivedDateTime      |
| Received From OU            | Lookup   | govcdm_ReceivedFromOU        |
| Received From Organization  | Lookup   | govcdm_ReceivedFromOrganization|
| Received From Person        | Lookup   | govcdm_ReceivedFromPerson    |
| Security Classification     | Picklist | govcdm_SecurityClassification|
| Source Analysis             | Lookup   | govcdm_SourceAnalysis        |
| Source Impact               | Lookup   | govcdm_SourceImpact          |
| Source Legal Authority      | Lookup   | govcdm_SourceLegalAuthority  |
| Source Risk Item            | Lookup   | govcdm_SourceRiskItem        |
