---
title: Travel Request
description: "Tracks travel requests, approvals, and trip details for a person."
parent: time-travel-expenses
---

| Field Name                        | Type     | Schema Name         |
|------------------------------------|----------|--------------------|
| Approval Status                    | Picklist | govcdm_ApprovalStatus|
| Are Actual Expenses Authorized?    | Picklist | govcdm_AreActualExpensesAuthorized|
| Authorization Number               | Nvarchar | govcdm_Name        |
| Currency                           | Lookup   | TransactionCurrencyId|
| Destination                        | Nvarchar | govcdm_Destination |
| Estimated Cost Other               | Money    | govcdm_EstimatedCostOther|
| Estimated Cost Other (Base)        | Money    | govcdm_estimatedcostother_Base|
| Estimated Cost Per Diem            | Money    | govcdm_EstimatedCostPerDiem|
| Estimated Cost Per Diem (Base)     | Money    | govcdm_estimatedcostperdiem_Base|
| Estimated Cost Total               | Money    | govcdm_EstimatedCostTotal|
| Estimated Cost Total (Base)        | Money    | govcdm_estimatedcosttotal_Base|
| Estimated Cost Travel              | Money    | govcdm_EstimatedCostTravel|
| Estimated Cost Travel (Base)       | Money    | govcdm_estimatedcosttravel_Base|
| Exchange Rate                      | Decimal  | ExchangeRate       |
| Is Lowest Cost Air Carrier Used?   | Picklist | govcdm_IsLowestCostAirCarrierUsed|
| Is Personal Convenience Authorized?| Picklist | govcdm_IsPersonalConvenienceAuthorized|
| Is Premium Travel Authorized?      | Picklist | govcdm_IsPremiumTravelAuthorized|
| Request Comments                   | Ntext    | govcdm_RequestComments|
| Request Date                       | Datetime | govcdm_RequestDate |
| Submission Type                    | Picklist | govcdm_SubmissionType|
| Travel Advance Authorized Amount   | Money    | govcdm_TravelAdvanceAuthorizedAmount|
| Travel Advance Authorized Amount (Base)| Money | govcdm_traveladvanceauthorizedamount_Base|
| Travel From Date                   | Datetime | govcdm_TravelFromDate|
| Travel Has Government Purchase Card?| Picklist| govcdm_TravelHasGovernmentPurchaseCard|
| Travel Purpose                     | Lookup   | govcdm_TravelPurpose|
| Travel Reason                      | Ntext    | govcdm_TravelReason|
| Travel To Date                     | Datetime | govcdm_TravelToDate|
| Traveler                           | Lookup   | govcdm_Traveler    |
| Traveler Address Line 1            | Nvarchar | govcdm_TravelerAddressLine1|
| Traveler Address Line 2            | Nvarchar | govcdm_TravelerAddressLine2|
| Traveler City                      | Nvarchar | govcdm_TravelerCity|
| Traveler Correspondence Symbol     | Nvarchar | govcdm_TravelerCorrespondenceSymbol|
| Traveler Country                   | Lookup   | govcdm_TravelerCountry|
| Traveler Duty Station              | Lookup   | govcdm_TravelerDutyStation|
| Traveler First Name                | Nvarchar | govcdm_TravelerFirstName|
| Traveler Last Name                 | Nvarchar | govcdm_TravelerLastName|
| Traveler Middle Name               | Nvarchar | govcdm_TravelerMiddleName|
| Traveler Organization Unit         | Lookup   | govcdm_TravelerOrganizationUnit|
| Traveler Phone Number              | Nvarchar | govcdm_TravelerPhoneNumber|
| Traveler State or Province         | Lookup   | govcdm_TravelerStateorProvince|
| Will Use Car Rental                | Picklist | govcdm_WillUseCarRental|
| Will Use Commercial Air            | Picklist | govcdm_WillUseCommercialAir|
| Will Use Commercial Bus            | Picklist | govcdm_WillUseCommercialBus|
| Will Use Commercial Rail           | Picklist | govcdm_WillUseCommercialRail|
| Will Use Commercial Ship           | Picklist | govcdm_WillUseCommercialShip|
| Will Use Government Air            | Picklist | govcdm_WillUseGovernmentAir|
| Will Use Government Ship           | Picklist | govcdm_WillUseGovernmentShip|
| Will Use Government Vehicle        | Picklist | govcdm_WillUseGovernmentVehicle|
| Will Use Other                     | Picklist | govcdm_WillUseOther|
| Will Use Other (Specify)           | Nvarchar | govcdm_WillUseOtherSpecify|
| Will Use Private Is Advantageous   | Picklist | govcdm_WillUsePrivateIsAdvantageous|
| Will Use Private Is Limited        | Picklist | govcdm_WillUsePrivateIsLimited|
| Will Use Private Mileage Rate      | Money    | govcdm_WillUsePrivateMileageRate|
| Will Use Private Mileage Rate (Base)| Money   | govcdm_willuseprivatemileagerate_Base|
| Will Use Privately Owned Vehicle   | Picklist | govcdm_WillUsePrivatelyOwnedVehicle|
| Will Use Taxi                      | Picklist| govcdm_WillUseTaxi|
