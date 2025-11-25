---
title: Getting Started with GLOWS
description: A guide to setting up your GLOWS development environment and building your first government solution
author: Government Solutions Team
date: 2025-10-20
tags: [getting-started, setup, environment, tutorial]
---

This guide will walk you through creating a new baseline GLOWS (Government Low-code Open-source Workforce Solutions) development environment. You'll learn how to set up the foundation components and then extend your environment with additional modules to build powerful government applications.

**Note:** This guide covers the manual setup approach. Future articles will detail automated scripting methods and synchronization with source control systems.

## Prerequisites

Before you begin, ensure you have:

- Access to a Microsoft Power Platform environment
- System administrator privileges in your target environment
- Basic familiarity with Power Platform concepts
- Downloaded GLOWS solution files from the repository

## Phase 1: Prepare the Baseline Environment

Follow these steps to establish your foundational GLOWS environment:

### Step 1: Environment Setup
**Provision or select your target environment:**
- Create a new Power Platform environment through the Power Platform Admin Center, or
- Choose an existing development/sandbox environment
- Ensure the environment has sufficient storage and user licenses for your needs

### Step 2: Install Core Data Models
Install the foundational managed solutions in this specific order:

1. **[Gov CDM Core managed solution]({{ '/data-models/core/' | relative_url }})**
   - Contains essential data models and shared components
   - Provides the foundation for all other GLOWS modules
   - Install first to avoid dependency issues

2. **[Gov CDM Process and Tasking managed solution]({{ '/data-models/process-and-tasking/' | relative_url }})**
   - Adds tables and fields for workflow and task management capabilities
   - Essential for most government business processes
   - Depends on the Core solution

### Step 3: Install Supporting Components
3. **[PCF IFrame Control managed solution](https://github.com/microsoft/gov-apptemplates/raw/main/cross-module/pcf-controls/releases/MS-Gov-PCF-Controls_managed%20-%201.0.0.0.zip)**
   - Enables advanced user interface components
   - Required for enhanced user experiences in starter kits
   - Provides secure iframe embedding capabilities

### Step 4: Configure Connections
4. **Create and configure Connections**
   Create the following required connections for GLOWS components:
   - **Microsoft Dataverse** - Core data storage and operations
   - **SharePoint** - Document management and collaboration
   - **Microsoft Teams** - Team collaboration and notifications
   - **Office 365 Groups** - Group management and permissions
   - **Standard approvals** - Workflow approval processes
   - **Word Online (Business)** - Document creation and editing
   - **Office 365 Outlook** - Email integration and notifications
   - **Content Conversion (preview)** - Document format conversion
   - **Excel Online (Business)** - Spreadsheet integration and reporting
   
   Configure authentication for each connection and test connectivity before proceeding. This step only needs to be completed once in general. Future enhancements and modules may required additional Connections. Not all Connections are used by all modules, so this is primarily a time-saving step to help re-configure Power Automate flows in new environments.

### Step 5: Deploy Application Foundations
5. **[Core App Starter Kit]({{ '/app-starter-kits/core/' | relative_url }})**
   - Provides fundamental application structure
   - Includes common navigation and utility components
   - Install before any specialized starter kits

6. **[Process and Tasking App Starter Kit]({{ '/app-starter-kits/process-and-tasking/' | relative_url }})**
   - Adds workflow management interfaces
   - Enables task assignment and tracking capabilities
   - Builds upon the Core App Starter Kit

## Phase 2: Add Specialized Modules

Once your baseline environment is ready, extend it with domain-specific capabilities:

### Step 1: Select Your Modules
Choose from available GLOWS modules based on your organization's needs:
- Asset Management
- Court Case Management  
- Event Management
- HR Administration
- IT Service Management
- And many more...

In some scenarios, you may only need to enhance one of these modules. In other scenarios you may wish to "mash up" multiple modules to build a full app.

### Step 2: Install Data Model Solutions
For each selected module:
1. **Download the corresponding managed solution** from the GLOWS repository
2. **Import the data model solution** through the Power Platform Admin Center
3. **Verify successful installation** by checking for new tables and relationships
4. **Review any post-installation configuration requirements**

### Step 3: Deploy Application Components
1. **Install the app starter kit solutions** for your selected modules
2. **Import in dependency order** - some modules may depend on others
3. **Test core functionality** to ensure proper installation

### Step 4: Create Your Custom Solution
1. **Create a new unmanaged solution** for your specific application
2. **Use a clear naming convention** (e.g., "YourOrg-CaseManagement-v1")
3. **Add a meaningful description** and version information
4. **Set appropriate solution publisher** details

### Step 5: Customize and Build
1. **Add components from installed starter kits** to your solution
2. **Customize forms, views, and business logic** to meet your requirements
3. **Configure security roles and permissions** appropriately
4. **Test functionality** thoroughly in your development environment
5. **Document customizations** for future maintenance

## Next Steps

After completing this setup:

1. **Explore the documentation** for your installed modules
2. **Review best practices** for Power Platform development
3. **Plan your customization approach** before making changes
4. **Set up proper ALM (Application Lifecycle Management)** processes
5. **Consider automated deployment** strategies for production

## Getting Help

If you encounter issues during setup, please refer to our [Support page]({{ '/SUPPORT' | relative_url }}) for detailed information on how to get help and file issues specific to different components of the GLOWS platform.
