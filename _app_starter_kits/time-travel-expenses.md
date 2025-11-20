---
title: Time, Travel, and Expenses
description: "Model-driven app starter kit with Availability form and baseline app for time, travel, and expense tracking."
latest_release: v1.1.1.0
thumbnail: /assets/use_cases/time-travel-expenses.png
required_app_starter_kits:
 - core
required_data_models:
 - time-travel-expenses
related_use_cases:
 - time-travel-expenses
related_personas:
 - chief-information-officer
 - hr-administrator
---

The **Time, Travel, and Expenses** module provides a reusable framework for three closely related business functions: timekeeping, travel management, and expense reporting. Government agencies often need to manage all three together to support workforce planning, mission activities, and financial accountability. This module brings them into a single, extensible structure that can be used directly or extended in mission-specific applications.

*Currently, this module provides the baseline data model and an **Availability form and view**, with additional forms and views for other tables planned for future updates. Agencies and developers can begin building on this structure today, extending it to meet their mission-specific needs.*

### Time Management

The module supports both project-based timekeeping and availability planning.

* **Time Entries** track the hours an individual spends on work, projects, or administrative duties.
* **Time Projects** and **Tasks** allow agencies to allocate hours against funded activities or mission objectives.
* **Time Periods** provide the structure needed for reporting and compliance.
* **Availability** records indicate when staff are scheduled to be available or unavailable, supporting scenarios such as hybrid workplace hoteling and forward workforce planning.

### Travel Management

The travel model enables structured request, approval, and tracking of trips.

* **Travel Requests** capture the overall purpose, approvals, and destination of a trip.
* **Travel Purposes** provide standardized categories for consistent reporting.
* **Travel Segments** break a trip into legs, storing origin, destination, carrier, and dates.

This structure supports both domestic and international travel while aligning with financial and compliance requirements.

### Expense Management

The expense framework provides structured tracking of costs associated with projects and travel.

* **Expense Reports** serve as the top-level claim for reimbursement or payment.
* **Expense Report Line Items** break down individual charges, each tied to an **Expense Item Category** such as lodging, transportation, per diem, or supplies.
  By linking reports to **Travel Requests**, **Time Projects**, or **Organization Units**, agencies can tie costs back to mission activities for full visibility.

### Use Cases

The module can be applied across a variety of scenarios:

* A **grants administration system** can capture staff time charged to funded projects.
* A **travel management app** can manage approvals, track trip segments, and reconcile expenses.
* A **workforce planning tool** can combine **Availability** and **Time Entry** data to forecast staffing needs across locations.

