---
title: Personnel Background Investigation
description: "Tracks background investigations conducted for personnel security."
parent: personnel-security
---

| Field Name              | Type     | Schema Name                   |
|-------------------------|----------|------------------------------|
| Name                    | Nvarchar | govcdm_Name                  |
| Action Status           | Picklist | govcdm_ActionStatus          |
| Background Investigation Type | Picklist | govcdm_BackgroundInvestigationType |
| Completion Date         | Datetime | govcdm_CompletionDate        |
| Due Date                | Datetime | govcdm_DueDate               |
| Initiation Date         | Datetime | govcdm_InitiationDate        |
| Investigation Notes     | Ntext    | govcdm_InvestigationNotes    |
| Investigation Number    | Nvarchar | govcdm_Name                  |
| Investigation Provider  | Lookup   | govcdm_InvestigationProvider |
| Investigation Provider POC | Lookup | govcdm_InvestigationProviderPOC |
| Originating CV Trigger  | Lookup   | govcdm_OriginatingCVTrigger  |
| Person                  | Lookup   | govcdm_Person                |
| Personnel Adjudication  | Lookup   | govcdm_PersonnelAdjudication |
| Personnel Clearance     | Lookup   | govcdm_PersonnelClearance    |
| Position Designation    | Picklist | govcdm_PositionDesignation   |
| Prior Investigation     | Lookup   | govcdm_PriorInvestigation    |
| Questionnaire Document  | Lookup   | govcdm_QuestionnaireDocument |
| Questionnaire Link      | Nvarchar | govcdm_QuestionnaireLink     |
