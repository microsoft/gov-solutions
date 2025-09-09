---
title: Travel Segment
description: "Represents a leg or segment of a travel request, including destination and method."
parent: time-travel-expenses
---

| Field Name                    | Type     | Schema Name         |
|-------------------------------|----------|--------------------|
| Actual Expense Rate           | Money    | govcdm_ActualExpenseRate|
| Actual Expense Rate (Base)    | Money    | govcdm_actualexpenserate_Base|
| Currency                      | Lookup   | TransactionCurrencyId|
| Destination City              | Nvarchar | govcdm_DestinationCity|
| Destination Country           | Lookup   | govcdm_DestinationCountry|
| Destination State or Province | Lookup   | govcdm_DestinationStateorProvince|
| Exchange Rate                 | Decimal  | ExchangeRate       |
| Method of Travel              | Picklist | govcdm_MethodofTravel|
| Name                          | Nvarchar | govcdm_Name        |
| Per Diem Maximum Incidentals  | Money    | govcdm_PerDiemMaximumIncidentals|
| Per Diem Maximum Incidentals (Base)| Money| govcdm_perdiemmaximumincidentals_Base|
| Per Diem Maximum Lodging      | Money    | govcdm_PerDiemMaximumLodging|
| Per Diem Maximum Lodging (Base)| Money   | govcdm_perdiemmaximumlodging_Base|
| Per Diem Total                | Money    | govcdm_PerDiemTotal|
| Per Diem Total (Base)         | Money    | govcdm_perdiemtotal_Base|
| Segment End Date Time         | Datetime | govcdm_SegmentEndDateTime|
| Segment Start Date Time       | Datetime | govcdm_SegmentStartDateTime|
| Travel Request                | Lookup   | govcdm_TravelRequest|
