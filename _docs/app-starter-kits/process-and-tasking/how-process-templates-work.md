---
title: How Process Templates Work
parent: process-and-tasking
description: "Explanation of how Process Templates implement approvals, tasks, and business processes."
---

This section explores how Process Templates (Steps) work to implement approvals, tasking, and business processes.

## Selecting a Process Template

There are multiple ways to select a Process Template (Step) to run for records. In the following sections, "Primary Record" refers to the record you are running the process for. For example, you may want to run a process directly against the Person (Contact) record. The Primary Record would be the Person (Contact) record from where you are starting the process.

Also in this section we'll refer to "Process Templates", which are stored in the Process Steps table. The Process Step table is a hierarchical table that stores the main Process Templates (highest level), as well as child steps such as Approvals, Tasks, and other Process Step types.

In Model-Driven Apps, an Action Items pane is available as a sidebar custom page. If the Primary Record does not already have a Primary Action Item linked to it, the app will display a list of available Process Templates to choose from.

## Creating the Primary Action Assignment

After selecting a Process Template, the app creates a corresponding primary Action Item record for the selected Process Step. Action Items are instantiated on-demand and are virtually linked to the initiating record via the Virtual Record ID and Virtual Record Type, allowing the app to present and manage process work without pre-populating large numbers of task records. As users progress through the process, sub-action items are created dynamically to represent individual steps, approvals, and assignments; automation steps can also create or update action items as part of process execution.

The end result is that a new Action Item record is created that corresponds to the Process Template main step, and that Action Item is virtually linked to the record it was initiated from.
