---
title: Project Milestone
description: "Represents milestones in a project schedule used to track significant deliverables or dates."
parent: project-tracking
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Description | Ntext | govcdm_Description |
| Due Date | Datetime | govcdm_DueDate |
| Name | Nvarchar | govcdm_Name |
| Parent Project Milestone | Lookup | govcdm_ParentProjectMilestone |
| Project | Lookup | govcdm_Project |
