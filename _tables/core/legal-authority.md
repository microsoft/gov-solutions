---
title: Legal Authority
description: "Stores legal authorities, statutes, executive orders, and related metadata for compliance, policy, and legal reference."
parent: core
---

## Fields

| Field Name             | Type     | Schema                      |
|------------------------|----------|-----------------------------|
| Citation               | Nvarchar | govcdm_Citation             |
| Disposition Notes      | Ntext    | govcdm_DispositionNotes     |
| Document               | Lookup   | govcdm_Document             |
| Document Number        | Nvarchar | govcdm_DocumentNumber       |
| Effective Date         | Datetime | govcdm_EffectiveDate        |
| Executive Order Number | Nvarchar | govcdm_ExecutiveOrderNumber |
| Expiration Date        | Datetime | govcdm_ExpirationDate       |
| Full Text URL          | Nvarchar | govcdm_FullTextURL          |
| Issuing Body           | Lookup   | govcdm_IssuingBody          |
| Jurisdiction Level     | Picklist | govcdm_JurisdictionLevel    |
| Legal Authority Status | Picklist | govcdm_LegalAuthorityStatus |
| Legal Authority Type   | Picklist | govcdm_LegalAuthorityType   |
| Name                   | Nvarchar | govcdm_Name                 |
| Public Doc URL         | Nvarchar | govcdm_PublicDocURL         |
| Publication Date       | Datetime | govcdm_PublicationDate      |
| Signing Date           | Datetime | govcdm_SigningDate          |
| Summary                | Ntext    | govcdm_Summary              |
| Tags                   | Ntext    | govcdm_Tags                 |
