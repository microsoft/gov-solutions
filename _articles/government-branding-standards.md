---
title: "Government Branding Standards"
description: "Guidelines for applying consistent government branding across solutions"
author: Government Solutions Team
date: 2025-12-09
tags: [branding, standards, government, accessibility, uswds]
published: false
---

This guide provides standardized branding guidelines that apply to both Portal templates and App Starter Kits to ensure consistent government identity across all solutions.

## Brand Elements

### Official Government Seals and Logos

**Usage Requirements:**
- Use only approved, high-resolution agency logos
- Maintain proper clear space around logos (minimum 1x logo height)
- Never alter, stretch, or modify official seals
- Ensure logos meet accessibility contrast requirements

**File Formats:**
- SVG preferred for scalability
- PNG with transparent background as alternative
- Minimum resolution: 300 DPI for print, 72 DPI for web

### Color Palette

**Primary Colors:**
- Use your agency's official color palette
- Ensure all colors meet WCAG 2.1 AA contrast requirements
- Test colors across different devices and accessibility tools

**USWDS Integration:**
- Leverage USWDS color tokens when possible
- Map agency colors to USWDS system colors
- Use USWDS utility classes for consistency

### Typography

**Approved Fonts:**
- Follow USWDS font standards (Public Sans is default)
- Use system fonts as fallbacks
- Ensure fonts support required languages and special characters
- Maintain consistent font weights and sizing

## Implementation Guidelines

### For Portal Templates

1. **Header Branding:**
   - Place agency logo in standard header position
   - Include required identification banner
   - Add agency name and tagline

2. **Footer Requirements:**
   - Include required government links
   - Add accessibility and privacy policy links
   - Display contact information

3. **Page Templates:**
   - Use consistent page layouts
   - Apply standard spacing and margins
   - Maintain brand elements across all pages

### For App Starter Kits

1. **Canvas App Branding:**
   - Apply theme colors to all screens
   - Use consistent component styling
   - Include agency logo on main navigation

2. **Model-Driven Apps:**
   - Customize site map and navigation
   - Apply brand colors to forms and views
   - Update app icons and descriptions

## Accessibility Requirements

### Visual Elements
- Maintain 4.5:1 contrast ratio for normal text
- Maintain 3:1 contrast ratio for large text
- Ensure logos and graphics have alt text

### Interactive Elements
- Use focus indicators that meet contrast requirements
- Ensure all interactive elements are keyboard accessible
- Test with screen readers

## Quality Assurance

### Pre-Deployment Checklist

- [ ] All logos display correctly across devices
- [ ] Colors meet accessibility requirements
- [ ] Typography is consistent and readable
- [ ] Required government elements are present
- [ ] Navigation follows established patterns
- [ ] Footer contains required information
- [ ] Testing completed on multiple browsers

### Testing Tools

- **Accessibility:** WAVE, axe DevTools
- **Color Contrast:** WebAIM Contrast Checker
- **Mobile Testing:** Browser dev tools, actual devices

## Brand Asset Management

### File Organization
```
/assets/branding/
  /logos/
    agency-logo.svg
    agency-logo.png
    agency-seal.svg
  /colors/
    color-palette.css
    uswds-theme.css
  /fonts/
    [custom fonts if approved]
```

### Version Control
- Maintain approved brand asset library
- Document any brand guideline changes
- Update solutions when brand standards change

## Compliance

### Required Elements
- Government identification banner
- Official agency logo and name
- Required legal disclaimers
- Accessibility statement
- Privacy policy link

### Review Process
- All branding must be reviewed by agency communications team
- Legal review for disclaimer and policy content
- Accessibility testing before deployment

This standardized approach ensures that whether you're building a portal or an app starter kit, the government branding will be consistent and compliant across all solutions.