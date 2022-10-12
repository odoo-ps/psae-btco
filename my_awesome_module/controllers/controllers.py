# -*- coding: utf-8 -*-
# from odoo import http


# class MyAwesomeModule(http.Controller):
#     @http.route('/my_awesome_module/my_awesome_module', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/my_awesome_module/my_awesome_module/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('my_awesome_module.listing', {
#             'root': '/my_awesome_module/my_awesome_module',
#             'objects': http.request.env['my_awesome_module.my_awesome_module'].search([]),
#         })

#     @http.route('/my_awesome_module/my_awesome_module/objects/<model("my_awesome_module.my_awesome_module"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('my_awesome_module.object', {
#             'object': obj
#         })
