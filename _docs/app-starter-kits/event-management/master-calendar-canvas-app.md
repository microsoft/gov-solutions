---
title: Master Calendar Canvas App
parent: event-management
description: "Shows how the Canvas-based Master Calendar aggregates events from Dataverse, SharePoint, and other sources and how to add new event sources."
---

## Overview

This app allows you to combine events from multiple sources such as SharePoint, Dataverse, or other sources into a single event calendar.

![Master Calendar Canvas App]({{ '/assets/app-starter-kits/event-management/image-7b921f92-d648-4909-96c9-1ebd3d2b3736.png' | relative_url }})

# Adding additional event sources

Add your data sources in the Data tab inside your Canvas App.

In the OnVisible property for the scrEventCalendarScreen, use the Collect function to append the event records from those sources into the colEvents collection. Here too you can apply any pre-filtering or other logic.

```
// Set date ranges and reset control
Set(_firstDayOfMonth, DateAdd(Today(), 1 - Day(Today()), TimeUnit.Days));
Set(_minDate, DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days));         
Set(_maxDate, DateAdd(DateAdd(_firstDayOfMonth, -(Weekday(_firstDayOfMonth) - 2 + 1), TimeUnit.Days), 40, TimeUnit.Days));   
Reset(cmpEventCalendar);

// Read the Events table from Dataverse
ClearCollect(colEvents, 
   ForAll(Events, 
      {Name: ThisRecord.Name, 
      StartDate: ThisRecord.'Start Date Time', 
      EndDate: ThisRecord.'End Date Time'}));

// Read the 'Field Office Events' SharePoint list
Collect(colEvents, 
   ForAll('Field Office Events', 
      {Name: ThisRecord.Title, 
      StartDate: ThisRecord.'Start Date', 
      EndDate: ThisRecord.'End Date'}));

// Could read in other data sources here as needed (Outlook, etc.)
// The Collect formula will 'merge' these various sources into a single Table / Collection

// Example: Get Events from your Outlook Calendar
Set(varUserCalendarId, 
    LookUp(Office365Outlook.CalendarGetTablesV2().value, 
           name="Calendar").id
);
ClearCollect(MyCalendarEvents, 
   Office365Outlook.GetEventsCalendarViewV2(
      varUserCalendarId, 
      Text(_minDate, DateTimeFormat.UTC), Text(_maxDate, DateTimeFormat.UTC)).value);
Collect(colEvents, 
   ForAll(MyCalendarEvents, 
      {Name: ThisRecord.Subject, 
      StartDate: ThisRecord.Start, 
      EndDate: ThisRecord.End}));

```

The cmpEventCalendar control has an Events property, tied to the colEvents collection. When that collection changes, the component will react and display the events in the collection.

When you select a day in the control, it will emit the SelectedEvents for that day. You can then use those events and display them in another area on the screen, or to perform additional logic.

The EventCalendar control also has a ShowBorders property, which controls if the gridlines should be shown or hidden.
