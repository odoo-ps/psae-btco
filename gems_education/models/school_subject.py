from odoo import models, fields

class SchoolSubject(models.Model):
    _name = "school.subject"
    _description = "School Subject"

    _sql_constraints = [
        ("uniq_name_school_id", "unique(name, school_id)", "This subject already exists for this school."),
    ]

    name = fields.Char(required=True)
    book = fields.Char()
    school_id = fields.Many2one("school.school")
