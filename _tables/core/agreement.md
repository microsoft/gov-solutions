---
title: Agreement
description: "Captures formal agreements, contracts, or memoranda of understanding between government agencies and external organizations, including key terms, status, and financial details."
parent: core
---

## Fields

| Field Name         | Type      | Schema                    |
|--------------------|-----------|---------------------------|
| Agreement Number   | Nvarchar  | govcdm_AgreementNumber    |
| Agreement Status   | Picklist  | govcdm_AgreementStatus    |
| Agreement Type     | Picklist  | govcdm_AgreementType      |
| Amount             | Money     | govcdm_Amount             |
| Amount (Base)      | Money     | govcdm_amount_Base        |
| Counterparty       | Lookup    | govcdm_Counterparty       |
| Currency           | Lookup    | TransactionCurrencyId     |
| Description        | Ntext     | govcdm_Description        |
| End Date           | Datetime  | govcdm_EndDate            |
| Exchange Rate      | Decimal   | ExchangeRate              |
| Is Binding         | Picklist  | govcdm_IsBinding          |
| Name               | Nvarchar  | govcdm_Name               |
| Start Date         | Datetime  | govcdm_StartDate          |
