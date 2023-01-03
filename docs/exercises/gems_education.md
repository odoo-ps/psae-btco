# GEMS Education - Part 1

_**Concepts:** module creation, inheritance, relational fields, domains, context, smart buttons_

The largest education provider in the United Arab Emirates has reached out to you to implement a school management
solution using Odoo. Their requirements have been captured below.

#### Schools

The organization manages a number of schools. To implement this feature, create a new model with the following
attributes:

- **Name** _(required, unique)_
- **Establishment Date** _(required)_
- **Street 1** _(required)_
- **Street 2**
- **City** _(required)_
- **State**
- **Country** _(required)_
- **Zip Code**
- **Faculty Members**
- **Students**
- **Classrooms**
- **Subjects**
- **Sessions**

#### Classrooms

The organization wishes to manage classrooms in each school. A class should contain the following attributes:

- **Name** _(required, unique within a school)_
- **Capacity** _(required, default=5)_
- **Has Projector?**
- **Has Smart Board?**

#### Subjects

A school can offer a variety of subjects and this should be recorded in a new model with these attributes:

- **Name** _(required, unique within a school)_
- **Book**

#### Sessions

In a session, a subject can be taught to students by a teacher in a classroom. A session therefore must contain these
attributes:

- **Subject** _(required)_
- **Classroom** _(required)_
- **Teacher** _(required)_
- **Start Date** _(required)_
- **End Date** _(required)_
- **Daily Start Time** _(required)_
- **Daily End Time** _(required)_
- **Year** _(required)_
- **Students**

#### Important Notes

There are a list of points as well as assumptions that must be considered before proceeding with development.

- Set the technical name of the new module that you will create to `gems_education` and set the general name to _GEMS
  Education_
- Ensure to show the module on the app screen and set an appropriate logo
- All faculty members and students will be records of the `res.partner` model and there should be a way to distinguish
  between them
- A school can have many faculty members, students, classrooms, subjects, and sessions, and no two schools should share
  the same record (hint: use `one2many` relational fields)
- A student can have many sessions and a session can have many students
- Add appropriate views, menus, and security access rights
- Use smart buttons on the form view of the school model to show the count of faculty members, students, subjects,
  classrooms, and sessions
- Use smart buttons on the form view of the classroom model to show the count of sessions
