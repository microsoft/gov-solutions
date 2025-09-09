---
title: HR VLTP Donation
description: "Tracks Voluntary Leave Transfer Program (VLTP) donations and related approvals."
parent: hr-administration
---

| Field Name                | Type     | Schema Name                  |
|---------------------------|----------|-----------------------------|
| Amount to Credit Recipient| Float    | govcdm_AmounttoCreditRecipient|
| Annual Leave To Transfer  | Float    | govcdm_AnnualLeaveToTransfer|
| Approval Date             | Datetime | govcdm_ApprovalDate         |
| Approval Status           | Picklist | govcdm_ApprovalStatus       |
| Approved By               | Lookup   | govcdm_ApprovedBy           |
| Donor                     | Lookup   | govcdm_Donor                |
| Donor Annual Leave Accrued| Float    | govcdm_DonorAnnualLeaveAccrued|
| Donor Projected Forfeit   | Float    | govcdm_DonorProjectedForfeit|
| Processed Date            | Datetime | govcdm_ProcessedDate        |
| Recipient                 | Lookup   | govcdm_Recipient            |
| Submission Date           | Datetime | govcdm_SubmissionDate       |
| Title                     | Nvarchar | govcdm_Name                 |
| Waiver Justification      | Ntext    | govcdm_WaiverJustification  |
