---
title: Interactive Response
description: "Captures a user's response to an interactive prompt in a process."
parent: process-and-tasking
---

| Field Name                | Type     | Schema Name                   |
|---------------------------|----------|------------------------------|
| Interactive Prompt        | Lookup   | govcdm_InteractivePrompt     |
| Name                      | Nvarchar | govcdm_Name                  |
| Parent Interactive Response| Lookup  | govcdm_ParentInteractiveResponse|
| Responder                 | Lookup   | govcdm_Responder             |
| Response Date Time        | Datetime | govcdm_ResponseDateTime      |
| Response File             | File     | govcdm_ResponseFile          |
| Response Float            | Float    | govcdm_ResponseFloat         |
| Response Image            | Image    | govcdm_ResponseImage         |
| Response Long Text        | Ntext    | govcdm_ResponseLongText      |
| Response Short Text       | Nvarchar | govcdm_ResponseShortText     |
| Response Whole Number     | Int      | govcdm_ResponseWholeNumber   |
