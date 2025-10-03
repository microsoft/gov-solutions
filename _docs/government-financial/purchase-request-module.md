---
title: "Purchase Request Module"
parent: government-financial
description: "Describes the Purchase Request module (GSA Form 49) UI, workflows, and integrations."
---

# Overview

The "Purchase Request" module is specifically developed to facilitate the implementation of the General Services Administration (GSA) Form 49, streamlining the process of initiating and managing purchase requests within federal agencies. This module provides an efficient and compliant framework for the submission, approval, and tracking of purchase requisitions, ensuring adherence to federal procurement standards.

This module simplifies the complexities associated with procurement processes by automating the creation, submission, and approval of GSA Form 49. It features customizable workflows that mirror agency-specific requirements, enhancing transparency and accountability throughout the purchase request lifecycle. Integrated with real-time tracking and reporting capabilities, it offers administrators and procurement officers visibility into the status of requests, budget alignments, and audit-ready documentation. The "Purchase Request" module ensures that every purchase is justified, approved, and recorded in accordance with federal regulations, thereby improving operational efficiency and compliance in procurement activities.

## Welcome Page

The Welcome Page serves as the gateway to the Purchase Request Module, providing users with a concise overview of the module's capabilities and guiding them through the process of initiating a new purchase request. It's designed to be intuitive and user-friendly, ensuring users from all levels of the agency can navigate the system effortlessly.

![Welcome page screenshot]({{ "/assets/app-starter-kits/federal-financial/image-97d9599e-9c0d-4640-a43e-2dad75a0b647.png" | relative_url }})

## Submit a New Purchase Request

This feature is modeled on the General Services Administration (GSA) Form 49, ensuring compliance with federal standards. A digital Field Assistant enhances the user experience by offering step-by-step guidance and support in making informed data entry choices throughout the submission process. This interactive assistant ensures that all necessary information is accurately captured, reducing errors and omissions.

![Submit a new purchase request screenshot]({{ "/assets/app-starter-kits/federal-financial/image-4b2b166d-3a9c-4c5e-8b32-58a4e43b841a.png" | relative_url }})

## Add and manage items from a catalog

Users can browse and select required items from a pre-defined catalog, streamlining the item addition process. This catalog is designed to include all commonly requested items, facilitating quick and efficient item selection. The manage items feature allows users to modify quantities, remove items, or add additional notes as needed, offering flexibility and control over their purchase requests.

![Catalog screenshot]({{ "/assets/app-starter-kits/federal-financial/image-2a4295e5-7346-4706-8fbc-e277d9fdd552.png" | relative_url }})

## Add write-in items not in the catalog

For items not available in the catalog, users have the option to add write-in items. This functionality ensures that the system can accommodate special requests or unique needs that are not covered by the standard catalog, providing a comprehensive solution for all purchase requests.

![Write-in items screenshot]({{ "/assets/app-starter-kits/federal-financial/image-0371b9bb-6458-46e1-9377-b32a4004b359.png" | relative_url }})

## Upload attachments

The module supports the upload of relevant attachments, such as quotes, specifications, or justification documents, directly within the purchase request form. This feature ensures that all pertinent information is centralized and accessible, streamlining the review and approval process.

![Upload attachments screenshot]({{ "/assets/app-starter-kits/federal-financial/image-22bbd242-4d4b-4002-bd3b-c74cf0022e3d.png" | relative_url }})

## Submit items for approval

Once the purchase request is complete, users can submit it for approval. The system utilizes Power Automate to check amounts against available budgets, send email notifications, and route the request through the appropriate approval workflows based on predefined criteria.

![Submit for approval screenshot]({{ "/assets/app-starter-kits/federal-financial/image-5acc62e4-d614-4c81-ab5b-9b39af84727e.png" | relative_url }})

## Workflow will auto-approve or route for approval

The integrated workflow engine automatically determines whether a request can be auto-approved or if it requires manual approval. This decision is based on the amount, type of request, and other relevant criteria, ensuring that each request is handled efficiently and in accordance with agency policies.

![Workflow screenshot]({{ "/assets/app-starter-kits/federal-financial/image-8d82ea25-d035-452a-99f5-7dad2172d01c.png" | relative_url }})

## Approval request is emailed

Upon submission, an approval request is automatically emailed to the designated approvers, providing them with all the details necessary to make an informed decision. This email includes links to the request in the system, streamlining the approval process.

![Approval email screenshot]({{ "/assets/app-starter-kits/federal-financial/image-0e989e08-f46e-4a2c-a816-d11e518a4b36.png" | relative_url }})

## Approval notification is sent to Teams

In addition to email notifications, approval notifications are also sent directly to Microsoft Teams. This integration ensures that approvers are promptly informed about pending requests, facilitating quicker response times and enhancing collaboration among the team.

![Teams notification screenshot]({{ "/assets/app-starter-kits/federal-financial/image-38bc8ec0-7b8f-421e-a67d-7837a52616f2.png" | relative_url }})

## Backend Case Management to review the request

A model-driven app handles the backend case management, providing administrators and finance teams with powerful tools to review, manage, and track purchase requests. This component is built on the Power Platform and is directly linked to the purchase request table, ensuring real-time data accuracy and visibility.

![Backend case management screenshot]({{ "/assets/app-starter-kits/federal-financial/image-e5e90042-2a83-4548-bcd9-ff748fe3716e.png" | relative_url }})

## Status automatically changed when Approved

The system automatically updates the status of the purchase request once it is approved, providing real-time feedback to the requester and keeping all stakeholders informed about the request's progress.

![Status changed screenshot]({{ "/assets/app-starter-kits/federal-financial/image-38b40608-714a-40e6-a95c-9d338830765b.png" | relative_url }})

## Purchase request dashboard allows for insights

A comprehensive Power BI dashboard offers deep insights into the purchase request process, including metrics on request volumes, approval times, and budget utilization. This dashboard is designed to help agencies monitor performance, identify bottlenecks, and make informed decisions to optimize the purchase request process.

![Purchase request dashboard screenshot]({{ "/assets/app-starter-kits/federal-financial/image-a5f219d2-5439-4cf8-b645-15c04c483f0e.png" | relative_url }})
