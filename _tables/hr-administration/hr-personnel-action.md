---
title: HR Personnel Action
description: "Documents personnel actions, such as appointments or separations, and their approvals."
parent: hr-administration
---

| Field Name                  | Type     | Schema Name                  |
|-----------------------------|----------|-----------------------------|
| Approving Official          | Lookup   | govcdm_ApprovingOfficial    |
| Approving Official (User)   | Lookup   | govcdm_ApprovingOfficialUser|
| Effective From Date         | Datetime | govcdm_EffectiveFromDate    |
| HR Action Type              | Lookup   | govcdm_HRActionType         |
| Originating Change Request  | Lookup   | govcdm_OriginatingChangeRequest|
| Person                      | Lookup   | govcdm_Person               |
| Title                       | Nvarchar | govcdm_Name                 |
