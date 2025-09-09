---
title: Personnel Physical Credential
description: "Tracks issuance and management of physical credentials such as ID cards or smart credentials."
parent: personnel-security
---

| Field Name                | Type     | Schema Name                   |
|---------------------------|----------|------------------------------|
| Actual Return Date        | Datetime | govcdm_ActualReturnDate      |
| Approved Date             | Datetime | govcdm_ApprovedDate          |
| Expected Return Date      | Datetime | govcdm_ExpectedReturnDate    |
| Expiration Date           | Datetime | govcdm_ExpirationDate        |
| Issued By Organization Unit| Lookup  | govcdm_IssuedByOrganizationUnit|
| Issued By Person          | Lookup   | govcdm_IssuedByPerson        |
| Issued Date               | Datetime | govcdm_IssuedDate            |
| Justification             | Ntext    | govcdm_Justification         |
| Location Issued           | Lookup   | govcdm_LocationIssued        |
| Name                      | Nvarchar | govcdm_Name                  |
| Person                    | Lookup   | govcdm_Person                |
| Physical Credential Type  | Picklist | govcdm_PhysicalCredentialType|
| Request Date              | Datetime | govcdm_RequestDate           |
| Requested By              | Lookup   | govcdm_RequestedBy           |
| Returned To               | Lookup   | govcdm_ReturnedTo            |
