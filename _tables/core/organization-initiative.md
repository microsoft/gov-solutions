---
title: Organization Initiative
description: "Tracks initiatives, projects, or programs managed by government organizational units."
parent: core
---

## Fields

| Field Name         | Type     | Schema                  |
|--------------------|----------|-------------------------|
| Description        | Nvarchar | govcdm_description      |
| Name               | Nvarchar | govcdm_name             |
| Organization Unit  | Lookup   | govcdm_organizationunit |
| Parent Initiative  | Lookup   | govcdm_parentinitiative |
