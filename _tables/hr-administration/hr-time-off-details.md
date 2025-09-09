---
title: HR Time Off Details
description: "Tracks details of time off requests, including type and date range."
parent: hr-administration
---

| Field Name         | Type     | Schema Name           |
|--------------------|----------|----------------------|
| From Date Time     | Datetime | govcdm_FromDateTime  |
| HR Time Off Request| Lookup   | govcdm_HRTimeOffRequest|
| Name               | Nvarchar | govcdm_Name          |
| Time Off Type      | Picklist | govcdm_TimeOffType   |
| To Date Time       | Datetime | govcdm_ToDateTime    |
