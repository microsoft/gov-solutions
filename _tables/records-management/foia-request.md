---
title: FOIA Request
description: "Tracks Freedom of Information Act requests, including requester details, status, and costs."
parent: records-management
published: false
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Agency | Lookup | govcdm_Agency |
| Cost Threshold | Money | govcdm_CostThreshold |
| Cost Threshold (Base) | Money | govcdm_costthreshold_Base |
| Currency | Lookup | TransactionCurrencyId |
| Description | Ntext | govcdm_Description |
| Exchange Rate | Decimal | ExchangeRate |
| FOIA Request Status | Picklist | govcdm_FOIARequestStatus |
| Is Expedited Request? | Bit | govcdm_IsExpeditedRequest |
| Is Waived Fee Request? | Bit | govcdm_IsWaivedFeeRequest |
| Method of Receipt | Picklist | govcdm_MethodofReceipt |
| Name | Nvarchar | govcdm_Name |
| Received Date Time | Datetime | govcdm_ReceivedDateTime |
| Requestor | Lookup | govcdm_Requestor |
| Requestor Address Line 1 | Nvarchar | govcdm_RequestorAddressLine1 |
| Requestor Address Line 2 | Nvarchar | govcdm_RequestorAddressLine2 |
| Requestor Business Phone | Nvarchar | govcdm_RequestorBusinessPhone |
| Requestor City | Nvarchar | govcdm_RequestorCity |
| Requestor Country | Lookup | govcdm_RequestorCountry |
| Requestor Email | Nvarchar | govcdm_RequestorEmail |
| Requestor Fax Number | Nvarchar | govcdm_RequestorFaxNumber |
| Requestor First Name | Nvarchar | govcdm_RequestorFirstName |
| Requestor Home Phone | Nvarchar | govcdm_RequestorHomePhone |
| Requestor Last Name | Nvarchar | govcdm_RequestorLastName |
| Requestor Mobile Phone | Nvarchar | govcdm_RequestorMobilePhone |
| Requestor Organization | Lookup | govcdm_RequestorOrganization |
| Requestor Postal Code | Nvarchar | govcdm_RequestorPostalCode |
| Requestor State or Province | Lookup | govcdm_RequestorStateorProvince |
