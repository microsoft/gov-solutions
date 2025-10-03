---
title: Personnel Security
description: "Modernize background investigations, adjudication, and clearance management with automated workflows and AI-assisted tools."
latest_release: v1.1.0.0
thumbnail: /assets/use_cases/personnel-security.png
required_app_starter_kits:
 - core
 - process-and-tasking
required_data_models:
 - personnel-security
related_use_cases:
 - personnel-security
related_personas:
 - chief-information-officer
 - hr-administrator
 - investigator
---

The **Personnel Security** module provides a starting framework for managing the full lifecycle of government background investigations, adjudications, and security clearances. Aligned with government security guidelines, the module is designed to help agencies modernize personnel security operations using the Microsoft Power Platform.

Beginning with the initiation of a **Background Investigation (BI)**, security administrators can link investigations directly to an individual’s profile, capture investigation details, and guide the team through a **process checklist** with role-based assignments and real-time progress tracking. Supporting documents, including SF-86 forms, can be managed through the **Document Assistant side pane**, which surfaces related files stored in SharePoint.

Once an investigation is complete, the process transitions to **adjudication**. Here, adjudicators review findings, document SEAD-4 guideline considerations, and record eligibility decisions. An embedded **AI assistant** can help draft summary memos, improving efficiency and consistency in decision-making. If eligibility is confirmed, a **clearance record** is issued—capturing clearance type, effective dates, and status—while maintaining a full chain of custody from investigation through adjudication.

The module also supports **Continuous Vetting (CV)**, enabling ongoing risk monitoring after a clearance is granted. CV triggers, such as foreign contacts, arrests, or financial concerns, can be logged and routed automatically to Security Officers using **Power Automate** notifications. This ensures that potential risks are identified and acted upon without waiting for the next reinvestigation cycle.

All data captured in the module is fully available in **Power BI**, providing security teams and leadership with dashboards and reports that surface trends, workload distribution, and emerging risks. By combining modular data models, automated workflows, and AI-driven assistance, the Personnel Security module enables a scalable, traceable, and modern approach to safeguarding sensitive positions across government organizations.