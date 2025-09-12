---
title: Setting Up Content Templates
parent: process-and-tasking
description: "Instructions to create content templates and use them with Process and Tasking."
---

This section guides you through how to set up Content Templates and use them in the Process and Tasking module.

## Create a Word Template

Create a Microsoft Word Template. Be sure to include at least one placeholder field in the template. Save the template to a SharePoint folder.

## Create the Power Automate Flow

Create a new Automated Cloud Flow. Use the "When a row is added, modified, or deleted" Dataverse trigger. Add a select filter to the workflow to only trigger when the govcdm_name field is the name of the template you want to trigger this workflow for. Remember this name for later use in the Content Template step. Rename the action to "New Document".

Add additional steps to gather the data you need to populate the template. Start by using the Virtual Record Type and Virtual Record ID values on the Document entity which triggered the workflow. This will give you a starting point to get other records related to the primary record. Rename each step to something meaningful. For example "Get Person".

Use the "Populate a Microsoft Word Template" action to populate the template. Rename this to "Populate Template".

Use the "Create File" SharePoint action to save the file to the location of your choice. Rename this to "Save File"

Use the "Create Sharing Link for a File or Folder" SharePoint action to create a shareable link to the document. Rename this to "Create Link".

Use the "Update a row" Dataverse action to set the Document URL on the Document entity to the output from the "Create Link" action. Get the Document ID from the original trigger step.

## Create the Content Template

Create a Content Template record. Use the same name you used when creating the Power Automate Flow trigger to populate the Word template.

## Add or Link to a Process Step

Create or open an existing Process Step. Set the Content Template to the record you create above.
