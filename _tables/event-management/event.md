---
title: Event
description: "Represents an event or scheduled activity."
parent: event-management
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Agenda Document | Lookup | govcdm_AgendaDocument |
| CDA/NDA Document | Lookup | govcdm_CDANDADocument |
| Commitment Status | Picklist | govcdm_CommitmentStatus |
| Currency | Lookup | TransactionCurrencyId |
| Description | Nvarchar | govcdm_Description |
| Documents Required | Picklist | govcdm_DocumentsRequired |
| End Date Time | Datetime | govcdm_EndDateTime |
| Event Category | Picklist | govcdm_EventCategory |
| Event Image | Image | govcdm_EventImage |
| Event Location | Lookup | govcdm_EventLocation |
| Event Logo | Image | govcdm_EventLogo |
| Event Type | Lookup | govcdm_EventType |
| Exchange Rate | Decimal | ExchangeRate |
| FAQ Document | Lookup | govcdm_FAQDocument |
| Name | Nvarchar | govcdm_Name |
| Registration End Date Time | Datetime | govcdm_RegistrationEndDateTime |
| Registration Start Date Time | Datetime | govcdm_RegistrationStartDateTime |
| Start Date Time | Datetime | govcdm_StartDateTime |
| Terms and Conditions Document | Lookup | govcdm_TermsandConditionsDocument |
| Total Funding Available | Money | govcdm_TotalFundingAvailable |
| Total Funding Available (Base) | Money | govcdm_totalfundingavailable_Base |
| Total Funding Remaining | Money | govcdm_TotalFundingRemaining |
| Total Funding Remaining (Base) | Money | govcdm_totalfundingremaining_Base |
| Total Funding Used | Money | govcdm_TotalFundingUsed |
| Total Funding Used (Base) | Money | govcdm_totalfundingused_Base |
| Total Planned Registration | Int | govcdm_TotalPlannedRegistration |
| Total Registered Participants | Int | govcdm_TotalRegisteredParticipants |
| Volunteer Document | Lookup | govcdm_VolunteerDocument |


