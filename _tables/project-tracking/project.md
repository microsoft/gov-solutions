---
title: Project
description: "Represents a project, including schedule, budget, and relationships to requests, milestones, and work items."
parent: project-tracking
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Actual End Date | Datetime | govcdm_ActualEndDate |
| Actual Start Date | Datetime | govcdm_ActualStartDate |
| Budget Amount | Money | govcdm_BudgetAmount |
| Budget Amount (Base) | Money | govcdm_budgetamount_Base |
| Currency | Lookup | TransactionCurrencyId |
| Description | Ntext | govcdm_Description |
| Exchange Rate | Decimal | ExchangeRate |
| Name | Nvarchar | govcdm_Name |
| Parent Project | Lookup | govcdm_ParentProject |
| Primary Project Manager | Lookup | govcdm_PrimaryProjectManager |
| Project Code | Nvarchar | govcdm_ProjectCode |
| Project Request | Lookup | govcdm_ProjectRequest |
| Scheduled End Date | Datetime | govcdm_ScheduledEndDate |
| Scheduled Start Date | Datetime | govcdm_ScheduledStartDate |
