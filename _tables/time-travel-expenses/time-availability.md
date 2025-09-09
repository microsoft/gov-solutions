---
title: Time Availability
description: "Tracks planned availability or unavailability of personnel."
parent: time-travel-expenses
---

| Field Name            | Type     | Schema Name         |
|-----------------------|----------|--------------------|
| Commitment Status     | Picklist | govcdm_CommitmentStatus|
| Details               | Ntext    | govcdm_Details     |
| End Date              | Datetime | govcdm_EndDate     |
| Location              | Lookup   | govcdm_Location    |
| Name                  | Nvarchar | govcdm_Name        |
| Person                | Lookup   | govcdm_Person      |
| Personnel Availability| Picklist | govcdm_PersonnelAvailability|
| Start Date            | Datetime | govcdm_StartDate   |
