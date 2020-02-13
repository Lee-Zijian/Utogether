require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(48);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_309abd7c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-309abd7c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_309abd7c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index1/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-309abd7c", Component.options)
  } else {
    hotAPI.reload("data-v-309abd7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_navigationBar_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_topNavigationBar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_bottomNavigation_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card_static_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_bottom_tabbar_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tab_bar__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        navigationBar: __WEBPACK_IMPORTED_MODULE_0__components_navigationBar_vue__["a" /* default */],
        topNavigationBar: __WEBPACK_IMPORTED_MODULE_1__components_topNavigationBar_vue__["a" /* default */],
        bottomNavigation: __WEBPACK_IMPORTED_MODULE_2__components_bottomNavigation_vue__["a" /* default */],
        card: __WEBPACK_IMPORTED_MODULE_3__components_card_static_vue__["a" /* default */],
        bottomNaviBar: __WEBPACK_IMPORTED_MODULE_4__components_bottom_tabbar_vue__["a" /* default */],
        tabBar: __WEBPACK_IMPORTED_MODULE_5__components_tab_bar__["a" /* default */]
    },
    data: function data() {
        return {
            navigationBarTitle: 'Utogother'
        };
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "sec-nav"
  }, [_c('navigation-bar', {
    attrs: {
      "title": _vm.navigationBarTitle,
      "navBackgroundColor": 'light',
      "titleColor": 'red',
      "back-visible": true,
      "home-path": '/pages/index/main',
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('topNavigationBar', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('van-card', {
    attrs: {
      "date": "8.16-8.18",
      "locate": "图书馆",
      "title": "考研英语",
      "desc": "12345jaksflkahgalj",
      "thumb": "/static/icons/nanhai.png",
      "thumb2": "/static/icons/sanjiao-down.png",
      "boy_num": "/static/icons/nanhaizi.png",
      "girl_num": "/static/icons/nvhaizi.png",
      "like": "/static/icons/thumbup.png",
      "share": "/static/icons/fenxiang.png",
      "comment": "/static/icons/anwer-ico.png",
      "collection": "/static/icons/collection1.png",
      "post_date": "今天18:21",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('bottomNavigation', {
    attrs: {
      "mpcomid": '3'
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
     require("vue-hot-reload-api").rerender("data-v-309abd7c", esExports)
  }
}

/***/ })

},[47]);
//# sourceMappingURL=main.js.map