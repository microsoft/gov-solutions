---
title: "Core Portal Setup Guide"
description: "Step-by-step guide to set up and customize the Core Portal template"
parent: core
layout: doc
published: false
---

This guide walks you through setting up and customizing the Core Portal template for your government agency.

## Prerequisites

Before you begin, ensure you have:

- Power Platform environment with portal capabilities
- Portal licensing for your intended users
- Administrative access to your Power Platform environment
- Basic understanding of portal customization

## Installation Steps

### Step 1: Import the Portal Solution

1. Download the Core Portal solution from the releases page
2. Sign in to your Power Platform admin center
3. Navigate to your target environment
4. Go to **Solutions** > **Import solution**
5. Upload the Core Portal solution file
6. Follow the import wizard to complete the installation

### Step 2: Configure Basic Settings

1. Navigate to **Power Pages** in your environment
2. Select your newly created portal
3. Open the **Portal Management** app
4. Configure the following basic settings:
   - Portal name and description
   - Default language
   - Time zone settings

### Step 3: Customize Branding

#### Update the Header
1. In Portal Management, go to **Web Templates**
2. Find the "Header" template
3. Update your agency logo and name
4. Adjust colors to match your agency branding

#### Customize the Footer
1. Navigate to **Content Snippets**
2. Update footer links and information
3. Add required agency contact information
4. Include accessibility and privacy policy links

#### Configure the Identification Banner
1. Go to **Site Settings**
2. Find settings related to the identification banner
3. Update with your agency's official name
4. Configure any required government disclaimers

## Customization Options

### Navigation Menu

To add custom navigation items:

1. Go to **Web Links** in Portal Management
2. Create new web link sets for your navigation
3. Add individual links pointing to your custom pages
4. Assign the web link set to your header template

### Search Configuration

The Core Portal includes a search bar in the header:

1. Navigate to **Site Settings**
2. Find search-related settings
3. Configure search scope and filters
4. Test search functionality with sample content

### Adding Custom Content

To add pages and functionality:

1. Create new web pages through Portal Management
2. Design page layouts using the portal studio
3. Add your specific business functionality
4. Connect to your data sources and models

## Best Practices

- **Test thoroughly** - Always test changes in a development environment first
- **Follow accessibility guidelines** - Maintain 508 compliance throughout customization
- **Keep branding consistent** - Use your agency's established style guide
- **Document changes** - Keep track of customizations for future maintenance
- **Regular backups** - Export solutions regularly as backups

## Troubleshooting

### Common Issues

**Portal not loading after import**
- Verify all dependencies are installed
- Check portal permissions and security settings
- Review error logs in Portal Management

**Styling issues**
- Clear browser cache
- Check CSS overrides
- Verify USWDS component usage

**Search not working**
- Confirm search is enabled in site settings
- Check search service configuration
- Verify content is properly indexed

## Next Steps

After completing the basic setup:

1. Add your specific business functionality
2. Integrate with your chosen data models
3. Create user roles and permissions
4. Set up user registration and authentication
5. Configure analytics and monitoring

## Support

For additional help:
- Review the Portal Management documentation
- Check the Microsoft Power Pages community
- Contact your Power Platform administrator

Remember: The Core Portal is a foundation - build upon it to create the specific portal experience your agency needs.