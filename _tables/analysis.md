---
title: Analysis
description: "Stores analytical assessments, findings, and supporting details for government programs, projects, or investigations."
parent: core
---

## Fields

| Field Name         | Type      | Schema                    |
|--------------------|-----------|---------------------------|
| Action Status      | Picklist  | govcdm_ActionStatus       |
| Analysis From Date | Datetime  | govcdm_AnalysisFromDate   |
| Analysis To Date   | Datetime  | govcdm_AnalysisToDate     |
| Assessment POC     | Lookup    | govcdm_AssessmentPOC      |
| Details            | Ntext     | govcdm_Details            |
| Legal Authority    | Lookup    | govcdm_LegalAuthority     |
| Name               | Nvarchar  | govcdm_Name               |
| Organization Unit  | Lookup    | govcdm_OrganizationUnit   |
| Summary            | Ntext     | govcdm_Summary            |
