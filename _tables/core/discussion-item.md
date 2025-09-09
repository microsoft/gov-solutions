---
title: Discussion Item
description: "Captures discussion points, comments, or notes related to government projects, meetings, or case management."
parent: core
---

## Fields

| Field Name             | Type    | Schema                      |
|------------------------|---------|-----------------------------|
| Comment                | Ntext   | govcdm_Comment              |
| Name                   | Nvarchar| govcdm_Name                 |
| Parent Discussion Item | Lookup  | govcdm_ParentDiscussionItem |
