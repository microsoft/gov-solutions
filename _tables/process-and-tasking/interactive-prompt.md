---
title: Interactive Prompt
description: "Guided prompt or question presented during a process step."
parent: process-and-tasking
---

| Field Name                | Type     | Schema Name                   |
|---------------------------|----------|------------------------------|
| Details                   | Ntext    | govcdm_Details               |
| Interactive Prompt Choice | Lookup   | govcdm_InteractivePromptChoice|
| Interactive Prompt Type   | Picklist | govcdm_InteractivePromptType |
| Name                      | Nvarchar | govcdm_Name                  |
| Parent Interactive Prompt | Lookup   | govcdm_ParentInteractivePrompt|
| Prompt                    | Nvarchar | govcdm_Prompt                |
