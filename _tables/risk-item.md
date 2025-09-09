---
title: Risk Item
description: "Tracks risks, mitigation plans, and related details for government projects, programs, or compliance efforts."
parent: core
---

## Fields

| Field Name            | Type      | Schema                    |
|-----------------------|-----------|---------------------------|
| Action Status         | Picklist  | govcdm_ActionStatus       |
| Analysis              | Lookup    | govcdm_Analysis           |
| Description           | Ntext     | govcdm_Description        |
| Evidence of Mitigation| Ntext     | govcdm_EvidenceofMitigation|
| Identification Date   | Datetime  | govcdm_IdentificationDate |
| Impact Description    | Ntext     | govcdm_ImpactDescription  |
| Legal Authority       | Lookup    | govcdm_LegalAuthority     |
| Mitigation Plan       | Ntext     | govcdm_MitigationPlan     |
| Name                  | Nvarchar  | govcdm_Name               |
| Organization Unit     | Lookup    | govcdm_OrganizationUnit   |
| Parent Risk Item      | Lookup    | govcdm_ParentRiskItem     |
| Review Date           | Datetime  | govcdm_ReviewDate         |
| Risk General Category | Picklist  | govcdm_RiskGeneralCategory|
| Risk Level            | Picklist  | govcdm_RiskLevel          |
| Risk Likelihood       | Picklist  | govcdm_RiskLikelihood     |
| Target Mitigation Date| Datetime  | govcdm_TargetMitigationDate|
