---
title: Asset Service Record
description: "Captures service, maintenance, and repair records for assets, including dates, locations, and notes."
parent: asset-management
---

| Field Name                  | Type     | Schema Name                   |
|-----------------------------|----------|------------------------------|
| Actual Return Date Time     | Datetime | govcdm_ActualReturnDateTime  |
| Asset                       | Lookup   | govcdm_Asset                 |
| Expected Return Date Time   | Datetime | govcdm_ExpectedReturnDateTime|
| Name                        | Nvarchar | govcdm_Name                  |
| Service End Date Time       | Datetime | govcdm_ServiceEndDateTime    |
| Service Location            | Lookup   | govcdm_ServiceLocation       |
| Service Notes               | Ntext    | govcdm_ServiceNotes          |
| Service Request Date Time   | Datetime | govcdm_ServiceRequestDateTime|
| Service Request Description | Ntext    | govcdm_ServiceRequestDescription|
| Service Start Date Time     | Datetime | govcdm_ServiceStartDateTime  |
