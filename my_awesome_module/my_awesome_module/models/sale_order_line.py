from dateutil.relativedelta import relativedelta

from odoo import models, fields, api
from odoo.exceptions import ValidationError


class SaleOrderLine(models.Model):
    _inherit = "sale.order.line"

    customer_dob = fields.Date(related="order_id.partner_id.date_of_birth")
    product_min_age = fields.Integer(related="product_id.min_age")

    @api.constrains("customer_dob", "product_min_age")
    def _check_min_age(self):
        for record in self:
            if record.customer_dob and record.product_min_age:
                customer_age = relativedelta(fields.Date.today(), record.customer_dob).years
                if customer_age < record.product_min_age:
                    raise ValidationError(
                        "Minimum age required for this product is {} but the customer's current age is {}.".format(
                            record.product_min_age, customer_age))
