---
title: Process Step
description: "Defines a step in a process template, including dependencies and instructions."
parent: process-and-tasking
---

| Field Name                  | Type     | Schema Name                   |
|-----------------------------|----------|------------------------------|
| Assign To                   | Picklist | govcdm_AssignTo              |
| Collaboration Space         | Lookup   | govcdm_CollaborationSpace    |
| Content Template            | Lookup   | govcdm_ContentTemplate       |
| Data Entry Step             | Lookup   | govcdm_DataEntryStep         |
| Data Form                   | Lookup   | govcdm_DataForm              |
| Details                     | Ntext    | govcdm_Details               |
| Due Date Calc Method        | Picklist | govcdm_DueDateCalcMethod     |
| Due Date Offset             | Int      | govcdm_DueDateOffset         |
| Enable Submission Info      | Picklist | govcdm_EnableSubmissionInfo  |
| Main Process Step           | Lookup   | govcdm_MainProcessStep       |
| Name                        | Nvarchar | govcdm_Name                  |
| Parent Process Step         | Lookup   | govcdm_ParentProcessStep     |
| Primary Process Step        | Lookup   | govcdm_PrimaryProcessStep    |
| Primary Record Display Field| Nvarchar | govcdm_PrimaryRecordDisplayField|
| Process Step Order          | Int      | govcdm_ProcessStepOrder      |
| Process Step Type           | Picklist | govcdm_ProcessStepType       |
| Sub Step Processing Order   | Picklist | govcdm_SubStepProcessingOrder|
