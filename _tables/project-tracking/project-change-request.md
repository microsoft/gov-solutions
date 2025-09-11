---
title: Project Change Request
description: "Tracks change requests for projects including approval status, impact analysis, and submission metadata."
parent: project-tracking
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Approval Status | Picklist | govcdm_ApprovalStatus |
| Description | Ntext | govcdm_Description |
| Impact Analysis | Ntext | govcdm_ImpactAnalysis |
| Name | Nvarchar | govcdm_Name |
| Project | Lookup | govcdm_Project |
| Submission Date | Datetime | govcdm_SubmissionDate |
| Submitted By | Lookup | govcdm_SubmittedBy |
