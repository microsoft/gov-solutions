---
title: Compliance Requirement
description: "Specifies individual requirements, controls, or obligations that must be met under specific compliance frameworks for government operations."
parent: core
---

## Fields

| Field Name                    | Type      | Schema                          |
|-------------------------------|-----------|---------------------------------|
| Additional Guidelines         | Ntext     | govcdm_AdditionalGuidelines     |
| Applicable When               | Ntext     | govcdm_ApplicableWhen           |
| Compliance Framework          | Lookup    | govcdm_ComplianceFramework      |
| Compliance Framework Category | Lookup    | govcdm_ComplianceFrameworkCategory |
| Description                   | Ntext     | govcdm_Description              |
| Details                       | Ntext     | govcdm_Details                  |
| Effective From Date           | Datetime  | govcdm_EffectiveFromDate        |
| Effective To Date             | Datetime  | govcdm_EffectiveToDate          |
| Expiration / Review Date      | Datetime  | govcdm_ExpirationReviewDate     |
| Moniker                       | Nvarchar  | govcdm_Name                     |
| Non-Compliance Risk Level     | Picklist  | govcdm_NonComplianceRiskLevel   |
| Parent Compliance Requirement | Lookup    | govcdm_ParentComplianceRequirement |
| Title                         | Nvarchar  | govcdm_Title                    |
| URL                           | Nvarchar  | govcdm_URL                      |
