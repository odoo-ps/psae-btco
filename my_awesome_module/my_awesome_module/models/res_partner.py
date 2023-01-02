from dateutil.relativedelta import relativedelta

from odoo import models, fields, api


class ResPartner(models.Model):
    _inherit = "res.partner"

    date_of_birth = fields.Date()
    age = fields.Integer(compute="_compute_age")

    @api.depends("date_of_birth")
    def _compute_age(self):
        for record in self:
            record.age = 0
            if record.date_of_birth:
                record.age = relativedelta(fields.Date.today(), record.date_of_birth).years
