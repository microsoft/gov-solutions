---
title: Integration Value Map
description: "Maps values between different systems and code lists, providing canonical translations with confidence scores for data integration."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| Canonical Code Value| Nvarchar | govcdm_CanonicalCodeValue  |
| Code List           | Nvarchar | govcdm_CodeList            |
| Confidence          | Float    | govcdm_Confidence          |
| Map ID              | Nvarchar | govcdm_Name                |
| Source Code         | Nvarchar | govcdm_SourceCode          |
| Source Label        | Nvarchar | govcdm_SourceLabel         |
| Source System Key   | Nvarchar | govcdm_SourceSystemKey     |