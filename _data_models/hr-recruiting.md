---
title: "HR Recruiting"
description: "Data model for managing job postings, candidates, and recruiting applications for government hiring processes."
thumbnail: /assets/use_cases/hr-recruiting.png
latest_release: v1.0.0.0
required_data_models:
  - core
related_use_cases:
  - hr-administration
related_personas:
  - hr-administrator
---

## HR Recruiting: A Data Model for Hiring and Candidate Management

The **HR Recruiting** module establishes a streamlined structure for managing the recruitment lifecycle in government, from posting job opportunities to tracking applications and candidates. Federal hiring is often complex, involving strict compliance requirements, multiple steps of review, and large applicant pools. This module provides a reusable foundation in Dataverse that captures the essential elements of recruiting while remaining flexible enough to grow as agencies add more detail to their hiring processes.

At the core of the model is the **HR Job Posting** table, which represents a position that an agency is seeking to fill. Job postings can store details such as position title, series and grade, organizational unit, location, and open and close dates. Each posting serves as the anchor for the recruiting process, linking applicants, applications, and ultimately hires.

Candidates are captured in the **HR Candidate** table, which represents the people applying for positions. Candidate records may include contact information, background details, and references, with the ability to expand as agencies integrate with assessment tools or applicant tracking systems. Each candidate can apply for multiple positions, allowing agencies to see patterns of interest and manage large applicant pools.

The link between postings and candidates is the **HR Application** table. Applications record the submission of a candidate for a specific job, including status, dates, and supporting documents. This structure allows agencies to track the progress of each application through the hiring lifecycle—from initial submission to review, interview, and final decision—while maintaining a clean separation between the candidate profile and their individual applications.

In practice, this module can support a wide range of scenarios. A small HR office could use it to track basic postings and applications without a full-scale applicant tracking system. A larger agency could extend it with additional tables for assessments, interviews, or selection panels, ensuring compliance with federal hiring rules while tailoring it to their processes. Over time, integrations with other HR Administration modules could allow hired candidates to transition seamlessly into positions, assignments, and personnel records.

By capturing job postings, candidates, and applications in a unified and extensible structure, the HR Recruiting module gives agencies a starting point for modernizing their hiring processes. It reduces reliance on spreadsheets or disconnected systems, supports compliance and transparency, and creates a foundation for growth as agencies expand their recruiting capabilities.

```mermaid
graph TD
  govcdm_HRApplication(HR Application)
  govcdm_HRCandidate(HR Candidate)
  govcdm_HRJobPosting(HR Job Posting)

```
