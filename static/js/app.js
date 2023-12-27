/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/manager */ "./src/js/views/manager.js");
// Manager


// DOM Ready
(function () {
  // Init manager
  new _views_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/***/ }),

/***/ "./src/js/utils/breakpoints.js":
/*!*************************************!*\
  !*** ./src/js/utils/breakpoints.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var breakpoints = {
  "xxs": 320,
  "xs": 450,
  "s": 600,
  "m": 768,
  "l": 1300,
  "xl": 1920,
  "xxl": 2560
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakpoints);

/***/ }),

/***/ "./src/js/utils/mq.js":
/*!****************************!*\
  !*** ./src/js/utils/mq.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLessThan: () => (/* binding */ isLessThan),
/* harmony export */   isMoreThan: () => (/* binding */ isMoreThan)
/* harmony export */ });
/* harmony import */ var _breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints.js */ "./src/js/utils/breakpoints.js");


/**
 * Check Window.width more than breakpoint
 *
 * @param {string} breakpoint - Breakpoint string
 * @param {boolean} equal - Test breakpoint equality
 * @returns {boolean} - Return breakpoint status
 */
var isMoreThan = function isMoreThan(breakpoint) {
  var equal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var bp = _breakpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"][breakpoint];

  // Check if 'breakpoint' is valid
  if (!bp) {
    throw new Error("'".concat(breakpoint, "' is not a valid breakpoint"));
  }
  var width = window.innerWidth || document.documentElement.clientWidth;

  // Check for equality
  if (equal && width >= bp) {
    return true;
  }
  if (width > bp) {
    return true;
  }
  return false;
};

/**
 * Check Window.width less than breakpoint
 *
 * @param {string} breakpoint - Breakpoint string
 * @param {boolean} equal - Test breakpoint equality
 * @return {boolean} - Return breakpoint status
 */
var isLessThan = function isLessThan(breakpoint) {
  var equal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var bp = _breakpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"][breakpoint];

  // Check if 'breakpoint' is valid
  if (!bp) {
    throw new Error("'".concat(breakpoint, "' is not a valid breakpoint"));
  }
  var width = window.innerWidth || document.documentElement.clientWidth;

  // Check for equality
  if (equal && width <= bp) {
    return true;
  }
  if (width < bp) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./src/js/views/manager.js":
/*!*********************************!*\
  !*** ./src/js/views/manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partials_common_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/common/header */ "./src/js/views/partials/common/header.js");
/* harmony import */ var _templates_evenements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/evenements */ "./src/js/views/templates/evenements.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Dependencies
// import Select from 'custom-select';



var COMPONENTS = [{
  el: '[template="evenements"]',
  id: _templates_evenements__WEBPACK_IMPORTED_MODULE_1__["default"]
}];

// Manager Class
var Manager = /*#__PURE__*/function () {
  /**
   * Constructor:
   * Manager constructor called in `main.js` file.
   *
   * @constructor
   */
  function Manager() {
    _classCallCheck(this, Manager);
    this.components = [];

    // Root element
    this.root = document.body;

    // Elements
    this.header = this.root.querySelector('[js-header]');
    this.footer = this.root.querySelector('[js-footer]');
    this.container = this.root.querySelector('[js-container]');
    this._onRAF = this.onRAF.bind(this);

    // Init
    this.initLayout();
    this.initComponents();
  }

  /**
   * Initialize layout classes like `Header` and `Footer`.
   */
  _createClass(Manager, [{
    key: "initLayout",
    value: function initLayout() {
      // Header
      if (this.header && typeof _partials_common_header__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined') {
        // eslint-disable-next-line
        this.Header = new _partials_common_header__WEBPACK_IMPORTED_MODULE_0__["default"]({
          el: this.header
        });
      }

      // Footer
      if (this.header && typeof Footer !== 'undefined') {
        // eslint-disable-next-line
        this.Footer = new Footer({
          el: this.footer
        });
      }
    }
  }, {
    key: "initComponents",
    value: function initComponents() {
      var _this = this;
      COMPONENTS.forEach(function (component, i) {
        /* eslint-disable */
        if (component.el) {
          var els = document.querySelectorAll(component.el);
          for (var j = 0; j < els.length; j++) {
            var _component = new COMPONENTS[i].id({
              el: els[j]
            });
            _this.components.push(_component);
          }
        } else {
          var _component2 = new COMPONENTS[i].id();
          _this.components.push(_component2);
        }
        /* eslint-enable */
      });
      if (!this.RAF) {
        this.RAF = window.requestAnimationFrame(this._onRAF);
      }
    }

    /**
     * RequestAnimationFrame
     *
     * @param {float} timestamp Time as a DOMHighResTimeStamp
     */
  }, {
    key: "onRAF",
    value: function onRAF(timestamp) {
      // Components
      for (var i = 0; i < this.components.length; i++) {
        var component = this.components[i];
        if (component.onRAF) {
          component.onRAF(timestamp);
        }
      }
      this.RAF = window.requestAnimationFrame(this._onRAF);
    }
  }]);
  return Manager;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manager);

/***/ }),

/***/ "./src/js/views/partials/common/header.js":
/*!************************************************!*\
  !*** ./src/js/views/partials/common/header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mq */ "./src/js/utils/mq.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Header = /*#__PURE__*/function () {
  function Header(_ref) {
    var _this = this;
    var el = _ref.el;
    _classCallCheck(this, Header);
    this.$el = el;
    this.$burgerButton = this.$el.querySelector('[js-burger-button]');
    this.$menu = this.$el.querySelector('[js-menu]');
    this.$menuLinks = this.$el.querySelectorAll('[js-menu-link]');
    this.$body = document.querySelector('body');
    this.$header = document.querySelector('[js-header]');
    var isHidden = 'header-is-hidden';
    var isVisible = 'header-is-sticky';
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.scrollY;
      if (currentScroll <= ((0,_utils_mq__WEBPACK_IMPORTED_MODULE_0__.isLessThan)('l') ? 70 : 85)) {
        _this.$header.classList.remove(isHidden);
        _this.$header.classList.remove(isVisible);
        return;
      }
      if (currentScroll > lastScroll && !_this.$header.classList.contains(isHidden)) {
        // DOWN
        _this.$header.classList.remove(isVisible);
        _this.$header.classList.add(isHidden);
      } else if (currentScroll < lastScroll && _this.$header.classList.contains(isHidden)) {
        // UP
        _this.$header.classList.remove(isHidden);
        _this.$header.classList.add(isVisible);
      }
      lastScroll = currentScroll;
    });
    this.bindEvents();
  }
  _createClass(Header, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      this._toggleMenu = this.toggleMenu.bind(this);
      this.$burgerButton.addEventListener('click', this._toggleMenu);
      if ((0,_utils_mq__WEBPACK_IMPORTED_MODULE_0__.isLessThan)('l')) {
        this.$menuLinks.forEach(function (link) {
          link.addEventListener('click', _this2._toggleMenu);
        });
      }
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (this.$body.classList.contains('menu-is-open')) {
        this.$body.classList.remove('menu-is-open');
        this.$burgerButton.classList.remove('is-open');
        this.$header.classList.remove('menu-is-open');
      } else {
        this.$body.classList.add('menu-is-open');
        this.$burgerButton.classList.add('is-open');
        this.$header.classList.add('menu-is-open');
      }
    }
  }]);
  return Header;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/js/views/templates/evenements.js":
/*!**********************************************!*\
  !*** ./src/js/views/templates/evenements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Evenements = /*#__PURE__*/function () {
  function Evenements(_ref) {
    var el = _ref.el;
    _classCallCheck(this, Evenements);
    this.$el = el;
    this.init();
  }
  _createClass(Evenements, [{
    key: "init",
    value: function init() {
      this.helloWorld();
    }
  }, {
    key: "helloWorld",
    value: function helloWorld() {
      console.log('LE TEMPLATE EVENEMENTS EST ACTIF');
    }
  }]);
  return Evenements;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Evenements);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbdf_sur_mesure"] = self["webpackChunkbdf_sur_mesure"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;