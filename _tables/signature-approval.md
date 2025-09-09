---
title: Signature Approval
description: "Captures electronic signatures, approvals, and related metadata for government workflows and document management."
parent: core
---

## Fields

| Field Name                | Type      | Schema                      |
|---------------------------|-----------|-----------------------------|
| Approval Status           | Picklist  | govcdm_ApprovalStatus       |
| Comments                  | Ntext     | govcdm_Comments             |
| E-Confirmation            | Picklist  | govcdm_EConfirmation        |
| E-Signature               | Nvarchar  | govcdm_ESignature           |
| E-Signature File          | File      | govcdm_ESignatureFile       |
| E-Signature Image         | Image     | govcdm_ESignatureImage      |
| Name                      | Nvarchar  | govcdm_Name                 |
| Signed Approved By        | Lookup    | govcdm_SignedApprovedBy     |
| Signed Approved Date Time | Datetime  | govcdm_SignedApprovedDateTime|
