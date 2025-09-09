---
title: Expense Report Line Item
description: "Detailed line item for an expense report, including amount, category, and currency."
parent: time-travel-expenses
---

| Field Name            | Type     | Schema Name         |
|-----------------------|----------|--------------------|
| Comments              | Ntext    | govcdm_Comments    |
| Currency              | Lookup   | TransactionCurrencyId|
| Exchange Rate         | Decimal  | ExchangeRate       |
| Expense Amount        | Money    | govcdm_ExpenseAmount|
| Expense Amount (Base) | Money    | govcdm_expenseamount_Base|
| Expense Date          | Datetime | govcdm_ExpenseDate |
| Expense Item Category | Lookup   | govcdm_ExpenseItemCategory|
| Expense Report        | Lookup   | govcdm_ExpenseReport|
| Name                  | Nvarchar | govcdm_Name        |
