webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shapes = __webpack_require__(391);

exports.default = {
  // data(){
  // console.log(this);
  // return this;
  // },
  mounted: function mounted() {
    // let scene = document.getElementById('scene');
    // let name = document.getElementById('name');

    (0, _shapes.ShapeScene)(this.$refs.scene, this.$refs.name);
    // console.log(initShapes(scene, name));
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7702078e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scene_vue__ = __webpack_require__(411);
function injectStyle (ssrContext) {
  __webpack_require__(409)
}
var normalizeComponent = __webpack_require__(43)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scene_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7702078e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scene_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 389:
false,

/***/ 390:
false,

/***/ 394:
false,

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(95)("167786cd", content, true);

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)(false);
// imports


// module
exports.push([module.i, "#scene{position:fixed;z-index:-1;height:100vh;display:flex;align-items:center;justify-content:center}#scene,#scene svg{top:0;left:0;width:100%}#scene svg{position:absolute;height:100%}#scene svg *{opacity:0}#scene #name{color:#63676c;margin:0;font-size:50px;text-transform:uppercase;font-size:12vw;font-family:InterUI,sans-serif;font-weight:700;user-select:none}#scene #name span{display:inline-block;position:relative;opacity:0;line-height:.8;padding:0 .05em;transform:translateY(100%)}", ""]);

// exports


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scene",attrs:{"id":"scene"}},[_c('h1',{ref:"name",attrs:{"id":"name"}},[_vm._v("Kyle")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

})
//# sourceMappingURL=0.67c0727ec275fd9ed60e.hot-update.js.map