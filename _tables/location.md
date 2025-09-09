---
title: Location
description: "Stores address, contact, and geographic information for locations relevant to government operations."
parent: core
---

## Fields

| Field Name        | Type     | Schema                |
|-------------------|----------|-----------------------|
| Abbreviation      | Nvarchar | govcdm_Abbreviation   |
| Address Line 1    | Nvarchar | govcdm_AddressLine1   |
| Address Line 2    | Nvarchar | govcdm_AddressLine2   |
| City              | Nvarchar | govcdm_City           |
| Country           | Lookup   | govcdm_Country        |
| Main Phone        | Nvarchar | govcdm_MainPhone      |
| Name              | Nvarchar | govcdm_Name           |
| Parent Location   | Lookup   | govcdm_ParentLocation |
| Postal Code       | Nvarchar | govcdm_PostalCode     |
| State or Province | Lookup   | govcdm_StateorProvince|
