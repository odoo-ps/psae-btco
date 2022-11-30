(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(t,e,a){t.exports=a.p+"assets/img/part-1-img-1.7722a8c6.png"},267:function(t,e,a){t.exports=a.p+"assets/img/part-1-img-2.343262fa.png"},268:function(t,e,a){t.exports=a.p+"assets/img/part-1-img-3.0258e12e.png"},305:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sally-s-flower-shop-part-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sally-s-flower-shop-part-1"}},[t._v("#")]),t._v(" Sally's Flower Shop - Part 1")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/odoo-ps/psae-btco/commit/27601745934143e124f6d9502a59203987c9884c",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the commit for this solution"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),e("p",[t._v("The first step is to create a new module inside of the project folder. To do this, create a new folder for the module\nand ensure that it contains "),e("code",[t._v("__init__.py")]),t._v(" and "),e("code",[t._v("__manifest__.py")]),t._v(". Alternatively, we can use\nthe "),e("a",{attrs:{href:"https://www.odoo.com/documentation/15.0/developer/cli.html#scaffolding",target:"_blank",rel:"noopener noreferrer"}},[t._v("scaffolder"),e("OutboundLink")],1),t._v("\nto automate the creation of the module.")]),t._v(" "),e("p",[t._v("We shall name our module "),e("code",[t._v("flower_shop")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"model-and-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-and-fields"}},[t._v("#")]),t._v(" Model and Fields")]),t._v(" "),e("p",[t._v("Next, we will create a\nPython "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/reference/backend/orm.html#models",target:"_blank",rel:"noopener noreferrer"}},[t._v("model"),e("OutboundLink")],1),t._v(" to represent flowers\ncalled "),e("code",[t._v("flower.py")]),t._v(". All Python models should be\nplaced inside "),e("code",[t._v("models")]),t._v(" folder and the model files must be imported in "),e("code",[t._v("__init__.py")]),t._v(" in the same folder. Moreover, the\nentirety of "),e("code",[t._v("models")]),t._v(" folder has to be imported in the module-level "),e("code",[t._v("__init__.py")]),t._v(" file. Therefore, we get the following\nfile structure in our project so far:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flower_shop\n├── models\n│   ├── flower.py\n│   └── __init__.py\n├── __init__.py\n└── __manifest__.py\n")])])]),e("p",[t._v("In "),e("code",[t._v("flower.py")]),t._v(", we will define the model with the necessary attributes. Odoo provides a variety\nof primitive and\nrelational "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/reference/backend/orm.html#fields",target:"_blank",rel:"noopener noreferrer"}},[t._v("fields"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("One of the attributes is "),e("i",[t._v("Season")]),t._v(". We can define a flower's season by specifying a start date and an end date.\nHence,\ntwo date fields are needed to track seasons.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("season_start "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nseason_end "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/flower.py#L11"}}),t._v(" "),e("p",[t._v("Often, it is helpful to provide tooltips especially if the field's label is not very obvious. This is achieved by using\nthe "),e("code",[t._v("help")]),t._v(" field attribute. We will use this for the field "),e("em",[t._v("Watering frequency")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("watering_frequency "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("help")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Frequency is in number of days"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/flower.py#L12"}}),t._v(" "),e("h3",{attrs:{id:"access-rights"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-rights"}},[t._v("#")]),t._v(" Access Rights")]),t._v(" "),e("p",[t._v("For any new model, we have to define\nits "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/reference/backend/security.html#access-rights",target:"_blank",rel:"noopener noreferrer"}},[t._v("access rights"),e("OutboundLink")],1),t._v(".\nThis is defined in a CSV file. For now, we will grant full access to all users belonging to the\ngroup "),e("code",[t._v("base.group_user")]),t._v(" (\nalso known as internal users). Note that the name of the model uses the underscore notation and is prefixed by "),e("code",[t._v("model_")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink\naccess_flower,commission.type,model_flower_flower,base.group_user,1,1,1,1\n")])])]),e("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/security/ir.model.access.csv#L2"}}),t._v(" "),e("h3",{attrs:{id:"list-and-form-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-and-form-views"}},[t._v("#")]),t._v(" List and Form Views")]),t._v(" "),e("p",[t._v("We have to define "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/howtos/backend.html#basic-views",target:"_blank",rel:"noopener noreferrer"}},[t._v("views"),e("OutboundLink")],1),t._v(" for our new\nmodel. In order to render a list of all the flower records in the database, we will\ndefine a list, or more technically known, a tree view in XML. Furthermore, there will be a form view that would\ndisplay a single flower record. Like every other view in Odoo, these two views belong to the model "),e("code",[t._v("ir.ui.view")]),t._v(" and are\nstored as records in their respective PostgreSQL table. The way we specify the different types of views is by using\nspecial tags like "),e("code",[t._v("form")]),t._v(" or "),e("code",[t._v("tree")]),t._v(" inside the "),e("code",[t._v("arch")]),t._v(" field.")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("odoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("record")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ir.ui.view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("field")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("arch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                ...\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("record")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("odoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/views/flower_views.xml#L7"}}),t._v(" "),e("h3",{attrs:{id:"window-action-and-menu-item"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-action-and-menu-item"}},[t._v("#")]),t._v(" Window Action and Menu Item")]),t._v(" "),e("p",[t._v("We now have a model and some way to render its records, but we have to define a way for the user to get to the views.\nThis brings us to "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/howtos/backend.html#actions-and-menus",target:"_blank",rel:"noopener noreferrer"}},[t._v("menu items"),e("OutboundLink")],1),t._v(" - interactive, clickable components that can redirect the user.\nIn addition, we have to let the menu item know what view to render and this is done by associating\na "),e("a",{attrs:{href:"https://www.odoo.com/documentation/16.0/developer/reference/backend/actions.html#window-actions-ir-actions-act-window",target:"_blank",rel:"noopener noreferrer"}},[t._v("window action"),e("OutboundLink")],1),t._v("\nwith it. Both menu items and actions can be either specified in the same file as the views or defined in their own\nfiles, as long as they are included in the manifest. Moreover, it is important these XML records are loaded in an\norderly manner starting with views and actions and ending with menu items. In this example, we shall define them\nseparately in their respective files.")]),t._v(" "),e("p",[t._v("When a menu item does not have the "),e("code",[t._v("parent")]),t._v(" attribute, it is considered a root, and it appears as an icon on the home\nscreen.\nMoreover, we can bind an action and optionally provide an icon using the attributes "),e("code",[t._v("action")]),t._v(" and "),e("code",[t._v("web_icon")]),t._v("\nrespectively.\nIf you wish to create Odoo-style icons, use this "),e("a",{attrs:{href:"https://spilymp.github.io/ibo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tool"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("odoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("menuitem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xml_id_of_window_action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("web_icon")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module_name,static/description/icon.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("odoo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/views/menu_items.xml#L3"}}),t._v(" "),e("p",[t._v("Upon successful installation of the module, an app icon should appear on the home screen.\n"),e("img",{attrs:{src:a(266),alt:"Successful module installation"}})]),t._v(" "),e("p",[t._v("Once we click on the app, it should display the list/tree view of the model.\n"),e("img",{attrs:{src:a(267),alt:"List view of model"}})]),t._v(" "),e("p",[t._v("Here is the form view of the model.\n"),e("img",{attrs:{src:a(268),alt:"Form view of model"}})]),t._v(" "),e("p",[t._v("This marks the completion of part 1 of the case study.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);