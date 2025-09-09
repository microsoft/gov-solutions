---
title: HR Position Assignment
description: "Tracks assignments of personnel to HR positions, including start and end dates."
parent: hr-administration
---

| Field Name   | Type     | Schema Name         |
|--------------|----------|--------------------|
| End Date     | Datetime | govcdm_EndDate     |
| HR Position  | Lookup   | govcdm_HRPosition  |
| Name         | Nvarchar | govcdm_Name        |
| Person       | Lookup   | govcdm_Person      |
| Start Date   | Datetime | govcdm_StartDate   |
