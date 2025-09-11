---
title: Project Request
description: "Tracks requests to create or modify projects, including requestor and approval metadata."
parent: project-tracking
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Approval Status | Picklist | govcdm_ApprovalStatus |
| Description | Ntext | govcdm_Description |
| Name | Nvarchar | govcdm_Name |
| Project | Lookup | govcdm_Project |
| Request Date | Datetime | govcdm_RequestDate |
| Requestor | Lookup | govcdm_Requestor |
