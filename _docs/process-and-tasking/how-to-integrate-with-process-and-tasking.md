---
title: How to Integrate with Process and Tasking
parent: process-and-tasking
description: "Guide to integrate custom tables with Process and Tasking."
---

This guide walks through how to integrate your custom tables with the Process and Tasking module.

## Add database fields

Add a **Process and Tasking State** multiline plain text field to your table. Use **YOUR-PREFIX_processandtaskingstate** for the schema name. This field is used by the custom page to communicate directly with the parent (primary) record. The primary record form has a timer which reloads the data in this field every few seconds.

Optional - If you plan to use the **Create Collaboration Space** automation, add a Collaboration Space lookup to your table. This will allow the process and tasking automation to track where the collaboration space (Teams Channel, for example) is located for the record.

Optional - Add a **Primary Action Item** field to your table. Use **YOUR-PREFIX_primaryactionitem** for the schema name. Create this a lookup to the **Action Item table**. Do this if you want to retain a definitive 1:1 relationship between the current (primary) action item. Otherwise, the custom page and other components will "know" which record the action item belongs to through the Virtual Record ID and Virtual Record Type fields on the action item record.

## Configure the app

Add the **Action Items** custom page to your model-driven app (sitemap). Configure the page to not show in the navigation. Save and publish the app.

Optional - Add the **Process Steps** and **Data Entry Steps** tables to your app. This will allow users and admins to configure process templates directly in the app. Alternatively, you can keep these out of your app and centralized all process template configuration to the Process and Tasking app if needed.

## Configure the form

Add a new section to your form called **Process and Tasking**. Add the **Process and Tasking State** field that you created above to this section. If you added a **Primary Action Item** field above then you can add it now as well. Then hide this section (optional).

Configure the **On Load** event for your table's form to launch the Action Item custom page when the form loads.

### Open Action Item Pane

- Event Type: On Load
- Library: msfed_processandtasking
- Function: openActionItemsPane
- Enabled: Yes
- Pass Execution Context as First Parameter: Yes
- Comma Separated List of Parameters: None

### Close Panes

- Event Type: On Load
- Library: msfed_processandtasking
- Function: registerClosePanes
- Enabled: Yes
- Pass Execution Context as First Parameter: Yes
- Comma Separated List of Parameters: None

## Configure processes

Configure a **Data Entry Step** for the table you want to run the process from. set the **Applies to Schema Name** to the plural schema name of the table.

Configure **Process Steps**. Begin by creating a top-level **Process Step** as a "Process / Checklist" type and select the **Data Entry Step** you created above. Then add sub-steps for each of the process stages, approvals, or other activities as needed. Be sure to set the **Primary Process Step** field for each of your sub steps. This should point back to the main (root) record for the process and is used by the app when gathering the process steps to display in the hierarchical tree.
