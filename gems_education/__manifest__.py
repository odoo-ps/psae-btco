# -*- coding: utf-8 -*-
{
    'name': "GEMS Education",

    'summary': "School management solution for GEMS Education.",

    'description': "School management solution for GEMS Education.",

    'author': "Odoo-PS",
    'website': "http://www.odoo.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '15.0.0.0.0',

    # any module necessary for this one to work correctly
    'depends': ["base"],

    # always loaded
    'data': [
        # security
        'security/ir.model.access.csv',
        # views
        'views/res_partner_views.xml',
        'views/school_views.xml',
        'views/school_subject_views.xml',
        'views/school_classroom_views.xml',
        'views/school_session_views.xml',
    ],
    # only loaded in demonstration mode
    'demo': [],
    'license': 'OEEL-1',
}
