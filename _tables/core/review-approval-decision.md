---
title: Review Approval Decision
description: "Captures review and approval decisions, comments, and status for government workflows and case management."
parent: core
---

## Fields

| Field Name         | Type      | Schema                  |
|--------------------|-----------|-------------------------|
| Approval Status    | Picklist  | govcdm_ApprovalStatus   |
| Decision           | Picklist  | govcdm_decision         |
| Decision Date      | Datetime  | govcdm_decisiondate     |
| Due Date           | Datetime  | govcdm_duedate          |
| Follow-Up Date     | Datetime  | govcdm_followupdate     |
| Name               | Nvarchar  | govcdm_name             |
| Requested Date     | Datetime  | govcdm_requesteddate    |
| Requestor Comments | Nvarchar  | govcdm_requestorcomments|
| Reviewer           | Lookup    | govcdm_reviewer         |
| Reviewer Comments  | Nvarchar  | govcdm_reviewercomments |
| Reviewer Type      | Picklist  | govcdm_reviewertype     |
