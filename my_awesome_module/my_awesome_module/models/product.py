from odoo import models, fields


class Product(models.Model):
    _inherit = "product.product"

    min_age = fields.Integer("Minimum Age")
