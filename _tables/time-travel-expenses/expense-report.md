---
title: Expense Report
description: "Tracks expense reimbursement or payment claims for a person."
parent: time-travel-expenses
---

| Field Name      | Type     | Schema Name         |
|-----------------|----------|--------------------|
| Approval Status | Picklist | govcdm_ApprovalStatus|
| Comments        | Ntext    | govcdm_Comments    |
| Name            | Nvarchar | govcdm_Name        |
| Person          | Lookup   | govcdm_Person      |
