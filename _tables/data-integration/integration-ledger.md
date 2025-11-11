---
title: Integration Ledger
description: "Maintains an audit trail of integration activities, tracking certification status, aspects, and ledger entries for data integration processes."
parent: data-integration
---

## Fields

| Field Name           | Type     | Schema                      |
|---------------------|----------|----------------------------|
| Aspect Key          | Nvarchar | govcdm_AspectKey           |
| Certified By        | Lookup   | govcdm_CertifiedBy         |
| Certified Date Time | Datetime | govcdm_CertifiedDateTime   |
| Ledger Aspect       | Picklist | govcdm_LedgerAspect        |
| Ledger ID           | Nvarchar | govcdm_Name                |
| Ledger Status       | Picklist | govcdm_LedgerStatus        |
| Notes               | Nvarchar | govcdm_Notes               |
| Source System Key   | Nvarchar | govcdm_SourceSystemKey     |
| Target ID           | Nvarchar | govcdm_TargetID            |
| Target Table        | Nvarchar | govcdm_TargetTable         |