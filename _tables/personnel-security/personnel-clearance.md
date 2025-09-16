---
title: Personnel Clearance
description: "Tracks personnel clearance status, level, eligibility and history."
parent: personnel-security
---

| Field Name               | Type     | Schema Name                 |
|--------------------------|----------|----------------------------|
| Name                     | Nvarchar | govcdm_Name                |
| Person                   | Lookup   | govcdm_Person              |
| Background Investigation  | Lookup   | govcdm_BackgroundInvestigation |
| Clearance Level Granted  | Picklist | govcdm_ClearanceLevelGranted |
| Personnel Adjudication   | Lookup   | govcdm_PersonnelAdjudication |
| Eligibility Date         | Datetime | govcdm_EligibilityDate     |
| Expiration Date          | Datetime | govcdm_ExpirationDate      |
| Eligibility Status       | Picklist | govcdm_EligibilityStatus   |
| Notes                    | Ntext    | govcdm_Notes               |
