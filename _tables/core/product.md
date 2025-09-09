---
title: Product
description: "Stores information about products, including pricing, manufacturer, and classification, for procurement and inventory management."
parent: core
---

## Fields

| Field Name        | Type     | Schema                |
|-------------------|----------|-----------------------|
| Currency          | Lookup   | TransactionCurrencyId |
| Description       | Ntext    | govcdm_Description    |
| Exchange Rate     | Decimal  | ExchangeRate          |
| Manufacturer      | Lookup   | govcdm_Manufacturer   |
| Name              | Nvarchar | govcdm_Name           |
| Parent Product    | Lookup   | govcdm_ParentProduct  |
| Product Number    | Nvarchar | govcdm_ProductNumber  |
| URL               | Nvarchar | govcdm_URL            |
| Unit Price        | Money    | govcdm_UnitPrice      |
| Unit Price (Base) | Money    | govcdm_unitprice_Base |
| Unit of Issue     | Picklist | govcdm_UnitofIssue    |
