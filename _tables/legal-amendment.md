---
title: Legal Amendment
description: "Tracks amendments to legal authorities, including dates, documents, and summaries of changes for compliance and legal reference."
parent: core
---

## Fields

| Field Name             | Type     | Schema                      |
|------------------------|----------|-----------------------------|
| Amendment Date         | Datetime | govcdm_AmendmentDate        |
| Document               | Lookup   | govcdm_Document             |
| Full Text URL          | Nvarchar | govcdm_FullTextURL          |
| Name                   | Nvarchar | govcdm_Name                 |
| Parent Legal Authority | Lookup   | govcdm_ParentLegalAuthority |
| Submission Type        | Picklist | govcdm_SubmissionType       |
| Summary of Change      | Ntext    | govcdm_SummaryofChange      |
