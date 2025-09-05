## Account
---

**Metadata**

- Schema: Account

**Custom Fields**


## Person
---

**Metadata**

- Schema: Contact

**Custom Fields**


## Asset
---

**Metadata**

- Schema: govcdm_Asset

**Custom Fields**

- Acquired Date Time
  - Type: Datetime
  - Schema: govcdm_AcquiredDateTime
- Asset Category
  - Type: Lookup
  - Schema: govcdm_AssetCategory
- Asset Number
  - Type: Nvarchar
  - Schema: govcdm_AssetNumber
- Current Owner
  - Type: Lookup
  - Schema: govcdm_CurrentOwner
- Description
  - Type: Nvarchar
  - Schema: govcdm_Description
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Parent Asset
  - Type: Lookup
  - Schema: govcdm_ParentAsset
- Related Product
  - Type: Lookup
  - Schema: govcdm_RelatedProduct

## Asset Category
---

**Metadata**

- Schema: govcdm_assetcategory

**Custom Fields**

- Name
  - Type: Nvarchar
  - Schema: govcdm_name
- Parent Asset Category
  - Type: Lookup
  - Schema: govcdm_ParentAssetCategory

## Asset Owner
---

**Metadata**

- Schema: govcdm_AssetOwner

**Custom Fields**

- Asset
  - Type: Lookup
  - Schema: govcdm_Asset
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Owned From Date Time
  - Type: Datetime
  - Schema: govcdm_OwnedFromDateTime
- Owned To Date Time
  - Type: Datetime
  - Schema: govcdm_OwnedToDateTime
- Person
  - Type: Lookup
  - Schema: govcdm_Person

## Asset Service Record
---

**Metadata**

- Schema: govcdm_AssetServiceRecord

**Custom Fields**

- Actual Return Date Time
  - Type: Datetime
  - Schema: govcdm_ActualReturnDateTime
- Asset
  - Type: Lookup
  - Schema: govcdm_Asset
- Expected Return Date Time
  - Type: Datetime
  - Schema: govcdm_ExpectedReturnDateTime
- Name
  - Type: Nvarchar
  - Schema: govcdm_Name
- Service End Date Time
  - Type: Datetime
  - Schema: govcdm_ServiceEndDateTime
- Service Location
  - Type: Lookup
  - Schema: govcdm_ServiceLocation
- Service Notes
  - Type: Ntext
  - Schema: govcdm_ServiceNotes
- Service Request Date Time
  - Type: Datetime
  - Schema: govcdm_ServiceRequestDateTime
- Service Request Description
  - Type: Ntext
  - Schema: govcdm_ServiceRequestDescription
- Service Start Date Time
  - Type: Datetime
  - Schema: govcdm_ServiceStartDateTime

## Location
---

**Metadata**

- Schema: govcdm_Location

**Custom Fields**

