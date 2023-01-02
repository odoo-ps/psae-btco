from odoo import models, fields, api


class SaleOrderLine(models.Model):
    _inherit = "sale.order.line"

    customer_age = fields.Integer(related="order_id.partner_id.age")
    product_min_age = fields.Integer(related="product_id.min_age")
    show_button = fields.Boolean(compute="_compute_show_button")

    @api.depends("customer_age", "product_min_age")
    def _compute_show_button(self):
        for record in self:
            record.show_button = record.customer_age < record.product_min_age

    def action_change_product(self):
        self.ensure_one()
        self.product_id = self.env["product.product"].search([("min_age", "<=", self.customer_age)], limit=1) or False
