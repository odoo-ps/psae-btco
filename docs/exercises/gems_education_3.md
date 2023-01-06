# GEMS Education - Part 3

_**New Concepts:** groups, record rules, sequences, activities_

GEMS Education is trying to speed up their processes by automatic generation of certain data. They are also implementing
security measures such as access rights for different types of users.

#### Student Information

The registrar at the organization has proposed that the student ID should be auto-generated. Therefore, add a new field
for storing the student's ID in `res.partner`. The sequence should follow the format `X00000` where `X` would be
either `M` for male, `F` for female or remain `X` to indicate others. Moreover, the ID should contain 5 digits and
padded with zeros.

#### Notification System

When a student is added to a session, an activity should be created automatically for the student. The fields of an
activity should have these values:

- Activity Type: To Do
- Summary: Course Registration
- Due Date: _(today's date)_
- Assigned To: _(the student added to the session)_
- Note: "You have been registered for the subject { subject }. The session starts at { start_date } the timings are
  from { start_time } to { end_time }. Please check your updated schedule. Regards, { teacher_id.name }."

[//]: # (TODO: shift this to Part 4?)

#### Access Rights

GEMS Education wishes to implement well-defined access rights for its users. Since different types of users are
constantly accessing the system, each user should see only what is made available to them. A user may be:

- Admin
- Teacher
- Parent
- Student
