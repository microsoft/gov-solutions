---
title: Personnel Security
description: Foundation entities, relationships, and data structures used across government solutions.
latest_release: federal/personnel-security/releases/v1.0.0.0/MS-Fed-Personnel-Security_managed%20-%201.0.0.0.zip
thumbnail: /assets/app-starter-kits/personnel-security/personnel-security.png
requires:
 - core
requires_data_models:
 - personnel-security
use_cases:
 - personnel-security
personas:
 - chief-information-officer
 - hr-administrator
---

The **Personnel Security** module provides a starting framework for managing the full lifecycle of federal background investigations, adjudications, and security clearances. Aligned with federal security guidelines, the module is designed to help agencies modernize personnel security operations using the Microsoft Power Platform.

Beginning with the initiation of a **Background Investigation (BI)**, security administrators can link investigations directly to an individual’s profile, capture investigation details, and guide the team through a **process checklist** with role-based assignments and real-time progress tracking. Supporting documents, including SF-86 forms, can be managed through the **Document Assistant side pane**, which surfaces related files stored in SharePoint.

Once an investigation is complete, the process transitions to **adjudication**. Here, adjudicators review findings, document SEAD-4 guideline considerations, and record eligibility decisions. An embedded **AI assistant** can help draft summary memos, improving efficiency and consistency in decision-making. If eligibility is confirmed, a **clearance record** is issued—capturing clearance type, effective dates, and status—while maintaining a full chain of custody from investigation through adjudication.

The module also supports **Continuous Vetting (CV)**, enabling ongoing risk monitoring after a clearance is granted. CV triggers, such as foreign contacts, arrests, or financial concerns, can be logged and routed automatically to Security Officers using **Power Automate** notifications. This ensures that potential risks are identified and acted upon without waiting for the next reinvestigation cycle.

All data captured in the module is fully available in **Power BI**, providing security teams and leadership with dashboards and reports that surface trends, workload distribution, and emerging risks. By combining modular data models, automated workflows, and AI-driven assistance, the Personnel Security module enables a scalable, traceable, and modern approach to safeguarding sensitive positions across government organizations.