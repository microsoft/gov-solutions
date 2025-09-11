---
title: HR Change Request
description: "Tracks requests for HR changes, including approvals, status, and all related personnel details."
parent: hr-administration
---

| Field Name                | Type     | Schema Name                  |
|---------------------------|----------|-----------------------------|
| Approval Comments         | Ntext    | govcdm_ApprovalComments     |
| Approval Date             | Datetime | govcdm_ApprovalDate         |
| Approval Status           | Picklist | govcdm_ApprovalStatus       |
| Approved By               | Lookup   | govcdm_ApprovedBy           |
| Approved By (User)        | Lookup   | govcdm_ApprovedByUser       |
| Comments                  | Ntext    | govcdm_Comments             |
| Description               | Ntext    | govcdm_Description          |
| Effective From Date       | Datetime | govcdm_EffectiveFromDate    |
| Effective To Date         | Datetime | govcdm_EffectiveToDate      |
| First Name                | Nvarchar | govcdm_FirstName            |
| From HR Position          | Lookup   | govcdm_FromHRPosition       |
| Grade / Rank              | Lookup   | govcdm_GradeRank            |
| HR Action Type            | Lookup   | govcdm_HRActionType         |
| HR Change Request Type    | Lookup   | govcdm_HRChangeRequestType  |
| Instruction Details       | Ntext    | govcdm_InstructionDetails   |
| Job Series                | Lookup   | govcdm_JobSeries            |
| Justification             | Ntext    | govcdm_Justification        |
| Last Name                 | Nvarchar | govcdm_LastName             |
| Location                  | Lookup   | govcdm_Location             |
| Middle Name               | Nvarchar | govcdm_MiddleName           |
| Name                      | Nvarchar | govcdm_Name                 |
| New First Name            | Nvarchar | govcdm_NewFirstName         |
| New Grade / Rank          | Lookup   | govcdm_NewGradeRank         |
| New Job Series            | Lookup   | govcdm_NewJobSeries         |
| New Last Name             | Nvarchar | govcdm_NewLastName          |
| New Location              | Lookup   | govcdm_NewLocation          |
| New Middle Name           | Nvarchar | govcdm_NewMiddleName        |
| New Organization Unit     | Lookup   | govcdm_NewOrganizationUnit  |
| New Primary Supervisor    | Lookup   | govcdm_NewPrimarySupervisor |
| New Secondary Supervisor  | Lookup   | govcdm_NewSecondarySupervisor|
| New Work Phone            | Nvarchar | govcdm_NewWorkPhone         |
| Organization Unit         | Lookup   | govcdm_OrganizationUnit     |
| Person                    | Lookup   | govcdm_Person               |
| Primary Supervisor        | Lookup   | govcdm_PrimarySupervisor    |
| Request Status            | Picklist | govcdm_RequestStatus        |
| Requested Date            | Datetime | govcdm_RequestedDate        |
| Requested Effective Date  | Datetime | govcdm_RequestedEffectiveDate|
| Secondary Supervisor      | Lookup   | govcdm_SecondarySupervisor  |
| To HR Position            | Lookup   | govcdm_ToHRPosition         |
| Work Phone                | Nvarchar | govcdm_WorkPhone            |
