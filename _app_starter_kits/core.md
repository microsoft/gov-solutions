---
title: Core
description: "Provides standardized data structures for managing people, places, assets, and compliance information in government-focused solutions."
latest_release: v1.1.0.0
thumbnail: /assets/use_cases/core.png
required_data_models:
 - core
related_use_cases:
 - case-management
---

The **Core Utility** module is a foundational building block within the Microsoft Government App Templates library. It provides a centralized, enterprise-ready framework for managing essential reference data aligned with [Government Data Models](https://github.com/microsoft/gov-datamodels){:target="_blank" rel="noopener noreferrer"}, ensuring consistency across applications and reducing duplication in business processes. Designed for extensibility, the Core module can serve as both a starting point for new low-code solutions and a shared utility layer in enterprise-scale deployments.

At its heart, the module standardizes key records such as people, places, assets, and compliance references. By offering pre-built data structures, forms, and views, it accelerates application development while providing a strong and adaptable data foundation. Agencies can extend the module to fit unique requirements, while still benefiting from a consistent baseline aligned with government standards.

Key features include:

* **Centralized reference data management** – A single source of truth for core entities, reducing inconsistencies across solutions.
* **Extensible architecture** – Flexible data model that can be customized and integrated with existing systems.
* **Accelerated development** – Pre-built forms, views, and logic enable rapid prototyping and deployment.

The Core Utility module is organized into four primary areas:

* **People** – Manages individuals, organizational units, job series, clearance levels, pay grades, and more. Supports HR, onboarding, and access control scenarios.
* **Places** – Standardizes geospatial and facility data, including countries, states, and locations.
* **Things** – Tracks fiscal periods, products, and other assets for financial reporting, procurement, and lifecycle management.
* **Legal & Compliance** – Supports privacy consents, authorities, risks, compliance frameworks, and requirements to strengthen auditability and regulatory alignment.

Typical use cases include providing a **foundational data layer** for new Power Apps solutions, serving as a **shared enterprise utility module** across multiple applications, or acting as a **modern replacement for legacy systems**. Whether deployed standalone or as part of the broader suite of Government App Templates, the Core Utility module helps agencies establish strong, consistent, and governable data practices from day one.

## Sample data

Sample data is available for this module here - [Core Sample Data](https://github.com/microsoft/gov-apptemplates/tree/main/cross-module/core/sample-data){:target="_blank" rel="noopener noreferrer"}.
