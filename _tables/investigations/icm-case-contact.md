---
title: ICM Case Contact
parent: investigations
description: "Links a person or entity to a case, capturing contact details and type of involvement."
---

| Field Name             | Type     | Schema Name               |
|------------------------|----------|--------------------------|
| Details                | Ntext    | govcdm_Details           |
| ICM Case               | Lookup   | govcdm_ICMCase           |
| ICM Case Contact Type  | Picklist | govcdm_ICMCaseContactType|
| Name                   | Nvarchar | govcdm_Name              |
| Person                 | Lookup   | govcdm_Person            |
