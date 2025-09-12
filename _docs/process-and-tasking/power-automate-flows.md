---
title: Power Automate Flows
parent: process-and-tasking
description: "Reference for Power Automate flows used by Process and Tasking."
---

Multiple Power Automate Flows are available in the Process and Tasking Module to automate common tasks.

## Collaboration Spaces

There are two types of **Collaboration Space** records - templates and actual instances. **Collaboration Space** template records store a templated version of the **Collaboration Space** which the flows below can use to create instances, which are tied to specific primary records. There is not a specific type field that indicates if the **Collaboration Space** is a template or an instance. Instead, **Collaboration Space templates** use the fields listed in the **Configuration** section on the Main form (Name, Collaboration Space Type, Team ID, Team Channel ID, Team Chat ID, SharePoint Site, and SharePoint Folder Path), and **Collaboration Space instances** use the fields listed on the Instance tab (Virtual Record Type, Virtual Record, ID, Virtual Record Display Field, URL, and Action Assignment).

**Collaboration Spaces** can be configured to use a field from the primary record (the record to which the **Collaboration Space** is associated) as the name of the folder or **Team channel**. If this value changes on the primary record, there is not yet a mechanism to update the folder or channel name, but the association will still exist (does not break).

## MSF - PAT - Get Team Channel

This flow can be called to return information about a **Microsoft Team Channel**, for example to see if it exists. Pass in the Team ID and Channel Name. The flow will locate the team channel and return it in the Result parameter if found. If not found, the Result parameter will be empty.

## MSF - PAT - Save to Collaboration Space

This flow can be called to save the contents of a file to the folder specified in a **Collaboration Space**. Pass in the Collaboration Space ID, File Content, and File Name. The flow will use the SharePoint connector to save the file, create a sharing link, and return the URL (sharing link) and FilePath (SharePoint Site URL + File Path) to the caller.

## MSF - PAT - Create Team Channel

This flow can be called to create a **Microsoft Teams Channel**. Pass in the Team ID and Channel Name. If the team channel already exists, the flow will exit. If the team channel does not exist, it will create it. The flow returns the URL to the channel, an Exists flag indicating if it already exists, and Channel information for the existing channel. Note that creating a Team Channel automatically creates a corresponding SharePoint folder in the Team's SharePoint site.

## MSF - PAT - Collaboration Space Created - Team Channel

This flow runs automatically whenever a new **Collaboration Space** record is created where the Virtual Record ID is not empty and the Collaboration Space Type is "Team Channel". The flow will get the value of the primary display field as specified in the Collaboration Space. The flow then creates a Microsoft Team Channel with that name, using the "MSF - PAT - Create Team Channel" flow. It will also then retrieve the SharePoint site and folder information, and updates the Collaboration Space with the information on where the new folder is located. Next, the primary record's Collaboration Space field is set to the Collaboration Space which triggered the flow (in case it was initiated only through the Virtual ID and Virtual Record Type fields, where no association exists yet between the primary record and the Collaboration Space). Finally, if an Action Item was used to create the Collaboration Space, the Action Item's Automation Response is updated with the result of the operation.

## MSF - PAT - Get Record

This flow can be called to return the Dataverse record and corresponding URL to launch the model-driven app form for the record. Pass in the plural EntityName and RecordID (GUID). The flow will retrieve the record from Dataverse and format the record URL. This is useful in scenarios where you are running a Canvas App and you do not know the type of record you will be working with at design time, for example in modules designed to work with all entities.

