
- IT System:
    - Description: New multiline rich text field, 4000 characters
    - URL: URL field, 500 characters
    - Point of Contact: Lookup to Person (Contact)
    - Lifecycle Stage: Choice (global Lifecycle Stage)
    - Operational Status: Choice (global Operational Status)
    - Criticality: Choice (global High Medium Low)
    - Catalog Status: Choice (global Publication Status)
    - Visibility: Choice (global Visiblity)
    - Last Review Date: Date only
    - Next Review Date: Date only
    - Primary IT Hosting Model: Choice (IT Hosting Model)
    - Primary Platform: Lookup to IT Product
    - Primary Programming Language: Lookup to IT Product
    - Security Classification: Choice (global Security Classification)
    - Dependencies Summary: New multieline rich text field, 4000 characters
    - ATO (Authority to Operate): Lookup to IT System Accreditation
    - Information Security Officer: Lookup to Person (Contact)
    - Is Public API Available?: Choice (global Yes No)
    - Public API Endpoint: URL field, 500 characters
    - Added icon

- IT System Component:
    - IT System Component Type: Lookup to IT System Component Type
    - Description: New multiline rich text field, 4000 characters
    - Tags: New multipline plain text field, 2000 characters
    - Security Classification: Choice (global Security Classification)
    - Operational Status: Choice (global Operational Status)
    - Visibility: Choice (global Visibility)
    - Primary Steward: Lookup to Person (Contact)
    - Last Review Date: Date only
    - Next Review Date: Date only
    - Parent IT System Component: Lookup to IT System Component
    - Added icon

- IT Hosting Model:
    - New choice with values On-Premises, Cloud IaaS, Cloud PaaS, Cloud SaaS, Hybrid

- IT Product:
    - Added icon

- IT System Accreditation:
    - Added icon

- IT System Component Types:
    - New table

- IT Technology:
    - New table to replace IT Product
    - Fields: Name, Vendor (lookup to Account), Description

- IT Technology Category:
    - New choice with values Platform or Infrastructure, Programming Language, Application Framework, Analytics, AI, or Model, Integration or API, Development or Deployment, Security or Compliance, Data Management / Cataloging

- IT Technology Types:
    - New table
    - IT Technology Category: Choice (global IT Technology Category)
    - Description
    - Parent IT Technology Type

