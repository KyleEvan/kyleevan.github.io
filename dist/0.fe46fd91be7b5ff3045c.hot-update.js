webpackHotUpdate(0,{

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(30);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(375);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Work = __webpack_require__(376);

var _Work2 = _interopRequireDefault(_Work);

var _About = __webpack_require__(382);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(384);

var _Contact2 = _interopRequireDefault(_Contact);

var _NotFound = __webpack_require__(411);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Work',
    component: _Work2.default
  }, {
    path: '/about',
    name: 'About',
    component: _About2.default
  }, {
    path: '/contact',
    name: 'Contact',
    component: _Contact2.default
  }, {
    path: '*',
    name: 'NotFound',
    component: _NotFound2.default
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

/***/ })

})
//# sourceMappingURL=0.fe46fd91be7b5ff3045c.hot-update.js.map