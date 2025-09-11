---
title: Purchase Request Item
description: "Individual items on a purchase request; includes quantity, unit price, currency, and links to products."
parent: federal-financial
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Budget Object Code | Lookup | govcdm_BudgetObjectCode |
| Currency | Lookup | TransactionCurrencyId |
| Description | Type: Ntext | govcdm_Description |
| Exchange Rate | Decimal | ExchangeRate |
| Item Number | Nvarchar | govcdm_ItemNumber |
| Name | Nvarchar | govcdm_Name |
| Product | Lookup | govcdm_Product |
| Purchase Request | Lookup | govcdm_PurchaseRequest |
| Quantity | Decimal | govcdm_Quantity |
| Unit Price | Money | govcdm_UnitPrice |
| Unit Price (Base) | Money | govcdm_unitprice_Base |
| Unit of Issue | Picklist | govcdm_UnitofIssue |

> NOTE: Field definitions migrated from the source Federal-Financial data model.
