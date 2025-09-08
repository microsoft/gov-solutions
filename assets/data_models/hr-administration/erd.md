
## Person
---

**Metadata**

- Schema: Contact

**Custom Fields**


## Grade-Rank
---

**Metadata**

- Schema: govcdm_graderank

**Custom Fields**


## HR Action Type
---

**Metadata**

- Schema: govcdm_HRActionType

**Custom Fields**

- Abbreviation
  - Type: Nvarchar
  - Schema: govcdm_Abbreviation
- Description
  - Type: Nvarchar
  - Schema: govcdm_Description
- Details
  - Type: Ntext
  - Schema: govcdm_Details
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Change Request
---

**Metadata**

- Schema: govcdm_HRChangeRequest

**Custom Fields**

- Approval Comments
  - Type: Ntext
  - Schema: govcdm_ApprovalComments
- Approval Date
  - Type: Datetime
  - Schema: govcdm_ApprovalDate
- Approval Status
  - Type: Picklist
  - Schema: govcdm_ApprovalStatus
- Approved By
  - Type: Lookup
  - Schema: govcdm_ApprovedBy
- Approved By (User)
  - Type: Lookup
  - Schema: govcdm_ApprovedByUser
- Comments
  - Type: Ntext
  - Schema: govcdm_Comments
- Description
  - Type: Ntext
  - Schema: govcdm_Description
- Effective From Date
  - Type: Datetime
  - Schema: govcdm_EffectiveFromDate
- Effective To Date
  - Type: Datetime
  - Schema: govcdm_EffectiveToDate
- First Name
  - Type: Nvarchar
  - Schema: govcdm_FirstName
- Grade / Rank
  - Type: Lookup
  - Schema: govcdm_GradeRank
- HR Action Type
  - Type: Lookup
  - Schema: govcdm_HRActionType
- HR Change Request Type
  - Type: Lookup
  - Schema: govcdm_HRChangeRequestType
- Instruction Details
  - Type: Ntext
  - Schema: govcdm_InstructionDetails
- Job Series
  - Type: Lookup
  - Schema: govcdm_JobSeries
- Justification
  - Type: Ntext
  - Schema: govcdm_Justification
- Last Name
  - Type: Nvarchar
  - Schema: govcdm_LastName
- Location
  - Type: Lookup
  - Schema: govcdm_Location
- Middle Name
  - Type: Nvarchar
  - Schema: govcdm_MiddleName
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- New First Name
  - Type: Nvarchar
  - Schema: govcdm_NewFirstName
- New Grade / Rank
  - Type: Lookup
  - Schema: govcdm_NewGradeRank
- New Job Series
  - Type: Lookup
  - Schema: govcdm_NewJobSeries
- New Last Name
  - Type: Nvarchar
  - Schema: govcdm_NewLastName
- New Location
  - Type: Lookup
  - Schema: govcdm_NewLocation
- New Middle Name
  - Type: Nvarchar
  - Schema: govcdm_NewMiddleName
- New Organization Unit
  - Type: Lookup
  - Schema: govcdm_NewOrganizationUnit
- New Primary Supervisor
  - Type: Lookup
  - Schema: govcdm_NewPrimarySupervisor
- New Secondary Supervisor
  - Type: Lookup
  - Schema: govcdm_NewSecondarySupervisor
- New Work Phone
  - Type: Nvarchar
  - Schema: govcdm_NewWorkPhone
- Organization Unit
  - Type: Lookup
  - Schema: govcdm_OrganizationUnit
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Primary Supervisor
  - Type: Lookup
  - Schema: govcdm_PrimarySupervisor
- Request Status
  - Type: Picklist
  - Schema: govcdm_RequestStatus
- Requested Date
  - Type: Datetime
  - Schema: govcdm_RequestedDate
- Requested Effective Date
  - Type: Datetime
  - Schema: govcdm_RequestedEffectiveDate
- Secondary Supervisor
  - Type: Lookup
  - Schema: govcdm_SecondarySupervisor
- Work Phone
  - Type: Nvarchar
  - Schema: govcdm_WorkPhone

## HR Change Request Type
---

**Metadata**

- Schema: govcdm_HRChangeRequestType

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Comp Overtime Request
---

**Metadata**

- Schema: govcdm_HRCompOvertimeRequest

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Disciplinary Action
---

**Metadata**

- Schema: govcdm_HRDisciplinaryAction

**Custom Fields**

- Action Decision Date
  - Type: Datetime
  - Schema: govcdm_ActionDecisionDate
- Action Initiation Date
  - Type: Datetime
  - Schema: govcdm_ActionInitiationDate
- Action Status
  - Type: Picklist
  - Schema: govcdm_ActionStatus
- Action Summary
  - Type: Ntext
  - Schema: govcdm_ActionSummary
- Appeal Filed
  - Type: Picklist
  - Schema: govcdm_AppealFiled
- Disciplinary Action Type
  - Type: Picklist
  - Schema: govcdm_DisciplinaryActionType
- Effective From Date
  - Type: Datetime
  - Schema: govcdm_EffectiveFromDate
- Effective To Date
  - Type: Datetime
  - Schema: govcdm_EffectiveToDate
- Findings
  - Type: Ntext
  - Schema: govcdm_Findings
- Incident Date
  - Type: Datetime
  - Schema: govcdm_IncidentDate
- Incident Details
  - Type: Ntext
  - Schema: govcdm_IncidentDetails
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Next Review Date
  - Type: Datetime
  - Schema: govcdm_NextReviewDate
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Review Status
  - Type: Picklist
  - Schema: govcdm_ReviewStatus
- Reviewer
  - Type: Lookup
  - Schema: govcdm_Reviewer
- Reviewer (User)
  - Type: Lookup
  - Schema: govcdm_ReviewerUser
- Union Notified
  - Type: Picklist
  - Schema: govcdm_UnionNotified
- Union Notified Date
  - Type: Datetime
  - Schema: govcdm_UnionNotifiedDate
- Union Response
  - Type: Ntext
  - Schema: govcdm_UnionResponse

## HR Event
---

**Metadata**

- Schema: govcdm_HREvent

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR GPC Request
---

**Metadata**

- Schema: govcdm_HRGPCRequest

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Personnel Action
---

**Metadata**

- Schema: govcdm_HRPersonnelAction

**Custom Fields**

- Approving Official
  - Type: Lookup
  - Schema: govcdm_ApprovingOfficial
- Approving Official (User)
  - Type: Lookup
  - Schema: govcdm_ApprovingOfficialUser
- Effective From Date
  - Type: Datetime
  - Schema: govcdm_EffectiveFromDate
- HR Action Type
  - Type: Lookup
  - Schema: govcdm_HRActionType
- Originating Change Request
  - Type: Lookup
  - Schema: govcdm_OriginatingChangeRequest
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Title
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Personnel Impact
---

**Metadata**

- Schema: govcdm_HRPersonnelImpact

**Custom Fields**

- Description
  - Type: Ntext
  - Schema: govcdm_Description
- Impact From Date
  - Type: Datetime
  - Schema: govcdm_ImpactFromDate
- Impact To Date
  - Type: Datetime
  - Schema: govcdm_ImpactToDate
- Manager Comments
  - Type: Ntext
  - Schema: govcdm_ManagerComments
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Position
---

**Metadata**

- Schema: govcdm_HRPosition

**Custom Fields**

- HR Position Description
  - Type: Lookup
  - Schema: govcdm_HRPositionDescription
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Organization Unit
  - Type: Lookup
  - Schema: govcdm_OrganizationUnit

## HR Position Assignment
---

**Metadata**

- Schema: govcdm_HRPositionAssignment

**Custom Fields**

- End Date
  - Type: Datetime
  - Schema: govcdm_EndDate
- HR Position
  - Type: Lookup
  - Schema: govcdm_HRPosition
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Start Date
  - Type: Datetime
  - Schema: govcdm_StartDate

## HR Position Description
---

**Metadata**

- Schema: govcdm_HRPositionDescription

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Reasonable Accommodation
---

**Metadata**

- Schema: govcdm_HRReasonableAccommodation

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## HR Telework Request
---

**Metadata**

- Schema: govcdm_HRTeleworkRequest

**Custom Fields**

- Alternate Work Days
  - Type: Multiselectpicklist
  - Schema: govcdm_AlternateWorkDays
- Alternate Worksite Address
  - Type: Ntext
  - Schema: govcdm_AlternateWorksiteAddress
- Alternate Worksite Email
  - Type: Nvarchar
  - Schema: govcdm_AlternateWorksiteEmail
- Alternate Worksite Phone
  - Type: Nvarchar
  - Schema: govcdm_AlternateWorksitePhone
- Cancellation Date
  - Type: Datetime
  - Schema: govcdm_CancellationDate
- Cancellation Reason
  - Type: Ntext
  - Schema: govcdm_CancellationReason
- Employee
  - Type: Lookup
  - Schema: govcdm_Employee
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Number Days Per Period
  - Type: Int
  - Schema: govcdm_NumberDaysPerPeriod
- Regular Worksite Address
  - Type: Ntext
  - Schema: govcdm_RegularWorksiteAddress
- Telework Arrangement Type
  - Type: Picklist
  - Schema: govcdm_TeleworkArrangementType
- Telework End Date
  - Type: Datetime
  - Schema: govcdm_TeleworkEndDate
- Telework Start Date
  - Type: Datetime
  - Schema: govcdm_TeleworkStartDate

## HR Time Off Details
---

**Metadata**

- Schema: govcdm_HRTimeOffDetails

**Custom Fields**

- From Date Time
  - Type: Datetime
  - Schema: govcdm_FromDateTime
- HR Time Off Request
  - Type: Lookup
  - Schema: govcdm_HRTimeOffRequest
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Time Off Type
  - Type: Picklist
  - Schema: govcdm_TimeOffType
- To Date Time
  - Type: Datetime
  - Schema: govcdm_ToDateTime

## HR Time Off Request
---

**Metadata**

- Schema: govcdm_HRTimeOffRequest

**Custom Fields**

- Description
  - Type: Ntext
  - Schema: govcdm_Description
- FMLA Child
  - Type: Picklist
  - Schema: govcdm_FMLAChild
- FMLA Sick Relative
  - Type: Picklist
  - Schema: govcdm_FMLASickRelative
- FMLA Sick Self
  - Type: Picklist
  - Schema: govcdm_FMLASickSelf
- Is FMLA Invoked?
  - Type: Picklist
  - Schema: govcdm_IsFMLAInvoked
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Person
  - Type: Lookup
  - Schema: govcdm_Person

## HR VLTP Donation
---

**Metadata**

- Schema: govcdm_HRVLTPDonation

**Custom Fields**

- Amount to Credit Recipient
  - Type: Float
  - Schema: govcdm_AmounttoCreditRecipient
- Annual Leave To Transfer
  - Type: Float
  - Schema: govcdm_AnnualLeaveToTransfer
- Approval Date
  - Type: Datetime
  - Schema: govcdm_ApprovalDate
- Approval Status
  - Type: Picklist
  - Schema: govcdm_ApprovalStatus
- Approved By
  - Type: Lookup
  - Schema: govcdm_ApprovedBy
- Donor
  - Type: Lookup
  - Schema: govcdm_Donor
- Donor Annual Leave Accrued
  - Type: Float
  - Schema: govcdm_DonorAnnualLeaveAccrued
- Donor Projected Forfeit
  - Type: Float
  - Schema: govcdm_DonorProjectedForfeit
- Processed Date
  - Type: Datetime
  - Schema: govcdm_ProcessedDate
- Recipient
  - Type: Lookup
  - Schema: govcdm_Recipient
- Submission Date
  - Type: Datetime
  - Schema: govcdm_SubmissionDate
- Title
  - Type: Nvarchar
  - Schema: govcdm_Name
- Waiver Justification
  - Type: Ntext
  - Schema: govcdm_WaiverJustification

## Job Series
---

**Metadata**

- Schema: govcdm_jobseries

**Custom Fields**


## Location
---

**Metadata**

- Schema: govcdm_Location

**Custom Fields**


## Organization Unit
---

**Metadata**

- Schema: govcdm_organizationunit

**Custom Fields**


## User
---

**Metadata**

- Schema: SystemUser

**Custom Fields**
