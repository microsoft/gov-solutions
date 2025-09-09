---
title: HR Telework Request
description: "Tracks telework requests, arrangements, and related employee details."
parent: hr-administration
---

| Field Name                  | Type                | Schema Name                   |
|-----------------------------|---------------------|------------------------------|
| Alternate Work Days         | Multiselectpicklist | govcdm_AlternateWorkDays      |
| Alternate Worksite Address  | Ntext               | govcdm_AlternateWorksiteAddress|
| Alternate Worksite Email    | Nvarchar            | govcdm_AlternateWorksiteEmail |
| Alternate Worksite Phone    | Nvarchar            | govcdm_AlternateWorksitePhone |
| Cancellation Date           | Datetime            | govcdm_CancellationDate       |
| Cancellation Reason         | Ntext               | govcdm_CancellationReason     |
| Employee                   | Lookup              | govcdm_Employee               |
| Name                       | Nvarchar            | govcdm_Name                   |
| Number Days Per Period      | Int                 | govcdm_NumberDaysPerPeriod    |
| Regular Worksite Address    | Ntext               | govcdm_RegularWorksiteAddress |
| Telework Arrangement Type   | Picklist            | govcdm_TeleworkArrangementType|
| Telework End Date           | Datetime            | govcdm_TeleworkEndDate        |
| Telework Start Date         | Datetime            | govcdm_TeleworkStartDate      |
