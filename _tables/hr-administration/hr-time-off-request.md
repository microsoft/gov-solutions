---
title: HR Time Off Request
description: "Tracks requests for time off, including FMLA and related details."
parent: hr-administration
---

| Field Name         | Type     | Schema Name           |
|--------------------|----------|----------------------|
| Description        | Ntext    | govcdm_Description   |
| FMLA Child         | Picklist | govcdm_FMLAChild     |
| FMLA Sick Relative | Picklist | govcdm_FMLASickRelative|
| FMLA Sick Self     | Picklist | govcdm_FMLASickSelf  |
| Is FMLA Invoked?   | Picklist | govcdm_IsFMLAInvoked |
| Name               | Nvarchar | govcdm_Name          |
| Person             | Lookup   | govcdm_Person        |
