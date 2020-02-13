require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(72);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a8117b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(75);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a8117b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a8117b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a8117b0", Component.options)
  } else {
    hotAPI.reload("data-v-1a8117b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_topNavigationBar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_bottomNavigation_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_static_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bottom_tabbar_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_switch_tab_vue__ = __webpack_require__(7);
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

//import navigationBar from '../../components/navigationBar.vue';




//import tabBar from '../../components/tab_bar';

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        topNavigationBar: __WEBPACK_IMPORTED_MODULE_0__components_topNavigationBar_vue__["a" /* default */],
        bottomNavigation: __WEBPACK_IMPORTED_MODULE_1__components_bottomNavigation_vue__["a" /* default */],
        card: __WEBPACK_IMPORTED_MODULE_2__components_card_static_vue__["a" /* default */],
        bottomNaviBar: __WEBPACK_IMPORTED_MODULE_3__components_bottom_tabbar_vue__["a" /* default */],
        switchTab: __WEBPACK_IMPORTED_MODULE_4__components_switch_tab_vue__["a" /* default */]
    },
    data: function data() {
        return {
            navigationBarTitle: 'Utogother',
            tab: 1,
            motto: "Sir Yang No.1！！！",
            value: 5
        };
    },

    methods: {
        changeTab: function changeTab(index) {
            this.tab = index;
        }
    }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "content1"
  }, [_c('div', {
    staticClass: "content1__imageAndMotto"
  }, [_c('img', {
    staticClass: "content1__img",
    attrs: {
      "src": "/static/icons/nanyi.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__motto",
    domProps: {
      "textContent": _vm._s(_vm.motto)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content1__nameAndRate"
  }, [_c('div', {
    staticClass: "content1__name"
  }, [_vm._v("\n                        杨总3\n                    ")]), _vm._v(" "), _c('van-rate', {
    attrs: {
      "value": _vm.value,
      "size": 10,
      "allow-half": "",
      "color": "#f54b70",
      "void-color": "#eee",
      "void-icon": "star",
      "eventid": '4_0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onChange
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content1__rateNum",
    domProps: {
      "textContent": _vm._s(_vm.value)
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "content2"
  }, [_c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/chuangjian.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("我创建的")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/jiaru.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("我加入的")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/collection1.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("我收藏的")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "content3"
  }, [_c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/judge.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("我评价的")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/shoudaopingjia.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("评价我的")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "content4"
  }, [_c('div', {
    staticClass: "content__item"
  }, [_c('div', {
    staticClass: "content__symbolAndName"
  }, [_c('img', {
    staticClass: "content__symbol",
    attrs: {
      "src": "/static/icons/xuanyan.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content__name"
  }, [_vm._v("个性标语")])]), _vm._v(" "), _c('img', {
    staticClass: "content__arrow",
    attrs: {
      "src": "/static/icons/arrow.png"
    }
  })])]), _vm._v(" "), _c('img', {
    staticClass: "background__logo",
    attrs: {
      "src": "/static/images/page-logo.png"
    }
  })]), _vm._v(" "), _c('bottomNavigation', {
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
     require("vue-hot-reload-api").rerender("data-v-1a8117b0", esExports)
  }
}

/***/ })

},[71]);
//# sourceMappingURL=main.js.map