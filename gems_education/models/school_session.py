from odoo import models, fields


class SchoolSession(models.Model):
    _name = "school.session"
    _description = "School Session"

    subject_id = fields.Many2one("school.subject", required=True)
    school_id = fields.Many2one("school.school", related="subject_id.school_id")
    classroom_id = fields.Many2one("school.classroom", required=True, domain="[('school_id','=',school_id)]")
    teacher_id = fields.Many2one("res.partner", required=True, domain="[('member_type', '=', 'faculty'),('school_id','=',school_id)]")
    start_date = fields.Date(required=True)
    end_date = fields.Date(required=True)
    start_time = fields.Float(required=True)
    end_time = fields.Float(required=True)
    year = fields.Char(required=True)
    student_ids = fields.Many2many("res.partner", domain="[('member_type', '=', 'student'),('school_id','=',school_id)]")
