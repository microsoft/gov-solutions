---
title: Payment
description: "Represents a payment record linked to contracts, invoices, and financial obligations."
parent: federal-financial
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Contract | Lookup | govcdm_Contract |
| Currency | Lookup | TransactionCurrencyId |
| Exchange Rate | Decimal | ExchangeRate |
| Financial Obligation | Lookup | govcdm_FinancialObligation |
| Initiated By | Lookup | govcdm_InitiatedBy |
| Initiated Date | Datetime | govcdm_InitiatedDate |
| Invoice | Lookup | govcdm_Invoice |
| Justification | Ntext | govcdm_Justification |
| Name | Nvarchar | govcdm_Name |
| Payment Amount | Money | govcdm_PaymentAmount |
| Payment Amount (Base) | Money | govcdm_paymentamount_Base |
| Payment Date | Datetime | govcdm_PaymentDate |
| Payment Method | Picklist | govcdm_PaymentMethod |
| Payment Status | Picklist | govcdm_PaymentStatus |
| Purchase Request | Lookup | govcdm_PurchaseRequest |
| Treasury Document Number | Nvarchar | govcdm_TreasuryDocumentNumber |


