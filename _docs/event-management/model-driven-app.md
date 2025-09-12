---
title: Event Management Model-Driven App
parent: event-management
description: "Describes the model-driven app UI, entities (Events, Attendees, Bookable Resources), and the key forms and views used to manage events."
---

# Overview 
This app template includes a model-driven app, Canvas App, SharePoint site and list, and Power BI report and allows you to:

- Enter Events, Activities, and Field Office events using Dataverse and SharePoint
- Combine and view those events on a single view

## Events

The model-driven app allows you to manage multiple Events. 

![Model-driven app screenshot]({{ '/assets/app-starter-kits/event-management/image-05ba94ad-204a-4e63-ac27-e5d95c9cbacc.png' | relative_url }})

![Model-driven app screenshot]({{ '/assets/app-starter-kits/event-management/image-5321861e-78e6-49cc-ad86-84e9837855c7.png' | relative_url }})

Events can have Bookable Resource Reservations and Event Attendees.

![Event attendees screenshot]({{ '/assets/app-starter-kits/event-management/image-de357994-1d5d-42f4-9b6d-cf760a7d529f.png' | relative_url }})

## Bookable Resource Reservations

Bookable Resource Reservations track information about the reservation for the event and can include payment information.

![Bookable resource reservation screenshot]({{ '/assets/app-starter-kits/event-management/image-e94d6004-fdfa-49cd-aab4-1c301fa8179a.png' | relative_url }})

## OOB Activities

The model-driven app also allows you to create and manage OOB Activities, such as Appointments, Tasks, Phone Calls, etc. For example, you could use Events for public-facing events and Activities for more internal events, to keep them in separate tables for security and process separation.

![Activities screenshot]({{ '/assets/app-starter-kits/event-management/image-c6c614e0-4cd9-4609-a3f6-ea72d4babc0d.png' | relative_url }})
