from odoo import models, fields


class ResPartner(models.Model):
    _inherit = "res.partner"

    school_id = fields.Many2one("school.school")
    member_type = fields.Selection([
        ("faculty", "Faculty Member"),
        ("student", "Student")
    ])
