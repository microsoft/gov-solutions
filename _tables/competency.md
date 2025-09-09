---
title: Competency
description: "Tracks required skills, qualifications, and organizational competencies for government personnel and units."
parent: core
---

## Fields

| Field Name        | Type      | Schema                  |
|-------------------|-----------|-------------------------|
| Description       | Ntext     | govcdm_Description      |
| Name              | Nvarchar  | govcdm_Name             |
| Organization Unit | Lookup    | govcdm_OrganizationUnit |
| Parent Competency | Lookup    | govcdm_ParentCompetency |
