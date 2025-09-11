---
title: Training Course
description: "Defines a course (learning program) which can be offered as one or more classes."
parent: training-and-certification
---

## Fields

| Field Name | Type | Schema Name |
|------------|------|-------------|
| Accreditation | Ntext | govcdm_Accreditation |
| Assessment Method | Ntext | govcdm_AssessmentMethod |
| Course Number | Nvarchar | govcdm_Name |
| Description | Ntext | govcdm_Description |
| Duration | Int | govcdm_Duration |
| Knowlege Level | Picklist | govcdm_KnowlegeLevel |
| Learning Objectives | Ntext | govcdm_LearningObjectives |
| Materials Needed | Ntext | govcdm_MaterialsNeeded |
| Prerequisites | Ntext | govcdm_Prerequisites |
| Primary Training Objective | Lookup | govcdm_PrimaryTrainingObjective |
| Syllabus | Ntext | govcdm_Syllabus |
| Title | Nvarchar | govcdm_Title |
| Total Capacity | Int | govcdm_TotalCapacity |
| Total Enrolled | Int | govcdm_TotalEnrolled |
