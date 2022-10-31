# -*- coding: utf-8 -*-
{
    'name': "Sally's Flower Shop",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ["website_sale"],

    # always loaded
    'data': [
        # security
        'security/ir.model.access.csv',
        'data/actions.xml',
        # views
        'views/flower_views.xml',
        'views/product_views.xml',
        'views/sale_order_views.xml',
        'views/templates.xml',
        # menuitems
        'views/menu_items.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
    'license': 'OEEL-1',
}
