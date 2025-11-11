---
layout: post
title: "Streamlined Deployment Configuration"
date: 2025-10-22 09:00:00 -0400
tags: [announcements]
---

We've simplified the deployment process for all PowerShell scripts by introducing centralized configuration management through `config.json`.

## What Changed

Previously, users had to manually select tenants and environments each time they ran deployment scripts. Now, the process is streamlined:

1. **Select your deployment target** - Choose your source / target environment from a simple menu
2. **Automatic environment mapping** - Scripts automatically select the right environment based on your module:
   - Core modules → GOV CDM CORE
   - Process and Tasking → GOV CDM UTILITY  
   - All other modules → GOV CDM MODULE

## Benefits

- **Faster deployments** - Fewer manual selections required
- **Consistent targeting** - All scripts use the same configuration source
- **Error reduction** - No more typos in tenant/environment names
- **Easy scaling** - Add new deployment targets by simply updating `config.json`

## What's Updated

All deployment scripts now use the new configuration system:
- `Sync-Module.ps1`
- `Push-Module.ps1` 
- `Ship-Module.ps1`
- `Deploy-AllModules.ps1`
- `Deploy-Module.ps1`

The configuration is defined in `config.json` at the project root, making it easy to manage deployment targets across different environments and tenants.

---

*This update reduces deployment friction and ensures consistent targeting across all modules.*