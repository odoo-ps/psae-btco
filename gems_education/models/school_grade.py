from odoo import fields, models


class SchoolGrade(models.Model):
    _name = "school.grade"
    _description = "School Grade"

    name = fields.Char()
    school_id = fields.Many2one("school.school")
