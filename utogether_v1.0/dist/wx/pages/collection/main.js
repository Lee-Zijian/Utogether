require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(22);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c8c128a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c8c128a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c8c128a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/collection/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c8c128a", Component.options)
  } else {
    hotAPI.reload("data-v-1c8c128a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_topNavigationBar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_bottomNavigation_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_static_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bottom_tabbar_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_switch_tab_collection_vue__ = __webpack_require__(37);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import navigationBar from '../../components/navigationBar.vue';




//import tabBar from '../../components/tab_bar';

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        topNavigationBar: __WEBPACK_IMPORTED_MODULE_0__components_topNavigationBar_vue__["a" /* default */],
        bottomNavigation: __WEBPACK_IMPORTED_MODULE_1__components_bottomNavigation_vue__["a" /* default */],
        card: __WEBPACK_IMPORTED_MODULE_2__components_card_static_vue__["a" /* default */],
        bottomNaviBar: __WEBPACK_IMPORTED_MODULE_3__components_bottom_tabbar_vue__["a" /* default */],
        switchTab: __WEBPACK_IMPORTED_MODULE_4__components_switch_tab_collection_vue__["a" /* default */]
    },
    data: function data() {
        return {
            navigationBarTitle: 'Utogother',
            tab: 1
        };
    },

    methods: {
        changeTab: function changeTab(index) {
            this.tab = index;
        }
    }
});

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_switch_tab_collection_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_360804ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_switch_tab_collection_vue__ = __webpack_require__(40);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-360804ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_switch_tab_collection_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_360804ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_switch_tab_collection_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/switch_tab_collection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switch_tab_collection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-360804ae", Component.options)
  } else {
    hotAPI.reload("data-v-360804ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            tab: 1,
            value1: 4.5,
            value2: 5.0,
            content_event: "评论了你",
            content_event2: "申请加入活动",
            content_event3: "同意你的申请",
            content_date: "今天19:26",
            comment: "Sir Yang No.1",
            descTitle: "考研英语",
            descDate: "8.16-8.18",
            descLocation: "图书馆"
        };
    },

    methods: {
        changTab: function changTab(index) {
            this.tab = index;
        },
        onChange: function onChange(event) {
            this.setData({
                value: event.detail
            });
        }
    }
});

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test"
  }, [_c('div', {
    staticClass: "testNav"
  }, [_c('div', {
    class: {
      'selected': _vm.tab == 1, 'testTitle': true
    },
    attrs: {
      "eventid": '2_0'
    },
    on: {
      "click": function($event) {
        _vm.changTab(1)
      }
    }
  }, [_vm._v("活动")]), _vm._v(" "), _c('div', {
    class: {
      'selected': _vm.tab == 2, 'testTitle': true
    },
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "click": function($event) {
        _vm.changTab(2)
      }
    }
  }, [_vm._v("用户")])]), _vm._v(" "), _c('div', [(_vm.tab == 2) ? _c('div', [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card__content1"
  }, [_c('div', {
    staticClass: "card__content1Left"
  }, [_c('img', {
    staticClass: "content1__img",
    attrs: {
      "src": "/static/icons/nanyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__nameAndRate"
  }, [_c('div', {
    staticClass: "content1__name"
  }, [_vm._v("\n                                杨总3\n                            ")]), _vm._v(" "), _c('van-rate', {
    attrs: {
      "value": _vm.value1,
      "size": 10,
      "allow-half": "",
      "color": "#f54b70",
      "void-color": "#eee",
      "void-icon": "star",
      "eventid": '7_2',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__rateNum",
    domProps: {
      "textContent": _vm._s(_vm.value1)
    }
  })], 1)]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card__content1"
  }, [_c('div', {
    staticClass: "card__content1Left"
  }, [_c('img', {
    staticClass: "content1__img",
    attrs: {
      "src": "/static/icons/nanhaizi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__nameAndRate"
  }, [_c('div', {
    staticClass: "content1__name"
  }, [_vm._v("\n                                杨总2\n                            ")]), _vm._v(" "), _c('van-rate', {
    attrs: {
      "value": _vm.value2,
      "size": 10,
      "allow-half": "",
      "color": "#f54b70",
      "void-color": "#eee",
      "void-icon": "star",
      "eventid": '7_3',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__rateNum",
    domProps: {
      "textContent": _vm._s(_vm.value2)
    }
  })], 1)]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  })]) : _c('div', [_c('div', {
    staticClass: "card2"
  }, [_c('div', {
    staticClass: "card__content1"
  }, [_c('div', {
    staticClass: "card__content1Left"
  }, [_c('img', {
    staticClass: "content1__img",
    attrs: {
      "src": "/static/icons/nanyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__nameAndRate"
  }, [_c('div', {
    staticClass: "content1__name"
  }, [_vm._v("\n                                杨总3\n                            ")]), _vm._v(" "), _c('van-rate', {
    attrs: {
      "value": _vm.value1,
      "size": 10,
      "allow-half": "",
      "color": "#f54b70",
      "void-color": "#eee",
      "void-icon": "star",
      "eventid": '7_4',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__rateNum",
    domProps: {
      "textContent": _vm._s(_vm.value1)
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content1__deleteAndDate"
  }, [_c('img', {
    staticClass: "content1__delete",
    attrs: {
      "src": "/static/icons/shanchu.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__date",
    domProps: {
      "textContent": _vm._s(_vm.content_date)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card2__content3"
  }, [_c('img', {
    staticClass: "content3__img",
    attrs: {
      "src": "/static/icons/nvyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__name"
  }, [_vm._v("\n                        杨总1：\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "content3__descAll"
  }, [_c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descTitle)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descDate)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descLocation)
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "card2"
  }, [_c('div', {
    staticClass: "card__content1"
  }, [_c('div', {
    staticClass: "card__content1Left"
  }, [_c('img', {
    staticClass: "content1__img",
    attrs: {
      "src": "/static/icons/nanyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__nameAndRate"
  }, [_c('div', {
    staticClass: "content1__name"
  }, [_vm._v("\n                                杨总3\n                            ")]), _vm._v(" "), _c('van-rate', {
    attrs: {
      "value": _vm.value1,
      "size": 10,
      "allow-half": "",
      "color": "#f54b70",
      "void-color": "#eee",
      "void-icon": "star",
      "eventid": '7_5',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__rateNum",
    domProps: {
      "textContent": _vm._s(_vm.value1)
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content1__deleteAndDate"
  }, [_c('img', {
    staticClass: "content1__delete",
    attrs: {
      "src": "/static/icons/shanchu.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__date",
    domProps: {
      "textContent": _vm._s(_vm.content_date)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card2__content3"
  }, [_c('img', {
    staticClass: "content3__img",
    attrs: {
      "src": "/static/icons/nvyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__name"
  }, [_vm._v("\n                        杨总1：\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "content3__descAll"
  }, [_c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descTitle)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descDate)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content3__desc",
    domProps: {
      "textContent": _vm._s(_vm.descLocation)
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  })]), _vm._v(" "), _c('img', {
    staticClass: "background__logo",
    attrs: {
      "src": "/static/images/page-logo.png"
    }
  })])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content1__collection"
  }, [_c('img', {
    staticClass: "content1__collectionImg",
    attrs: {
      "src": "/static/icons/yishoucang.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content1__collection"
  }, [_c('img', {
    staticClass: "content1__collectionImg",
    attrs: {
      "src": "/static/icons/yishoucang.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-360804ae", esExports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "content"
  }, [_c('switchTab', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('bottomNavigation', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c8c128a", esExports)
  }
}

/***/ })

},[21]);
//# sourceMappingURL=main.js.map