---
layout: default
title: Home
---

# Government App Template Repository

The Government Application Starter Templates repository provides a library of modular, prebuilt Power Platform and Dynamics 365 applications designed specifically for government agencies. Each template is built on the standardized [Government Dataverse Data Models](https://github.com/microsoft/gov-datamodels), ensuring data consistency and interoperability across solutions. These ready-to-personalize modules deliver core starting funcionality for mission-focused services such as permitting, case management, asset tracking, grants management, and more. By using these templates, agencies can jump-start solution delivery, reduce development time, and focus resources on tailoring workflows, user experiences, and integrations to meet their unique operational needs.

## 🎯 Co-Designed with Government App Data Models

This repository, along with the [Government Data Models](https://github.com/microsoft/gov-datamodels)  repository, are designed to work together as a modular, layered foundation for building government solutions on Microsoft Dataverse and the Power Platform.

- gov-datamodels provides the standardized, reusable data models — entities, relationships, and field specifications — that define the structure and semantics of common government business processes.

- gov-apptemplates provides the ready-to-deploy applications built on top of those models, delivering preconfigured forms, views, dashboards, automation, and business logic.

Keeping these in separate repositories offers several benefits:

- Clear separation of governance and reusability – Data models can evolve under their own governance rules, without being tied to specific app release cycles.

- Independent versioning – You can update a data model without republishing every app, and vice versa.

- Wider reusability – Other apps (internal or third-party) can consume the standardized models without needing to adopt the provided app templates.

- Simpler contribution paths – Developers can contribute to either the shared data foundation or the application layer based on their expertise.

- Better lifecycle management – Agencies can standardize data schemas across multiple solutions while tailoring applications to their unique mission needs.

By using both together, agencies get a consistent, governed data layer plus a set of deployable, mission-focused apps that can be adapted quickly and maintained over time.

## 🛠️ Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit [Contributor License Agreements](https://cla.opensource.microsoft.com).

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

We are working on integrating the full unpacked solution files for a more direct contribution experience. Check back for updates for availability.

## ™️ Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

## 📌 Intended Use

The modules in this repository are provided as **reference implementations** for learning, experimentation, and as a starting point for building production-ready applications.

They are **not** designed to be deployed directly to a production environment without additional development, testing, and validation. Any organization planning to use these modules in production should:

* Adapt and extend the solutions to meet specific business and technical requirements
* Integrate them into the organization’s **Application Lifecycle Management (ALM)** processes
* Perform full **security, compliance, and performance reviews**
* Apply updates, fixes, and enhancements as needed

These modules are meant to accelerate solution design and reduce initial build time, but the responsibility for ensuring readiness, compliance, and ongoing maintenance lies with the implementing organization.

## ⚖️ Support 

The modules in this repository are provided **“as is”** without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.

As open source, these solutions are **not** official Microsoft products and are **not** covered by any Microsoft support agreement or service-level commitment. No guarantee is made regarding the accuracy, completeness, performance, or continued availability of these modules.

Use of these modules is at your own risk. You are responsible for evaluating their suitability for your environment, performing necessary security reviews, and ensuring compliance with applicable laws, regulations, and policies.

By installing or using these modules, you acknowledge that no obligation exists for Microsoft or the repository maintainers to provide support, updates, or maintenance, and that any assistance provided is voluntary and without guarantee.

