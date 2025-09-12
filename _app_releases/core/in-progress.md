---
title: "Core - In Progress"
description: "Work-in-progress items and upcoming changes for the Core module. This is a draft and not yet published as a formal release."
version: in-progress
parent: core
published: false
---

- **Core JavaScript (msfed_core.js):** Added openSidePane and related functions to enable opening a custom page as a side pane. Add a Custom Page State (msfed_custompagestate) field to your form to use it. This hidden field will track communications from your custom page.
- **Documents:** Configured Quick Create form.
- **Core - Name Utility:** New JavaScript library to assist with supplying values for the name field, based on other fields on the form.
  - `replacePrefixFromLookup` — Automatically sets a field value (e.g., Name) using a new prefix and the suffix from a related lookup’s name. Example: Converts `INV-12345` to `ADJ-12345` using a mapped lookup.
  - `generateFieldFromPattern` — Populates a field dynamically using a pattern string with placeholders (e.g., `${contactid.name}`) that reference other fields on the form. Supports text, lookups, option sets (labels), and dates.
  - `setupPatternWatcher` — Centralizes dynamic name generation by automatically re-generating the field value when any dependent field changes, eliminating the need to manually bind multiple `onChange` handlers.
- **Personal Information:** Added new table to sitemap, configured baseline forms and views.
- **Personal Information Types:** Added new table to sitemap, configured baseline forms and views.

---

This document is a draft migration of the "In Progress" section from the source `.source-apps-wiki/Core/Release-Notes.md`. It is intentionally unpublished until a formal version number is assigned.
