---
title: Event Sponsor
description: "Represents a sponsor providing funding or support for an event."
parent: event-management
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Currency | Lookup | TransactionCurrencyId |
| Event | Lookup | govcdm_Event |
| Exchange Rate | Decimal | ExchangeRate |
| Funding | Money | govcdm_Funding |
| Funding (Base) | Money | govcdm_funding_Base |
| Name | Nvarchar | govcdm_Name |
| Organization | Lookup | govcdm_Organization |
| Organization Contact | Lookup | govcdm_OrganizationContact |