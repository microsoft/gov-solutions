---
title: "Federal Financial"
description: "Data model for federal financial management including budgets, purchase requests, procurement, and audit records."
thumbnail: /assets/use_cases/federal-financial.png
latest_release: v1.0.0.1
required_data_models:
  - core
related_use_cases:
  - procurement
  - budget-management
related_personas:
---

## Federal Financial: A Data Model for Budgeting, Procurement, and Oversight

The **Federal Financial** module provides a unified structure for managing the flow of money, contracts, and procurement activities in government. Agencies are expected to demonstrate fiscal responsibility, align spending with appropriations, and maintain a clear audit trail. This module delivers a Dataverse model that ties together budgeting, purchasing, and contract management, while embedding oversight through audit projects and subjects.

Procurement is captured through a chain of related tables. **Purchase Requests** are the entry point, representing requests for goods or services. Each request is broken down into **Purchase Request Items**, which identify the individual products or services needed. These items tie back to the **Product** table for standardized cataloging and can be grouped into **Procurement Packages** to support consolidated purchasing or competitive solicitations. From there, awards are formalized in the **Contract** table, which captures details such as vendors, terms, and status. **Location** and **State or Province** provide the geographic context needed for deliveries, performance sites, or jurisdictional reporting.

It also covers downstream financial lifecycle entities — **Invoices**, **Payments**, and **Financial Obligations** — and includes **Federal Fund Accounts** for tracking appropriations and fund balances. These additions let agencies trace commitments and disbursements back to budgets, contracts, and purchase requests for improved reconciliation and auditability.

Oversight and accountability are embedded in the model through **Audit Projects** and **Audit Subjects**. An Audit Project represents a planned or in-progress review, while Audit Subjects link those projects to the specific budgets, contracts, or procurement activities under examination. This structure ensures that every financial action is traceable and subject to review, supporting compliance with OMB, GAO, and agency-specific requirements.

In practice, the module can support a range of scenarios. A program office might begin with a Purchase Request for IT equipment, broken into line items for laptops and accessories. These items are grouped into a Procurement Package for bidding, resulting in a Contract awarded to a vendor. The associated Budget and Line Items provide the funding source, while Audit Subjects ensure that the procurement can be examined as part of a later oversight project. Similarly, a financial management office can use the Budget and Object Classification tables to plan allocations, then reconcile those allocations against actual procurement and contract records.

By connecting budgeting, procurement, contracting, and auditing into a single structure, the Federal Financial module gives agencies a transparent and reusable way to manage public funds. It provides the rigor needed for accountability and oversight while maintaining the flexibility to support day-to-day operations. The result is a foundation for financial stewardship that agencies can trust across programs and fiscal years.

```mermaid
graph TD
  Account(Account)
  Contact(Person)
  govcdm_AuditProject(Audit Project)
  govcdm_AuditSubject(Audit Subject)
  govcdm_Budget(Budget)
  govcdm_BudgetLineItem(Budget Line Item)
  govcdm_BudgetObjectClassification(Budget Object Classification)
  govcdm_Contract(Contract)
  govcdm_FederalFundAccount(Federal Fund Account)
  govcdm_FinancialObligation(Financial Obligation)
  govcdm_Invoice(Invoice)
  govcdm_Location(Location)
  govcdm_Payment(Payment)
  govcdm_ProcurementPackage(Procurement Package)
  govcdm_Product(Product)
  govcdm_PurchaseRequest(Purchase Request)
  govcdm_PurchaseRequestItem(Purchase Request Item)
  govcdm_stateorprovince(State or Province)
  govcdm_Contract --> Contact
  govcdm_Payment --> Contact
  govcdm_BudgetLineItem --> govcdm_Budget
  govcdm_PurchaseRequest --> govcdm_BudgetLineItem
  govcdm_BudgetObjectClassification --> govcdm_BudgetObjectClassification
  govcdm_PurchaseRequest --> govcdm_BudgetObjectClassification
  govcdm_PurchaseRequestItem --> govcdm_BudgetObjectClassification
  govcdm_Payment --> govcdm_Contract
  govcdm_PurchaseRequest --> govcdm_Contract
  govcdm_Payment --> govcdm_FinancialObligation
  govcdm_Payment --> govcdm_Invoice
  govcdm_PurchaseRequest --> govcdm_Location
  govcdm_PurchaseRequest --> govcdm_Location
  govcdm_PurchaseRequest --> govcdm_Location
  govcdm_PurchaseRequest --> govcdm_Location
  govcdm_PurchaseRequestItem --> govcdm_Product
  govcdm_Payment --> govcdm_PurchaseRequest
  govcdm_PurchaseRequestItem --> govcdm_PurchaseRequest
  govcdm_PurchaseRequest --> govcdm_stateorprovince
  govcdm_Payment --> TransactionCurrency
  govcdm_PurchaseRequestItem --> TransactionCurrency

```
