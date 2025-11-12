---
title: "Event Management"
description: "Provides a template for planning, scheduling, and coordinating events, sessions, sponsors, participants, and bookable resources across an organization."
latest_release: v1.2.0.0
thumbnail: /assets/use_cases/event-management.png
required_app_starter_kits:
  - core
required_data_models:
  - event-management
related_use_cases:
  - calendar
---

The **Event Management** app is designed to help government agencies plan, coordinate, and track events using Microsoft Power Platform and Dynamics 365. While still evolving, this module provides a functional foundation for event operations with room for customization and extension based on specific agency needs.

The current solution includes a model-driven app with functional entities for **Events, Event Participants, Event Sessions, Event Sponsors, Event Tracks, and Bookable Resources**. These tables work together to support basic event planning workflows, from simple meetings to multi-session events with sponsors and specialized participants. The app includes organized navigation areas for Event Management and Settings, with logical groupings for Event Setup, Event Execution, and Organizations.

Key capabilities include **event planning** with registration windows, document management, and funding tracking; **participant management** distinguishing between general attendees and specialized roles like speakers or judges; **session management** for breaking complex events into workshops or presentations; **sponsor tracking** with funding oversight and currency support; and **resource management** for booking rooms, equipment, and handling associated costs.

The module also contains prototypes for a **Power BI Master Calendar**, a **Canvas App Master Calendar**, and integration capability with a **SharePoint event list**—providing multiple ways to visualize and coordinate event information. These components offer starting points for agencies looking to extend the basic model-driven app with additional reporting and calendar functionality.

Current forms support multi-tab event planning with sections for General information, Logistics, Sponsors, Sessions, Participants, and Requests. While the app provides a solid foundation for event management, agencies should expect to customize forms, views, and workflows to match their specific operational requirements and approval processes.

This module represents a practical starting point for government event management rather than a comprehensive solution, with built-in extensibility for agencies to adapt and expand based on their unique needs.
