---
title: Time Entry
description: "Tracks hours worked or spent by a person, including project and period."
parent: time-travel-expenses
---

| Field Name      | Type     | Schema Name         |
|-----------------|----------|--------------------|
| Approval Status | Picklist | govcdm_ApprovalStatus|
| Comments        | Ntext    | govcdm_Comments    |
| Hours           | Float    | govcdm_Hours       |
| Name            | Nvarchar | govcdm_Name        |
| Person          | Lookup   | govcdm_Person      |
| Time Entry Date | Datetime | govcdm_TimeEntryDate|
| Time Period     | Lookup   | govcdm_TimePeriod  |
| Time Project    | Lookup   | govcdm_TimeProject |
| Time Project Task| Lookup  | govcdm_TimeProjectTask|
