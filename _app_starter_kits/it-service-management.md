---
title: "IT Service Management"
description: "Model-driven app starter kit for IT service operations: service requests, asset and entitlement management, provisioning, system cataloging, and technology portfolio management." 
latest_release: v1.2.0.0
thumbnail: /assets/use_cases/it-service-management.png
required_app_starter_kits:
  - core
required_data_models:
  - it-service-management
related_use_cases:
---

The **IT Service Management** app starter kit provides agencies with foundational tools to manage IT operations, from service desk requests to system cataloging, technology portfolio management, and compliance oversight. Built on Microsoft Power Platform, the starter kit includes model-driven applications that can help support service delivery, asset management, and governance activities, providing agencies with a starting point for technology operations while maintaining accountability and security.

The starter kit includes three primary **model-driven applications**: the **IT Service Management** app for service requests and operational workflows, the **IT System Catalog** app for system cataloging activities, and the **IT System Accreditation** app for compliance and accreditation management. The IT System Catalog provides areas for catalog management with IT Systems, IT System Components, and administrative functions for IT System Component Types, IT Technologies, and IT Technology Types. It also includes initial integration capabilities through source system management features. The app offers an interface focused on system inventory and catalog maintenance, with a dashboard for operational visibility.

The applications support basic **system metadata management** including system descriptions, URLs, points of contact, lifecycle stages, operational status, criticality levels, security classifications, hosting models, API endpoints, and review schedules. **Component architecture modeling** enables system breakdown with parent-child relationships, component types, technology associations, stewardship assignments, and operational metadata. The **technology cataloging framework** provides initial technology portfolio management with vendor relationships, hierarchical technology type categorization, and technology-to-system mappings.

Current functionality includes baseline forms and views for IT Systems and IT System Components, with Information forms, Active record views, and Quick Create capabilities. The IT System Catalog Dashboard provides basic operational visibility into system portfolio status. Administrative areas support reference data management for component types, technologies, and technology categorization. Integration setup and processing areas provide a foundation for future workflow automation and external system connectivity.

The starter kit enables agencies to begin establishing IT service management practices. Service desks can track and resolve user requests while managing entitlements and provisioning workflows. System owners can maintain system and component inventories with metadata, technology dependencies, hosting details, and compliance status. Architecture teams can model system hierarchies and technology relationships. Security teams can manage accreditation lifecycles and track compliance obligations. Technology portfolio managers can maintain catalogs of technologies, vendors, and usage patterns.

Future enhancements will include automated workflows for access provisioning and compliance management, enhanced dashboards with request volumes and accreditation timelines, and deeper integrations with asset management and external compliance tools. The framework is designed to link IT service activities back to budget structures using **Work Assignment Codes**, providing transparency into resource utilization and funding allocation.

This starter kit provides agencies with foundational IT service management capabilities, offering initial tools for system cataloging, service tracking, and compliance management that can be expanded and customized to meet specific organizational needs as requirements evolve.

## Sample data

Sample data is available for this module here - [IT Service Management Sample Data](https://github.com/microsoft/gov-apptemplates/tree/main/modules/it-service-management/sample-data){:target="_blank" rel="noopener noreferrer"}. Sample data is currently for the IT System Catalog and related entities.
