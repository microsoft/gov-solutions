
## Person
---

**Metadata**

- Schema: Contact

**Custom Fields**


## Country
---

**Metadata**

- Schema: govcdm_country

**Custom Fields**


## Expense Item Category
---

**Metadata**

- Schema: govcdm_ExpenseItemCategory

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## Expense Report
---

**Metadata**

- Schema: govcdm_ExpenseReport

**Custom Fields**

- Approval Status
  - Type: Picklist
  - Schema: govcdm_ApprovalStatus
- Comments
  - Type: Ntext
  - Schema: govcdm_Comments
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Person
  - Type: Lookup
  - Schema: govcdm_Person

## Expense Report Line Item
---

**Metadata**

- Schema: govcdm_ExpenseReportLineItem

**Custom Fields**

- Comments
  - Type: Ntext
  - Schema: govcdm_Comments
- Currency
  - Type: Lookup
  - Schema: TransactionCurrencyId
- Exchange Rate
  - Type: Decimal
  - Schema: ExchangeRate
- Expense Amount
  - Type: Money
  - Schema: govcdm_ExpenseAmount
- Expense Amount (Base)
  - Type: Money
  - Schema: govcdm_expenseamount_Base
- Expense Date
  - Type: Datetime
  - Schema: govcdm_ExpenseDate
- Expense Item Category
  - Type: Lookup
  - Schema: govcdm_ExpenseItemCategory
- Expense Report
  - Type: Lookup
  - Schema: govcdm_ExpenseReport
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

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


## State or Province
---

**Metadata**

- Schema: govcdm_stateorprovince

**Custom Fields**


## Time Availability
---

**Metadata**

- Schema: govcdm_TimeAvailability

**Custom Fields**

- Commitment Status
  - Type: Picklist
  - Schema: govcdm_CommitmentStatus
- Details
  - Type: Ntext
  - Schema: govcdm_Details
- End Date
  - Type: Datetime
  - Schema: govcdm_EndDate
- Location
  - Type: Lookup
  - Schema: govcdm_Location
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Personnel Availability
  - Type: Picklist
  - Schema: govcdm_PersonnelAvailability
- Start Date
  - Type: Datetime
  - Schema: govcdm_StartDate

## Time Entry
---

**Metadata**

- Schema: govcdm_TimeEntry

**Custom Fields**

- Approval Status
  - Type: Picklist
  - Schema: govcdm_ApprovalStatus
- Comments
  - Type: Ntext
  - Schema: govcdm_Comments
- Hours
  - Type: Float
  - Schema: govcdm_Hours
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Person
  - Type: Lookup
  - Schema: govcdm_Person
- Time Entry Date
  - Type: Datetime
  - Schema: govcdm_TimeEntryDate
- Time Period
  - Type: Lookup
  - Schema: govcdm_TimePeriod
- Time Project
  - Type: Lookup
  - Schema: govcdm_TimeProject
- Time Project Task
  - Type: Lookup
  - Schema: govcdm_TimeProjectTask

## Time Period
---

**Metadata**

- Schema: govcdm_TimePeriod

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## Time Project
---

**Metadata**

- Schema: govcdm_TimeProject

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## Time Project Task
---

**Metadata**

- Schema: govcdm_TimeProjectTask

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Time Project
  - Type: Lookup
  - Schema: govcdm_TimeProject

## Travel Purpose
---

**Metadata**

- Schema: govcdm_TravelPurpose

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_Name

## Travel Request
---

**Metadata**

- Schema: govcdm_TravelRequest

**Custom Fields**

- Approval Status
  - Type: Picklist
  - Schema: govcdm_ApprovalStatus
- Are Actual Expenses Authorized?
  - Type: Picklist
  - Schema: govcdm_AreActualExpensesAuthorized
- Authorization Number
  - Type: Nvarchar
  - Schema: govcdm_Name
- Currency
  - Type: Lookup
  - Schema: TransactionCurrencyId
- Destination
  - Type: Nvarchar
  - Schema: govcdm_Destination
- Estimated Cost Other
  - Type: Money
  - Schema: govcdm_EstimatedCostOther
- Estimated Cost Other (Base)
  - Type: Money
  - Schema: govcdm_estimatedcostother_Base
- Estimated Cost Per Diem
  - Type: Money
  - Schema: govcdm_EstimatedCostPerDiem
- Estimated Cost Per Diem (Base)
  - Type: Money
  - Schema: govcdm_estimatedcostperdiem_Base
- Estimated Cost Total
  - Type: Money
  - Schema: govcdm_EstimatedCostTotal
- Estimated Cost Total (Base)
  - Type: Money
  - Schema: govcdm_estimatedcosttotal_Base
- Estimated Cost Travel
  - Type: Money
  - Schema: govcdm_EstimatedCostTravel
- Estimated Cost Travel (Base)
  - Type: Money
  - Schema: govcdm_estimatedcosttravel_Base
- Exchange Rate
  - Type: Decimal
  - Schema: ExchangeRate
- Is Lowest Cost Air Carrier Used?
  - Type: Picklist
  - Schema: govcdm_IsLowestCostAirCarrierUsed
- Is Personal Convenience Authorized?
  - Type: Picklist
  - Schema: govcdm_IsPersonalConvenienceAuthorized
- Is Premium Travel Authorized?
  - Type: Picklist
  - Schema: govcdm_IsPremiumTravelAuthorized
- Request Comments
  - Type: Ntext
  - Schema: govcdm_RequestComments
- Request Date
  - Type: Datetime
  - Schema: govcdm_RequestDate
- Submission Type
  - Type: Picklist
  - Schema: govcdm_SubmissionType
- Travel Advance Authorized Amount
  - Type: Money
  - Schema: govcdm_TravelAdvanceAuthorizedAmount
- Travel Advance Authorized Amount (Base)
  - Type: Money
  - Schema: govcdm_traveladvanceauthorizedamount_Base
- Travel From Date
  - Type: Datetime
  - Schema: govcdm_TravelFromDate
- Travel Has Government Purchase Card?
  - Type: Picklist
  - Schema: govcdm_TravelHasGovernmentPurchaseCard
- Travel Purpose
  - Type: Lookup
  - Schema: govcdm_TravelPurpose
- Travel Reason
  - Type: Ntext
  - Schema: govcdm_TravelReason
- Travel To Date
  - Type: Datetime
  - Schema: govcdm_TravelToDate
- Traveler
  - Type: Lookup
  - Schema: govcdm_Traveler
- Traveler Address Line 1
  - Type: Nvarchar
  - Schema: govcdm_TravelerAddressLine1
- Traveler Address Line 2
  - Type: Nvarchar
  - Schema: govcdm_TravelerAddressLine2
- Traveler City
  - Type: Nvarchar
  - Schema: govcdm_TravelerCity
- Traveler Correspondence Symbol
  - Type: Nvarchar
  - Schema: govcdm_TravelerCorrespondenceSymbol
- Traveler Country
  - Type: Lookup
  - Schema: govcdm_TravelerCountry
- Traveler Duty Station
  - Type: Lookup
  - Schema: govcdm_TravelerDutyStation
- Traveler First Name
  - Type: Nvarchar
  - Schema: govcdm_TravelerFirstName
- Traveler Last Name
  - Type: Nvarchar
  - Schema: govcdm_TravelerLastName
- Traveler Middle Name
  - Type: Nvarchar
  - Schema: govcdm_TravelerMiddleName
- Traveler Organization Unit
  - Type: Lookup
  - Schema: govcdm_TravelerOrganizationUnit
- Traveler Phone Number
  - Type: Nvarchar
  - Schema: govcdm_TravelerPhoneNumber
- Traveler State or Province
  - Type: Lookup
  - Schema: govcdm_TravelerStateorProvince
- Will Use Car Rental
  - Type: Picklist
  - Schema: govcdm_WillUseCarRental
- Will Use Commercial Air
  - Type: Picklist
  - Schema: govcdm_WillUseCommercialAir
- Will Use Commercial Bus
  - Type: Picklist
  - Schema: govcdm_WillUseCommercialBus
- Will Use Commercial Rail
  - Type: Picklist
  - Schema: govcdm_WillUseCommercialRail
- Will Use Commercial Ship
  - Type: Picklist
  - Schema: govcdm_WillUseCommercialShip
- Will Use Government Air
  - Type: Picklist
  - Schema: govcdm_WillUseGovernmentAir
- Will Use Government Ship
  - Type: Picklist
  - Schema: govcdm_WillUseGovernmentShip
- Will Use Government Vehicle
  - Type: Picklist
  - Schema: govcdm_WillUseGovernmentVehicle
- Will Use Other
  - Type: Picklist
  - Schema: govcdm_WillUseOther
- Will Use Other (Specify)
  - Type: Nvarchar
  - Schema: govcdm_WillUseOtherSpecify
- Will Use Private Is Advantageous
  - Type: Picklist
  - Schema: govcdm_WillUsePrivateIsAdvantageous
- Will Use Private Is Limited
  - Type: Picklist
  - Schema: govcdm_WillUsePrivateIsLimited
- Will Use Private Mileage Rate
  - Type: Money
  - Schema: govcdm_WillUsePrivateMileageRate
- Will Use Private Mileage Rate (Base)
  - Type: Money
  - Schema: govcdm_willuseprivatemileagerate_Base
- Will Use Privately Owned Vehicle
  - Type: Picklist
  - Schema: govcdm_WillUsePrivatelyOwnedVehicle
- Will Use Taxi
  - Type: Picklist
  - Schema: govcdm_WillUseTaxi

## Travel Segment
---

**Metadata**

- Schema: govcdm_TravelSegment

**Custom Fields**

- Actual Expense Rate
  - Type: Money
  - Schema: govcdm_ActualExpenseRate
- Actual Expense Rate (Base)
  - Type: Money
  - Schema: govcdm_actualexpenserate_Base
- Currency
  - Type: Lookup
  - Schema: TransactionCurrencyId
- Destination City
  - Type: Nvarchar
  - Schema: govcdm_DestinationCity
- Destination Country
  - Type: Lookup
  - Schema: govcdm_DestinationCountry
- Destination State or Province
  - Type: Lookup
  - Schema: govcdm_DestinationStateorProvince
- Exchange Rate
  - Type: Decimal
  - Schema: ExchangeRate
- Method of Travel
  - Type: Picklist
  - Schema: govcdm_MethodofTravel
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Per Diem Maximum Incidentals
  - Type: Money
  - Schema: govcdm_PerDiemMaximumIncidentals
- Per Diem Maximum Incidentals (Base)
  - Type: Money
  - Schema: govcdm_perdiemmaximumincidentals_Base
- Per Diem Maximum Lodging
  - Type: Money
  - Schema: govcdm_PerDiemMaximumLodging
- Per Diem Maximum Lodging (Base)
  - Type: Money
  - Schema: govcdm_perdiemmaximumlodging_Base
- Per Diem Total
  - Type: Money
  - Schema: govcdm_PerDiemTotal
- Per Diem Total (Base)
  - Type: Money
  - Schema: govcdm_perdiemtotal_Base
- Segment End Date Time
  - Type: Datetime
  - Schema: govcdm_SegmentEndDateTime
- Segment Start Date Time
  - Type: Datetime
  - Schema: govcdm_SegmentStartDateTime
- Travel Request
  - Type: Lookup
  - Schema: govcdm_TravelRequest