---
title: Process and Tasking Model-Driven App
parent: process-and-tasking
description: "Walkthrough of the Process and Tasking model-driven app."
---

The **Process and Tasking** utility app includes a model-driven app to manage Process Templates, Interactive Forms, Data Forms, Interactive Responses, and Action Items.

The intent of this app is to show how you can use the functionality in the Process and Tasking module in your own modules. The Person (Contact) record is set up as an example of how to integrate the Process Templates.

# Process Templates

Process Templates are where you set up your reusable business process and automation steps. You can set up multiple hierarchical processes to run against any other type of record in your system.

![Process Templates]({{ "/assets/app-starter-kits/process-and-tasking/image-ba392a7e-e17d-400d-be7b-29ae28a99e63.png" | relative_url }})

# Action Items (Custom Page)

The Action Items custom page gives you a top-down view of all action items represented in a tree-view, with the ability to manage and edit details for each action item. This allows you to have a full hierarchical view in your app of all action items and their sub action items for completed and in progress actions.

![Action Items]({{ "/assets/app-starter-kits/process-and-tasking/image-8ec23a12-f3ca-4145-b8d6-3293ed055b50.png" | relative_url }})

# Action Items Sidebar (Custom Page)

The Action Items custom page can be opened as a sidebar (pane) alongside any record. If no processes are currently running for the record, the app will display a list of processes you can run for that record type:

![Action Items Sidebar]({{ "/assets/app-starter-kits/process-and-tasking/image-c33741da-dbcb-466e-95ff-def6fdfcd21d.png" | relative_url }})

Initiating a process will take you directly to the process, and if only one action item is available, will take you directly to that action item:

![Initiate Process]({{ "/assets/app-starter-kits/process-and-tasking/image-c1725158-a51e-425c-af51-d12b5718b3d2.png" | relative_url }})

# Action Items Dialog (Custom Page)

The Action Items custom page can also be opened as a dialog for the primary record. This maximizes the area available for the information and puts the focus on the action items:

![Action Items Dialog]({{ "/assets/app-starter-kits/process-and-tasking/image-425a59ae-0ad6-4555-822b-7c0f44b8f41f.png" | relative_url }})

# General Tab

Use the General tab to enter instructional detail or progress comments for the action.

![General Tab]({{ "/assets/app-starter-kits/process-and-tasking/image-141bca99-4212-4f8a-a221-cb3ee7f2273c.png" | relative_url }})

# Discussion Tab

Use the Discussion tab to enter quick notes on progress or other updates related to the record.

If the process step is an Approval, the app will display buttons for Submit, Approve, Return, and Rescind within the Discussion tab.

![Discussion Tab]({{ "/assets/app-starter-kits/process-and-tasking/image-4405cac6-b5a8-477b-a3d1-5d21c1a51a55.png" | relative_url }})

# Details Tab

Use the Details tab to assign the action item to a user or team, or to set the due date.

![Details Tab]({{ "/assets/app-starter-kits/process-and-tasking/image-5231d302-2519-424a-92b8-d3454c8e5485.png" | relative_url }})

# Changing the Action Item Status

Use the Mark In Progress, Revert to New, Mark Complete, and Revert to In Progress buttons to update the action item status as work begins, completes, or goes back through the cycle. The action item header and tree-view will update accordingly.

![Changing Status]({{ "/assets/app-starter-kits/process-and-tasking/image-5696180e-3155-4be7-a792-4b0c1c25ea70.png" | relative_url }})

# Adding a New Sub Action Item

Use the + button under action items to create new sub action items. Note - you must first create or update the action status of items in the tree to "in progress" before creating sub action items. This is so that the app can attach the action item to a parent action (the parent action item must exist first).

# Create Collaboration Space (Automation)

Use the Create Collaboration Space process step type to automatically create Team Channels in the designated Microsoft Team, based on an attribute on the primary record (such as person's name or case number). This makes it easy for you to start a collaboration space on any record type. The automation may take a few seconds to run.

![Create Collaboration Space]({{ "/assets/app-starter-kits/process-and-tasking/image-06738a68-64a4-4838-948d-c0a6fa69afe9.png" | relative_url }})

# Generate Document from a Template

Use the Generate Document process step type to automatically create a Word Document from the information on the primary record and related records. The system will  run the designated Power App flow and save the document to the collaboration space. The document will also be available as a preview in the Documents tab on the action item.

![Generate Document]({{ "/assets/app-starter-kits/process-and-tasking/image-68dbd99a-db4d-46f2-8c63-fba393b2b114.png" | relative_url }})
