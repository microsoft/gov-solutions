---
title: Data Entry Response
description: "Captures responses to data entry steps in a process."
parent: process-and-tasking
---

| Field Name                | Type     | Schema Name                   |
|---------------------------|----------|------------------------------|
| Data Entry Step           | Lookup   | govcdm_DataEntryStep         |
| Data Entry Type           | Picklist | govcdm_DataEntryType         |
| Name                      | Nvarchar | govcdm_Name                  |
| Parent Data Entry Reponse | Lookup   | govcdm_ParentDataEntryReponse|
| Responder                 | Lookup   | govcdm_Responder             |
| Response Date             | Datetime | govcdm_ResponseDate          |
| Response Date Time        | Datetime | govcdm_ResponseDateTime      |
| Response File             | File     | govcdm_ResponseFile          |
| Response Float            | Float    | govcdm_ResponseFloat         |
| Response Image            | Image    | govcdm_ResponseImage         |
| Response Long Text        | Ntext    | govcdm_ResponseLongText      |
| Response Short Text       | Nvarchar | govcdm_ResponseShortText     |
| Response Whole Number     | Int      | govcdm_ResponseWholeNumber   |
