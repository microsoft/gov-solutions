---
title: "Core Developer Guide"
parent: core
description: "Developer guidance for Core client libraries (msfed_core openSidePane, msfed_nameutils utilities) and migration notes for v1.0.2.1."
---

This guide explains how to use the new client-side utilities introduced in Core v1.0.2.1. It includes usage patterns and examples for:

- msfed_core.openSidePane — open a custom page as a side pane and receive messages back from that page via the `msfed_custompagestate` hidden field.
- Core - Name Utility — helper functions to dynamically generate and maintain a Name (or other) field based on patterns and related lookup values:
  - `replacePrefixFromLookup`
  - `generateFieldFromPattern`
  - `setupPatternWatcher`

---

## 1. Side Pane: openSidePane and msfed_custompagestate

Core introduces a lightweight helper to open custom pages as side panes and a small message contract used for communication between the custom page and the host form.

### 1.1 Add the hidden Custom Page State field

Add a single-line text column named `msfed_custompagestate` to any table where you will use a side pane custom page. Mark it hidden on the main form (it will be used by the host page and the custom page to pass JSON state).

### 1.2 Usage: open a side pane from a form

Example usage in a form script (msfed_core.openSidePane is available once the web resource has been loaded):

```javascript
// Example: open a custom page that will notify the host via the custom page state field
const url = '/path/to/your/custom/page.html';
const options = {
  width: 600,
  title: 'Custom Side Page',
  // Optional initialState can be any JSON object that the custom page expects
  initialState: { recordId: formContext.data.entity.getId(), foo: 'bar' }
};

msfed_core.openSidePane(url, options, formContext);
```

The host passes an optional `initialState` object which msfed_core will write into the `msfed_custompagestate` field before opening the pane. The custom page should read this field on load and may send updates back by writing JSON into the same field and triggering the onSave or a custom event depending on the implementation.

### 1.3 Custom page message protocol

- Host -> Page: `initialState` JSON written to `msfed_custompagestate`.
- Page -> Host: write an updated JSON object to `msfed_custompagestate` and use the platform `notify` or `publish` mechanisms (or save the record) to allow the host to pick up the change.

A typical JSON payload shape:

```json
{
  "action": "close",
  "result": { "selectedId": "<lookup-id>", "note": "user selected x" }
}
```

The host should listen for changes to `msfed_custompagestate` (onChange handler) to react to messages coming from the page.

---

## 2. Core - Name Utility

This library helps create dynamic values for a field (commonly used for record Name) using related lookup values, pattern strings, and automated watching of dependent fields.

### 2.1 API overview

- `replacePrefixFromLookup(formContext, targetFieldLogicalName, lookupFieldLogicalName, prefixMap)`
  - Replaces the prefix of the target field using the suffix of the name value from the lookup field and a prefix mapping.
  - `prefixMap` shape: `{ sourcePrefix: newPrefix, ... }` Example: `{ 'INV': 'ADJ' }`.

- `generateFieldFromPattern(formContext, patternString)`
  - Populates the target field using a `patternString` that contains placeholders in the form `${field.logicalname}`. Placeholders can reference lookups (e.g., `${contactid.name}`), option set labels, dates (with optional format specifiers), and plain text.

- `setupPatternWatcher(formContext, targetFieldLogicalName, patternString, dependentFields)`
  - Registers onChange handlers for the dependent fields and re-generates the target field when any of them change.

### 2.2 replacePrefixFromLookup example

Suppose you have an `adjustmentid` lookup on your form that references an invoice whose name follows the pattern `INV-12345`. When creating an adjustment record you want the name to be `ADJ-12345`.

```javascript
const prefixMap = { 'INV': 'ADJ' };
msfed_nameutils.replacePrefixFromLookup(formContext, 'msfed_name', 'adjustmentid', prefixMap);
```

This will read the `adjustmentid.name`, extract the prefix (`INV`) and suffix (`12345`), map the prefix using `prefixMap`, and set `msfed_name` to `ADJ-12345`.

### 2.3 generateFieldFromPattern example

Pattern example:

```
'INV-${contact.name}-${statuscode.label}-${createdon:YYYYMMDD}'
```

Usage:

```javascript
msfed_nameutils.generateFieldFromPattern(formContext, 'msfed_name', 'INV-${contactid.name}-${statuscode.label}-${createdon:YYYYMMDD}');
```

Rules:
- `${<field>}` supports lookup fields by using `.name` for the lookup display name or `.id` for the id value.
- Option sets should use `.label` to insert the user-facing label.
- Dates may include a `:FORMAT` suffix after the property name, using a simple token set like `YYYY`, `MM`, `DD`.

### 2.4 setupPatternWatcher example

To avoid wiring multiple onChange handlers manually, use `setupPatternWatcher`:

```javascript
const pattern = 'ADJ-${invoiceid.name}-${category.label}';
const deps = ['invoiceid', 'category'];
msfed_nameutils.setupPatternWatcher(formContext, 'msfed_name', pattern, deps);
```

This will add onChange handlers for `invoiceid` and `category` and will re-run `generateFieldFromPattern` whenever they change.

---

## 3. Upgrade/Deployment notes

- Add `msfed_custompagestate` single-line text column to forms that will host side pane custom pages. Mark it hidden and add an onChange handler to pick up messages from the page.
- Register the `msfed_core.js` web resource on forms where you need `openSidePane`.
- Decide whether to enable the Name Utility globally or only on specific forms. If migrating from custom onChange code, convert handlers to use `setupPatternWatcher` for maintainability.

