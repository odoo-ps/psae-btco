(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{281:function(t,a,s){t.exports=s.p+"assets/img/part-7-img-1.6749024b.png"},313:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sally-s-flower-shop-part-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sally-s-flower-shop-part-7"}},[t._v("#")]),t._v(" Sally's Flower Shop - Part 7")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/odoo-ps/psae-btco/commit/fa5702bf02f01779fc9b65bb8c81168fbd6862f4",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the commit for this solution"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("In this exercise, we will learn how RESTful APIs can be integrated with Odoo. Please ensure that you have an account\ncreated at "),a("a",{attrs:{href:"https://openweathermap.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Weather Map"),a("OutboundLink")],1),t._v(" website.")]),t._v(" "),a("h3",{attrs:{id:"system-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-parameters"}},[t._v("#")]),t._v(" System Parameters")]),t._v(" "),a("p",[t._v("Typically, in an API integration, we are provided an API key that is bound to our account. This key is private\ninformation and should be set by the admin user only, and it should be a constant. As such, we will create an XML record\nin the model "),a("code",[t._v("ir.config_parameter")]),t._v(" which uses a "),a("code",[t._v("key")]),t._v(" field and a "),a("code",[t._v("value")]),t._v(" field.")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("odoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("noupdate")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("record")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ir.config_parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ir_config_parameter_weather_api_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flower_shop.weather_api_key"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("unset"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("odoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("u\n")])])]),a("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/data/config.xml"}}),t._v(" "),a("p",[t._v("Since the API key will be different and specific for each database, we must "),a("strong",[t._v("never")]),t._v(" set our API key in the XML record.\nInstead, we will set it via the user interface/frontend.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(281),alt:"System parameter for API key"}})]),t._v(" "),a("h3",{attrs:{id:"api-call-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-call-parameters"}},[t._v("#")]),t._v(" API Call Parameters")]),t._v(" "),a("p",[t._v("We will implement a Python method in the "),a("code",[t._v("stock.warehouse")]),t._v(" model that will make an API call whenever a button is\nclicked. It will then fetch the weather data for the location of the current warehouse. The location is specified in\nterms of latitude and longitude. Fortunately, Odoo has these fields available in the "),a("code",[t._v("res.partner")]),t._v(" model which means we\nsomehow need a "),a("code",[t._v("many2one")]),t._v(" field of this model inside warehouse records. Therefore, we will use the "),a("code",[t._v("partner_id")]),t._v(" field\nin "),a("code",[t._v("stock.warehouse")]),t._v(" that will serve as the warehouse's location.")]),t._v(" "),a("p",[t._v("Besides the coordinates, we also need to fetch the API key to make our first call. This is easily retrieved from\nthe "),a("code",[t._v("ir.config_parameter")]),t._v(" model using "),a("code",[t._v("get_param")]),t._v(" and specifying the key. Moreover, the use of "),a("code",[t._v("sudo")]),t._v(" is advised to\nbypass any access rights restriction (unless you know what you are doing and really do want to check access rights).")]),t._v(" "),a("p",[t._v("The use of "),a("code",[t._v("_logger")]),t._v(" and "),a("code",[t._v("show_error")]),t._v(" will be explained later.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_get_api_key_and_location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" show_error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    api_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ir.config_parameter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flower_shop.weather_api_key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" api_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unset"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" api_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_latitude "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" api_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partner_longitude\n")])])]),a("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/stock_warehouse.py#L15"}}),t._v(" "),a("h3",{attrs:{id:"http-get-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-get-request"}},[t._v("#")]),t._v(" HTTP GET Request")]),t._v(" "),a("p",[t._v("Making HTTP requests are super easy in Python. We will create the necessary URL and make a GET request to the endpoint\nprovided by the API. It is always a good idea to surround the request within a "),a("em",[t._v("try/catch")]),t._v(" block for error handling.\nNext, after studying the response structure from the provider's site, we can retrieve all the information needed and\ncreate a "),a("code",[t._v("stock.warehouse.weather")]),t._v(" record.")]),t._v(" "),a("p",[t._v("We use "),a("code",[t._v("self.ensure_one()")]),t._v(" whenever we have to ensure that "),a("code",[t._v("self")]),t._v(" contains exactly one record. In case it is empty or\ncontains multiple records, an exception will be raised. In our case, we want to make sure that the weather data are\nfetched for one warehouse/location only.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_weather")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" show_error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ensure_one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    api_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get_api_key_and_location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("show_error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid={}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raise_for_status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        entries "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stock.warehouse.weather"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warehouse_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"weather"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pressure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pressure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temperature"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"humidity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"humidity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wind_speed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wind"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"speed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rain_volume"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rain"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" entries "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"capture_time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/stock_warehouse.py#L29"}}),t._v(" "),a("h3",{attrs:{id:"scheduled-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-action"}},[t._v("#")]),t._v(" Scheduled Action")]),t._v(" "),a("p",[t._v("The previous method needs to get weather data for every warehouse record. This calls for a scheduled action that has to\nbe hourly. However, there is an issue - we can neither call the method directly as a model method (e.g.\n"),a("code",[t._v("model.get_weather()")]),t._v(" nor can we call via a recordset, for example, "),a("code",[t._v("records.get_weather()")]),t._v("\nor "),a("code",[t._v("env['stock.warehouse'].search([]).get_weather()")]),t._v(". This is due to the fact that it uses "),a("code",[t._v("self.ensure_one()")]),t._v(". As a\nworkaround, we will create a new method which essentially gets a recordset of all the warehouses and\ncalls "),a("code",[t._v("get_weather()")]),t._v(" for each warehouse record.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_weather_all_warehouses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" warehouse "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        warehouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_weather"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("show_error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/stock_warehouse.py#L53"}}),t._v(" "),a("p",[t._v("We will create a second scheduled action to get the forecast for each warehouse location. The interval of this action is\ngoing to be daily. You can find the two scheduled actions in "),a("code",[t._v("data/actions.xml")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"weather-forecast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weather-forecast"}},[t._v("#")]),t._v(" Weather Forecast")]),t._v(" "),a("p",[t._v("The API call for getting forecast is very similar to the current weather API call. It is important\nto study the response that will be sent back, therefore, please check out\nthis "),a("a",{attrs:{href:"https://openweathermap.org/forecast5#JSON",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),a("OutboundLink")],1),t._v(" from the API provider's website.")]),t._v(" "),a("p",[t._v("We will define a method that gets forecast data for all warehouses. The first step is make the API call. Once a response\nis acquired, we will extract the data we need between 9 AM to 6 PM of the current day and since the API provides 3-hour\ninterval data, we will look into four entries. In any entry, if the rain volume is more than 0.2 mm, we will\nautomatically water all the flowers in that warehouse. In order to fetch all the different flower stock in a warehouse,\nthe model "),a("code",[t._v("stock.quant")]),t._v(" is queried. The last step is to call a method we had previously defined on all the serial-numbered\nflowers to water them.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_forecast_all_warehouses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" show_error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("GitHubButton",{attrs:{link:"https://github.com/odoo-ps/psae-btco/blob/sally-flower-shop/flower_shop/models/stock_warehouse.py#L57"}}),t._v(" "),a("p",[t._v("This marks the completion of part 7 of the case study.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);