---
title: Event Session
description: "Represents a session within an event (breakout sessions, workshops, presentations)."
parent: event-management
---

## Fields

| Field Name | Type | Schema |
|------------|------|--------|
| Description | Ntext | govcdm_Description |
| End Date Time | Datetime | govcdm_EndDateTime |
| Event | Lookup | govcdm_Event |
| Name | Nvarchar | govcdm_Name |
| Parent Event Session | Lookup | govcdm_ParentEventSession |
| Room | Nvarchar | govcdm_Room |
| Session Type | Picklist | govcdm_SessionType |
| Start Date Time | Datetime | govcdm_StartDateTime |