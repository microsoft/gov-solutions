---
title: Training Class
description: "Represents a specific class instance for a course (date/time, location, instructor, capacity)."
parent: training-and-certification
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Capacity | Int | govcdm_Capacity |
| Class Materials | Ntext | govcdm_ClassMaterials |
| Class Number | Nvarchar | govcdm_Name |
| End Date | Datetime | govcdm_EndDate |
| Enrollment Close Date | Datetime | govcdm_EnrollmentCloseDate |
| Enrollment Open Date | Datetime | govcdm_EnrollmentOpenDate |
| Hours | Int | govcdm_Hours |
| Instructor | Lookup | govcdm_Instructor |
| Location | Lookup | govcdm_Location |
| Max Capacity | Int | govcdm_MaxCapacity |
| Min Capacity | Int | govcdm_MinCapacity |
| Room Number | Nvarchar | govcdm_RoomNumber |
| Start Date | Datetime | govcdm_StartDate |
| Title | Nvarchar | govcdm_Title |
| Total Enrolled | Int | govcdm_TotalEnrolled |
| Training Course | Lookup | govcdm_TrainingCourse |
