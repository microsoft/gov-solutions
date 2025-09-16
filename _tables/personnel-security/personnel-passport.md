---
title: Personnel Passport
description: "Records passports issued, controlled, or monitored by the agency."
parent: personnel-security
---

| Field Name    | Type     | Schema Name   |
|---------------|----------|--------------|
| Name          | Nvarchar | govcdm_Name  |
| Passport Type | Picklist | govcdm_PassportType|
| Person        | Lookup   | govcdm_Person|
| Background Investigation | Lookup | govcdm_BackgroundInvestigation |
