---
layout: post
title: "Broader Government Support"
date: 2025-10-03 09:00:00 -0400
tags: [announcements]
---

Exciting news! We've updated our starter kits and modules to better support all levels of government — not just federal agencies. This change is available now and has been applied consistently across all modules and starter kits as v1.1.0.0.

## What changed

- Schema namespaces: All schema prefixes previously using `msfed_` have been renamed to `msgov_` to remove federal-specific assumptions and improve compatibility for State, Local, Tribal, territorial, and other government organizations.
- Human-readable naming: Where the product or UI strings previously used the term "Federal", they have been updated to use the more inclusive term "Government".
- Release packaging: Managed solution filenames and release metadata have been updated to reflect the new naming (for example, the Asset Management release file name now begins with `MS-Gov`).

Note: the underlying canonical data model releases continue to use the `govcdm_` prefix and were not changed by this update.

## Why we made this change

Our goal is to make these starter kits and modules useful to a wider set of public-sector organizations. By adopting `msgov_` and "Government" as the standard naming, we reduce the amount of local customization required by state, local, tribal, and territorial customers while preserving compatibility for federal users. This change enables better collaboration, reuse, and clearer communication across jurisdictions.

## Impact and guidance for implementers

This is primarily a schema and naming update. There are no functional changes to the modules themselves. That said, please review the following checklist when consuming the updated releases:

1. Search for any references to the old `msfed_` namespace in your code, transforms, mappings, or configuration, and update them to `msgov_`.
2. Update any human-facing text that included the word "Federal" if you want to keep language consistent with the new naming.
3. If you consume managed solution packages, note the updated download filename prefixes (for example, `MS-Gov-...`) and update any automation that relies on exact filenames.
4. Run your integration and acceptance tests after making namespace/name updates to catch any remaining references.
5. If you maintain extensions or custom schemas based on the old prefixes, plan a quick compatibility pass to update identifiers and documentation.

If you rely on the canonical data model identifiers prefixed with `govcdm_`, there is no change required — those remain unchanged.

## Quick migration checklist

- Identify: grep your repository and integration mappings for `msfed_` and "Federal".
- Replace: update `msfed_` to `msgov_` and adjust any display strings as needed.
- Validate: run unit and integration tests, and verify solutions import correctly.
- Report: if you find any places we missed, open an issue or PR and we'll prioritize patching it.

## Feedback and contributions

We welcome feedback and contributions. If you find any missed references or have suggestions for clearer migration tooling, please open an issue or submit a pull request. For implementation questions or to request assistance with migration, contact the Gov Solutions team via the usual support channels.

Thank you — we're excited to make these starter kits more widely useful across the public sector while still supporting federal scenarios.


