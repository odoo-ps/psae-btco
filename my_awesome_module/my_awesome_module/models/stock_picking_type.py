from odoo import models


class StockPickingType(models.Model):
    _name = "stock.picking.type"
    _inherit = ["mail.thread", "stock.picking.type"]
