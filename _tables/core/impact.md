---
title: Impact
description: "Tracks impacts, risks, and mitigation plans related to government programs, projects, or compliance efforts."
parent: core
---

## Fields

| Field Name            | Type      | Schema                  |
|-----------------------|-----------|-------------------------|
| Action Status         | Picklist  | govcdm_ActionStatus     |
| Analysis              | Lookup    | govcdm_Analysis         |
| Description           | Ntext     | govcdm_Description      |
| Evidence of Mitigation| Ntext     | govcdm_EvidenceofMitigation |
| General Category      | Picklist  | govcdm_GeneralCategory  |
| Identification Date   | Datetime  | govcdm_IdentificationDate |
| Impact Level          | Picklist  | govcdm_ImpactLevel      |
| Impact Likelihood     | Picklist  | govcdm_ImpactLikelihood |
| Impact Relevance      | Picklist  | govcdm_ImpactRelevance  |
| Legal Authority       | Lookup    | govcdm_LegalAuthority   |
| Mitigation Plan       | Ntext     | govcdm_MitigationPlan   |
| Name                  | Nvarchar  | govcdm_Name             |
| Organization Unit     | Lookup    | govcdm_OrganizationUnit |
| Parent Impact         | Lookup    | govcdm_ParentImpact     |
| Review Date           | Datetime  | govcdm_ReviewDate       |
| Target Mitigation Date| Datetime  | govcdm_TargetMitigationDate|
