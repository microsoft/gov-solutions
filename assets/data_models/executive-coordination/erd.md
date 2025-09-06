
# Account
---

**Metadata**

- Schema: Account

**Custom Fields**


# Person
---

**Metadata**

- Schema: Contact

**Custom Fields**


# Analysis
---

**Metadata**

- Schema: govcdm_Analysis

**Custom Fields**


# Executive Action
---

**Metadata**

- Schema: govcdm_ExecutiveAction

**Custom Fields**

- Action Number
  - Type: Nvarchar
  - Schema: govcdm_ActionNumber
- Action Status
  - Type: Picklist
  - Schema: govcdm_ActionStatus
- Description
  - Type: Ntext
  - Schema: govcdm_Description
- Due Date Time
  - Type: Datetime
  - Schema: govcdm_DueDateTime
- Executive Action Category
  - Type: Picklist
  - Schema: govcdm_ExecutiveActionCategory
- Executive Action Type
  - Type: Lookup
  - Schema: govcdm_ExecutiveActionType
- Method of Receipt
  - Type: Picklist
  - Schema: govcdm_MethodofReceipt
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Outcome Summary
  - Type: Ntext
  - Schema: govcdm_OutcomeSummary
- Parent Action
  - Type: Lookup
  - Schema: govcdm_ParentAction
- Priority
  - Type: Picklist
  - Schema: govcdm_Priority
- Received Date Time
  - Type: Datetime
  - Schema: govcdm_ReceivedDateTime
- Received From OU
  - Type: Lookup
  - Schema: govcdm_ReceivedFromOU
- Received From Organization
  - Type: Lookup
  - Schema: govcdm_ReceivedFromOrganization
- Received From Person
  - Type: Lookup
  - Schema: govcdm_ReceivedFromPerson
- Security Classification
  - Type: Picklist
  - Schema: govcdm_SecurityClassification
- Source Analysis
  - Type: Lookup
  - Schema: govcdm_SourceAnalysis
- Source Impact
  - Type: Lookup
  - Schema: govcdm_SourceImpact
- Source Legal Authority
  - Type: Lookup
  - Schema: govcdm_SourceLegalAuthority
- Source Risk Item
  - Type: Lookup
  - Schema: govcdm_SourceRiskItem

# Executive Action Type
---

**Metadata**

- Schema: govcdm_ExecutiveActionType

**Custom Fields**

- Description
  - Type: Ntext
  - Schema: govcdm_Description
- Executive Action Category
  - Type: Picklist
  - Schema: govcdm_ExecutiveActionCategory
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

# Impact
---

**Metadata**

- Schema: govcdm_Impact

**Custom Fields**


# Legal Authority
---

**Metadata**

- Schema: govcdm_LegalAuthority

**Custom Fields**


# MOU
---

**Metadata**

- Schema: govcdm_MOU

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Statement of Purpose
  - Type: Ntext
  - Schema: govcdm_StatementofPurpose

# Organization Unit
---

**Metadata**

- Schema: govcdm_organizationunit

**Custom Fields**


# Risk Item
---

**Metadata**

- Schema: govcdm_RiskItem

**Custom Fields**

