---
title: "Gov Event Management Data Model v1.1.0.0"
description: "Release notes for Gov Event Management data model v1.1.0.0"
parent: event-management
version: v1.1.0.0
release_file: MSGov-DataModels-Event-Management_managed%20-%201.1.0.0.zip
published: false
---

## MMM-DD, YYYY

- Event Types: New table, Fields - Name
- Event Categories: New choice to replace Event Type choice, with values Professional Development, Training, Public Outreach
- Event Sponsors: New table, Fields - Name, Event, Funding, Organization (lookup to Account), Organization Contact (lookup to Person)
- Event Sessions: New table, Fields - Name, Event, Description, End Date Time, Start Date Time, Room
- Event Entries: New table, Fieldd - Name, Event
- Event Requests: New table Fields - Name, Event
- Event Tracks: New table, Fields - Name, Event
- Event Participants: New table to replace Event Attendees (more flexible to cover Judges, Speakers, etc.). Fields - Name, Event
- Events: Removed Event Type choice; Added columns - Event Category, Event Type (lookup), Event Location, Registration Start Date Time, Registration End Date Time, Documnents Required (Yes/No), Terms and Conditions Document, CDA/NDA Document, FAQ Document, Agenda Document, Volunteer Document, Event Logo, Event Image, Commitment Status, Total Funding Available, Total Funding Remaining, Total Funding Used, Total Planned Registration, Total Registered Participants



