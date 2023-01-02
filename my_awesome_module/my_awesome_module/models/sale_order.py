from odoo import models, fields, api, _
from odoo.exceptions import UserError


class SaleOrder(models.Model):
    _inherit = "sale.order"

    products_not_allowed = fields.Integer("Non-Sellable Product Count", compute="_compute_products_not_allowed")
    age_doubted = fields.Boolean()

    @api.depends("partner_id")
    def _compute_products_not_allowed(self):
        for record in self:
            record.products_not_allowed = 0
            if record.partner_id:
                record.products_not_allowed = self.env["product.product"].search_count(
                    [("min_age", ">", record.partner_id.age)])

    def action_doubt_age(self):
        self.ensure_one()
        self.age_doubted = True

    def action_doubt_clear(self):
        self.ensure_one()
        self.age_doubted = False

    def action_confirm(self):
        for record in self:
            if record.age_doubted:
                raise UserError(_("You cannot confirm when the age is in doubt"))
        return super().action_confirm()

    def action_doubt_clear_all(self):
        self.write({
            "age_doubted": False,
        })
