# GEMS Education - Part 2

_**New Concepts:** compute fields, constraints_

GEMS Education wants to enter error-free data. As a measure, they want to perform validation checks on some of the information 
that are entered and if possible, automatically generate the field values.

#### Grade Information

Add a new model to create the different grades in a school. For example, a small private school may offer years 1
to 10 only without kindergarten and higher education. In this case, the school should have 10 records of this model.

Please note that you have to replace the existing year field in the session model with an appropriate relational field. Moreover, 
a school can have many grades and two schools cannot share the same grade record.

#### Student Information

The base fields in `res.partner` are not sufficient to contain a student's information completely. Therefore, add the
following fields only if the record is a student:

- **Date of Birth**
- **Age** _(computed in years and months)_
- **Gender**

#### Constraints

The organization wishes to put validation checks on the data entry performed by their employees. Humans are prone to
making errors, therefore you have been asked to put certain constraints.

1. A classroom's capacity must not be lower than the default value of 5
2. A session's end date cannot be later than the start date and the end time cannot be later than the start time
3. Two sessions for the same year in the same school cannot overlap in terms of their start and end times
