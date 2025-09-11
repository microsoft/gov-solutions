---
title: Project Work Item
description: "Represents tasks or work items within a project, including links to backlog, iteration, milestones, and parent work items."
parent: project-tracking
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Action Status | Picklist | govcdm_ActionStatus |
| Assigned To | Lookup | govcdm_AssignedTo |
| Description | Ntext | govcdm_Description |
| Name | Nvarchar | govcdm_Name |
| Parent Work Item | Lookup | govcdm_ParentWorkItem |
| Project | Lookup | govcdm_Project |
| Project Backlog | Lookup | govcdm_ProjectBacklog |
| Project Iteration | Lookup | govcdm_ProjectIteration |
| Project Milestone | Lookup | govcdm_ProjectMilestone |
| Project Work Item Type | Lookup | govcdm_ProjectWorkItemType |
