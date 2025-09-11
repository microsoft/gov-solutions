---
title: "Records Management"
description: "Provides records and FOIA request tracking to help agencies manage public records requests, responses, and associated metadata."
thumbnail: /assets/use_cases/records-management.png
required_data_models:
  - core
related_use_cases:
  - records-management
related_personas:
  - records-manager
published: false
---

# Records Management Data Model

- Account
- Person
- Country
- FOIA Request
- State or Province

```mermaid
graph TD
  Account(Account)
  Contact(Person)
  govcdm_country(Country)
  govcdm_FOIARequest(FOIA Request)
  govcdm_stateorprovince(State or Province)
  govcdm_FOIARequest --> Account
  govcdm_FOIARequest --> Account
  govcdm_FOIARequest --> Contact
  govcdm_FOIARequest --> govcdm_country
  govcdm_FOIARequest --> govcdm_stateorprovince
  govcdm_FOIARequest --> TransactionCurrency
```
