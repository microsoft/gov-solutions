---
title: Training Course Requirement
description: "Requirements linking courses and certificates (prereqs, required certifications)."
parent: training-and-certification
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Name | Nvarchar | govcdm_Name |
| Requires Certificate | Lookup | govcdm_RequiresCertificate |
| Requires Course | Lookup | govcdm_RequiresCourse |
| Requires Other | Nvarchar | govcdm_RequiresOther |
| Training Course | Lookup | govcdm_TrainingCourse |
