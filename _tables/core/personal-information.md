---
title: Personal Information
description: "Stores personal information entries used for applications, background checks, and other processing."
parent: core
schema: govcdm_PersonalInformation
---

## Fields

| Field Name                      | Type     | Schema                                 |
|---------------------------------|----------|----------------------------------------|
| Details                         | Ntext    | govcdm_Details                         |
| End Date                        | Datetime | govcdm_EndDate                         |
| Impact                          | Picklist | govcdm_Impact                          |
| Location                        | Lookup   | govcdm_Location                        |
| Name                            | Nvarchar | govcdm_Name                            |
| Organization                    | Lookup   | govcdm_Organization                    |
| Person                          | Lookup   | govcdm_Person                          |
| Personal Information Subtype    | Lookup   | govcdm_PersonalInformationSubtype      |
| Personal Information Type       | Lookup   | govcdm_PersonalInformationType         |
| Point of Contact                | Lookup   | govcdm_PointofContact                  |
| Severity                        | Picklist | govcdm_Severity                        |
| Start Date                      | Datetime | govcdm_StartDate                       |
