(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createForOfIteratorHelper; });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/*! exports provided: generateCodeFrame, BASE_TRANSITION, CAMELIZE, CAPITALIZE, CREATE_BLOCK, CREATE_COMMENT, CREATE_ELEMENT_BLOCK, CREATE_ELEMENT_VNODE, CREATE_SLOTS, CREATE_STATIC, CREATE_TEXT, CREATE_VNODE, FRAGMENT, GUARD_REACTIVE_PROPS, IS_MEMO_SAME, IS_REF, KEEP_ALIVE, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_PROPS, NORMALIZE_STYLE, OPEN_BLOCK, POP_SCOPE_ID, PUSH_SCOPE_ID, RENDER_LIST, RENDER_SLOT, RESOLVE_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_FILTER, SET_BLOCK_TRACKING, SUSPENSE, TELEPORT, TO_DISPLAY_STRING, TO_HANDLERS, TO_HANDLER_KEY, UNREF, WITH_CTX, WITH_DIRECTIVES, WITH_MEMO, advancePositionWithClone, advancePositionWithMutation, assert, baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, createArrayExpression, createAssignmentExpression, createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createForLoopParams, createFunctionExpression, createIfStatement, createInterpolation, createObjectExpression, createObjectProperty, createReturnStatement, createRoot, createSequenceExpression, createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral, createTransformContext, createVNodeCall, extractIdentifiers, findDir, findProp, generate, getBaseTransformPreset, getConstantType, getInnerRange, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef, helperNameMap, injectProp, isBuiltInType, isCoreComponent, isFunctionType, isInDestructureAssignment, isMemberExpression, isMemberExpressionBrowser, isMemberExpressionNode, isReferencedIdentifier, isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey, isTemplateNode, isText, isVSlot, locStub, makeBlock, noopDirectiveTransform, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, toValidAssetId, trackSlotScopes, trackVForSlotScopes, transform, transformBind, transformElement, transformExpression, transformModel, transformOn, traverseNode, walkBlockDeclarations, walkFunctionParams, walkIdentifiers, warnDeprecation */
/*! exports used: BASE_TRANSITION, CAMELIZE, CAPITALIZE, CREATE_BLOCK, CREATE_COMMENT, CREATE_ELEMENT_BLOCK, CREATE_ELEMENT_VNODE, CREATE_SLOTS, CREATE_STATIC, CREATE_TEXT, CREATE_VNODE, FRAGMENT, GUARD_REACTIVE_PROPS, IS_MEMO_SAME, IS_REF, KEEP_ALIVE, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_PROPS, NORMALIZE_STYLE, OPEN_BLOCK, POP_SCOPE_ID, PUSH_SCOPE_ID, RENDER_LIST, RENDER_SLOT, RESOLVE_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_FILTER, SET_BLOCK_TRACKING, SUSPENSE, TELEPORT, TO_DISPLAY_STRING, TO_HANDLERS, TO_HANDLER_KEY, UNREF, WITH_CTX, WITH_DIRECTIVES, WITH_MEMO, advancePositionWithClone, advancePositionWithMutation, assert, baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, createArrayExpression, createAssignmentExpression, createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createForLoopParams, createFunctionExpression, createIfStatement, createInterpolation, createObjectExpression, createObjectProperty, createReturnStatement, createRoot, createSequenceExpression, createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral, createTransformContext, createVNodeCall, extractIdentifiers, findDir, findProp, generate, generateCodeFrame, getBaseTransformPreset, getConstantType, getInnerRange, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef, helperNameMap, injectProp, isBuiltInType, isCoreComponent, isFunctionType, isInDestructureAssignment, isMemberExpression, isMemberExpressionBrowser, isMemberExpressionNode, isReferencedIdentifier, isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey, isTemplateNode, isText, isVSlot, locStub, makeBlock, noopDirectiveTransform, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, toValidAssetId, trackSlotScopes, trackVForSlotScopes, transform, transformBind, transformElement, transformExpression, transformModel, transformOn, traverseNode, walkBlockDeclarations, walkFunctionParams, walkIdentifiers, warnDeprecation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAMELIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CAPITALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CREATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CREATE_ELEMENT_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_ELEMENT_VNODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CREATE_SLOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CREATE_STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CREATE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CREATE_VNODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GUARD_REACTIVE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return IS_MEMO_SAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return IS_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return KEEP_ALIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MERGE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return NORMALIZE_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return NORMALIZE_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return NORMALIZE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return OPEN_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POP_SCOPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return PUSH_SCOPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return RENDER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return RENDER_SLOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RESOLVE_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RESOLVE_DIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RESOLVE_DYNAMIC_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RESOLVE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SET_BLOCK_TRACKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SUSPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TELEPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return TO_DISPLAY_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return TO_HANDLERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return TO_HANDLER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UNREF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return WITH_CTX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return WITH_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return WITH_MEMO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return advancePositionWithClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return advancePositionWithMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return baseCompile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return baseParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return buildDirectiveArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return buildProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return buildSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return checkCompatEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return createArrayExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return createAssignmentExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return createBlockStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return createCacheExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return createCallExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return createCompilerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return createCompoundExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return createConditionalExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return createForLoopParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return createFunctionExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return createIfStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return createInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return createObjectExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return createObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return createReturnStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return createRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return createSequenceExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return createSimpleExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return createStructuralDirectiveTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return createTemplateLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return createTransformContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return createVNodeCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return extractIdentifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return findDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return findProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return getBaseTransformPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return getConstantType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return getInnerRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return getMemoedVNodeCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return getVNodeBlockHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return getVNodeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return hasDynamicKeyVBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return hasScopeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return helperNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return injectProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return isBuiltInType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return isCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return isFunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return isInDestructureAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return isMemberExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return isMemberExpressionBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return isMemberExpressionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return isReferencedIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return isSimpleIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return isSlotOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return isStaticArgOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return isStaticExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return isStaticProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return isStaticPropertyKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return isTemplateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return isText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return isVSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return locStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zb", function() { return makeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return noopDirectiveTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bc", function() { return processExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return processFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return processIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return processSlotOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return registerRuntimeHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return resolveComponentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return toValidAssetId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return trackSlotScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return trackVForSlotScopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return transformBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return transformElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return transformExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return transformModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return transformOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return traverseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return walkBlockDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return walkFunctionParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return walkIdentifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uc", function() { return warnDeprecation; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_5__["generateCodeFrame"]; });







var _errorMessages, _helperNameMap, _deprecationData;




function defaultOnError(error) {
  throw error;
}

function defaultOnWarn(msg) {
   true && console.warn("[Vue warn] ".concat(msg.message));
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : undefined;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 0
/* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 1
/* ErrorCodes.CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 2
/* ErrorCodes.DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 3
/* ErrorCodes.END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 4
/* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 5
/* ErrorCodes.EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 6
/* ErrorCodes.EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 7
/* ErrorCodes.EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 8
/* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 9
/* ErrorCodes.EOF_IN_TAG */
, 'Unexpected EOF in tag.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 10
/* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 11
/* ErrorCodes.INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 12
/* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 13
/* ErrorCodes.MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 14
/* ErrorCodes.MISSING_END_TAG_NAME */
, 'End tag name was expected.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 15
/* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 16
/* ErrorCodes.NESTED_COMMENT */
, "Unexpected '<!--' in comment."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 17
/* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 18
/* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 19
/* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 21
/* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 20
/* ErrorCodes.UNEXPECTED_NULL_CHARACTER */
, "Unexpected null character."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 22
/* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 23
/* ErrorCodes.X_INVALID_END_TAG */
, 'Invalid end tag.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 24
/* ErrorCodes.X_MISSING_END_TAG */
, 'Element is missing end tag.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 25
/* ErrorCodes.X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 27
/* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 26
/* ErrorCodes.X_MISSING_DIRECTIVE_NAME */
, 'Legal directive name was expected.'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 28
/* ErrorCodes.X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 29
/* ErrorCodes.X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 30
/* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if or v-else-if."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 31
/* ErrorCodes.X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 32
/* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 33
/* ErrorCodes.X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 34
/* ErrorCodes.X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 35
/* ErrorCodes.X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 36
/* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 37
/* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 38
/* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 39
/* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 40
/* ErrorCodes.X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 41
/* ErrorCodes.X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 42
/* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 43
/* ErrorCodes.X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 44
/* ErrorCodes.X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 45
/* ErrorCodes.X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 46
/* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 47
/* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 48
/* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 49
/* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_errorMessages, 50
/* ErrorCodes.__EXTEND_POINT__ */
, ""), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : undefined);
var TELEPORT = Symbol( true ? "Teleport" : undefined);
var SUSPENSE = Symbol( true ? "Suspense" : undefined);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : undefined);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : undefined);
var OPEN_BLOCK = Symbol( true ? "openBlock" : undefined);
var CREATE_BLOCK = Symbol( true ? "createBlock" : undefined);
var CREATE_ELEMENT_BLOCK = Symbol( true ? "createElementBlock" : undefined);
var CREATE_VNODE = Symbol( true ? "createVNode" : undefined);
var CREATE_ELEMENT_VNODE = Symbol( true ? "createElementVNode" : undefined);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : undefined);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : undefined);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : undefined);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : undefined);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : undefined);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : undefined);
var RESOLVE_FILTER = Symbol( true ? "resolveFilter" : undefined);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : undefined);
var RENDER_LIST = Symbol( true ? "renderList" : undefined);
var RENDER_SLOT = Symbol( true ? "renderSlot" : undefined);
var CREATE_SLOTS = Symbol( true ? "createSlots" : undefined);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : undefined);
var MERGE_PROPS = Symbol( true ? "mergeProps" : undefined);
var NORMALIZE_CLASS = Symbol( true ? "normalizeClass" : undefined);
var NORMALIZE_STYLE = Symbol( true ? "normalizeStyle" : undefined);
var NORMALIZE_PROPS = Symbol( true ? "normalizeProps" : undefined);
var GUARD_REACTIVE_PROPS = Symbol( true ? "guardReactiveProps" : undefined);
var TO_HANDLERS = Symbol( true ? "toHandlers" : undefined);
var CAMELIZE = Symbol( true ? "camelize" : undefined);
var CAPITALIZE = Symbol( true ? "capitalize" : undefined);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : undefined);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : undefined);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : undefined);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : undefined);
var WITH_CTX = Symbol( true ? "withCtx" : undefined);
var UNREF = Symbol( true ? "unref" : undefined);
var IS_REF = Symbol( true ? "isRef" : undefined);
var WITH_MEMO = Symbol( true ? "withMemo" : undefined);
var IS_MEMO_SAME = Symbol( true ? "isMemoSame" : undefined); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, FRAGMENT, "Fragment"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, TELEPORT, "Teleport"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, SUSPENSE, "Suspense"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, KEEP_ALIVE, "KeepAlive"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, BASE_TRANSITION, "BaseTransition"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, OPEN_BLOCK, "openBlock"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_BLOCK, "createBlock"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_ELEMENT_BLOCK, "createElementBlock"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_VNODE, "createVNode"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_ELEMENT_VNODE, "createElementVNode"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_TEXT, "createTextVNode"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_STATIC, "createStaticVNode"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RESOLVE_FILTER, "resolveFilter"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RENDER_LIST, "renderList"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, RENDER_SLOT, "renderSlot"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CREATE_SLOTS, "createSlots"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, MERGE_PROPS, "mergeProps"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, NORMALIZE_CLASS, "normalizeClass"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, NORMALIZE_STYLE, "normalizeStyle"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, NORMALIZE_PROPS, "normalizeProps"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, GUARD_REACTIVE_PROPS, "guardReactiveProps"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, TO_HANDLERS, "toHandlers"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CAMELIZE, "camelize"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, CAPITALIZE, "capitalize"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, POP_SCOPE_ID, "popScopeId"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, WITH_CTX, "withCtx"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, UNREF, "unref"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, IS_REF, "isRef"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, WITH_MEMO, "withMemo"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_helperNameMap, IS_MEMO_SAME, "isMemoSame"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* NodeTypes.ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var isComponent = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
  var loc = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent));
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* NodeTypes.VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    isComponent: isComponent,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* NodeTypes.JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* NodeTypes.JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* NodeTypes.JS_PROPERTY */
    ,
    loc: locStub,
    key: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content) {
  var isStatic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* ConstantTypes.CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* NodeTypes.INTERPOLATION */
    ,
    loc: loc,
    content: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* NodeTypes.COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* NodeTypes.JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* NodeTypes.JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* NodeTypes.JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* NodeTypes.JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* NodeTypes.JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* NodeTypes.JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* NodeTypes.JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* NodeTypes.JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* NodeTypes.JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["hyphenate"])(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */

var isMemberExpressionBrowser = function isMemberExpressionBrowser(path) {
  // remove whitespaces around . or [ first
  path = path.trim().replace(whitespaceRE, function (s) {
    return s.trim();
  });
  var state = 0
  /* MemberExpLexState.inMemberExp */
  ;
  var stateStack = [];
  var currentOpenBracketCount = 0;
  var currentOpenParensCount = 0;
  var currentStringType = null;

  for (var i = 0; i < path.length; i++) {
    var char = path.charAt(i);

    switch (state) {
      case 0
      /* MemberExpLexState.inMemberExp */
      :
        if (char === '[') {
          stateStack.push(state);
          state = 1
          /* MemberExpLexState.inBrackets */
          ;
          currentOpenBracketCount++;
        } else if (char === '(') {
          stateStack.push(state);
          state = 2
          /* MemberExpLexState.inParens */
          ;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }

        break;

      case 1
      /* MemberExpLexState.inBrackets */
      :
        if (char === "'" || char === "\"" || char === '`') {
          stateStack.push(state);
          state = 3
          /* MemberExpLexState.inString */
          ;
          currentStringType = char;
        } else if (char === "[") {
          currentOpenBracketCount++;
        } else if (char === "]") {
          if (! --currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 2
      /* MemberExpLexState.inParens */
      :
        if (char === "'" || char === "\"" || char === '`') {
          stateStack.push(state);
          state = 3
          /* MemberExpLexState.inString */
          ;
          currentStringType = char;
        } else if (char === "(") {
          currentOpenParensCount++;
        } else if (char === ")") {
          // if the exp ends as a call then it should not be considered valid
          if (i === path.length - 1) {
            return false;
          }

          if (! --currentOpenParensCount) {
            state = stateStack.pop();
          }
        }

        break;

      case 3
      /* MemberExpLexState.inString */
      :
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }

        break;
    }
  }

  return !currentOpenBracketCount && !currentOpenParensCount;
};

var isMemberExpressionNode = _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NOOP"];
var isMemberExpression = isMemberExpressionBrowser;

function getInnerRange(loc, offset, length) {
  var source = loc.source.slice(offset, offset + length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
      linesCount++;
      lastNewLinePos = i;
    }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* NodeTypes.DIRECTIVE */
    && (allowEmpty || p.exp) && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* NodeTypes.ATTRIBUTE */
    ) {
      if (dynamicOnly) continue;

      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === 'bind' && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}

function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* NodeTypes.DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* NodeTypes.INTERPOLATION */
  || node.type === 2
  /* NodeTypes.TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* NodeTypes.DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* NodeTypes.ELEMENT */
  && node.tagType === 3
  /* ElementTypes.TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* NodeTypes.ELEMENT */
  && node.tagType === 2
  /* ElementTypes.SLOT */
  ;
}

function getVNodeHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}

function getVNodeBlockHelper(ssr, isComponent) {
  return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}

var propsHelperSet = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getUnnormalizedProps(props) {
  var callPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (props && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(props) && props.type === 14
  /* NodeTypes.JS_CALL_EXPRESSION */
  ) {
    var callee = props.callee;

    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
  }

  return [props, callPath];
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  /**
   * 1. mergeProps(...)
   * 2. toHandlers(...)
   * 3. normalizeProps(...)
   * 4. normalizeProps(guardReactiveProps(...))
   *
   * we need to get the real props before normalization
   */

  var props = node.type === 13
  /* NodeTypes.VNODE_CALL */
  ? node.props : node.arguments[2];
  var callPath = [];
  var parentCall;

  if (props && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(props) && props.type === 14
  /* NodeTypes.JS_CALL_EXPRESSION */
  ) {
    var ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }

  if (props == null || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* NodeTypes.JS_CALL_EXPRESSION */
  ) {
    // merged props... add ours
    // only inject key to object literal if it's the first argument so that
    // if doesn't override user provided keys
    var first = props.arguments[0];

    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(first) && first.type === 15
    /* NodeTypes.JS_OBJECT_EXPRESSION */
    ) {
      first.properties.unshift(prop);
    } else {
      if (props.callee === TO_HANDLERS) {
        // #2366
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }

    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15
  /* NodeTypes.JS_OBJECT_EXPRESSION */
  ) {
    var alreadyExists = false; // check existing key to avoid overriding user provided keys

    if (prop.key.type === 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    ) {
      var propKeyName = prop.key.content;
      alreadyExists = props.properties.some(function (p) {
        return p.key.type === 4
        /* NodeTypes.SIMPLE_EXPRESSION */
        && p.key.content === propKeyName;
      });
    }

    if (!alreadyExists) {
      props.properties.unshift(prop);
    }

    propsWithInjection = props;
  } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]); // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(props))`,
    // it will be rewritten as `normalizeProps(mergeProps({ key: 0 }, props))`,
    // the `guardReactiveProps` will no longer be needed

    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }

  if (node.type === 13
  /* NodeTypes.VNODE_CALL */
  ) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}

function toValidAssetId(name, type) {
  // see issue#4422, we need adding identifier on validAssetId if variable `name` has specific character
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, function (searchValue, replaceValue) {
    return searchValue === '-' ? '_' : name.charCodeAt(replaceValue).toString();
  }));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* NodeTypes.ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* NodeTypes.DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* NodeTypes.FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* NodeTypes.IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* NodeTypes.IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* NodeTypes.COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isObject"])(c) && hasScopeRef(c, ids);
      });

    case 5
    /* NodeTypes.INTERPOLATION */
    :
    case 12
    /* NodeTypes.TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* NodeTypes.TEXT */
    :
    case 3
    /* NodeTypes.COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
}

function getMemoedVNodeCall(node) {
  if (node.type === 14
  /* NodeTypes.JS_CALL_EXPRESSION */
  && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}

function makeBlock(node, _ref) {
  var helper = _ref.helper,
      removeHelper = _ref.removeHelper,
      inSSR = _ref.inSSR;

  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}

var deprecationData = (_deprecationData = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_IS_ON_ELEMENT"
/* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
, {
  message: "Platform-native elements with \"is\" prop will no longer be " + "treated as components in Vue 3 unless the \"is\" value is explicitly " + "prefixed with \"vue:\".",
  link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_V_BIND_SYNC"
/* CompilerDeprecationTypes.COMPILER_V_BIND_SYNC */
, {
  message: function message(key) {
    return ".sync modifier for v-bind has been removed. Use v-model with " + "argument instead. `v-bind:".concat(key, ".sync` should be changed to ") + "`v-model:".concat(key, "`.");
  },
  link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_V_BIND_PROP"
/* CompilerDeprecationTypes.COMPILER_V_BIND_PROP */
, {
  message: ".prop modifier for v-bind has been removed and no longer necessary. " + "Vue 3 will automatically set a binding as DOM property when appropriate."
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_V_BIND_OBJECT_ORDER"
/* CompilerDeprecationTypes.COMPILER_V_BIND_OBJECT_ORDER */
, {
  message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript " + "object spread: it will now overwrite an existing non-mergeable attribute " + "that appears before v-bind in the case of conflict. " + "To retain 2.x behavior, move v-bind to make it the first attribute. " + "You can also suppress this warning if the usage is intended.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_V_ON_NATIVE"
/* CompilerDeprecationTypes.COMPILER_V_ON_NATIVE */
, {
  message: ".native modifier for v-on has been removed as is no longer necessary.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_V_IF_V_FOR_PRECEDENCE"
/* CompilerDeprecationTypes.COMPILER_V_IF_V_FOR_PRECEDENCE */
, {
  message: "v-if / v-for precedence when used on the same element has changed " + "in Vue 3: v-if now takes higher precedence and will no longer have " + "access to v-for scope variables. It is best to avoid the ambiguity " + "with <template> tags or use a computed property that filters v-for " + "data source.",
  link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_NATIVE_TEMPLATE"
/* CompilerDeprecationTypes.COMPILER_NATIVE_TEMPLATE */
, {
  message: "<template> with no special directives will render as a native template " + "element instead of its inner content in Vue 3."
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_INLINE_TEMPLATE"
/* CompilerDeprecationTypes.COMPILER_INLINE_TEMPLATE */
, {
  message: "\"inline-template\" has been removed in Vue 3.",
  link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
}), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_deprecationData, "COMPILER_FILTER"
/* CompilerDeprecationTypes.COMPILER_FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
}), _deprecationData);

function getCompatValue(key, context) {
  var config = context.options ? context.options.compatConfig : context.compatConfig;
  var value = config && config[key];

  if (key === 'MODE') {
    return value || 3; // compiler defaults to v3 behavior
  } else {
    return value;
  }
}

function isCompatEnabled(key, context) {
  var mode = getCompatValue('MODE', context);
  var value = getCompatValue(key, context); // in v3 mode, only enable if explicitly set to true
  // otherwise enable for any non-false value

  return mode === 3 ? value === true : value !== false;
}

function checkCompatEnabled(key, context, loc) {
  var enabled = isCompatEnabled(key, context);

  if ( true && enabled) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    warnDeprecation.apply(void 0, [key, context, loc].concat(args));
  }

  return enabled;
}

function warnDeprecation(key, context, loc) {
  var val = getCompatValue(key, context);

  if (val === 'suppress-warning') {
    return;
  }

  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var msg = "(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : "");
  var err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* Namespaces.HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* TextModes.DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NO"],
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NO"],
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NO"],
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: "development" !== 'production'
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* TextModes.DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])({}, defaultParserOptions);
  var key;

  for (key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] === undefined ? defaultParserOptions[key] : rawOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* Namespaces.HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* TextModes.DATA */
    || mode === 1
    /* TextModes.RCDATA */
    ) {
      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
        // '{{'
        node = parseInterpolation(context, mode);
      } else if (mode === 0
      /* TextModes.DATA */
      && s[0] === '<') {
        // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
        if (s.length === 1) {
          emitError(context, 5
          /* ErrorCodes.EOF_BEFORE_TAG_NAME */
          , 1);
        } else if (s[1] === '!') {
          // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
          if (startsWith(s, '<!--')) {
            node = parseComment(context);
          } else if (startsWith(s, '<!DOCTYPE')) {
            // Ignore DOCTYPE by a limitation.
            node = parseBogusComment(context);
          } else if (startsWith(s, '<![CDATA[')) {
            if (ns !== 0
            /* Namespaces.HTML */
            ) {
              node = parseCDATA(context, ancestors);
            } else {
              emitError(context, 1
              /* ErrorCodes.CDATA_IN_HTML_CONTENT */
              );
              node = parseBogusComment(context);
            }
          } else {
            emitError(context, 11
            /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */
            );
            node = parseBogusComment(context);
          }
        } else if (s[1] === '/') {
          // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
          if (s.length === 2) {
            emitError(context, 5
            /* ErrorCodes.EOF_BEFORE_TAG_NAME */
            , 2);
          } else if (s[2] === '>') {
            emitError(context, 14
            /* ErrorCodes.MISSING_END_TAG_NAME */
            , 2);
            advanceBy(context, 3);
            continue;
          } else if (/[a-z]/i.test(s[2])) {
            emitError(context, 23
            /* ErrorCodes.X_INVALID_END_TAG */
            );
            parseTag(context, 1
            /* TagType.End */
            , parent);
            continue;
          } else {
            emitError(context, 12
            /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 2);
            node = parseBogusComment(context);
          }
        } else if (/[a-z]/i.test(s[1])) {
          node = parseElement(context, ancestors); // 2.x <template> with no directive compat

          if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE"
          /* CompilerDeprecationTypes.COMPILER_NATIVE_TEMPLATE */
          , context) && node && node.tag === 'template' && !node.props.some(function (p) {
            return p.type === 7
            /* NodeTypes.DIRECTIVE */
            && isSpecialTemplateDirective(p.name);
          })) {
             true && warnDeprecation("COMPILER_NATIVE_TEMPLATE"
            /* CompilerDeprecationTypes.COMPILER_NATIVE_TEMPLATE */
            , context, node.loc);
            node = node.children;
          }
        } else if (s[1] === '?') {
          emitError(context, 21
          /* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
          , 1);
          node = parseBogusComment(context);
        } else {
          emitError(context, 12
          /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */
          , 1);
        }
      }
    }

    if (!node) {
      node = parseText(context, mode);
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace handling strategy like v2


  var removedWhitespace = false;

  if (mode !== 2
  /* TextModes.RAWTEXT */
  && mode !== 1
  /* TextModes.RCDATA */
  ) {
    var shouldCondense = context.options.whitespace !== 'preserve';

    for (var _i = 0; _i < nodes.length; _i++) {
      var _node2 = nodes[_i];

      if (!context.inPre && _node2.type === 2
      /* NodeTypes.TEXT */
      ) {
        if (!/[^\t\r\n\f ]/.test(_node2.content)) {
          var prev = nodes[_i - 1];
          var next = nodes[_i + 1]; // Remove if:
          // - the whitespace is the first or last node, or:
          // - (condense mode) the whitespace is adjacent to a comment, or:
          // - (condense mode) the whitespace is between two elements AND contains newline

          if (!prev || !next || shouldCondense && (prev.type === 3
          /* NodeTypes.COMMENT */
          || next.type === 3
          /* NodeTypes.COMMENT */
          || prev.type === 1
          /* NodeTypes.ELEMENT */
          && next.type === 1
          /* NodeTypes.ELEMENT */
          && /[\r\n]/.test(_node2.content))) {
            removedWhitespace = true;
            nodes[_i] = null;
          } else {
            // Otherwise, the whitespace is condensed into a single space
            _node2.content = ' ';
          }
        } else if (shouldCondense) {
          // in condense mode, consecutive whitespaces in text are condensed
          // down to a single space.
          _node2.content = _node2.content.replace(/[\t\r\n\f ]+/g, ' ');
        }
      } // Remove comment nodes if desired by configuration.
      else if (_node2.type === 3
      /* NodeTypes.COMMENT */
      && !context.options.comments) {
        removedWhitespace = true;
        nodes[_i] = null;
      }
    }

    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
      // remove leading newline per html spec
      // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
      var first = nodes[0];

      if (first && first.type === 2
      /* NodeTypes.TEXT */
      ) {
        first.content = first.content.replace(/^\r?\n/, '');
      }
    }
  }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* NodeTypes.TEXT */
  ) {
    var prev = last(nodes); // Merge if both this and the previous node are text and those are
    // consecutive. This happens for cases like "a < b".

    if (prev && prev.type === 2
    /* NodeTypes.TEXT */
    && prev.loc.end.offset === node.loc.start.offset) {
      prev.content += node.content;
      prev.loc.end = node.loc.end;
      prev.loc.source += node.loc.source;
      return;
    }
  }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* TextModes.CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* ErrorCodes.EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* ErrorCodes.EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* ErrorCodes.NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* NodeTypes.COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* NodeTypes.COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* TagType.Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    // #4030 self-closing <pre> tag
    if (isPreBoundary) {
      context.inPre = false;
    }

    if (isVPreBoundary) {
      context.inVPre = false;
    }

    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop(); // 2.x inline-template compat

  {
    var inlineTemplateProp = element.props.find(function (p) {
      return p.type === 6
      /* NodeTypes.ATTRIBUTE */
      && p.name === 'inline-template';
    });

    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE"
    /* CompilerDeprecationTypes.COMPILER_INLINE_TEMPLATE */
    , context, inlineTemplateProp.loc)) {
      var loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2
        /* NodeTypes.TEXT */
        ,
        content: loc.source,
        loc: loc
      };
    }
  }
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* TagType.End */
    , parent);
  } else {
    emitError(context, 24
    /* ErrorCodes.X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["makeMap"])("if,else,else-if,for,slot");

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // Attributes.


  var props = parseAttributes(context, type); // check v-pre

  if (type === 0
  /* TagType.Start */
  && !context.inVPre && props.some(function (p) {
    return p.type === 7
    /* NodeTypes.DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* ErrorCodes.EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* TagType.End */
    && isSelfClosing) {
      emitError(context, 4
      /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  if (type === 1
  /* TagType.End */
  ) {
    return;
  } // 2.x deprecation checks


  if ( true && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE"
  /* CompilerDeprecationTypes.COMPILER_V_IF_V_FOR_PRECEDENCE */
  , context)) {
    var hasIf = false;
    var hasFor = false;

    for (var i = 0; i < props.length; i++) {
      var p = props[i];

      if (p.type === 7
      /* NodeTypes.DIRECTIVE */
      ) {
        if (p.name === 'if') {
          hasIf = true;
        } else if (p.name === 'for') {
          hasFor = true;
        }
      }

      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE"
        /* CompilerDeprecationTypes.COMPILER_V_IF_V_FOR_PRECEDENCE */
        , context, getSelection(context, start));
        break;
      }
    }
  }

  var tagType = 0
  /* ElementTypes.ELEMENT */
  ;

  if (!context.inVPre) {
    if (tag === 'slot') {
      tagType = 2
      /* ElementTypes.SLOT */
      ;
    } else if (tag === 'template') {
      if (props.some(function (p) {
        return p.type === 7
        /* NodeTypes.DIRECTIVE */
        && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3
        /* ElementTypes.TEMPLATE */
        ;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1
      /* ElementTypes.COMPONENT */
      ;
    }
  }

  return {
    type: 1
    /* NodeTypes.ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function isComponent(tag, props, context) {
  var options = context.options;

  if (options.isCustomElement(tag)) {
    return false;
  }

  if (tag === 'component' || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  } // at this point the tag should be a native tag, but check for potential "is"
  // casting


  for (var i = 0; i < props.length; i++) {
    var p = props[i];

    if (p.type === 6
    /* NodeTypes.ATTRIBUTE */
    ) {
      if (p.name === 'is' && p.value) {
        if (p.value.content.startsWith('vue:')) {
          return true;
        } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
        /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
        , context, p.loc)) {
          return true;
        }
      }
    } else {
      // directive
      // v-is (TODO Deprecate)
      if (p.name === 'is') {
        return true;
      } else if ( // :is on plain element - only treat as component in compat mode
      p.name === 'bind' && isStaticArgOf(p.arg, 'is') && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
      , context, p.loc)) {
        return true;
      }
    }
  }
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* TagType.End */
    ) {
      emitError(context, 3
      /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */
      );
    }

    var attr = parseAttribute(context, attributeNames); // Trim whitespace between class
    // https://github.com/vuejs/core/issues/4251

    if (attr.type === 6
    /* NodeTypes.ATTRIBUTE */
    && attr.value && attr.name === 'class') {
      attr.value.content = attr.value.content.replace(/\s+/g, ' ').trim();
    }

    if (type === 0
    /* TagType.Start */
    ) {
      props.push(attr);
    }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* ErrorCodes.DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var isPropShorthand = startsWith(name, '.');
    var dirName = _match[1] || (isPropShorthand || startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.lastIndexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 27
          /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
          content = content.slice(1);
        } else {
          content = content.slice(1, content.length - 1);
        }
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* NodeTypes.SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* ConstantTypes.CAN_STRINGIFY */
        : 0
        /* ConstantTypes.NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    var modifiers = _match[3] ? _match[3].slice(1).split('.') : [];
    if (isPropShorthand) modifiers.push('prop'); // 2.x compat v-bind:foo.sync -> v-model:foo

    if (dirName === 'bind' && arg) {
      if (modifiers.includes('sync') && checkCompatEnabled("COMPILER_V_BIND_SYNC"
      /* CompilerDeprecationTypes.COMPILER_V_BIND_SYNC */
      , context, loc, arg.loc.source)) {
        dirName = 'model';
        modifiers.splice(modifiers.indexOf('sync'), 1);
      }

      if ( true && modifiers.includes('prop')) {
        checkCompatEnabled("COMPILER_V_BIND_PROP"
        /* CompilerDeprecationTypes.COMPILER_V_BIND_PROP */
        , context, loc);
      }
    }

    return {
      type: 7
      /* NodeTypes.DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* NodeTypes.SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* ConstantTypes.NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: modifiers,
      loc: loc
    };
  } // missing directive name or illegal directive name


  if (!context.inVPre && startsWith(name, 'v-')) {
    emitError(context, 26
    /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */
    );
  }

  return {
    type: 6
    /* NodeTypes.ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* NodeTypes.TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* TextModes.ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* TextModes.ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* TextModes.ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* ErrorCodes.X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* NodeTypes.INTERPOLATION */
    ,
    content: {
      type: 4
      /* NodeTypes.SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* ConstantTypes.NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = mode === 3
  /* TextModes.CDATA */
  ? [']]>'] : ['<', context.options.delimiters[0]];
  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* NodeTypes.TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* TextModes.RAWTEXT */
  || mode === 3
  /* TextModes.CDATA */
  || !rawText.includes('&')) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* TextModes.ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* TextModes.DATA */
    :
      if (startsWith(s, '</')) {
        // TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* TextModes.RCDATA */
    :
    case 2
    /* TextModes.RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* TextModes.CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* NodeTypes.ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var children = node.children;
  var originalCount = children.length;
  var hoistedCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* NodeTypes.ELEMENT */
    && child.tagType === 0
    /* ElementTypes.ELEMENT */
    ) {
      var constantType = doNotHoistNode ? 0
      /* ConstantTypes.NOT_CONSTANT */
      : getConstantType(child, context);

      if (constantType > 0
      /* ConstantTypes.NOT_CONSTANT */
      ) {
        if (constantType >= 2
        /* ConstantTypes.CAN_HOIST */
        ) {
          child.codegenNode.patchFlag = -1
          /* PatchFlags.HOISTED */
          + ( true ? " /* HOISTED */" : undefined);
          child.codegenNode = context.hoist(child.codegenNode);
          hoistedCount++;
          continue;
        }
      } else {
        // node may contain dynamic children, but its props may be eligible for
        // hoisting.
        var codegenNode = child.codegenNode;

        if (codegenNode.type === 13
        /* NodeTypes.VNODE_CALL */
        ) {
          var flag = getPatchFlag(codegenNode);

          if ((!flag || flag === 512
          /* PatchFlags.NEED_PATCH */
          || flag === 1
          /* PatchFlags.TEXT */
          ) && getGeneratedPropsConstantType(child, context) >= 2
          /* ConstantTypes.CAN_HOIST */
          ) {
            var props = getNodeProps(child);

            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }

          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12
    /* NodeTypes.TEXT_CALL */
    && getConstantType(child.content, context) >= 2
    /* ConstantTypes.CAN_HOIST */
    ) {
      child.codegenNode = context.hoist(child.codegenNode);
      hoistedCount++;
    } // walk further


    if (child.type === 1
    /* NodeTypes.ELEMENT */
    ) {
      var _isComponent = child.tagType === 1
      /* ElementTypes.COMPONENT */
      ;

      if (_isComponent) {
        context.scopes.vSlot++;
      }

      walk(child, context);

      if (_isComponent) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11
    /* NodeTypes.FOR */
    ) {
      // Do not hoist v-for single child because it has to be a block
      walk(child, context, child.children.length === 1);
    } else if (child.type === 9
    /* NodeTypes.IF */
    ) {
      for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
        // Do not hoist v-if single child because it has to be a block
        walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
      }
    }
  }

  if (hoistedCount && context.transformHoist) {
    context.transformHoist(children, context, node);
  } // all children were hoisted - the entire children array is hoistable.


  if (hoistedCount && hoistedCount === originalCount && node.type === 1
  /* NodeTypes.ELEMENT */
  && node.tagType === 0
  /* ElementTypes.ELEMENT */
  && node.codegenNode && node.codegenNode.type === 13
  /* NodeTypes.VNODE_CALL */
  && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(node.codegenNode.children)) {
    node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* NodeTypes.ELEMENT */
    :
      if (node.tagType !== 0
      /* ElementTypes.ELEMENT */
      ) {
        return 0
        /* ConstantTypes.NOT_CONSTANT */
        ;
      }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* NodeTypes.VNODE_CALL */
      ) {
        return 0
        /* ConstantTypes.NOT_CONSTANT */
        ;
      }

      if (codegenNode.isBlock && node.tag !== 'svg' && node.tag !== 'foreignObject') {
        return 0
        /* ConstantTypes.NOT_CONSTANT */
        ;
      }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* ConstantTypes.CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* ConstantTypes.NOT_CONSTANT */
        ) {
          constantCache.set(node, 0
          /* ConstantTypes.NOT_CONSTANT */
          );
          return 0
          /* ConstantTypes.NOT_CONSTANT */
          ;
        }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* ConstantTypes.NOT_CONSTANT */
          ) {
            constantCache.set(node, 0
            /* ConstantTypes.NOT_CONSTANT */
            );
            return 0
            /* ConstantTypes.NOT_CONSTANT */
            ;
          }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* ConstantTypes.CAN_SKIP_PATCH */
        ) {
          for (var _i3 = 0; _i3 < node.props.length; _i3++) {
            var p = node.props[_i3];

            if (p.type === 7
            /* NodeTypes.DIRECTIVE */
            && p.name === 'bind' && p.exp) {
              var expType = getConstantType(p.exp, context);

              if (expType === 0
              /* ConstantTypes.NOT_CONSTANT */
              ) {
                constantCache.set(node, 0
                /* ConstantTypes.NOT_CONSTANT */
                );
                return 0
                /* ConstantTypes.NOT_CONSTANT */
                ;
              }

              if (expType < _returnType) {
                _returnType = expType;
              }
            }
          }
        } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          // except set custom directives.
          for (var _i4 = 0; _i4 < node.props.length; _i4++) {
            var _p = node.props[_i4];

            if (_p.type === 7
            /* NodeTypes.DIRECTIVE */
            ) {
              constantCache.set(node, 0
              /* ConstantTypes.NOT_CONSTANT */
              );
              return 0
              /* ConstantTypes.NOT_CONSTANT */
              ;
            }
          }

          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* ConstantTypes.NOT_CONSTANT */
        );
        return 0
        /* ConstantTypes.NOT_CONSTANT */
        ;
      }

    case 2
    /* NodeTypes.TEXT */
    :
    case 3
    /* NodeTypes.COMMENT */
    :
      return 3
      /* ConstantTypes.CAN_STRINGIFY */
      ;

    case 9
    /* NodeTypes.IF */
    :
    case 11
    /* NodeTypes.FOR */
    :
    case 10
    /* NodeTypes.IF_BRANCH */
    :
      return 0
      /* ConstantTypes.NOT_CONSTANT */
      ;

    case 5
    /* NodeTypes.INTERPOLATION */
    :
    case 12
    /* NodeTypes.TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* NodeTypes.COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* ConstantTypes.CAN_STRINGIFY */
      ;

      for (var _i5 = 0; _i5 < node.children.length; _i5++) {
        var child = node.children[_i5];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(child) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isSymbol"])(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* ConstantTypes.NOT_CONSTANT */
        ) {
          return 0
          /* ConstantTypes.NOT_CONSTANT */
          ;
        } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* ConstantTypes.NOT_CONSTANT */
      ;
  }
}

var allowHoistedHelperSet = new Set([NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);

function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14
  /* NodeTypes.JS_CALL_EXPRESSION */
  && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    var arg = value.arguments[0];

    if (arg.type === 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    ) {
      return getConstantType(arg, context);
    } else if (arg.type === 14
    /* NodeTypes.JS_CALL_EXPRESSION */
    ) {
      // in the case of nested helper call, e.g. `normalizeProps(guardReactiveProps(exp))`
      return getConstantTypeOfHelperCall(arg, context);
    }
  }

  return 0
  /* ConstantTypes.NOT_CONSTANT */
  ;
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* ConstantTypes.CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* NodeTypes.JS_OBJECT_EXPRESSION */
  ) {
    var properties = props.properties;

    for (var i = 0; i < properties.length; i++) {
      var _properties$i = properties[i],
          key = _properties$i.key,
          value = _properties$i.value;
      var keyType = getConstantType(key, context);

      if (keyType === 0
      /* ConstantTypes.NOT_CONSTANT */
      ) {
        return keyType;
      }

      if (keyType < returnType) {
        returnType = keyType;
      }

      var valueType = void 0;

      if (value.type === 4
      /* NodeTypes.SIMPLE_EXPRESSION */
      ) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14
      /* NodeTypes.JS_CALL_EXPRESSION */
      ) {
        // some helper calls can be hoisted,
        // such as the `normalizeProps` generated by the compiler for pre-normalize class,
        // in this case we need to respect the ConstantType of the helper's arguments
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0
        /* ConstantTypes.NOT_CONSTANT */
        ;
      }

      if (valueType === 0
      /* ConstantTypes.NOT_CONSTANT */
      ) {
        return valueType;
      }

      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* NodeTypes.VNODE_CALL */
  ) {
    return codegenNode.props;
  }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref2) {
  var _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? '' : _ref2$filename,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? false : _ref2$prefixIdentifie,
      _ref2$hoistStatic = _ref2.hoistStatic,
      hoistStatic = _ref2$hoistStatic === void 0 ? false : _ref2$hoistStatic,
      _ref2$cacheHandlers = _ref2.cacheHandlers,
      cacheHandlers = _ref2$cacheHandlers === void 0 ? false : _ref2$cacheHandlers,
      _ref2$nodeTransforms = _ref2.nodeTransforms,
      nodeTransforms = _ref2$nodeTransforms === void 0 ? [] : _ref2$nodeTransforms,
      _ref2$directiveTransf = _ref2.directiveTransforms,
      directiveTransforms = _ref2$directiveTransf === void 0 ? {} : _ref2$directiveTransf,
      _ref2$transformHoist = _ref2.transformHoist,
      transformHoist = _ref2$transformHoist === void 0 ? null : _ref2$transformHoist,
      _ref2$isBuiltInCompon = _ref2.isBuiltInComponent,
      isBuiltInComponent = _ref2$isBuiltInCompon === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NOOP"] : _ref2$isBuiltInCompon,
      _ref2$isCustomElement = _ref2.isCustomElement,
      isCustomElement = _ref2$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_5__["NOOP"] : _ref2$isCustomElement,
      _ref2$expressionPlugi = _ref2.expressionPlugins,
      expressionPlugins = _ref2$expressionPlugi === void 0 ? [] : _ref2$expressionPlugi,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$slotted = _ref2.slotted,
      slotted = _ref2$slotted === void 0 ? true : _ref2$slotted,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr,
      _ref2$inSSR = _ref2.inSSR,
      inSSR = _ref2$inSSR === void 0 ? false : _ref2$inSSR,
      _ref2$ssrCssVars = _ref2.ssrCssVars,
      ssrCssVars = _ref2$ssrCssVars === void 0 ? "" : _ref2$ssrCssVars,
      _ref2$bindingMetadata = _ref2.bindingMetadata,
      bindingMetadata = _ref2$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_5__["EMPTY_OBJ"] : _ref2$bindingMetadata,
      _ref2$inline = _ref2.inline,
      inline = _ref2$inline === void 0 ? false : _ref2$inline,
      _ref2$isTS = _ref2.isTS,
      isTS = _ref2$isTS === void 0 ? false : _ref2$isTS,
      _ref2$onError = _ref2.onError,
      onError = _ref2$onError === void 0 ? defaultOnError : _ref2$onError,
      _ref2$onWarn = _ref2.onWarn,
      onWarn = _ref2$onWarn === void 0 ? defaultOnWarn : _ref2$onWarn,
      compatConfig = _ref2.compatConfig;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["camelize"])(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    slotted: slotted,
    ssr: ssr,
    inSSR: inSSR,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    onWarn: onWarn,
    compatConfig: compatConfig,
    // state
    root: root,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper: function helper(name) {
      var count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper: function removeHelper(name) {
      var count = context.helpers.get(name);

      if (count) {
        var currentCount = count - 1;

        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* ConstantTypes.CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(context.cached++, exp, isVNode);
    }
  };
  {
    context.filters = new Set();
  }
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(context.helpers.keys());
  root.components = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(context.components);
  root.directives = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(context.directives);
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(context.filters);
  }
}

function createRootCodegen(root, context) {
  var helper = context.helper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* NodeTypes.VNODE_CALL */
      ) {
        makeBlock(codegenNode, context);
      }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* PatchFlags.STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][64
    /* PatchFlags.STABLE_FRAGMENT */
    ]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* NodeTypes.COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* PatchFlags.DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][2048
      /* PatchFlags.DEV_ROOT_FRAGMENT */
      ]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : undefined), undefined, undefined, true, undefined, false
    /* isComponent */
    );
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i6 = 0; _i6 < nodeTransforms.length; _i6++) {
    var onExit = nodeTransforms[_i6](node, context);

    if (onExit) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(onExit)) {
        exitFns.push.apply(exitFns, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* NodeTypes.COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* NodeTypes.INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* NodeTypes.IF */
    :
      for (var _i7 = 0; _i7 < node.branches.length; _i7++) {
        traverseNode(node.branches[_i7], context);
      }

      break;

    case 10
    /* NodeTypes.IF_BRANCH */
    :
    case 11
    /* NodeTypes.FOR */
    :
    case 1
    /* NodeTypes.ELEMENT */
    :
    case 0
    /* NodeTypes.ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* NodeTypes.ELEMENT */
    ) {
      var props = node.props; // structural directive transforms are not concerned with slots
      // as they are handled separately in vSlot.ts

      if (node.tagType === 3
      /* ElementTypes.TEMPLATE */
      && props.some(isVSlot)) {
        return;
      }

      var exitFns = [];

      for (var i = 0; i < props.length; i++) {
        var prop = props[i];

        if (prop.type === 7
        /* NodeTypes.DIRECTIVE */
        && matches(prop.name)) {
          // structural directives are removed to avoid infinite recursion
          // also we remove them *before* applying so that it can further
          // traverse itself in case it moves the node around
          props.splice(i, 1);
          i--;
          var onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }

      return exitFns;
    }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

var aliasHelper = function aliasHelper(s) {
  return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
};

function createCodegenContext(ast, _ref3) {
  var _ref3$mode = _ref3.mode,
      mode = _ref3$mode === void 0 ? 'function' : _ref3$mode,
      _ref3$prefixIdentifie = _ref3.prefixIdentifiers,
      prefixIdentifiers = _ref3$prefixIdentifie === void 0 ? mode === 'module' : _ref3$prefixIdentifie,
      _ref3$sourceMap = _ref3.sourceMap,
      sourceMap = _ref3$sourceMap === void 0 ? false : _ref3$sourceMap,
      _ref3$filename = _ref3.filename,
      filename = _ref3$filename === void 0 ? "template.vue.html" : _ref3$filename,
      _ref3$scopeId = _ref3.scopeId,
      scopeId = _ref3$scopeId === void 0 ? null : _ref3$scopeId,
      _ref3$optimizeImports = _ref3.optimizeImports,
      optimizeImports = _ref3$optimizeImports === void 0 ? false : _ref3$optimizeImports,
      _ref3$runtimeGlobalNa = _ref3.runtimeGlobalName,
      runtimeGlobalName = _ref3$runtimeGlobalNa === void 0 ? "Vue" : _ref3$runtimeGlobalNa,
      _ref3$runtimeModuleNa = _ref3.runtimeModuleName,
      runtimeModuleName = _ref3$runtimeModuleNa === void 0 ? "vue" : _ref3$runtimeModuleNa,
      _ref3$ssrRuntimeModul = _ref3.ssrRuntimeModuleName,
      ssrRuntimeModuleName = _ref3$ssrRuntimeModul === void 0 ? 'vue/server-renderer' : _ref3$ssrRuntimeModul,
      _ref3$ssr = _ref3.ssr,
      ssr = _ref3$ssr === void 0 ? false : _ref3$ssr,
      _ref3$isTS = _ref3.isTS,
      isTS = _ref3$isTS === void 0 ? false : _ref3$isTS,
      _ref3$inSSR = _ref3.inSSR,
      inSSR = _ref3$inSSR === void 0 ? false : _ref3$inSSR;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssrRuntimeModuleName: ssrRuntimeModuleName,
    ssr: ssr,
    isTS: isTS,
    inSSR: inSSR,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(aliasHelper).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, 'filter', context);
    newline();
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName,
      ssrRuntimeModuleName = context.ssrRuntimeModuleName;
  var VueBinding = runtimeGlobalName; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.

  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref4) {
  var helper = _ref4.helper,
      push = _ref4.push,
      newline = _ref4.newline,
      isTS = _ref4.isTS;
  var resolver = helper(type === 'filter' ? RESOLVE_FILTER : type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i]; // potential component implicit self-reference inferred from SFC filename

    var maybeSelfReference = id.endsWith('__self');

    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }

    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id)).concat(maybeSelfReference ? ", true" : "", ")").concat(isTS ? "!" : ""));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();

  for (var i = 0; i < hoists.length; i++) {
    var exp = hoists[i];

    if (exp) {
      push("const _hoisted_".concat(i + 1, " = ", ""));
      genNode(exp, context);
      newline();
    }
  }

  context.pure = false;
}

function isText$1(n) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(n) || n.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  || n.type === 2
  /* NodeTypes.TEXT */
  || n.type === 5
  /* NodeTypes.INTERPOLATION */
  || n.type === 8
  /* NodeTypes.COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(node)) {
      push(node);
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(node)) {
    context.push(node);
    return;
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isSymbol"])(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* NodeTypes.ELEMENT */
    :
    case 9
    /* NodeTypes.IF */
    :
    case 11
    /* NodeTypes.FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* NodeTypes.TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* NodeTypes.INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* NodeTypes.TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* NodeTypes.COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* NodeTypes.COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* NodeTypes.VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* NodeTypes.JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* NodeTypes.JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* NodeTypes.JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* NodeTypes.JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* NodeTypes.JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;

    case 21
    /* NodeTypes.JS_BLOCK_STATEMENT */
    :
      genNodeList(node.body, context, true, false);
      break;
    // SSR only types

    case 22
    /* NodeTypes.JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* NodeTypes.JS_IF_STATEMENT */
    :
      break;

    case 24
    /* NodeTypes.JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* NodeTypes.JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* NodeTypes.JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* NodeTypes.IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* NodeTypes.COMPOUND_EXPRESSION */
  ) {
    push("[");
    genCompoundExpression(node, context);
    push("]");
  } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking,
      isComponent = node.isComponent;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  var callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
  push(helper(callHelper) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* NodeTypes.SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    // wrap slot functions with owner context
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isArray"])(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(", undefined, true");
    }

    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ) {
    var needsParens = !isSimpleIdentifier(test.content);
    needsParens && push("(");
    genExpression(test, context);
    needsParens && push(")");
  } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
}

function walkIdentifiers(root, onIdentifier) {
  var includeAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parentStack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var knownIds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(null);
  {
    return;
  }
}

function isReferencedIdentifier(id, parent, parentStack) {
  {
    return false;
  }
}

function isInDestructureAssignment(parent, parentStack) {
  if (parent && (parent.type === 'ObjectProperty' || parent.type === 'ArrayPattern')) {
    var i = parentStack.length;

    while (i--) {
      var p = parentStack[i];

      if (p.type === 'AssignmentExpression') {
        return true;
      } else if (p.type !== 'ObjectProperty' && !p.type.endsWith('Pattern')) {
        break;
      }
    }
  }

  return false;
}

function walkFunctionParams(node, onIdent) {
  var _iterator = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(node.params),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;

      var _iterator2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(extractIdentifiers(p)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;
          onIdent(id);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function walkBlockDeclarations(block, onIdent) {
  var _iterator3 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(block.body),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var stmt = _step3.value;

      if (stmt.type === 'VariableDeclaration') {
        if (stmt.declare) continue;

        var _iterator4 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(stmt.declarations),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var decl = _step4.value;

            var _iterator5 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(extractIdentifiers(decl.id)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var id = _step5.value;
                onIdent(id);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else if (stmt.type === 'FunctionDeclaration' || stmt.type === 'ClassDeclaration') {
        if (stmt.declare || !stmt.id) continue;
        onIdent(stmt.id);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function extractIdentifiers(param) {
  var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  switch (param.type) {
    case 'Identifier':
      nodes.push(param);
      break;

    case 'MemberExpression':
      var object = param;

      while (object.type === 'MemberExpression') {
        object = object.object;
      }

      nodes.push(object);
      break;

    case 'ObjectPattern':
      var _iterator6 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(param.properties),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var prop = _step6.value;

          if (prop.type === 'RestElement') {
            extractIdentifiers(prop.argument, nodes);
          } else {
            extractIdentifiers(prop.value, nodes);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      break;

    case 'ArrayPattern':
      param.elements.forEach(function (element) {
        if (element) extractIdentifiers(element, nodes);
      });
      break;

    case 'RestElement':
      extractIdentifiers(param.argument, nodes);
      break;

    case 'AssignmentPattern':
      extractIdentifiers(param.left, nodes);
      break;
  }

  return nodes;
}

var isFunctionType = function isFunctionType(node) {
  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
};

var isStaticProperty = function isStaticProperty(node) {
  return node && (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') && !node.computed;
};

var isStaticPropertyKey = function isStaticPropertyKey(node, parent) {
  return isStaticProperty(parent) && parent.key === node;
}; // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(44
    /* ErrorCodes.X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* NodeTypes.INTERPOLATION */
  ) {
    node.content = processExpression(node.content, context);
  } else if (node.type === 1
  /* NodeTypes.ELEMENT */
  ) {
    // handle directives on element
    for (var i = 0; i < node.props.length; i++) {
      var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

      if (dir.type === 7
      /* NodeTypes.DIRECTIVE */
      && dir.name !== 'for') {
        var exp = dir.exp;
        var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
        // for wrapping inline statements.

        if (exp && exp.type === 4
        /* NodeTypes.SIMPLE_EXPRESSION */
        && !(dir.name === 'on' && arg)) {
          dir.exp = processExpression(exp, context, // slot args must be processed as function params
          dir.name === 'slot');
        }

        if (arg && arg.type === 4
        /* NodeTypes.SIMPLE_EXPRESSION */
        && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var localVars = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object.create(context.identifiers);
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* NodeTypes.IF */
      ) {
        key += sibling.branches.length;
      }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(28
    /* ErrorCodes.X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* NodeTypes.IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* NodeTypes.COMMENT */
      ) {
        context.removeNode(sibling);
        comments.unshift(sibling);
        continue;
      }

      if (sibling && sibling.type === 2
      /* NodeTypes.TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* NodeTypes.IF */
      ) {
        (function () {
          // Check if v-else was followed by v-else-if
          if (dir.name === 'else-if' && sibling.branches[sibling.branches.length - 1].condition === undefined) {
            context.onError(createCompilerError(30
            /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
            , node.loc));
          } // move the node to the if node's branches


          context.removeNode();
          var branch = createIfBranch(node, dir);

          if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
          !(context.parent && context.parent.type === 1
          /* NodeTypes.ELEMENT */
          && isBuiltInType(context.parent.tag, 'transition'))) {
            branch.children = [].concat(comments, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(branch.children));
          } // check if user is forcing same key on different branches


          if (true) {
            var key = branch.userKey;

            if (key) {
              sibling.branches.forEach(function (_ref5) {
                var userKey = _ref5.userKey;

                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(29
                  /* ErrorCodes.X_V_IF_SAME_KEY */
                  , branch.userKey.loc));
                }
              });
            }
          }

          sibling.branches.push(branch);
          var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
          // make sure to traverse here.

          traverseNode(branch, context); // call on exit

          if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
          // node has been removed.

          context.currentNode = null;
        })();
      } else {
        context.onError(createCompilerError(30
        /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  var isTemplateIf = node.tagType === 3
  /* ElementTypes.TEMPLATE */
  ;
  return {
    type: 10
    /* NodeTypes.IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: isTemplateIf && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key"),
    isTemplateIf: isTemplateIf
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : undefined, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* ConstantTypes.CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* NodeTypes.ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* NodeTypes.FOR */
    ) {
      // optimize away nested fragments when child is a ForNode
      var vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      var patchFlag = 64
      /* PatchFlags.STABLE_FRAGMENT */
      ;
      var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][64
      /* PatchFlags.STABLE_FRAGMENT */
      ]; // check if the fragment actually contains a single valid child with
      // the rest being comments

      if ( true && !branch.isTemplateIf && children.filter(function (c) {
        return c.type !== 3;
      }
      /* NodeTypes.COMMENT */
      ).length === 1) {
        patchFlag |= 2048
        /* PatchFlags.DEV_ROOT_FRAGMENT */
        ;
        patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][2048
        /* PatchFlags.DEV_ROOT_FRAGMENT */
        ]);
      }

      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : undefined), undefined, undefined, true, false, false
      /* isComponent */
      , branch.loc);
    }
  } else {
    var ret = firstChild.codegenNode;

    var _vnodeCall = getMemoedVNodeCall(ret); // Change createVNode to createBlock.


    if (_vnodeCall.type === 13
    /* NodeTypes.VNODE_CALL */
    ) {
      makeBlock(_vnodeCall, context);
    } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return ret;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* NodeTypes.ATTRIBUTE */
  ) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
    ) {
      if (node.alternate.type === 19
      /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
      ) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20
    /* NodeTypes.JS_CACHE_EXPRESSION */
    ) {
      node = node.value;
    }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var isTemplate = isTemplateNode(node);
    var memo = findDir(node, 'memo');
    var keyProp = findProp(node, "key");
    var keyExp = keyProp && (keyProp.type === 6
    /* NodeTypes.ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
    var keyProperty = keyProp ? createObjectProperty("key", keyExp) : null;
    var isStableFragment = forNode.source.type === 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    && forNode.source.constType > 0
    /* ConstantTypes.NOT_CONSTANT */
    ;
    var fragmentFlag = isStableFragment ? 64
    /* PatchFlags.STABLE_FRAGMENT */
    : keyProp ? 128
    /* PatchFlags.KEYED_FRAGMENT */
    : 256
    /* PatchFlags.UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][fragmentFlag], " */") : undefined), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , false
    /* isComponent */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* NodeTypes.ELEMENT */
          ) {
            var key = findProp(c, 'key');

            if (key) {
              context.onError(createCompilerError(33
              /* ErrorCodes.X_V_FOR_TEMPLATE_KEY_PLACEMENT */
              , key.loc));
              return true;
            }
          }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* NodeTypes.ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* PatchFlags.STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][64
        /* PatchFlags.STABLE_FRAGMENT */
        ], " */") : undefined), undefined, undefined, true, undefined, false
        /* isComponent */
        );
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        if (childBlock.isBlock !== !isStableFragment) {
          if (childBlock.isBlock) {
            // switch from block to vnode
            removeHelper(OPEN_BLOCK);
            removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            // switch from vnode to block
            removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
        } else {
          helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
        }
      }

      if (memo) {
        var loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [createSimpleExpression("_cached")]));
        loop.body = createBlockStatement([createCompoundExpression(["const _memo = (", memo.exp, ")"]), createCompoundExpression(["if (_cached"].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(keyExp ? [" && _cached.key === ", keyExp] : []), [" && ".concat(context.helperString(IS_MEMO_SAME), "(_cached, _memo)) return _cached")])), createCompoundExpression(["const _item = ", childBlock]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]);
        renderExp.arguments.push(loop, createSimpleExpression("_cache"), createSimpleExpression(String(context.cached++)));
      } else {
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
        /* force newline */
        ));
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(31
    /* ErrorCodes.X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(32
    /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* NodeTypes.FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref6) {
  var value = _ref6.value,
      key = _ref6.key,
      index = _ref6.index;
  var memoArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return createParamsList([value, key, index].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(memoArgs)));
}

function createParamsList(args) {
  var i = args.length;

  while (i--) {
    if (args[i]) break;
  }

  return args.slice(0, i + 1).map(function (arg, i) {
    return arg || createSimpleExpression("_".repeat(i + 1), false);
  });
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  && (node.tagType === 1
  /* ElementTypes.COMPONENT */
  || node.tagType === 3
  /* ElementTypes.TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = []; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.

  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();
  var conditionalBranchIndex = 0;

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* NodeTypes.COMMENT */
      ) {
        implicitDefaultChildren.push(slotElement);
      }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(37
      /* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* NodeTypes.COMMENT */
        ) {
          break;
        }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* NodeTypes.JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(createCompilerError(30
        /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(32
        /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(38
          /* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
      var fn = buildSlotFn(props, children, loc);

      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }

      return createObjectProperty("default", fn);
    };

    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some(function (node) {
      return isNonWhitespaceContent(node);
    })) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(39
        /* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* SlotFlags.DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* SlotFlags.FORWARDED */
  : 1
  /* SlotFlags.STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["slotFlagsText"][slotFlag], " */") : undefined), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn, index) {
  var props = [createObjectProperty("name", name), createObjectProperty("fn", fn)];

  if (index != null) {
    props.push(createObjectProperty("key", createSimpleExpression(String(index), true)));
  }

  return createObjectExpression(props);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.type) {
      case 1
      /* NodeTypes.ELEMENT */
      :
        if (child.tagType === 2
        /* ElementTypes.SLOT */
        || hasForwardedSlots(child.children)) {
          return true;
        }

        break;

      case 9
      /* NodeTypes.IF */
      :
        if (hasForwardedSlots(child.branches)) return true;
        break;

      case 10
      /* NodeTypes.IF_BRANCH */
      :
      case 11
      /* NodeTypes.FOR */
      :
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }

  return false;
}

function isNonWhitespaceContent(node) {
  if (node.type !== 2
  /* NodeTypes.TEXT */
  && node.type !== 12
  /* NodeTypes.TEXT_CALL */
  ) return true;
  return node.type === 2
  /* NodeTypes.TEXT */
  ? !!node.content.trim() : isNonWhitespaceContent(node.content);
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  // perform the work on exit, after all child expressions have been
  // processed and merged.
  return function postTransformElement() {
    node = context.currentNode;

    if (!(node.type === 1
    /* NodeTypes.ELEMENT */
    && (node.tagType === 0
    /* ElementTypes.ELEMENT */
    || node.tagType === 1
    /* ElementTypes.COMPONENT */
    ))) {
      return;
    }

    var _node3 = node,
        tag = _node3.tag,
        props = _node3.props;
    var isComponent = node.tagType === 1
    /* ElementTypes.COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isObject"])(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject'); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context, undefined, isComponent, isDynamicComponent);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;

      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* PatchFlags.DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(45
          /* ErrorCodes.X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* PatchFlags.DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* NodeTypes.INTERPOLATION */
        || type === 8
        /* NodeTypes.COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* ConstantTypes.NOT_CONSTANT */
        ) {
          patchFlag |= 1
          /* PatchFlags.TEXT */
          ;
        } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* NodeTypes.TEXT */
        ) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"]).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , isComponent, node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isExplicitDynamic = isComponentTag(tag);
  var isProp = findProp(node, 'is');

  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
    /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
    , context)) {
      var exp = isProp.type === 6
      /* NodeTypes.ATTRIBUTE */
      ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    } else if (isProp.type === 6
    /* NodeTypes.ATTRIBUTE */
    && isProp.value.content.startsWith('vue:')) {
      // <button is="vue:xxx">
      // if not <component>, only is value that starts with "vue:" will be
      // treated as component by the parse phase and reach here, unless it's
      // compat mode where all is values are considered components
      tag = isProp.value.content.slice(4);
    }
  } // 1.5 v-is (TODO: Deprecate)


  var isDir = !isExplicitDynamic && findDir(node, 'is');

  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [isDir.exp]);
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var isComponent = arguments.length > 3 ? arguments[3] : undefined;
  var isDynamicComponent = arguments.length > 4 ? arguments[4] : undefined;
  var ssr = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var tag = node.tag,
      elementLoc = node.loc,
      children = node.children;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = [];
  var hasChildren = children.length > 0;
  var shouldUseBlock = false; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref7) {
    var key = _ref7.key,
        value = _ref7.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isOn"])(name);

      if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isReservedProp"])(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isReservedProp"])(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* NodeTypes.JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* NodeTypes.SIMPLE_EXPRESSION */
      || value.type === 8
      /* NodeTypes.COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class') {
        hasClassBinding = true;
      } else if (name === 'style') {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      } // treat the dynamic class and style binding of the component as dynamic props


      if (isComponent && (name === 'class' || name === 'style') && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* NodeTypes.ATTRIBUTE */
    ) {
      var loc = prop.loc,
          name = prop.name,
          value = prop.value;
      var isStatic = true;

      if (name === 'ref') {
        hasRef = true;

        if (context.scopes.vFor > 0) {
          properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
        }
      } // skip is on <component>, or is="vue:xxx"


      if (name === 'is' && (isComponentTag(tag) || value && value.content.startsWith('vue:') || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      }

      properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
    } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isVBind = _name === 'bind';
      var isVOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(40
          /* ErrorCodes.X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once/v-memo - they are handled by dedicated transforms.


      if (_name === 'once' || _name === 'memo') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isVBind && isStaticArgOf(arg, 'is') && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* CompilerDeprecationTypes.COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      } // skip v-on in SSR compilation


      if (isVOn && ssr) {
        continue;
      }

      if ( // #938: elements with dynamic keys should be forced into blocks
      isVBind && isStaticArgOf(arg, 'key') || // inline before-update hooks need to force block so that it is invoked
      // before children
      isVOn && hasChildren && isStaticArgOf(arg, 'vue:before-update')) {
        shouldUseBlock = true;
      }

      if (isVBind && isStaticArgOf(arg, 'ref') && context.scopes.vFor > 0) {
        properties.push(createObjectProperty(createSimpleExpression('ref_for', true), createSimpleExpression('true')));
      } // special case for v-bind and v-on with no argument


      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isVBind) {
            {
              // 2.x v-bind object order compat
              if (true) {
                var hasOverridableKeys = mergeArgs.some(function (arg) {
                  if (arg.type === 15
                  /* NodeTypes.JS_OBJECT_EXPRESSION */
                  ) {
                    return arg.properties.some(function (_ref8) {
                      var key = _ref8.key;

                      if (key.type !== 4
                      /* NodeTypes.SIMPLE_EXPRESSION */
                      || !key.isStatic) {
                        return true;
                      }

                      return key.content !== 'class' && key.content !== 'style' && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isOn"])(key.content);
                    });
                  } else {
                    // dynamic expression
                    return true;
                  }
                });

                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
                  /* CompilerDeprecationTypes.COMPILER_V_BIND_OBJECT_ORDER */
                  , context, _loc2);
                }
              }

              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
              /* CompilerDeprecationTypes.COMPILER_V_BIND_OBJECT_ORDER */
              , context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* NodeTypes.JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent ? [exp] : [exp, "true"]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 34
          /* ErrorCodes.X_V_BIND_NO_EXPRESSION */
          : 35
          /* ErrorCodes.X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isSymbol"])(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isBuiltInDirective"])(_name)) {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop); // custom dirs may use beforeUpdate so they need to force blocks
        // to ensure before-update gets called before children update

        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* PatchFlags.FULL_PROPS */
    ;
  } else {
    if (hasClassBinding && !isComponent) {
      patchFlag |= 2
      /* PatchFlags.CLASS */
      ;
    }

    if (hasStyleBinding && !isComponent) {
      patchFlag |= 4
      /* PatchFlags.STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PatchFlags.PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* PatchFlags.HYDRATE_EVENTS */
      ;
    }
  }

  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32
  /* PatchFlags.HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* PatchFlags.NEED_PATCH */
    ;
  } // pre-normalize props, SSR is skipped for now


  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15
      /* NodeTypes.JS_OBJECT_EXPRESSION */
      :
        // means that there is no v-bind,
        // but still need to deal with dynamic key binding
        var classKeyIndex = -1;
        var styleKeyIndex = -1;
        var hasDynamicKey = false;

        for (var _i8 = 0; _i8 < propsExpression.properties.length; _i8++) {
          var key = propsExpression.properties[_i8].key;

          if (isStaticExp(key)) {
            if (key.content === 'class') {
              classKeyIndex = _i8;
            } else if (key.content === 'style') {
              styleKeyIndex = _i8;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }

        var classProp = propsExpression.properties[classKeyIndex];
        var styleProp = propsExpression.properties[styleKeyIndex]; // no dynamic key

        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [classProp.value]);
          }

          if (styleProp && ( // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          hasStyleBinding || styleProp.value.type === 4
          /* NodeTypes.SIMPLE_EXPRESSION */
          && styleProp.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17
          /* NodeTypes.JS_ARRAY_EXPRESSION */
          )) {
            styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [styleProp.value]);
          }
        } else {
          // dynamic key binding, wrap with `normalizeProps`
          propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [propsExpression]);
        }

        break;

      case 14
      /* NodeTypes.JS_CALL_EXPRESSION */
      :
        // mergeProps call, do nothing
        break;

      default:
        // single v-bind
        propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [propsExpression])]);
        break;
    }
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames,
    shouldUseBlock: shouldUseBlock
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* NodeTypes.COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isOn"])(name)) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* NodeTypes.JS_ARRAY_EXPRESSION */
  ) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

function isComponentTag(tag) {
  return tag === 'component' || tag === 'Component';
}

 true ? Object.freeze({}) : undefined;
 true ? Object.freeze([]) : undefined;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName, '{}', 'undefined', 'true'];
    var expectedLen = 2;

    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }

    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }

    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }

    slotArgs.splice(expectedLen); // remove unused arguments

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* NodeTypes.ATTRIBUTE */
    ) {
      if (p.value) {
        if (p.name === 'name') {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === 'bind' && isStaticArgOf(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps, false, false),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(36
      /* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35
    /* ErrorCodes.X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      var rawName = arg.content; // TODO deprecate @vnodeXXX usage

      if (rawName.startsWith('vue:')) {
        rawName = "vnode-".concat(rawName.slice(4));
      }

      var eventString = node.tagType === 1
      /* ElementTypes.COMPONENT */
      || rawName.startsWith('vnode') || !/[A-Z]/.test(rawName) ? // for component and vnode lifecycle event listeners, auto convert
      // it to camelCase. See issue #2249
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["camelize"])(rawName)) // preserve case for plain element listeners that have uppercase
      // letters, as these may be custom elements' custom events
      : "on:".concat(rawName);
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      // #2388
      eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
    }
  } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp && !context.inVOnce;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  } // mark the key as handler for props normalization check


  ret.props.forEach(function (p) {
    return p.key.isHandlerKey = true;
  });
  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, _node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ) {
    arg.children.unshift("(");
    arg.children.push(") || \"\"");
  } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    ) {
      if (arg.isStatic) {
        arg.content = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["camelize"])(arg.content);
      } else {
        arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
      }
    } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!context.inSSR) {
    if (modifiers.includes('prop')) {
      injectPrefix(arg, '.');
    }

    if (modifiers.includes('attr')) {
      injectPrefix(arg, '^');
    }
  }

  if (!exp || exp.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(34
    /* ErrorCodes.X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
};

var injectPrefix = function injectPrefix(arg, prefix) {
  if (arg.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = "`".concat(prefix, "${").concat(arg.content, "}`");
    }
  } else {
    arg.children.unshift("'".concat(prefix, "' + ("));
    arg.children.push(")");
  }
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* NodeTypes.ROOT */
  || node.type === 1
  /* NodeTypes.ELEMENT */
  || node.type === 11
  /* NodeTypes.FOR */
  || node.type === 10
  /* NodeTypes.IF_BRANCH */
  ) {
    // perform the transform on node exit so that all expressions have already
    // been processed.
    return function () {
      var children = node.children;
      var currentContainer = undefined;
      var hasText = false;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (isText(child)) {
          hasText = true;

          for (var j = i + 1; j < children.length; j++) {
            var next = children[j];

            if (isText(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression([child], child.loc);
              } // merge adjacent text node into current


              currentContainer.children.push(" + ", next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = undefined;
              break;
            }
          }
        }
      }

      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0
      /* NodeTypes.ROOT */
      || node.type === 1
      /* NodeTypes.ELEMENT */
      && node.tagType === 0
      /* ElementTypes.ELEMENT */
      && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(function (p) {
        return p.type === 7
        /* NodeTypes.DIRECTIVE */
        && !context.directiveTransforms[p.name];
      }) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === 'template'))) {
        return;
      } // pre-convert text nodes into createTextVNode(text) calls to avoid
      // runtime normalization.


      for (var _i9 = 0; _i9 < children.length; _i9++) {
        var _child = children[_i9];

        if (isText(_child) || _child.type === 8
        /* NodeTypes.COMPOUND_EXPRESSION */
        ) {
          var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
          // single space the code could be an empty call to save bytes.

          if (_child.type !== 2
          /* NodeTypes.TEXT */
          || _child.content !== ' ') {
            callArgs.push(_child);
          } // mark dynamic text with flag so it gets patched inside a block


          if (!context.ssr && getConstantType(_child, context) === 0
          /* ConstantTypes.NOT_CONSTANT */
          ) {
            callArgs.push(1
            /* PatchFlags.TEXT */
            + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["PatchFlagNames"][1
            /* PatchFlags.TEXT */
            ], " */") : undefined));
          }

          children[_i9] = {
            type: 12
            /* NodeTypes.TEXT_CALL */
            ,
            content: _child,
            loc: _child.loc,
            codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
          };
        }
      }
    };
  }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node) || context.inVOnce) {
      return;
    }

    seen.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      context.inVOnce = false;
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(41
    /* ErrorCodes.X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* BindingTypes.SETUP_CONST */
  ;

  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(42
    /* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => (("), exp, ") = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* ElementTypes.COMPONENT */
  ) {
    var modifiers = dir.modifiers.map(function (m) {
      return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
    }).join(", ");
    var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
    props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
    /* ConstantTypes.CAN_HOIST */
    )));
  }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

var validDivisionCharRE = /[\w).+\-_$\]]/;

var transformFilter = function transformFilter(node, context) {
  if (!isCompatEnabled("COMPILER_FILTER"
  /* CompilerDeprecationTypes.COMPILER_FILTERS */
  , context)) {
    return;
  }

  if (node.type === 5
  /* NodeTypes.INTERPOLATION */
  ) {
    // filter rewrite is applied before expression transform so only
    // simple expressions are possible at this stage
    rewriteFilter(node.content, context);
  }

  if (node.type === 1
  /* NodeTypes.ELEMENT */
  ) {
    node.props.forEach(function (prop) {
      if (prop.type === 7
      /* NodeTypes.DIRECTIVE */
      && prop.name !== 'for' && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};

function rewriteFilter(node, context) {
  if (node.type === 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ) {
    parseFilter(node, context);
  } else {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(child) !== 'object') continue;

      if (child.type === 4
      /* NodeTypes.SIMPLE_EXPRESSION */
      ) {
        parseFilter(child, context);
      } else if (child.type === 8
      /* NodeTypes.COMPOUND_EXPRESSION */
      ) {
        rewriteFilter(node, context);
      } else if (child.type === 5
      /* NodeTypes.INTERPOLATION */
      ) {
        rewriteFilter(child.content, context);
      }
    }
  }
}

function parseFilter(node, context) {
  var exp = node.content;
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c,
      prev,
      i,
      expression,
      filters = [];

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false;
    } else if (c === 0x7c && // pipe
    exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5b:
          square++;
          break;
        // [

        case 0x5d:
          square--;
          break;
        // ]

        case 0x7b:
          curly++;
          break;
        // {

        case 0x7d:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters.length) {
     true && warnDeprecation("COMPILER_FILTER"
    /* CompilerDeprecationTypes.COMPILER_FILTERS */
    , context, node.loc);

    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }

    node.content = expression;
  }
}

function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  var i = filter.indexOf('(');

  if (i < 0) {
    context.filters.add(filter);
    return "".concat(toValidAssetId(filter, 'filter'), "(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    context.filters.add(name);
    return "".concat(toValidAssetId(name, 'filter'), "(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

var seen$1 = new WeakSet();

var transformMemo = function transformMemo(node, context) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  ) {
    var dir = findDir(node, 'memo');

    if (!dir || seen$1.has(node)) {
      return;
    }

    seen$1.add(node);
    return function () {
      var codegenNode = node.codegenNode || context.currentNode.codegenNode;

      if (codegenNode && codegenNode.type === 13
      /* NodeTypes.VNODE_CALL */
      ) {
        // non-component sub tree should be turned into a block
        if (node.tagType !== 1
        /* ElementTypes.COMPONENT */
        ) {
          makeBlock(codegenNode, context);
        }

        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [dir.exp, createFunctionExpression(undefined, codegenNode), "_cache", String(context.cached++)]);
      }
    };
  }
};

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformMemo, transformFor].concat([transformFilter], Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( true ? [transformExpression] : undefined), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(46
      /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(47
      /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(48
    /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(49
    /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["isString"])(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeTransforms), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(options.nodeTransforms || [])),
    directiveTransforms: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__["extend"])({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/*! exports provided: generateCodeFrame, BASE_TRANSITION, CAMELIZE, CAPITALIZE, CREATE_BLOCK, CREATE_COMMENT, CREATE_ELEMENT_BLOCK, CREATE_ELEMENT_VNODE, CREATE_SLOTS, CREATE_STATIC, CREATE_TEXT, CREATE_VNODE, FRAGMENT, GUARD_REACTIVE_PROPS, IS_MEMO_SAME, IS_REF, KEEP_ALIVE, MERGE_PROPS, NORMALIZE_CLASS, NORMALIZE_PROPS, NORMALIZE_STYLE, OPEN_BLOCK, POP_SCOPE_ID, PUSH_SCOPE_ID, RENDER_LIST, RENDER_SLOT, RESOLVE_COMPONENT, RESOLVE_DIRECTIVE, RESOLVE_DYNAMIC_COMPONENT, RESOLVE_FILTER, SET_BLOCK_TRACKING, SUSPENSE, TELEPORT, TO_DISPLAY_STRING, TO_HANDLERS, TO_HANDLER_KEY, UNREF, WITH_CTX, WITH_DIRECTIVES, WITH_MEMO, advancePositionWithClone, advancePositionWithMutation, assert, baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, createArrayExpression, createAssignmentExpression, createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createForLoopParams, createFunctionExpression, createIfStatement, createInterpolation, createObjectExpression, createObjectProperty, createReturnStatement, createRoot, createSequenceExpression, createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral, createTransformContext, createVNodeCall, extractIdentifiers, findDir, findProp, generate, getBaseTransformPreset, getConstantType, getInnerRange, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef, helperNameMap, injectProp, isBuiltInType, isCoreComponent, isFunctionType, isInDestructureAssignment, isMemberExpression, isMemberExpressionBrowser, isMemberExpressionNode, isReferencedIdentifier, isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey, isTemplateNode, isText, isVSlot, locStub, makeBlock, noopDirectiveTransform, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, toValidAssetId, trackSlotScopes, trackVForSlotScopes, transform, transformBind, transformElement, transformExpression, transformModel, transformOn, traverseNode, walkBlockDeclarations, walkFunctionParams, walkIdentifiers, warnDeprecation, DOMDirectiveTransforms, DOMNodeTransforms, TRANSITION, TRANSITION_GROUP, V_MODEL_CHECKBOX, V_MODEL_DYNAMIC, V_MODEL_RADIO, V_MODEL_SELECT, V_MODEL_TEXT, V_ON_WITH_KEYS, V_ON_WITH_MODIFIERS, V_SHOW, compile, createDOMCompilerError, parse, parserOptions, transformStyle */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMDirectiveTransforms", function() { return DOMDirectiveTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMNodeTransforms", function() { return DOMNodeTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION", function() { return TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_GROUP", function() { return TRANSITION_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_CHECKBOX", function() { return V_MODEL_CHECKBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_DYNAMIC", function() { return V_MODEL_DYNAMIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_RADIO", function() { return V_MODEL_RADIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_SELECT", function() { return V_MODEL_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_MODEL_TEXT", function() { return V_MODEL_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_ON_WITH_KEYS", function() { return V_ON_WITH_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_ON_WITH_MODIFIERS", function() { return V_ON_WITH_MODIFIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V_SHOW", function() { return V_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMCompilerError", function() { return createDOMCompilerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parserOptions", function() { return parserOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformStyle", function() { return transformStyle; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateCodeFrame", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_TRANSITION", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAMELIZE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAPITALIZE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_BLOCK", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_ELEMENT_BLOCK", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_ELEMENT_VNODE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_SLOTS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_STATIC", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_TEXT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_VNODE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FRAGMENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUARD_REACTIVE_PROPS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_MEMO_SAME", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_REF", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEEP_ALIVE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MERGE_PROPS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NORMALIZE_CLASS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NORMALIZE_PROPS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NORMALIZE_STYLE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_BLOCK", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POP_SCOPE_ID", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUSH_SCOPE_ID", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_LIST", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_SLOT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_COMPONENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DIRECTIVE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_DYNAMIC_COMPONENT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_FILTER", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_BLOCK_TRACKING", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUSPENSE", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELEPORT", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_DISPLAY_STRING", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLERS", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TO_HANDLER_KEY", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNREF", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_CTX", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_DIRECTIVES", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WITH_MEMO", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithClone", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "advancePositionWithMutation", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseCompile", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseParse", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildDirectiveArgs", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildProps", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSlots", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkCompatEnabled", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArrayExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAssignmentExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlockStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCacheExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCompilerError", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCompoundExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConditionalExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createForLoopParams", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFunctionExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIfStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolation", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createObjectExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createObjectProperty", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReturnStatement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSequenceExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSimpleExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStructuralDirectiveTransform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTemplateLiteral", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransformContext", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNodeCall", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractIdentifiers", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDir", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findProp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBaseTransformPreset", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConstantType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInnerRange", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMemoedVNodeCall", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVNodeBlockHelper", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVNodeHelper", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDynamicKeyVBind", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasScopeRef", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperNameMap", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectProp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBuiltInType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCoreComponent", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunctionType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInDestructureAssignment", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMemberExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMemberExpressionBrowser", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMemberExpressionNode", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReferencedIdentifier", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSimpleIdentifier", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSlotOutlet", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticArgOf", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticExp", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticProperty", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStaticPropertyKey", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplateNode", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVSlot", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locStub", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeBlock", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["Zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noopDirectiveTransform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processFor", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processIf", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processSlotOutlet", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeHelpers", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponentType", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toValidAssetId", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackSlotScopes", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackVForSlotScopes", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformBind", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformElement", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformExpression", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformModel", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformOn", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "traverseNode", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkBlockDeclarations", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkFunctionParams", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkIdentifiers", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecation", function() { return _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__["uc"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");




var _registerRuntimeHelpe, _DOMErrorMessages;




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : undefined);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : undefined);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : undefined);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : undefined);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : undefined);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : undefined);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : undefined);
var V_SHOW = Symbol( true ? "vShow" : undefined);
var TRANSITION = Symbol( true ? "Transition" : undefined);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : undefined);
Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* registerRuntimeHelpers */ "fc"])((_registerRuntimeHelpe = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, V_SHOW, "vShow"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, TRANSITION, "Transition"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  var asAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!decoder) {
    decoder = document.createElement('div');
  }

  if (asAttr) {
    decoder.innerHTML = "<div foo=\"".concat(raw.replace(/"/g, '&quot;'), "\">");
    return decoder.children[0].getAttribute('foo');
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

var isRawTextContainer = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["makeMap"])('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_4__["isVoidTag"],
  isNativeTag: function isNativeTag(tag) {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["isHTMLTag"])(tag) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["isSVGTag"])(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isBuiltInType */ "Hb"])(tag, "Transition")) {
      return TRANSITION;
    } else if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isBuiltInType */ "Hb"])(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* DOMNamespaces.HTML */
    ;

    if (parent && ns === 2
    /* DOMNamespaces.MATH_ML */
    ) {
      if (parent.tag === 'annotation-xml') {
        if (tag === 'svg') {
          return 1
          /* DOMNamespaces.SVG */
          ;
        }

        if (parent.props.some(function (a) {
          return a.type === 6
          /* NodeTypes.ATTRIBUTE */
          && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
        })) {
          ns = 0
          /* DOMNamespaces.HTML */
          ;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
        ns = 0
        /* DOMNamespaces.HTML */
        ;
      }
    } else if (parent && ns === 1
    /* DOMNamespaces.SVG */
    ) {
      if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
        ns = 0
        /* DOMNamespaces.HTML */
        ;
      }
    }

    if (ns === 0
    /* DOMNamespaces.HTML */
    ) {
      if (tag === 'svg') {
        return 1
        /* DOMNamespaces.SVG */
        ;
      }

      if (tag === 'math') {
        return 2
        /* DOMNamespaces.MATH_ML */
        ;
      }
    }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* DOMNamespaces.HTML */
    ) {
      if (tag === 'textarea' || tag === 'title') {
        return 1
        /* TextModes.RCDATA */
        ;
      }

      if (isRawTextContainer(tag)) {
        return 2
        /* TextModes.RAWTEXT */
        ;
      }
    }

    return 0
    /* TextModes.DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  ) {
    node.props.forEach(function (p, i) {
      if (p.type === 6
      /* NodeTypes.ATTRIBUTE */
      && p.name === 'style' && p.value) {
        // replace p with an expression node
        node.props[i] = {
          type: 7
          /* NodeTypes.DIRECTIVE */
          ,
          name: "bind",
          arg: Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])("style", true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["parseStringStyle"])(cssText);
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])(JSON.stringify(normalized), false, loc, 3
  /* ConstantTypes.CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCompilerError */ "bb"])(code, loc,  true ? DOMErrorMessages : undefined);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 50
/* DOMErrorCodes.X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 51
/* DOMErrorCodes.X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 52
/* DOMErrorCodes.X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 53
/* DOMErrorCodes.X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 54
/* DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 55
/* DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 56
/* DOMErrorCodes.X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 57
/* DOMErrorCodes.X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 58
/* DOMErrorCodes.X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 59
/* DOMErrorCodes.X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_DOMErrorMessages, 60
/* DOMErrorCodes.X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(50
    /* DOMErrorCodes.X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(51
    /* DOMErrorCodes.X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createObjectProperty */ "jb"])(Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])("innerHTML", true, loc), exp || Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(52
    /* DOMErrorCodes.X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(53
    /* DOMErrorCodes.X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createObjectProperty */ "jb"])(Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])("textContent", true), exp ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* getConstantType */ "yb"])(exp, context) > 0 ? exp : Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCallExpression */ "ab"])(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* TO_DISPLAY_STRING */ "G"]), [exp], loc) : Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* transformModel */ "oc"])(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* ElementTypes.COMPONENT */
  ) {
    return baseResult;
  }

  if (dir.arg) {
    context.onError(createDOMCompilerError(55
    /* DOMErrorCodes.X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* findProp */ "ub"])(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(57
      /* DOMErrorCodes.X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* findProp */ "ub"])(node, "type");

      if (type) {
        if (type.type === 7
        /* NodeTypes.DIRECTIVE */
        ) {
          // :type="foo"
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(56
              /* DOMErrorCodes.X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* hasDynamicKeyVBind */ "Db"])(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(54
    /* DOMErrorCodes.X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* NodeTypes.SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["makeMap"])("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["makeMap"])( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["makeMap"])('left,right');
var isKeyboardEvent = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["makeMap"])("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers, context, loc) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (modifier === 'native' && Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* checkCompatEnabled */ "V"])("COMPILER_V_ON_NATIVE"
    /* CompilerDeprecationTypes.COMPILER_V_ON_NATIVE */
    , context, loc)) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if (Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isStaticExp */ "Sb"])(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isStaticExp */ "Sb"])(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])(event, true) : key.type !== 4
  /* NodeTypes.SIMPLE_EXPRESSION */
  ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCompoundExpression */ "cb"])(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* transformOn */ "pc"])(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers, context, dir.loc),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCallExpression */ "ab"])(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isStaticExp */ "Sb"])(key) || isKeyboardEvent(key.content))) {
      handlerExp = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCallExpression */ "ab"])(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["capitalize"]).join('');
      key = Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* isStaticExp */ "Sb"])(key) ? Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createSimpleExpression */ "nb"])("".concat(key.content).concat(modifierPostfix), true) : Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createCompoundExpression */ "cb"])(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* createObjectProperty */ "jb"])(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(58
    /* DOMErrorCodes.X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var transformTransition = function transformTransition(node, context) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  && node.tagType === 1
  /* ElementTypes.COMPONENT */
  ) {
    var component = context.isBuiltInComponent(node.tag);

    if (component === TRANSITION) {
      return function () {
        if (!node.children.length) {
          return;
        } // warn multiple transition children


        if (hasMultipleChildren(node)) {
          context.onError(createDOMCompilerError(59
          /* DOMErrorCodes.X_TRANSITION_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        } // check if it's s single child w/ v-show
        // if yes, inject "persisted: true" to the transition props


        var child = node.children[0];

        if (child.type === 1
        /* NodeTypes.ELEMENT */
        ) {
          var _iterator = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(child.props),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;

              if (p.type === 7
              /* NodeTypes.DIRECTIVE */
              && p.name === 'show') {
                node.props.push({
                  type: 6
                  /* NodeTypes.ATTRIBUTE */
                  ,
                  name: 'persisted',
                  value: undefined,
                  loc: node.loc
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      };
    }
  }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3
    /* NodeTypes.COMMENT */
    && !(c.type === 2
    /* NodeTypes.TEXT */
    && !c.content.trim());
  });
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* NodeTypes.FOR */
  || child.type === 9
  /* NodeTypes.IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* NodeTypes.ELEMENT */
  && node.tagType === 0
  /* ElementTypes.ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(60
    /* DOMErrorCodes.X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( true ? [transformTransition] : undefined));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* noopDirectiveTransform */ "ac"],
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* baseCompile */ "Q"])(template, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DOMNodeTransforms), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options.nodeTransforms || [])),
    directiveTransforms: Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_3__[/* baseParse */ "R"])(template, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_4__["extend"])({}, parserOptions, options));
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/*! exports provided: EffectScope, ITERATE_KEY, ReactiveEffect, computed, customRef, deferredComputed, effect, effectScope, enableTracking, getCurrentScope, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, onScopeDispose, pauseTracking, proxyRefs, reactive, readonly, ref, resetTracking, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, track, trigger, triggerRef, unref */
/*! exports used: EffectScope, ReactiveEffect, computed, customRef, effect, effectScope, getCurrentScope, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, onScopeDispose, pauseTracking, proxyRefs, reactive, readonly, ref, resetTracking, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, track, trigger, triggerRef, unref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectScope; });
/* unused harmony export ITERATE_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReactiveEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return customRef; });
/* unused harmony export deferredComputed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return effectScope; });
/* unused harmony export enableTracking */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCurrentScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return markRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return onScopeDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pauseTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return proxyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return resetTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return shallowReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return shallowReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return toRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return toRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return triggerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return unref; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");








function warn(msg) {
  var _console;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  (_console = console).warn.apply(_console, ["[Vue warn] ".concat(msg)].concat(args));
}

var activeEffectScope;

var EffectScope = /*#__PURE__*/function () {
  function EffectScope() {
    var detached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, EffectScope);

    /**
     * @internal
     */
    this.active = true;
    /**
     * @internal
     */

    this.effects = [];
    /**
     * @internal
     */

    this.cleanups = [];

    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(EffectScope, [{
    key: "run",
    value: function run(fn) {
      if (this.active) {
        var currentEffectScope = activeEffectScope;

        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (true) {
        warn("cannot run an inactive effect scope.");
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */

  }, {
    key: "on",
    value: function on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */

  }, {
    key: "off",
    value: function off() {
      activeEffectScope = this.parent;
    }
  }, {
    key: "stop",
    value: function stop(fromParent) {
      if (this.active) {
        var i, l;

        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }

        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }

        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        } // nested scope, dereference from parent to avoid memory leaks


        if (this.parent && !fromParent) {
          // optimized O(1) removal
          var last = this.parent.scopes.pop();

          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }

        this.active = false;
      }
    }
  }]);

  return EffectScope;
}();

function effectScope(detached) {
  return new EffectScope(detached);
}

function recordEffectScope(effect) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn("onScopeDispose() is called when there is no active effect scope" + " to be associated with.");
  }
}

var createDep = function createDep(effects) {
  var dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

var wasTracked = function wasTracked(dep) {
  return (dep.w & trackOpBit) > 0;
};

var newTracked = function newTracked(dep) {
  return (dep.n & trackOpBit) > 0;
};

var initDepMarkers = function initDepMarkers(_ref) {
  var deps = _ref.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

var finalizeDepMarkers = function finalizeDepMarkers(effect) {
  var deps = effect.deps;

  if (deps.length) {
    var ptr = 0;

    for (var i = 0; i < deps.length; i++) {
      var dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

var targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

var effectTrackDepth = 0;
var trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

var maxMarkerBits = 30;
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : undefined);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : undefined);

var ReactiveEffect = /*#__PURE__*/function () {
  function ReactiveEffect(fn) {
    var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var scope = arguments.length > 2 ? arguments[2] : undefined;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, ReactiveEffect);

    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    recordEffectScope(this, scope);
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ReactiveEffect, [{
    key: "run",
    value: function run() {
      if (!this.active) {
        return this.fn();
      }

      var parent = activeEffect;
      var lastShouldTrack = shouldTrack;

      while (parent) {
        if (parent === this) {
          return;
        }

        parent = parent.parent;
      }

      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;

        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }

        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }

        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = undefined;

        if (this.deferStop) {
          this.stop();
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      // stopped while running itself - defer the cleanup
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);

        if (this.onStop) {
          this.onStop();
        }

        this.active = false;
      }
    }
  }]);

  return ReactiveEffect;
}();

function cleanupEffect(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }

    deps.length = 0;
  }
}

function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }

  var _effect = new ReactiveEffect(fn);

  if (options) {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }

  if (!options || !options.lazy) {
    _effect.run();
  }

  var runner = _effect.run.bind(_effect);

  runner.effect = _effect;
  return runner;
}

function stop(runner) {
  runner.effect.stop();
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    var depsMap = targetMap.get(target);

    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }

    var dep = depsMap.get(key);

    if (!dep) {
      depsMap.set(key, dep = createDep());
    }

    var eventInfo =  true ? {
      effect: activeEffect,
      target: target,
      type: type,
      key: key
    } : undefined;
    trackEffects(dep, eventInfo);
  }
}

function trackEffects(dep, debuggerEventExtraInfo) {
  var shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var deps = [];

  if (type === "clear"
  /* TriggerOpTypes.CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(depsMap.values());
  } else if (key === 'length' && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* TriggerOpTypes.ADD */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isIntegerKey"])(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* TriggerOpTypes.DELETE */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* TriggerOpTypes.SET */
      :
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var eventInfo =  true ? {
    target: target,
    type: type,
    key: key,
    newValue: newValue,
    oldValue: oldValue,
    oldTarget: oldTarget
  } : undefined;

  if (deps.length === 1) {
    if (deps[0]) {
      if (true) {
        triggerEffects(deps[0], eventInfo);
      } else {}
    }
  } else {
    var effects = [];

    var _iterator = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(deps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;

        if (dep) {
          effects.push.apply(effects, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(dep));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (true) {
      triggerEffects(createDep(effects), eventInfo);
    } else {}
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  var effects = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(dep) ? dep : Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(dep);

  var _iterator2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(effects),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _effect2 = _step2.value;

      if (_effect2.computed) {
        triggerEffect(_effect2, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(effects),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _effect3 = _step3.value;

      if (!_effect3.computed) {
        triggerEffect(_effect3, debuggerEventExtraInfo);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if ( true && effect.onTrigger) {
      effect.onTrigger(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({
        effect: effect
      }, debuggerEventExtraInfo));
    }

    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}

var isNonTrackableKeys = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["makeMap"])("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set( /*#__PURE__*/Object.getOwnPropertyNames(Symbol) // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter(function (key) {
  return key !== 'arguments' && key !== 'caller';
}).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isSymbol"]));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* TrackOpTypes.GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = arr[key].apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();

      for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* ReactiveFlags.IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_isShallow"
    /* ReactiveFlags.IS_SHALLOW */
    ) {
      return shallow;
    } else if (key === "__v_raw"
    /* ReactiveFlags.RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target);

    if (!isReadonly && targetIsArray && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isSymbol"])(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* TrackOpTypes.GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - skip unwrap for Array + integer key.
      return targetIsArray && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isIntegerKey"])(key) ? res : res.value;
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }

    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isIntegerKey"])(key) ? Number(key) < target.length : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* TriggerOpTypes.ADD */
        , key, value);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(value, oldValue)) {
        trigger(target, "set"
        /* TriggerOpTypes.SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* TriggerOpTypes.DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isSymbol"])(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* TrackOpTypes.HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* TrackOpTypes.ITERATE */
  , Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* ReactiveFlags.RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "get"
      /* TrackOpTypes.GET */
      , key);
    }

    track(rawTarget, "get"
    /* TrackOpTypes.GET */
    , rawKey);
  }

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* ReactiveFlags.RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (!isReadonly) {
    if (key !== rawKey) {
      track(rawTarget, "has"
      /* TrackOpTypes.HAS */
      , key);
    }

    track(rawTarget, "has"
    /* TrackOpTypes.HAS */
    , rawKey);
  }

  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* ReactiveFlags.RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* TrackOpTypes.ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* TriggerOpTypes.ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* TriggerOpTypes.ADD */
    , key, value);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(value, oldValue)) {
    trigger(target, "set"
    /* TriggerOpTypes.SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete"
    /* TriggerOpTypes.DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(target) ? new Map(target) : new Set(target) : undefined; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* TriggerOpTypes.CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* ReactiveFlags.RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* TrackOpTypes.ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* ReactiveFlags.RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* TrackOpTypes.ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* TriggerOpTypes.DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    delete: deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    delete: deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod("set"
    /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod("delete"
    /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* TriggerOpTypes.ADD */
    ),
    set: createReadonlyMethod("set"
    /* TriggerOpTypes.SET */
    ),
    delete: createReadonlyMethod("delete"
    /* TriggerOpTypes.DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* TriggerOpTypes.CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* ReactiveFlags.IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* ReactiveFlags.IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* ReactiveFlags.RAW */
    ) {
      return target;
    }

    return Reflect.get(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toRawType"])(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* TargetType.COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* TargetType.COLLECTION */
      ;

    default:
      return 0
      /* TargetType.INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* ReactiveFlags.SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* TargetType.INVALID */
  : targetTypeMap(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toRawType"])(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* ReactiveFlags.RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* ReactiveFlags.IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only specific value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* TargetType.INVALID */
  ) {
    return target;
  }

  var proxy = new Proxy(target, targetType === 2
  /* TargetType.COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* ReactiveFlags.RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* ReactiveFlags.IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* ReactiveFlags.IS_READONLY */
  ]);
}

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* ReactiveFlags.IS_SHALLOW */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  var raw = observed && observed["__v_raw"
  /* ReactiveFlags.RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["def"])(value, "__v_skip"
  /* ReactiveFlags.SKIP */
  , true);
  return value;
}

var toReactive = function toReactive(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value) ? readonly(value) : value;
};

function trackRefValue(ref) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref);

    if (true) {
      trackEffects(ref.dep || (ref.dep = createDep()), {
        target: ref,
        type: "get"
        /* TrackOpTypes.GET */
        ,
        key: 'value'
      });
    } else {}
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (true) {
      triggerEffects(ref.dep, {
        target: ref,
        type: "set"
        /* TriggerOpTypes.SET */
        ,
        key: 'value',
        newValue: newVal
      });
    } else {}
  }
}

function isRef(r) {
  return !!(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function shallowRef(value) {
  return createRef(value, true);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(value, __v_isShallow) {
    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, RefImpl);

    this.__v_isShallow = __v_isShallow;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(RefImpl, [{
    key: "value",
    get: function get() {
      trackRefValue(this);
      return this._value;
    },
    set: function set(newVal) {
      var useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
      newVal = useDirectValue ? newVal : toRaw(newVal);

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = useDirectValue ? newVal : toReactive(newVal);
        triggerRefValue(this, newVal);
      }
    }
  }]);

  return RefImpl;
}();

function triggerRef(ref) {
  triggerRefValue(ref,  true ? ref.value : undefined);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, CustomRefImpl);

    this.dep = undefined;
    this.__v_isRef = true;

    var _factory = factory(function () {
      return trackRefValue(_this);
    }, function () {
      return triggerRefValue(_this);
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key, _defaultValue) {
    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      var val = this._object[this._key];
      return val === undefined ? this._defaultValue : val;
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key, defaultValue) {
  var val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}

var _a;

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
    var _this2 = this;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, ComputedRefImpl);

    this._setter = _setter;
    this.dep = undefined;
    this.__v_isRef = true;
    this[_a] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, function () {
      if (!_this2._dirty) {
        _this2._dirty = true;
        triggerRefValue(_this2);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"
    /* ReactiveFlags.IS_READONLY */
    ] = isReadonly;
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);
      trackRefValue(self);

      if (self._dirty || !self._cacheable) {
        self._dirty = false;
        self._value = self.effect.run();
      }

      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

_a = "__v_isReadonly"
/* ReactiveFlags.IS_READONLY */
;

function computed(getterOrOptions, debugOptions) {
  var isSSR = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getter;
  var setter;
  var onlyGetter = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : undefined;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if ( true && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef;
}

var _a$1;

var tick = /*#__PURE__*/Promise.resolve();
var queue = [];
var queued = false;

var scheduler = function scheduler(fn) {
  queue.push(fn);

  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};

var flush = function flush() {
  for (var i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  queued = false;
};

var DeferredComputedRefImpl = /*#__PURE__*/function () {
  function DeferredComputedRefImpl(getter) {
    var _this3 = this;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, DeferredComputedRefImpl);

    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a$1] = true;
    var compareTarget;
    var hasCompareTarget = false;
    var scheduled = false;
    this.effect = new ReactiveEffect(getter, function (computedTrigger) {
      if (_this3.dep) {
        if (computedTrigger) {
          compareTarget = _this3._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          var valueToCompare = hasCompareTarget ? compareTarget : _this3._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(function () {
            if (_this3.effect.active && _this3._get() !== valueToCompare) {
              triggerRefValue(_this3);
            }

            scheduled = false;
          });
        } // chained upstream computeds are notified synchronously to ensure
        // value invalidation in case of sync access; normal effects are
        // deferred to be triggered in scheduler.


        var _iterator4 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this3.dep),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var e = _step4.value;

            if (e.computed instanceof DeferredComputedRefImpl) {
              e.scheduler(true
              /* computedTrigger */
              );
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      _this3._dirty = true;
    });
    this.effect.computed = this;
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(DeferredComputedRefImpl, [{
    key: "_get",
    value: function _get() {
      if (this._dirty) {
        this._dirty = false;
        return this._value = this.effect.run();
      }

      return this._value;
    }
  }, {
    key: "value",
    get: function get() {
      trackRefValue(this); // the computed ref may get wrapped by other proxies e.g. readonly() #3376

      return toRaw(this)._get();
    }
  }]);

  return DeferredComputedRefImpl;
}();

_a$1 = "__v_isReadonly"
/* ReactiveFlags.IS_READONLY */
;

function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/*! exports provided: EffectScope, ReactiveEffect, customRef, effect, effectScope, getCurrentScope, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, onScopeDispose, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, normalizeClass, normalizeProps, normalizeStyle, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createPropsRestProxy, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, guardReactiveProps, h, handleError, initCustomFormatter, inject, isMemoSame, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withMemo, withScopeId */
/*! exports used: BaseTransition, Comment, EffectScope, Fragment, KeepAlive, ReactiveEffect, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, camelize, capitalize, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createPropsRestProxy, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, customRef, defineAsyncComponent, defineComponent, defineEmits, defineExpose, defineProps, devtools, effect, effectScope, getCurrentInstance, getCurrentScope, getTransitionRawChildren, guardReactiveProps, h, handleError, initCustomFormatter, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef, isRuntimeOnly, isShallow, isVNode, markRaw, mergeDefaults, mergeProps, nextTick, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, proxyRefs, pushScopeId, queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey, ssrUtils, stop, toDisplayString, toHandlerKey, toHandlers, toRaw, toRef, toRefs, transformVNodeArgs, triggerRef, unref, useAttrs, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withMemo, withScopeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document, SVGElement) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KeepAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Static; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Suspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Teleport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return callWithAsyncErrorHandling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return callWithErrorHandling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return cloneVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return compatUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return createBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return createCommentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return createElementBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return createBaseVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return createHydrationRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createPropsRestProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return createSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return createStaticVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return createVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return defineAsyncComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return defineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return defineEmits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return defineExpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return defineProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return devtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return getTransitionRawChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return guardReactiveProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return initCustomFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return isMemoSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return isRuntimeOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return isVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return mergeDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return mergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return onBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return onErrorCaptured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return onRenderTracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return onRenderTriggered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return onServerPrefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return openBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return popScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return pushScopeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return queuePostFlushCb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return registerRuntimeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return renderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return renderSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return resolveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return resolveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return resolveDynamicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return resolveFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return resolveTransitionHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return setBlockTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return setDevtoolsHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return setTransitionHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return ssrContextKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return ssrUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return toHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bc", function() { return transformVNodeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return useAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return useSSRContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return useSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return useTransitionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return watchEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return watchPostEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return watchSyncEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return withAsyncContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return withCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return withDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return withDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return withMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return withScopeId; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "J", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "K", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "U", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "V", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "W", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "X", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zb", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__["E"]; });

/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["toDisplayString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"]; });







var _ErrorTypeStrings;





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* ErrorCodes.APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(warnArgs));
  }

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(i === 0 ? [] : ["\n"]).concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(value)) {
    value = formatProp(key, Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "sp"
/* LifecycleHooks.SERVER_PREFETCH */
, 'serverPrefetch hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "bc"
/* LifecycleHooks.BEFORE_CREATE */
, 'beforeCreate hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "c"
/* LifecycleHooks.CREATED */
, 'created hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "bm"
/* LifecycleHooks.BEFORE_MOUNT */
, 'beforeMount hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "m"
/* LifecycleHooks.MOUNTED */
, 'mounted hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "bu"
/* LifecycleHooks.BEFORE_UPDATE */
, 'beforeUpdate hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "u"
/* LifecycleHooks.UPDATED */
, 'updated'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "bum"
/* LifecycleHooks.BEFORE_UNMOUNT */
, 'beforeUnmount hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "um"
/* LifecycleHooks.UNMOUNTED */
, 'unmounted hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "a"
/* LifecycleHooks.ACTIVATED */
, 'activated hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "da"
/* LifecycleHooks.DEACTIVATED */
, 'deactivated hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "ec"
/* LifecycleHooks.ERROR_CAPTURED */
, 'errorCaptured hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "rtc"
/* LifecycleHooks.RENDER_TRACKED */
, 'renderTracked hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, "rtg"
/* LifecycleHooks.RENDER_TRIGGERED */
, 'renderTriggered hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 0
/* ErrorCodes.SETUP_FUNCTION */
, 'setup function'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 1
/* ErrorCodes.RENDER_FUNCTION */
, 'render function'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 2
/* ErrorCodes.WATCH_GETTER */
, 'watcher getter'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 3
/* ErrorCodes.WATCH_CALLBACK */
, 'watcher callback'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 4
/* ErrorCodes.WATCH_CLEANUP */
, 'watcher cleanup function'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 5
/* ErrorCodes.NATIVE_EVENT_HANDLER */
, 'native event handler'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 6
/* ErrorCodes.COMPONENT_EVENT_HANDLER */
, 'component event handler'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 7
/* ErrorCodes.VNODE_HOOK */
, 'vnode hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 8
/* ErrorCodes.DIRECTIVE_HOOK */
, 'directive hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 9
/* ErrorCodes.TRANSITION_HOOK */
, 'transition hook'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 10
/* ErrorCodes.APP_ERROR_HANDLER */
, 'app errorHandler'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 11
/* ErrorCodes.APP_WARN_HANDLER */
, 'app warnHandler'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 12
/* ErrorCodes.FUNCTION_REF */
, 'ref function'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 13
/* ErrorCodes.ASYNC_COMPONENT_LOADER */
, 'async component loader'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ErrorTypeStrings, 14
/* ErrorCodes.SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(res)) {
      res.catch(function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : undefined;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* ErrorCodes.APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /*#__PURE__*/Promise.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(id) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queuePostFlushCb(cb) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingPostFlushCbs.push.apply(pendingPostFlushCbs, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(cb));
  }

  queueFlush();
}

function flushPreFlushCbs(seen) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : flushIndex;

  if (true) {
    seen = seen || new Map();
  }

  for (; i < queue.length; i++) {
    var cb = queue[i];

    if (cb && cb.pre) {
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }

      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

var comparator = function comparator(a, b) {
  var diff = getId(a) - getId(b);

  if (diff === 0) {
    if (a.pre && !b.pre) return -1;
    if (b.pre && !a.pre) return 1;
  }

  return diff;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  } // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.


  queue.sort(comparator); // conditional usage of checkRecursiveUpdate must be determined out of
  // try ... catch block since Rollup by default de-optimizes treeshaking
  // inside try-catch. This can leave all warning code unshaked. Although
  // they would get eventually shaken by a minifier like terser, some minifiers
  // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)

  var check =  true ? function (job) {
    return checkRecursiveUpdates(seen, job);
  } : undefined;

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && check(job)) {
          continue;
        } // console.log(`running:`, job.id)


        callWithErrorHandling(job, null, 14
        /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["getGlobalThis"])().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}

function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: new Set()
  });
  return true;
}

function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}

function rerender(id, newRender) {
  var record = map.get(id);

  if (!record) {
    return;
  } // update initial record (for not-yet-rendered component)


  record.initialDef.render = newRender;

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp); // update initial def (for not-yet-rendered components)

  updateComponentDef(record.initialDef, newComp); // create a snapshot which avoids the set being mutated during updates

  var instances = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(record.instances);

  var _iterator = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(instances),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var instance = _step.value;
      var oldComp = normalizeClassComponent(instance.type);

      if (!hmrDirtyComponents.has(oldComp)) {
        // 1. Update existing comp definition to match new one
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        } // 2. mark definition dirty. This forces the renderer to replace the
        // component on patch.


        hmrDirtyComponents.add(oldComp);
      } // 3. invalidate options resolution cache


      instance.appContext.optionsCache.delete(instance.type); // 4. actually update

      if (instance.ceReload) {
        // custom element
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents.delete(oldComp);
      } else if (instance.parent) {
        // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update); // instance is the inner component of an async custom element
        // invoke to reset styles

        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
      } else if (typeof window !== 'undefined') {
        // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
      } else {
        console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
      }
    } // 5. make sure to cleanup dirty hmr components after update

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  queuePostFlushCb(function () {
    var _iterator2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(instances),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var instance = _step2.value;
        hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}

function updateComponentDef(oldComp, newComp) {
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(oldComp, newComp);

  for (var key in oldComp) {
    if (key !== '__file' && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;
var buffer = [];
var devtoolsNotInstalled = false;

function emit(event) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (devtools) {
    var _devtools;

    (_devtools = devtools).emit.apply(_devtools, [event].concat(args));
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event: event,
      args: args
    });
  }
}

function setDevtoolsHook(hook, target) {
  var _a, _b;

  devtools = hook;

  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(function (_ref3) {
      var _devtools2;

      var event = _ref3.event,
          args = _ref3.args;
      return (_devtools2 = devtools).emit.apply(_devtools2, [event].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(args)));
    });
    buffer = [];
  } else if ( // handle late devtools injection - only do this if we are in an actual
  // browser environment to avoid the timer handle stalling test runner exit
  // (#4815)
  typeof window !== 'undefined' && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push(function (newHook) {
      setDevtoolsHook(newHook, target);
    }); // clear buffer after 3s - the user probably doesn't have devtools installed
    // at all, and keeping the buffer will cause memory leaks (#4738)

    setTimeout(function () {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3000);
  } else {
    // non-browser env, assume not installed
    devtoolsNotInstalled = true;
    buffer = [];
  }
}

function devtoolsInitApp(app, version) {
  emit("app:init"
  /* DevtoolsHooks.APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  emit("app:unmount"
  /* DevtoolsHooks.APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* DevtoolsHooks.COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* DevtoolsHooks.COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* DevtoolsHooks.COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* DevtoolsHooks.PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* DevtoolsHooks.PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  emit("component:emit"
  /* DevtoolsHooks.COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

function emit$1(instance, event) {
  if (instance.isUnmounted) return;
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref4 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
        number = _ref4.number,
        trim = _ref4.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    }

    if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toNumber"]);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(event)] || // also try camelCase event handler (#2249)
  props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp.extends) {
      extendEmits(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(comp)) {
      cache.set(comp, null);
    }

    return null;
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(normalized, raw);
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(comp)) {
    cache.set(comp, normalized);
  }

  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isOn"])(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(options, key[0].toLowerCase() + key.slice(1)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(options, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(key)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot // false only
  = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var fallthroughAttrs;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    if (vnode.shapeFlag & 4
    /* ShapeFlags.STATEFUL_COMPONENT */
    ) {
      // withProxy is a proxy with a different `has` trap only for
      // runtime-compiled render functions using `with` block.
      var proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : undefined) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* ErrorCodes.RENDER_FUNCTION */
    );
    result = createVNode(Comment);
  } // attr merging
  // in dev mode, comments are preserved, and it's possible for a template
  // to have comments along side the root element which makes it a fragment


  var root = result;
  var setRoot = undefined;

  if ( true && result.patchFlag > 0 && result.patchFlag & 2048
  /* PatchFlags.DEV_ROOT_FRAGMENT */
  ) {
    var _getChildRoot = getChildRoot(result);

    var _getChildRoot2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_getChildRoot, 2);

    root = _getChildRoot2[0];
    setRoot = _getChildRoot2[1];
  }

  if (fallthroughAttrs && inheritAttrs !== false) {
    var keys = Object.keys(fallthroughAttrs);
    var _root = root,
        shapeFlag = _root.shapeFlag;

    if (keys.length) {
      if (shapeFlag & (1
      /* ShapeFlags.ELEMENT */
      | 6
      /* ShapeFlags.COMPONENT */
      )) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isModelListener"])) {
          // If a v-model listener (onUpdate:xxx) has a corresponding declared
          // prop, it indicates this component expects to handle v-model and
          // it should not fallthrough.
          // related: #1543, #1643, #1989
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }

        root = cloneVNode(root, fallthroughAttrs);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        var allAttrs = Object.keys(attrs);
        var eventAttrs = [];
        var extraAttrs = [];

        for (var i = 0, l = allAttrs.length; i < l; i++) {
          var key = allAttrs[i];

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isOn"])(key)) {
            // ignore v-model handlers when they fail to fallthrough
            if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isModelListener"])(key)) {
              // remove `on`, lowercase first letter to reflect event casing
              // accurately
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }

        if (extraAttrs.length) {
          warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
        }

        if (eventAttrs.length) {
          warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
        }
      }
    }
  } // inherit directives


  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
    } // clone before mutating since the root may be a hoisted vnode


    root = cloneVNode(root);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  } // inherit transition data


  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
    }

    root.transition = vnode.transition;
  }

  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isOn"])(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isModelListener"])(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & (6
  /* ShapeFlags.COMPONENT */
  | 1
  /* ShapeFlags.ELEMENT */
  ) || vnode.type === Comment // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* PatchFlags.DYNAMIC_SLOTS */
    ) {
      // slot content that references values that might have changed,
      // e.g. in a v-for
      return true;
    }

    if (patchFlag & 16
    /* PatchFlags.FULL_PROPS */
    ) {
      if (!prevProps) {
        return !!nextProps;
      } // presence of this flag indicates props are always non-null


      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8
    /* PatchFlags.PROPS */
    ) {
      var dynamicProps = nextVNode.dynamicProps;

      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];

        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref5, el // HostNode
) {
  var vnode = _ref5.vnode,
      parent = _ref5.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref6) {
  var patch = _ref6.p,
      unmount = _ref6.um,
      createElement = _ref6.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toNumber"])(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* MoveType.ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* MoveType.ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep.catch(function (err) {
        handleError(err, instance, 0
        /* ErrorCodes.SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* ShapeFlags.SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(s)) {
    var trackBlock = isBlockTreeEnabled && s._c;

    if (trackBlock) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the instance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}

function watchPostEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(Object.assign({}, options), {
    flush: 'post'
  }) : undefined);
}

function watchSyncEffect(effect, options) {
  return doWatch(effect, null,  true ? Object.assign(Object.assign({}, options), {
    flush: 'sync'
  }) : undefined);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
      immediate = _ref7.immediate,
      deep = _ref7.deep,
      flush = _ref7.flush,
      onTrack = _ref7.onTrack,
      onTrigger = _ref7.onTrigger;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var instance = currentInstance;
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isShallow */ "l"])(source);
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReactive */ "i"])(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(source)) {
    isMultiSource = true;
    forceTrigger = source.some(function (s) {
      return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReactive */ "i"])(s) || Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isShallow */ "l"])(s);
    });

    getter = function getter() {
      return source.map(function (s) {
        if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(s)) {
          return s.value;
        } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReactive */ "i"])(s)) {
          return traverse(s);
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(s)) {
          return callWithErrorHandling(s, instance, 2
          /* ErrorCodes.WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* ErrorCodes.WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* ErrorCodes.WATCH_CALLBACK */
        , [onCleanup]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"];
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onCleanup = function onCleanup(fn) {
    cleanup = effect.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }; // in SSR there is no need to setup an actual effect, and it should be noop
  // unless it's eager


  if (isInSSRComponentSetup) {
    // we will also not call the invalidate callback (+ runner is not set up)
    onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"];

    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3
      /* ErrorCodes.WATCH_CALLBACK */
      , [getter(), isMultiSource ? [] : undefined, onCleanup]);
    }

    return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"];
  }

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!effect.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = effect.run();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(v, oldValue[i]);
      }) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* ErrorCodes.WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onCleanup]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      effect.run();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    job.pre = true;
    if (instance) job.id = instance.uid;

    scheduler = function scheduler() {
      return queueJob(job);
    };
  }

  var effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* ReactiveEffect */ "b"](getter, scheduler);

  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  } // initial run


  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }

  return function () {
    effect.stop();

    if (instance && instance.scope) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["remove"])(instance.scope.effects, effect);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  var cur = currentInstance;
  setCurrentInstance(this);
  var res = doWatch(getter, cb.bind(publicThis), options);

  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }

  return res;
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value, seen) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value) || value["__v_skip"
  /* ReactiveFlags.SKIP */
  ]) {
    return value;
  }

  seen = seen || new Set();

  if (seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(value)) {
    traverse(value.value, seen);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isSet"])(value) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isMap"])(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"])(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref8) {
    var slots = _ref8.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots.default && getTransitionRawChildren(slots.default(), true);

      if (!children || !children.length) {
        return;
      }

      var child = children[0];

      if (children.length > 1) {
        var hasFound = false; // locate first non-comment child

        var _iterator3 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var c = _step3.value;

            if (c.type !== Comment) {
              if ( true && hasFound) {
                // warn more than one non-comment child
                warn('<transition> can only be used on a single element or component. ' + 'Use <transition-group> for lists.');
                break;
              }

              child = c;
              hasFound = true;
              if (false) {}
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') {
        warn("invalid <transition> mode: ".concat(mode));
      }

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* ErrorCodes.TRANSITION_HOOK */
    , args);
  };

  var callAsyncHook = function callAsyncHook(hook, args) {
    var done = args[1];
    callHook(hook, args);

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(hook)) {
      if (hook.every(function (hook) {
        return hook.length <= 1;
      })) done();
    } else if (hook.length <= 1) {
      done();
    }
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* ShapeFlags.COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* ShapeFlags.SUSPENSE */
  ) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parentKey = arguments.length > 2 ? arguments[2] : undefined;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // #5360 inherit parent key in case of <template v-for>

    var key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i); // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* PatchFlags.KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key: key
      }) : child);
    }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i = 0; _i < ret.length; _i++) {
      ret[_i].patchFlag = -2
      /* PatchFlags.BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
      }

      if ( true && comp && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(comp) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ErrorCodes.ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        }).catch(function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "s"])(false);
      var error = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "s"])();
      var delayed = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* ref */ "s"])(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      }).catch(function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref9) {
  var _ref9$vnode = _ref9.vnode,
      ref = _ref9$vnode.ref,
      props = _ref9$vnode.props,
      children = _ref9$vnode.children,
      shapeFlag = _ref9$vnode.shapeFlag,
      parent = _ref9.parent;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref10) {
    var slots = _ref10.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return function () {
        var children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* MoveType.ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* MoveType.LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense, true);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache.delete(key);
      keys.delete(key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref11) {
      var _ref12 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref11, 2),
          include = _ref12[0],
          exclude = _ref12[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots.default) {
        return null;
      }

      var children = slots.default();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* ShapeFlags.STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* ShapeFlags.SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* ShapeFlags.SUSPENSE */
        ) {
          rawVNode.ssContent = vnode;
        }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* ShapeFlags.COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(pattern)) {
    return pattern.split(',').includes(name);
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* LifecycleHooks.ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* LifecycleHooks.DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    return hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["remove"])(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
    shapeFlag -= 256
    /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
    ;
  }

  if (shapeFlag & 512
  /* ShapeFlags.COMPONENT_KEPT_ALIVE */
  ) {
    shapeFlag -= 512
    /* ShapeFlags.COMPONENT_KEPT_ALIVE */
    ;
  }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* ShapeFlags.SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* LifecycleHooks.SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* LifecycleHooks.BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* LifecycleHooks.MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* LifecycleHooks.BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* LifecycleHooks.UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* LifecycleHooks.BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* LifecycleHooks.UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* LifecycleHooks.SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* LifecycleHooks.RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* LifecycleHooks.RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* LifecycleHooks.ERROR_CAPTURED */
  , hook, target);
}
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


function validateDirectiveName(name) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isBuiltInDirective"])(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] : _directives$i$;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    if (dir.deep) {
      traverse(value);
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])();
      callWithAsyncErrorHandling(hook, instance, 8
      /* ErrorCodes.DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
    }
  }
}

var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component, false
      /* do not include inferred name to avoid breaking existing code */
      );

      if (selfName && (selfName === name || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(name) || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from " + "component resolution via compilerOptions.isCustomElement." : "";
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name).concat(extra));
    }

    return res;
  } else if (true) {
    warn("resolve".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(name)] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(name))]);
}
/**
 * Actual implementation
 */


function renderList(source, renderItem, cache, index) {
  var ret;
  var cached = cache && cache[index];

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(source) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
    }

    ret = new Array(source);

    for (var _i2 = 0; _i2 < source; _i2++) {
      ret[_i2] = renderItem(_i2 + 1, _i2, undefined, cached && cached[_i2]);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, function (item, i) {
        return renderItem(item, i, undefined, cached && cached[i]);
      });
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i3 = 0, _l = keys.length; _i3 < _l; _i3++) {
        var key = keys[_i3];
        ret[_i3] = renderItem(source[key], key, _i3, cached && cached[_i3]);
      }
    }
  } else {
    ret = [];
  }

  if (cache) {
    cache[index] = ret;
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  var _loop = function _loop(i) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.key ? function () {
        var res = slot.fn.apply(slot, arguments);
        res.key = slot.key;
        return res;
      } : slot.fn;
    }
  };

  for (var i = 0; i < dynamicSlots.length; i++) {
    _loop(i);
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;

  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode('slot', name === 'default' ? null : {
      name: name
    }, fallback && fallback());
  }

  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent && validSlotContent.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* SlotFlags.STABLE */
  ? 64
  /* PatchFlags.STABLE_FRAGMENT */
  : -2
  /* PatchFlags.BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj, preserveCaseIfNecessary) {
  var ret = {};

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? "on:".concat(key) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toHandlerKey"])(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation

/*#__PURE__*/
Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(i.props) : undefined;
  },
  $attrs: function $attrs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(i.attrs) : undefined;
  },
  $slots: function $slots(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(i.slots) : undefined;
  },
  $refs: function $refs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(i.refs) : undefined;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return  true ? resolveMergedOptions(i) : undefined;
  },
  $forceUpdate: function $forceUpdate(i) {
    return i.f || (i.f = function () {
      return queueJob(i.update);
    });
  },
  $nextTick: function $nextTick(i) {
    return i.n || (i.n = nextTick.bind(i.proxy));
  },
  $watch: function $watch(i) {
    return  true ? instanceWatch.bind(i) : undefined;
  }
});

var isReservedPrefix = function isReservedPrefix(key) {
  return key === '_' || key === '$';
};

var PublicInstanceProxyHandlers = {
  get: function get(_ref13, key) {
    var instance = _ref13._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // prioritize <script setup> bindings during dev.
    // this allows even properties that start with _ or $ to be used - so that
    // it aligns with the production behavior where the render fn is inlined and
    // indeed has access to all declared variables.


    if ( true && setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && setupState.__isScriptSetup && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, key)) {
      return setupState[key];
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 1
          /* AccessTypes.SETUP */
          :
            return setupState[key];

          case 2
          /* AccessTypes.DATA */
          :
            return data[key];

          case 4
          /* AccessTypes.CONTEXT */
          :
            return ctx[key];

          case 3
          /* AccessTypes.PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, key)) {
        accessCache[key] = 1
        /* AccessTypes.SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(data, key)) {
        accessCache[key] = 2
        /* AccessTypes.DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(normalizedProps, key)) {
        accessCache[key] = 3
        /* AccessTypes.PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(ctx, key)) {
        accessCache[key] = 4
        /* AccessTypes.CONTEXT */
        ;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 0
        /* AccessTypes.OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* track */ "B"])(instance, "get"
        /* TrackOpTypes.GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 4
      /* AccessTypes.CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && isReservedPrefix(key[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref14, key, value) {
    var instance = _ref14._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(data, key)) {
      data[key] = value;
      return true;
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref15, key) {
    var _ref15$_ = _ref15._,
        data = _ref15$_.data,
        setupState = _ref15$_.setupState,
        accessCache = _ref15$_.accessCache,
        ctx = _ref15$_.ctx,
        appContext = _ref15$_.appContext,
        propsOptions = _ref15$_.propsOptions;
    var normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, key) || (normalizedProps = propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(normalizedProps, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(ctx, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(publicPropertiesMap, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(appContext.config.globalProperties, key);
  },
  defineProperty: function defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      // invalidate key cache of a getter based property #5417
      target._.accessCache[key] = 0;
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(descriptor, 'value')) {
      this.set(target, key, descriptor.value, null);
    }

    return Reflect.defineProperty(target, key, descriptor);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isGloballyWhitelisted"])(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createDevRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption3 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      propsOptions = _instance$propsOption3[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
        return;
      }

      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return setupState[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]
      });
    }
  });
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* LifecycleHooks.BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : undefined;

  if (true) {
    var _instance$propsOption4 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
        propsOptions = _instance$propsOption4[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* OptionTypes.PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define
        // methods to the proxy target, and those are read-only but
        // reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* OptionTypes.METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* reactive */ "q"])(data);

        if (true) {
          var _loop2 = function _loop2(_key6) {
            checkDuplicateProperties("Data"
            /* OptionTypes.DATA */
            , _key6); // expose data on ctx during dev

            if (!isReservedPrefix(_key6[0])) {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]
              });
            }
          };

          for (var _key6 in data) {
            _loop2(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop3 = function _loop3(_key7) {
      var opt = computedOptions[_key7];
      var get = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt) ? opt.bind(publicThis, publicThis) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"];

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : undefined;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* OptionTypes.COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop3(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* LifecycleHooks.CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"];
  var unwrapRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  var _loop4 = function _loop4(key) {
    var opt = injectOptions[key];
    var injected = void 0;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opt)) {
      if ('default' in opt) {
        injected = inject(opt.from || key, opt.default, true
        /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }

    if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(injected)) {
      // TODO remove the check in 3.3
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return injected.value;
          },
          set: function set(v) {
            return injected.value = v;
          }
        });
      } else {
        if (true) {
          warn("injected property \"".concat(key, "\" is a ref and will be auto-unwrapped ") + "and no longer needs `.value` in the next minor release. " + "To opt-in to the new behavior now, " + "set `app.config.unwrapInjectedRef = true` (this config is " + "temporary and will not be needed in the future.)");
        }

        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* OptionTypes.INJECT */
      , key);
    }
  };

  for (var key in injectOptions) {
    _loop4(key);
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(raw)) {
    var handler = ctx[raw];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(raw)) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base.extends;
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(base)) {
    cache.set(base, resolved);
  }

  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from.extends;

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(to) ? to.call(this, this) : to, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["def"])(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReactive */ "u"])(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(props);

  var _instance$propsOption5 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      options = _instance$propsOption5[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* PatchFlags.FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PatchFlags.PROPS */
    ) {
      // Compiler-generated props & no keys change, just set the updated
      // the props.
      var propsToUpdate = instance.vnode.dynamicProps;

      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i]; // skip if the prop key is a declared emit event listener

        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        } // PROPS flag guarantees rawProps to be non-null


        var value = rawProps[key];

        if (options) {
          // attr / props separation was done on init and will be consistent
          // in this code path, so just check if attrs have it.
          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
            /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(rawProps, _key9) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(_key9)) === _key9 || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(rawProps, _key10) && !false) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* trigger */ "C"])(instance, "set"
    /* TriggerOpTypes.SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption6 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 2),
      options = _instance$propsOption6[0],
      needCastKeys = _instance$propsOption6[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isReservedProp"])(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(options, camelKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt.default;

      if (opt.type !== Function && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* BooleanFlags.shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* BooleanFlags.shouldCastTrue */
      ] && (value === '' || value === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp.extends) {
      extendProps(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(comp)) {
      cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"]);
    }

    return _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"];
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];
      }
    }
  } else if (raw) {
    if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["camelize"])(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(opt) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* BooleanFlags.shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* BooleanFlags.shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(comp)) {
    cache.set(comp, res);
  }

  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? 'null' : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(rawProps, key) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(rawProps, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hyphenate"])(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["makeMap"])('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(value);
  } else if (expectedType === 'Array') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value);
  } else if (expectedType === 'null') {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["capitalize"]).join(' | '));
  var expectedType = expectedTypes[0];
  var receivedType = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["toRawType"])(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  if (rawSlot._n) {
    // already normalized - #5353
    return rawSlot;
  }

  var normalized = withCtx(function () {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot.apply(void 0, arguments));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots.default = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* ShapeFlags.SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // users can get the shallow readonly version of the slots object through `this.$slots`,
      // we should avoid the proxy object polluting the slots of the internal instance
      instance.slots = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(children); // make compiler marker non-enumerable

      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["def"])(children, '_', type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["def"])(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];

  if (vnode.shapeFlag & 32
  /* ShapeFlags.SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // compiled slots.
      if ( true && isHmrUpdating) {
        // Parent was HMR updated so slot content may have changed.
        // force update slots and mark instance for hmr as well
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(slots, children);
      } else if (optimized && type === 1
      /* SlotFlags.STABLE */
      ) {
        // compiled AND stable.
        // no need to update, and skip stale slots removal.
        needDeletionCheck = false;
      } else {
        // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
        // normalization.
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(slots, children); // #2893
        // when rendering the optimized slots by manually written render function,
        // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
        // i.e. let the `renderSlot` create the bailed Fragment

        if (!optimized && type === 1
        /* SlotFlags.STABLE */
        ) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }

    deletionComparisonTarget = children;
  } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NO"],
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }

    if (rootProps != null && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (true) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else {}

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          // #5571
          if ( true && rootContainer.__vue_app__) {
            warn("There is already an app instance mounted on the host container.\n" + " If you want to mount another app on the same host container," + " you need to unmount the previous app by calling `app.unmount()` first.");
          }

          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return getExposeProxy(vnode.component) || vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        }

        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
/**
 * Function for handling a template ref
 */


function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* ShapeFlags.STATEFUL_COMPONENT */
  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"] ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(oldRef)) {
      refs[oldRef] = null;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(oldRef)) {
      oldRef.value = null;
    }
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* ErrorCodes.FUNCTION_REF */
    , [value, refs]);
  } else {
    var _isString = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(ref);

    var _isRef = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(ref);

    if (_isString || _isRef) {
      var doSet = function doSet() {
        if (rawRef.f) {
          var existing = _isString ? refs[ref] : ref.value;

          if (isUnmount) {
            Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(existing) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["remove"])(existing, refValue);
          } else {
            if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(existing)) {
              if (_isString) {
                refs[ref] = [refValue];

                if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn('Invalid template ref type:', ref, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ref), ")"));
        }
      };

      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn('Invalid template ref type:', ref, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ref), ")"));
    }
  }
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* DOMNodeTypes.COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      createText = _rendererInternals$o2.createText,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
       true && warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag;
    var domType = node.nodeType;
    vnode.el = node;

    if (patchFlag === -2
    /* PatchFlags.BAIL */
    ) {
      optimized = false;
      vnode.dynamicChildren = null;
    }

    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* DOMNodeTypes.TEXT */
        ) {
          // #5728 empty text node inside a slot can cause hydration failure
          // because the server rendered HTML won't contain a text node
          if (vnode.children === '') {
            insert(vnode.el = createText(''), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment:
        if (domType !== 8
        /* DOMNodeTypes.COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* DOMNodeTypes.ELEMENT */
        && domType !== 3
        /* DOMNodeTypes.TEXT */
        ) {
          nextNode = onMismatch();
        } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.nodeType === 1
            /* DOMNodeTypes.ELEMENT */
            ? nextNode.outerHTML : nextNode.data;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ShapeFlags.ELEMENT */
        ) {
          if (domType !== 1
          /* DOMNodeTypes.ELEMENT */
          || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6
        /* ShapeFlags.COMPONENT */
        ) {
          // when setting up the render effect, if the initial vnode already
          // has .el set, the component will perform hydration instead of mount
          // on its sub-tree.
          vnode.slotScopeIds = slotScopeIds;
          var container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
          // on component's rendered output to determine the end of the fragment
          // instead, we do a lookahead to find the end anchor node.

          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #4293 teleport as component root

          if (nextNode && isComment(nextNode) && nextNode.data === 'teleport end') {
            nextNode = nextSibling(nextNode);
          } // #3787
          // if component is async, it may get moved / unmounted before its
          // inner component is loaded, so we need to give it a placeholder
          // vnode that matches its adopted DOM.


          if (isAsyncWrapper(vnode)) {
            var subTree;

            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
            }

            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64
        /* ShapeFlags.TELEPORT */
        ) {
          if (domType !== 8
          /* DOMNodeTypes.COMMENT */
          ) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128
        /* ShapeFlags.SUSPENSE */
        ) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var type = vnode.type,
        props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // #4006 for form elements with non-string v-model value bindings
    // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">

    var forcePatchValue = type === 'input' && dirs || type === 'option'; // skip props & children if this is hoisted static nodes
    // #5405 in dev, always hydrate children for HMR

    if (true
    /* PatchFlags.HOISTED */
    ) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        if (forcePatchValue || !optimized || patchFlag & (16
        /* PatchFlags.FULL_PROPS */
        | 32
        /* PatchFlags.HYDRATE_EVENTS */
        )) {
          for (var key in props) {
            if (forcePatchValue && key.endsWith('value') || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isOn"])(key) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isReservedProp"])(key)) {
              patchProp(el, key, null, props[key], false, undefined, parentComponent);
            }
          }
        } else if (props.onClick) {
          // Fast path for click listeners (which is most often) to avoid
          // iterating through props.
          patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
        }
      } // vnode / directive hooks


      var vnodeHooks;

      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
      }

      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(function () {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
      } // children


      if (shapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        var _hasWarned = false;

        while (next) {
          hasMismatch = true;

          if ( true && !_hasWarned) {
            warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
            _hasWarned = true;
          } // The SSRed DOM contains more nodes than it should. Remove them.


          var cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8
      /* ShapeFlags.TEXT_CHILDREN */
      ) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
           true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
          el.textContent = vnode.children;
        }
      }
    }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* DOMNodeTypes.TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}
/* eslint-disable no-restricted-globals */


var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }

  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }

  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = [];

  if (false) {}

  if (false) {}

  if ( true && needWarn.length) {
    var multi = needWarn.length > 1;
    console.warn("Feature flag".concat(multi ? "s" : "", " ").concat(needWarn.join(', '), " ").concat(multi ? "are" : "is", " not explicitly defined. You are running the esm-bundler build of Vue, ") + "which expects these compile-time feature flags to be globally injected " + "via the bundler config in order to get better tree-shaking in the " + "production bundle.\n\n" + "For more details, see https://link.vuejs.org/feature-flags.");
  }
}

var queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */

function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }
  var target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["getGlobalThis"])();
  target.__VUE__ = true;

  if (true) {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"] : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] :  true && isHmrUpdating ? false : !!n2.dynamicChildren;

    if (n1 === n2) {
      return;
    } // patching & not same type, unmount old tree


    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* PatchFlags.BAIL */
    ) {
      optimized = false;
      n2.dynamicChildren = null;
    }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ShapeFlags.ELEMENT */
        ) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6
        /* ShapeFlags.COMPONENT */
        ) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64
        /* ShapeFlags.TELEPORT */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128
        /* ShapeFlags.SUSPENSE */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);

    var _hostInsertStaticCont2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref16, container, nextSibling) {
    var el = _ref16.el,
        anchor = _ref16.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref17) {
    var el = _ref17.el,
        anchor = _ref17.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* PatchFlags.HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* ShapeFlags.TEXT_CHILDREN */
      ) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (key !== 'value' && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isReservedProp"])(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        /**
         * Special case for setting value on DOM elements:
         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
         * - it needs to be forced (#1471)
         * #2353 proposes adding another renderer option to configure this, but
         * the properties affects are so finite it is worth special casing it
         * here to reduce the complexity. (Special casing it also should not
         * affect non-DOM renderers)
         */


        if ('value' in props) {
          hostPatchProp(el, 'value', null, props.value);
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* PatchFlags.DEV_ROOT_FRAGMENT */
      ) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* PatchFlags.FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"];
    var vnodeHook; // disable recurse in beforeUpdate hooks

    parentComponent && toggleRecurse(parentComponent, false);

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    parentComponent && toggleRecurse(parentComponent, true);

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* PatchFlags.FULL_PROPS */
      ) {
        // element props contain dynamic keys, full diff needed
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* PatchFlags.CLASS */
        ) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, 'class', null, newProps.class, isSVG);
          }
        } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* PatchFlags.STYLE */
        ) {
          hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
        } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PatchFlags.PROPS */
        ) {
          // if the flag is present then dynamicProps must be non-null
          var propsToUpdate = n2.dynamicProps;

          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key]; // #1471 force patch value

            if (next !== prev || key === 'value') {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* PatchFlags.TEXT */
      ) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && ( // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & (6
      /* ShapeFlags.COMPONENT */
      | 64
      /* ShapeFlags.TELEPORT */
      )) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isReservedProp"])(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key]; // defer patching value

        if (next !== prev && key !== 'value') {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"]) {
        for (var _key14 in oldProps) {
          if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isReservedProp"])(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }

      if ('value' in newProps) {
        hostPatchProp(el, 'value', oldProps.value, newProps.value);
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if ( true && ( // #5523 dev root fragment may inherit directives
    isHmrUpdating || patchFlag & 2048
    /* PatchFlags.DEV_ROOT_FRAGMENT */
    )) {
      // HMR updated / Dev root fragment (w/ comments), force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* PatchFlags.STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* ShapeFlags.COMPONENT_KEPT_ALIVE */
      ) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    var componentUpdateFn = function componentUpdateFn() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent;
        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false); // beforeMount hook

        if (bm) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(bm);
        } // onVnodeBeforeMount


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        toggleRecurse(instance, true);

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
        || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256
        /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        } // Disallow component effect recursion during pre-lifecycle hooks.


        toggleRecurse(instance, false);

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        }

        toggleRecurse(instance, true); // render

        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    }; // create reactive effect for rendering


    var effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* ReactiveEffect */ "b"](componentUpdateFn, function () {
      return queueJob(update);
    }, instance.scope // track it in component's effect scope
    );

    var update = instance.update = function () {
      return effect.run();
    };

    update.id = instance.uid; // allowRecurse
    // #1801, #2043 component render effects should allow recursive updates

    toggleRecurse(instance, true);

    if (true) {
      effect.onTrack = instance.rtc ? function (e) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(instance.rtc, e);
      } : void 0;
      effect.onTrigger = instance.rtg ? function (e) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(instance.rtg, e);
      } : void 0;
      update.ownerInstance = instance;
    }

    update();
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs();
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* PatchFlags.KEYED_FRAGMENT */
      ) {
        // this could be either fully-keyed or mixed (some keyed some not)
        // presence of patchFlag means children are guaranteed to be arrays
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256
      /* PatchFlags.UNKEYED_FRAGMENT */
      ) {
        // unkeyed
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* ShapeFlags.TEXT_CHILDREN */
    ) {
      // text children fast path
      if (prevShapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }

      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ) {
        // prev children was array
        if (shapeFlag & 16
        /* ShapeFlags.ARRAY_CHILDREN */
        ) {
          // two arrays, cannot assume anything, do full diff
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          // no new children, just unmount old
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* ShapeFlags.TEXT_CHILDREN */
        ) {
          hostSetElementText(container, '');
        } // mount new if array


        if (shapeFlag & 16
        /* ShapeFlags.ARRAY_CHILDREN */
        ) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"];
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"];
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n = c1[e1];

      var _n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n, _n2)) {
        patch(_n, _n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
      var s1 = i; // prev starting index

      var s2 = i; // next starting index
      // 5.1 build key:index map for newChildren

      var keyToNewIndexMap = new Map();

      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }

          keyToNewIndexMap.set(nextChild.key, i);
        }
      } // 5.2 loop through old children left to be patched and try to patch
      // matching nodes & remove nodes that are no longer present


      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false; // used to track whether any node has moved

      var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
      // Note that oldIndex is offset by +1
      // and oldIndex = 0 is a special value indicating the new node has
      // no corresponding old node.
      // used for determining longest stable subsequence

      var newIndexToOldIndexMap = new Array(toBePatched);

      for (i = 0; i < toBePatched; i++) {
        newIndexToOldIndexMap[i] = 0;
      }

      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];

        if (patched >= toBePatched) {
          // all new children have been patched so this can only be a removal
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }

        var newIndex = void 0;

        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          // key-less node, try to locate a key-less node of the same type
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }

        if (newIndex === undefined) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;

          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }

          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      } // 5.3 move and mount
      // generate longest stable subsequence only when nodes have moved


      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"];
      j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];

        var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

        if (newIndexToOldIndexMap[i] === 0) {
          // mount new
          patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          // move if:
          // There is no stable subsequence (e.g. a reverse)
          // OR current node is not among the stable sequence
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor2, 2
            /* MoveType.REORDER */
            );
          } else {
            j--;
          }
        }
      }
    }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* ShapeFlags.COMPONENT */
    ) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }

    if (shapeFlag & 128
    /* ShapeFlags.SUSPENSE */
    ) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }

    if (shapeFlag & 64
    /* ShapeFlags.TELEPORT */
    ) {
      type.move(vnode, container, anchor, internals);
      return;
    }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* MoveType.REORDER */
    && shapeFlag & 1
    /* ShapeFlags.ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* MoveType.ENTER */
      ) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(function () {
          return transition.enter(el);
        }, parentSuspense);
      } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }

    var shouldInvokeDirs = shapeFlag & 1
    /* ShapeFlags.ELEMENT */
    && dirs;
    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    var vnodeHook;

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* ShapeFlags.COMPONENT */
    ) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128
      /* ShapeFlags.SUSPENSE */
      ) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* ShapeFlags.TELEPORT */
      ) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* PatchFlags.STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128
      /* PatchFlags.KEYED_FRAGMENT */
      | 256
      /* PatchFlags.UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      if ( true && vnode.patchFlag > 0 && vnode.patchFlag & 2048
      /* PatchFlags.DEV_ROOT_FRAGMENT */
      && transition && !transition.persisted) {
        vnode.children.forEach(function (child) {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }

      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ShapeFlags.ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        scope = instance.scope,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["invokeArrayFns"])(bum);
    } // stop effects in component scope


    scope.stop(); // update may be null if a component is unmounted before its async
    // setup has resolved.

    if (update) {
      // so that scheduler will no longer invoke it
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* ShapeFlags.COMPONENT */
    ) {
      return getNextHostNode(vnode.component.subTree);
    }

    if (vnode.shapeFlag & 128
    /* ShapeFlags.SUSPENSE */
    ) {
      return vnode.suspense.next();
    }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function toggleRecurse(_ref18, allowed) {
  var effect = _ref18.effect,
      update = _ref18.update;
  effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(ch1) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ShapeFlags.ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* PatchFlags.HYDRATE_EVENTS */
        ) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = u + v >> 1;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : undefined;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : undefined;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ShapeFlags.ARRAY_CHILDREN */
        ) {
          mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TeleportMoveTypes.TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TeleportMoveTypes.TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TeleportMoveTypes.TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref19, doRemove) {
    var unmount = _ref19.um,
        hostRemove = _ref19.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref20) {
  var insert = _ref20.o.insert,
      move = _ref20.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TeleportMoveTypes.TARGET_CHANGE */
  ) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* TeleportMoveTypes.REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ShapeFlags.ARRAY_CHILDREN */
    ) {
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2
        /* MoveType.REORDER */
        );
      }
    }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref21, hydrateChildren) {
  var _ref21$o = _ref21.o,
      nextSibling = _ref21$o.nextSibling,
      parentNode = _ref21$o.parentNode,
      querySelector = _ref21$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ShapeFlags.ARRAY_CHILDREN */
    ) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node); // lookahead until we find the target anchor
        // we cannot rely on return value of hydrateChildren() because there
        // could be nested teleports

        var targetAnchor = targetNode;

        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);

          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === 'teleport anchor') {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }

        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var Fragment = Symbol( true ? 'Fragment' : undefined);
var Text = Symbol( true ? 'Text' : undefined);
var Comment = Symbol( true ? 'Comment' : undefined);
var Static = Symbol( true ? 'Static' : undefined); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}

function setupBlock(vnode) {
  // save current block children on the block vnode
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_ARR"] : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}
/**
 * @private
 */


function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true
  /* isBlock */
  ));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ));
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* ShapeFlags.COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref22) {
  var key = _ref22.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref23) {
  var ref = _ref23.ref,
      ref_key = _ref23.ref_key,
      ref_for = _ref23.ref_for;
  return ref != null ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(ref) || Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(ref) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(ref) ? {
    i: currentRenderingInstance,
    r: ref,
    k: ref_key,
    f: !!ref_for
  } : ref : null;
};

function createBaseVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var shapeFlag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : type === Fragment ? 0 : 1;
  var isBlockNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  };

  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children); // normalize suspense children

    if (shapeFlag & 128
    /* ShapeFlags.SUSPENSE */
    ) {
      type.normalize(vnode);
    }
  } else if (children) {
    // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(children) ? 8
    /* ShapeFlags.TEXT_CHILDREN */
    : 16
    /* ShapeFlags.ARRAY_CHILDREN */
    ;
  } // validate key


  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  } // track vnode for block tree


  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  vnode.patchFlag > 0 || shapeFlag & 6
  /* ShapeFlags.COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32
  /* PatchFlags.HYDRATE_EVENTS */
  ) {
    currentBlock.push(vnode);
  }

  return vnode;
}

var createVNode =  true ? createVNodeWithArgsTransform : undefined;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6
      /* ShapeFlags.COMPONENT */
      ) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }

    cloned.patchFlag |= -2
    /* PatchFlags.BAIL */
    ;
    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    props = guardReactiveProps(props);
    var _props = props,
        klass = _props.class,
        style = _props.style;

    if (klass && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(klass)) {
      props.class = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeClass"])(klass);
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isProxy */ "h"])(style) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(style)) {
        style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, style);
      }

      props.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeStyle"])(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isString"])(type) ? 1
  /* ShapeFlags.ELEMENT */
  : isSuspense(type) ? 128
  /* ShapeFlags.SUSPENSE */
  : isTeleport(type) ? 64
  /* ShapeFlags.TELEPORT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(type) ? 4
  /* ShapeFlags.STATEFUL_COMPONENT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(type) ? 2
  /* ShapeFlags.FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* ShapeFlags.STATEFUL_COMPONENT */
  && Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isProxy */ "h"])(type)) {
    type = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}

function guardReactiveProps(props) {
  if (!props) return null;
  return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isProxy */ "h"])(props) || InternalObjectKey in props ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, props) : props;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* PatchFlags.HOISTED */
    && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* PatchFlags.FULL_PROPS */
    : patchFlag | 16
    /* PatchFlags.FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(children)) {
    type = 16
    /* ShapeFlags.ARRAY_CHILDREN */
    ;
  } else if (Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(children) === 'object') {
    if (shapeFlag & (1
    /* ShapeFlags.ELEMENT */
    | 64
    /* ShapeFlags.TELEPORT */
    )) {
      // Normalize slot to plain children for plain element and Teleport
      var slot = children.default;

      if (slot) {
        // _c marker is added by withCtx() indicating this is a compiled slot
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }

      return;
    } else {
      type = 32
      /* ShapeFlags.SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* SlotFlags.FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* SlotFlags.STABLE */
        ) {
          children._ = 1
          /* SlotFlags.STABLE */
          ;
        } else {
          children._ = 2
          /* SlotFlags.DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* PatchFlags.DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* ShapeFlags.SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* ShapeFlags.TELEPORT */
    ) {
      type = 16
      /* ShapeFlags.ARRAY_CHILDREN */
      ;
      children = [createTextVNode(children)];
    } else {
      type = 8
      /* ShapeFlags.TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = {};

  for (var i = 0; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret.class !== toMerge.class) {
          ret.class = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeClass"])([ret.class, toMerge.class]);
        }
      } else if (key === 'style') {
        ret.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["normalizeStyle"])([ret.style, toMerge.style]);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isOn"])(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (incoming && existing !== incoming && !(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* ErrorCodes.VNODE_HOOK */
  , [vnode, prevVNode]);
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* EffectScope */ "a"](true
    /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"],
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance); // apply custom element special handling

  if (vnode.ce) {
    vnode.ce(instance);
  }

  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
  instance.scope.on();
};

var unsetCurrentInstance = function unsetCurrentInstance() {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};

var isBuiltInTag = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["makeMap"])('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NO"];

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* ShapeFlags.STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var _a;

  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i4 = 0; _i4 < _names.length; _i4++) {
        validateDirectiveName(_names[_i4]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* markRaw */ "m"])(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* ErrorCodes.SETUP_FUNCTION */
    , [ true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(instance.props) : undefined, setupContext]);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
    unsetCurrentInstance();

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch(function (e) {
          handleError(e, instance, 0
          /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;

        if ( true && !instance.suspense) {
          var name = (_a = Component.name) !== null && _a !== void 0 ? _a : 'Anonymous';
          warn("Component <".concat(name, ">: setup function returned a promise, but no ") + "<Suspense> boundary was found in the parent component tree. " + "A component with async setup() must be nested in a <Suspense> " + "in order to be rendered.");
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(setupResult)) {
    // setup returned an inline render function
    if (instance.type.__ssrInlineRender) {
      // when the function's name is `ssrRender` (compiled by SFC inline mode),
      // set it as ssrRender instead.
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* proxyRefs */ "p"])(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile;
var installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */

function registerRuntimeCompiler(_compile) {
  compile = _compile;

  installWithProxy = function installWithProxy(i) {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
} // dev only


var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization
  // could be already set when returned from setup()

  if (!instance.render) {
    // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
    // is done by server-renderer
    if (!isSSR && compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"]; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (installWithProxy) {
      installWithProxy(instance);
    }
  } // support for 2.x options


  if (true) {
    setCurrentInstance(instance);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* pauseTracking */ "o"])();
    applyOptions(instance);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* resetTracking */ "t"])();
    unsetCurrentInstance();
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_6__["NOOP"] && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

function createAttrsProxy(instance) {
  return new Proxy(instance.attrs,  true ? {
    get: function get(target, key) {
      markAttrsAccessed();
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* track */ "B"])(instance, "get"
      /* TrackOpTypes.GET */
      , '$attrs');
      return target[key];
    },
    set: function set() {
      warn("setupContext.attrs is readonly.");
      return false;
    },
    deleteProperty: function deleteProperty() {
      warn("setupContext.attrs is readonly.");
      return false;
    }
  } : undefined);
}

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = exposed || {};
  };

  var attrs;

  if (true) {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },

      get slots() {
        return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* shallowReadonly */ "v"])(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* proxyRefs */ "p"])(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* markRaw */ "m"])(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  var includeInferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(value) && '__vccOpts' in value;
}

var computed = function computed(getterOrOptions, debugOptions) {
  // @ts-ignore
  return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* computed */ "c"])(getterOrOptions, debugOptions, isInSSRComponentSetup);
}; // dev only


var warnRuntimeUsage = function warnRuntimeUsage(method) {
  return warn("".concat(method, "() is a compiler-hint helper that is only usable inside ") + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
}; // implementation


function defineProps() {
  if (true) {
    warnRuntimeUsage("defineProps");
  }

  return null;
} // implementation


function defineEmits() {
  if (true) {
    warnRuntimeUsage("defineEmits");
  }

  return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */


function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage("defineExpose");
  }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */


function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage("withDefaults");
  }

  return null;
}

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */


function mergeDefaults(raw, defaults) {
  var props = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(raw) ? raw.reduce(function (normalized, p) {
    return normalized[p] = {}, normalized;
  }, {}) : raw;

  for (var key in defaults) {
    var opt = props[key];

    if (opt) {
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(opt) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(opt)) {
        props[key] = {
          type: opt,
          default: defaults[key]
        };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      props[key] = {
        default: defaults[key]
      };
    } else if (true) {
      warn("props default key \"".concat(key, "\" has no corresponding declaration."));
    }
  }

  return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */


function createPropsRestProxy(props, excludedKeys) {
  var ret = {};

  var _loop5 = function _loop5(key) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: function get() {
          return props[key];
        }
      });
    }
  };

  for (var key in props) {
    _loop5(key);
  }

  return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */


function withAsyncContext(getAwaitable) {
  var ctx = getCurrentInstance();

  if ( true && !ctx) {
    warn("withAsyncContext called without active current instance. " + "This is likely a bug.");
  }

  var awaitable = getAwaitable();
  unsetCurrentInstance();

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(awaitable)) {
    awaitable = awaitable.catch(function (e) {
      setCurrentInstance(ctx);
      throw e;
    });
  }

  return [awaitable, function () {
    return setCurrentInstance(ctx);
  }];
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(propsOrChildren) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : undefined);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function isShallow(value) {
  return !!(value && value["__v_isShallow"
  /* ReactiveFlags.IS_SHALLOW */
  ]);
}

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isRef */ "k"])(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReactive */ "i"])(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReactive' : 'Reactive'], '<', formatValue(obj), ">".concat(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReadonly */ "j"])(obj) ? " (readonly)" : "")];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* isReadonly */ "j"])(obj)) {
        return ['div', {}, ['span', vueStyle, isShallow(obj) ? 'ShallowReadonly' : 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"]) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_6__["EMPTY_OBJ"]) {
      blocks.push(createInstanceBlock('data', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["extend"])({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(v)) {
      return ['object', {
        object: asRaw ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_5__[/* toRaw */ "y"])(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isArray"])(opts) && opts.includes(key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["isObject"])(opts) && key in opts) {
      return true;
    }

    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (isShallow(v)) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  var cached = cache[index];

  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }

  var ret = render(); // shallow clone

  ret.memo = memo.slice();
  return cache[index] = ret;
}

function isMemoSame(cached, memo) {
  var prev = cached.memo;

  if (prev.length != memo.length) {
    return false;
  }

  for (var i = 0; i < prev.length; i++) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_6__["hasChanged"])(prev[i], memo[i])) {
      return false;
    }
  } // make sure to let parent block track it when returning cached


  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }

  return true;
} // Core API ------------------------------------------------------------------


var version = "3.2.38";
var _ssrUtils = {
  createComponentInstance: createComponentInstance,
  setupComponent: setupComponent,
  renderComponentRoot: renderComponentRoot,
  setCurrentRenderingInstance: setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode: normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */

var ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["SVGElement"]))

/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/*! exports provided: EffectScope, ReactiveEffect, customRef, effect, effectScope, getCurrentScope, isProxy, isReactive, isReadonly, isRef, isShallow, markRaw, onScopeDispose, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, normalizeClass, normalizeProps, normalizeStyle, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createHydrationRenderer, createPropsRestProxy, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, guardReactiveProps, h, handleError, initCustomFormatter, inject, isMemoSame, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withMemo, withScopeId, Transition, TransitionGroup, VueElement, createApp, createSSRApp, defineCustomElement, defineSSRCustomElement, hydrate, initDirectivesForSSR, render, useCssModule, useCssVars, vModelCheckbox, vModelDynamic, vModelRadio, vModelSelect, vModelText, vShow, withKeys, withModifiers */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document, window, navigator, MutationObserver, requestAnimationFrame, SVGElement, Element) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return TransitionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueElement", function() { return VueElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSSRApp", function() { return createSSRApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineSSRCustomElement", function() { return defineSSRCustomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDirectivesForSSR", function() { return initDirectivesForSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return useCssModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssVars", function() { return useCssVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelCheckbox", function() { return vModelCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelDynamic", function() { return vModelDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelRadio", function() { return vModelRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelSelect", function() { return vModelSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vModelText", function() { return vModelText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vShow", function() { return vShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withKeys", function() { return withKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withModifiers", function() { return withModifiers; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectScope", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveEffect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectScope", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isShallow", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeClass", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeStyle", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransition", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeepAlive", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Static", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Teleport", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithAsyncErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callWithErrorHandling", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compatUtils", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCommentVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHydrationRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPropsRestProxy", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSlots", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStaticVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineEmits", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineExpose", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransitionRawChildren", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guardReactiveProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initCustomFormatter", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMemoSame", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRuntimeOnly", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVNode", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDefaults", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeProps", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTracked", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onRenderTriggered", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBlock", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queuePostFlushCb", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerRuntimeCompiler", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDirective", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveDynamicComponent", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveFilter", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBlockTracking", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDevtoolsHook", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTransitionHooks", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrContextKey", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrUtils", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHandlers", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["Xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformVNodeArgs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAttrs", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSSRContext", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlots", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransitionState", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAsyncContext", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCtx", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDefaults", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withDirectives", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMemo", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScopeId", function() { return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__["tc"]; });












var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var templateContainer = doc && /*#__PURE__*/doc.createElement('template');
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
    // <parent> before | first ... last | anchor </parent>
    var before = anchor ? anchor.previousSibling : parent.lastChild; // #5308 can only take cached path if:
    // - has a single root node
    // - nextSibling info is still available

    if (start && (start === end || start.nextSibling)) {
      // cached
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      // fresh insert
      templateContainer.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
      var template = templateContainer.content;

      if (isSVG) {
        // remove outer svg wrapper
        var wrapper = template.firstChild;

        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }

        template.removeChild(wrapper);
      }

      parent.insertBefore(template, anchor);
    }

    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  // directly setting className should be faster than setAttribute in theory
  // if this is an element during a transition, take the temporary transition
  // classes into account.
  var transitionClasses = el._vtc;

  if (transitionClasses) {
    value = (value ? [value].concat(Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(transitionClasses)) : Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(transitionClasses)).join(' ');
  }

  if (value == null) {
    el.removeAttribute('class');
  } else if (isSVG) {
    el.setAttribute('class', value);
  } else {
    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;
  var isCssString = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isString"])(next);

  if (next && !isCssString) {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isString"])(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  } else {
    var currentDisplay = style.display;

    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute('style');
    } // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style`
    // value, thus handing over control to `v-show`.


    if ('_vod' in el) {
      style.display = currentDisplay;
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (val == null) val = '';

    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["camelize"])(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSpecialBooleanAttr"])(key);

    if (value == null || isBoolean && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["includeBooleanAttr"])(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
  !el.tagName.includes('-')) {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    el.tagName === 'OPTION') {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  var needRemove = false;

  if (value === '' || value == null) {
    var type = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(el[key]);

    if (type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      value = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["includeBooleanAttr"])(value);
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      value = '';
      needRemove = true;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
      value = 0;
      needRemove = true;
    }
  } // some properties perform value validation and throw,
  // some properties has getter, no setter, will error in 'use strict'
  // eg. <select :type="null"></select> <select :willValidate="null"></select>


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }

  needRemove && el.removeAttribute(key);
} // Async edge case fix requires storing an event listener's attach timestamp.


var _ref = /*#__PURE__*/function () {
  var _getNow = Date.now;
  var skipTimestampCheck = false;

  if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (Date.now() > document.createEvent('Event').timeStamp) {
      // if the low-res timestamp which is bigger than the event timestamp
      // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listeners as well.
      _getNow = performance.now.bind(performance);
    } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.


    var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }

  return [_getNow, skipTimestampCheck];
}(),
    _ref2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_ref, 2),
    _getNow = _ref2[0],
    skipTimestampCheck = _ref2[1]; // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = /*#__PURE__*/Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  var event = name[2] === ':' ? name.slice(3) : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(name.slice(2));
  return [event, options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* callWithAsyncErrorHandling */ "k"])(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* ErrorCodes.NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  if (key === 'class') {
    patchClass(el, nextValue, isSVG);
  } else if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isOn"])(key)) {
    // ignore v-model listeners
    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isModelListener"])(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    // special case for <input v-model type="checkbox"> with
    // :true-value & :false-value
    // store value as dom properties since non-string values will be
    // stringified.
    if (key === 'true-value') {
      el._trueValue = nextValue;
    } else if (key === 'false-value') {
      el._falseValue = nextValue;
    }

    patchAttr(el, key, nextValue, isSVG);
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML & textContent
    if (key === 'innerHTML' || key === 'textContent') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(value)) {
      return true;
    }

    return false;
  } // these are enumerated attrs, however their corresponding DOM properties
  // are actually booleans - this leads to setting it with a string "false"
  // value leading it to be coerced to `true`, so we need to always treat
  // them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isString"])(value)) {
    return false;
  }

  return key in el;
}

function defineCustomElement(options, hydrate) {
  var Comp = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* defineComponent */ "E"])(options);

  var VueCustomElement = /*#__PURE__*/function (_VueElement) {
    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VueCustomElement, _VueElement);

    var _super = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueCustomElement);

    function VueCustomElement(initialProps) {
      Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, VueCustomElement);

      return _super.call(this, Comp, initialProps, hydrate);
    }

    return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VueCustomElement);
  }(VueElement);

  VueCustomElement.def = Comp;
  return VueCustomElement;
}

var defineSSRCustomElement = function defineSSRCustomElement(options) {
  // @ts-ignore
  return defineCustomElement(options, hydrate);
};

var BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : /*#__PURE__*/function () {
  function _class() {
    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, _class);
  }

  return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class);
}();

var VueElement = /*#__PURE__*/function (_BaseClass) {
  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VueElement, _BaseClass);

  var _super2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VueElement);

  function VueElement(_def) {
    var _this;

    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var hydrate = arguments.length > 2 ? arguments[2] : undefined;

    Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, VueElement);

    _this = _super2.call(this);
    _this._def = _def;
    _this._props = _props;
    /**
     * @internal
     */

    _this._instance = null;
    _this._connected = false;
    _this._resolved = false;
    _this._numberProps = null;

    if (_this.shadowRoot && hydrate) {
      hydrate(_this._createVNode(), _this.shadowRoot);
    } else {
      if ( true && _this.shadowRoot) {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("Custom element has pre-rendered declarative shadow root but is not " + "defined as hydratable. Use `defineSSRCustomElement`.");
      }

      _this.attachShadow({
        mode: 'open'
      });
    }

    return _this;
  }

  Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(VueElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this._connected = true;

      if (!this._instance) {
        this._resolveDef();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      this._connected = false;
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* nextTick */ "eb"])(function () {
        if (!_this2._connected) {
          render(null, _this2.shadowRoot);
          _this2._instance = null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */

  }, {
    key: "_resolveDef",
    value: function _resolveDef() {
      var _this3 = this;

      if (this._resolved) {
        return;
      }

      this._resolved = true; // set initial attrs

      for (var i = 0; i < this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      } // watch future attr changes


      new MutationObserver(function (mutations) {
        var _iterator = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(mutations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;

            _this3._setAttr(m.attributeName);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }).observe(this, {
        attributes: true
      });

      var resolve = function resolve(def) {
        var props = def.props,
            styles = def.styles;
        var hasOptions = !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(props);
        var rawKeys = props ? hasOptions ? Object.keys(props) : props : []; // cast Number-type props set before resolve

        var numberProps;

        if (hasOptions) {
          for (var key in _this3._props) {
            var opt = props[key];

            if (opt === Number || opt && opt.type === Number) {
              _this3._props[key] = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(_this3._props[key]);
              (numberProps || (numberProps = Object.create(null)))[key] = true;
            }
          }
        }

        _this3._numberProps = numberProps; // check if there are props set pre-upgrade or connect

        for (var _i = 0, _Object$keys = Object.keys(_this3); _i < _Object$keys.length; _i++) {
          var _key2 = _Object$keys[_i];

          if (_key2[0] !== '_') {
            _this3._setProp(_key2, _this3[_key2], true, false);
          }
        } // defining getter/setters on prototype


        var _iterator2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rawKeys.map(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["camelize"])),
            _step2;

        try {
          var _loop = function _loop() {
            var key = _step2.value;
            Object.defineProperty(_this3, key, {
              get: function get() {
                return this._getProp(key);
              },
              set: function set(val) {
                this._setProp(key, val);
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          } // apply CSS

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        _this3._applyStyles(styles); // initial render


        _this3._update();
      };

      var asyncDef = this._def.__asyncLoader;

      if (asyncDef) {
        asyncDef().then(resolve);
      } else {
        resolve(this._def);
      }
    }
  }, {
    key: "_setAttr",
    value: function _setAttr(key) {
      var value = this.getAttribute(key);

      if (this._numberProps && this._numberProps[key]) {
        value = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(value);
      }

      this._setProp(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["camelize"])(key), value, false);
    }
    /**
     * @internal
     */

  }, {
    key: "_getProp",
    value: function _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */

  }, {
    key: "_setProp",
    value: function _setProp(key, val) {
      var shouldReflect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var shouldUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (val !== this._props[key]) {
        this._props[key] = val;

        if (shouldUpdate && this._instance) {
          this._update();
        } // reflect


        if (shouldReflect) {
          if (val === true) {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(key), '');
          } else if (typeof val === 'string' || typeof val === 'number') {
            this.setAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(key), val + '');
          } else if (!val) {
            this.removeAttribute(Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(key));
          }
        }
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      render(this._createVNode(), this.shadowRoot);
    }
  }, {
    key: "_createVNode",
    value: function _createVNode() {
      var _this4 = this;

      var vnode = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "B"])(this._def, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["extend"])({}, this._props));

      if (!this._instance) {
        vnode.ce = function (instance) {
          _this4._instance = instance;
          instance.isCE = true; // HMR

          if (true) {
            instance.ceReload = function (newStyles) {
              // always reset styles
              if (_this4._styles) {
                _this4._styles.forEach(function (s) {
                  return _this4.shadowRoot.removeChild(s);
                });

                _this4._styles.length = 0;
              }

              _this4._applyStyles(newStyles); // if this is an async component, ceReload is called from the inner
              // component so no need to reload the async wrapper


              if (!_this4._def.__asyncLoader) {
                // reload
                _this4._instance = null;

                _this4._update();
              }
            };
          } // intercept emit


          instance.emit = function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key3 = 1; _key3 < _len; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            _this4.dispatchEvent(new CustomEvent(event, {
              detail: args
            }));
          }; // locate nearest Vue custom element parent for provide/inject


          var parent = _this4;

          while (parent = parent && (parent.parentNode || parent.host)) {
            if (parent instanceof VueElement) {
              instance.parent = parent._instance;
              break;
            }
          }
        };
      }

      return vnode;
    }
  }, {
    key: "_applyStyles",
    value: function _applyStyles(styles) {
      var _this5 = this;

      if (styles) {
        styles.forEach(function (css) {
          var s = document.createElement('style');
          s.textContent = css;

          _this5.shadowRoot.appendChild(s); // record for HMR


          if (true) {
            (_this5._styles || (_this5._styles = [])).push(s);
          }
        });
      }
    }
  }]);

  return VueElement;
}(BaseClass);

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "L"])();

    if (!instance) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("useCssModule must be called inside setup()");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["EMPTY_OBJ"];
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("Current instance does not have CSS modules injected.");
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["EMPTY_OBJ"];
    }

    var mod = modules[name];

    if (!mod) {
       true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["EMPTY_OBJ"];
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "L"])();
  /* istanbul ignore next */

  if (!instance) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* watchPostEffect */ "mc"])(setVars);
  Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onMounted */ "ob"])(function () {
    var ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onUnmounted */ "tb"])(function () {
      return ob.disconnect();
    });
  });
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* ShapeFlags.SUSPENSE */
  ) {
    var suspense = vnode.suspense;
    vnode = suspense.activeBranch;

    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(function () {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ShapeFlags.ELEMENT */
  && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "d"]) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Static */ "g"]) {
    var _vnode = vnode,
        el = _vnode.el,
        anchor = _vnode.anchor;

    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}

function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    var style = el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref3) {
  var slots = _ref3.slots;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* h */ "P"])(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* BaseTransition */ "a"], resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["extend"])({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* BaseTransition */ "a"].props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(args));
    });
  } else if (hook) {
    hook.apply(void 0, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["extend"])(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      el._isLeaving = true;

      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        if (!el._isLeaving) {
          // cancelled
          return;
        }

        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isObject"])(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc.delete(cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["extend"])({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;
    var instance = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getCurrentInstance */ "L"])();
    var state = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* useTransitionState */ "hc"])();
    var prevChildren;
    var children;
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* onUpdated */ "ub"])(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_10__[/* toRaw */ "y"])(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* Fragment */ "d"];
      prevChildren = children;
      children = slots.default ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* getTransitionRawChildren */ "N"])(slots.default()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* setTransitionHooks */ "Ob"])(child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* resolveTransitionHooks */ "Lb"])(child, cssTransitionProps, state, instance));
        } else if (true) {
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* setTransitionHooks */ "Ob"])(_child, Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* resolveTransitionHooks */ "Lb"])(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createVNode */ "B"])(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'] || false;
  return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(fn) ? function (value) {
    return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["invokeArrayFns"])(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event('input'));
  }
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref5, vnode) {
    var _ref5$modifiers = _ref5.modifiers,
        lazy = _ref5$modifiers.lazy,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || vnode.props && vnode.props.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      }

      if (castToNumber) {
        domValue = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref6) {
    var value = _ref6.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref7, vnode) {
    var value = _ref7.value,
        _ref7$modifiers = _ref7.modifiers,
        lazy = _ref7$modifiers.lazy,
        trim = _ref7$modifiers.trim,
        number = _ref7$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el && el.type !== 'range') {
      if (lazy) {
        return;
      }

      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(modelValue)) {
        var index = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseIndexOf"])(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSet"])(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref8, vnode) {
  var value = _ref8.value,
      oldValue = _ref8.oldValue;
  el._modelValue = value;

  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(value)) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseIndexOf"])(value, vnode.props.value) > -1;
  } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSet"])(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value;
    el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref10, vnode) {
    var value = _ref10.value,
        oldValue = _ref10.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created: function created(el, _ref11, vnode) {
    var value = _ref11.value,
        number = _ref11.modifiers.number;
    var isSetModel = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSet"])(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["toNumber"])(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref12) {
    var value = _ref12.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref13) {
    var value = _ref13.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(value) && !Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSet"])(value)) {
     true && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(value)) {
        option.selected = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseIndexOf"])(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case 'SELECT':
      return vModelSelect;

    case 'TEXTAREA':
      return vModelText;

    default:
      switch (type) {
        case 'checkbox':
          return vModelCheckbox;

        case 'radio':
          return vModelRadio;

        default:
          return vModelText;
      }

  }
}

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVModelForSSR() {
  vModelText.getSSRProps = function (_ref14) {
    var value = _ref14.value;
    return {
      value: value
    };
  };

  vModelRadio.getSSRProps = function (_ref15, vnode) {
    var value = _ref15.value;

    if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseEqual"])(vnode.props.value, value)) {
      return {
        checked: true
      };
    }
  };

  vModelCheckbox.getSSRProps = function (_ref16, vnode) {
    var value = _ref16.value;

    if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isArray"])(value)) {
      if (vnode.props && Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["looseIndexOf"])(value, vnode.props.value) > -1) {
        return {
          checked: true
        };
      }
    } else if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSet"])(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return {
          checked: true
        };
      }
    } else if (value) {
      return {
        checked: true
      };
    }
  };

  vModelDynamic.getSSRProps = function (binding, vnode) {
    if (typeof vnode.type !== 'string') {
      return;
    }

    var modelToUse = resolveDynamicModel( // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
    vnode.type.toUpperCase(), vnode.props && vnode.props.type);

    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key4 = 1; _key4 < _len2; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["hyphenate"])(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref17, _ref18) {
    var value = _ref17.value;
    var transition = _ref18.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref19, _ref20) {
    var value = _ref19.value;
    var transition = _ref20.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref21, _ref22) {
    var value = _ref21.value,
        oldValue = _ref21.oldValue;
    var transition = _ref22.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref23) {
    var value = _ref23.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
} // SSR vnode transforms, only used when user includes client-oriented render
// function in SSR


function initVShowForSSR() {
  vShow.getSSRProps = function (_ref24) {
    var value = _ref24.value;

    if (!value) {
      return {
        style: {
          display: 'none'
        }
      };
    }
  };
}

var rendererOptions = /*#__PURE__*/Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["extend"])({
  patchProp: patchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createRenderer */ "x"])(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* createHydrationRenderer */ "v"])(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isHTMLTag"])(tag) || Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isSVGTag"])(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* isRuntimeOnly */ "Y"])()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])(msg);
        return compilerOptions;
      },
      set: function set() {
        Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if (Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_8__["isString"])(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') {
    Object(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_9__[/* warn */ "jc"])("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}

var ssrDirectiveInitialized = false;
/**
 * @internal
 */

var initDirectivesForSSR = function initDirectivesForSSR() {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["MutationObserver"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["SVGElement"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/*! exports provided: EMPTY_ARR, EMPTY_OBJ, NO, NOOP, PatchFlagNames, camelize, capitalize, def, escapeHtml, escapeHtmlComment, extend, genPropsAccessExp, generateCodeFrame, getGlobalThis, hasChanged, hasOwn, hyphenate, includeBooleanAttr, invokeArrayFns, isArray, isBooleanAttr, isBuiltInDirective, isDate, isFunction, isGloballyWhitelisted, isHTMLTag, isIntegerKey, isKnownHtmlAttr, isKnownSvgAttr, isMap, isModelListener, isNoUnitNumericStyleProp, isObject, isOn, isPlainObject, isPromise, isReservedProp, isSSRSafeAttrName, isSVGTag, isSet, isSpecialBooleanAttr, isString, isSymbol, isVoidTag, looseEqual, looseIndexOf, makeMap, normalizeClass, normalizeProps, normalizeStyle, objectToString, parseStringStyle, propsToAttrMap, remove, slotFlagsText, stringifyStyle, toDisplayString, toHandlerKey, toNumber, toRawType, toTypeString */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ARR", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOP", function() { return NOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchFlagNames", function() { return PatchFlagNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtmlComment", function() { return escapeHtmlComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genPropsAccessExp", function() { return genPropsAccessExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCodeFrame", function() { return generateCodeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalThis", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChanged", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeBooleanAttr", function() { return includeBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeArrayFns", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBooleanAttr", function() { return isBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInDirective", function() { return isBuiltInDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGloballyWhitelisted", function() { return isGloballyWhitelisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntegerKey", function() { return isIntegerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKnownHtmlAttr", function() { return isKnownHtmlAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKnownSvgAttr", function() { return isKnownSvgAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModelListener", function() { return isModelListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNoUnitNumericStyleProp", function() { return isNoUnitNumericStyleProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOn", function() { return isOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedProp", function() { return isReservedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSSRSafeAttrName", function() { return isSSRSafeAttrName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGTag", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecialBooleanAttr", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVoidTag", function() { return isVoidTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseEqual", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseIndexOf", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeClass", function() { return normalizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return normalizeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeStyle", function() { return normalizeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToString", function() { return objectToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringStyle", function() { return parseStringStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsToAttrMap", function() { return propsToAttrMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slotFlagsText", function() { return slotFlagsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyStyle", function() { return stringifyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDisplayString", function() { return toDisplayString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHandlerKey", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return toRawType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTypeString", function() { return toTypeString; });
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");





var _PatchFlagNames, _slotFlagsText;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 1
/* PatchFlags.TEXT */
, "TEXT"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 2
/* PatchFlags.CLASS */
, "CLASS"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 4
/* PatchFlags.STYLE */
, "STYLE"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 8
/* PatchFlags.PROPS */
, "PROPS"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 16
/* PatchFlags.FULL_PROPS */
, "FULL_PROPS"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 32
/* PatchFlags.HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 64
/* PatchFlags.STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 128
/* PatchFlags.KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 256
/* PatchFlags.UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 512
/* PatchFlags.NEED_PATCH */
, "NEED_PATCH"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 1024
/* PatchFlags.DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 2048
/* PatchFlags.DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, -1
/* PatchFlags.HOISTED */
, "HOISTED"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, -2
/* PatchFlags.BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 1
/* SlotFlags.STABLE */
, 'STABLE'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 2
/* SlotFlags.DYNAMIC */
, 'DYNAMIC'), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 3
/* SlotFlags.FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  var lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  var newlineSequences = lines.filter(function (_, idx) {
    return idx % 2 === 1;
  });
  lines = lines.filter(function (_, idx) {
    return idx % 2 === 0;
  });
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;
        var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          var pad = start - (count - (lineLength + newLineSeqLength));
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */

function includeBooleanAttr(value) {
  return !!value || value === '';
}

var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownHtmlAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */

var isKnownSvgAttr = /*#__PURE__*/makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude," + "arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency," + "baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class," + "clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation," + "color-interpolation-filters,color-profile,color-rendering," + "contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate," + "descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx," + "dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity," + "fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity," + "font-family,font-size,font-size-adjust,font-stretch,font-style," + "font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name," + "glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef," + "gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x," + "horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3," + "k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes," + "lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local," + "marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth," + "mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode," + "name,numOctaves,offset,opacity,operator,order,orient,orientation,origin," + "overflow,overline-position,overline-thickness,panose-1,paint-order,path," + "pathLength,patternContentUnits,patternTransform,patternUnits,ping," + "pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha," + "preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel," + "rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures," + "restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing," + "specularConstant,specularExponent,speed,spreadMethod,startOffset," + "stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity," + "strikethrough-position,strikethrough-thickness,string,stroke," + "stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin," + "stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale," + "systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor," + "text-decoration,text-rendering,textLength,to,transform,transform-origin," + "type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi," + "unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic," + "v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x," + "vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing," + "writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole," + "xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang," + "xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles || isString(styles)) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  var klass = props.class,
      style = props.style;

  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */

var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isSymbol(a);
  bValidType = isSymbol(b);

  if (aValidType || bValidType) {
    return a === b;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return isString(val) ? val : val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, "Map(".concat(val.size, ")"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, "Set(".concat(val.size, ")"), Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};

var EMPTY_OBJ =  true ? Object.freeze({}) : undefined;
var EMPTY_ARR =  true ? Object.freeze([]) : undefined;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return toTypeString(val) === '[object Date]';
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && Object(_Users_jin_shenmin_pro_taro_issues_taro_demo_taro_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');
var isBuiltInDirective = /*#__PURE__*/makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return !Object.is(value, oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;

function genPropsAccessExp(name) {
  return identRE.test(name) ? "__props.".concat(name) : "__props[".concat(JSON.stringify(name), "]");
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/slicedToArray.js").default;

var _createForOfIteratorHelper = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
}); // runtime helper for setting properties on components
// in a tree-shakable way

exports.default = function (sfc, props) {
  var target = sfc.__vccOpts || sfc;

  var _iterator = _createForOfIteratorHelper(props),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          val = _step$value[1];

      target[key] = val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return target;
};

/***/ }),

/***/ "./node_modules/vue/dist/vue.cjs.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.cjs.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var compilerDom = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");

var runtimeDom = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");

var shared = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);

  if (e) {
    Object.keys(e).forEach(function (k) {
      n[k] = e[k];
    });
  }

  n['default'] = e;
  return Object.freeze(n);
}

var runtimeDom__namespace = /*#__PURE__*/_interopNamespace(runtimeDom); // This entry is the "full-build" that includes both the runtime


var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!shared.isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      runtimeDom.warn("invalid template option: ", template);
      return shared.NOOP;
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if (!el) {
      runtimeDom.warn("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var opts = shared.extend({
    hoistStatic: true,
    onError: onError,
    onWarn: function onWarn(e) {
      return onError(e, true);
    }
  }, options);

  if (!opts.isCustomElement && typeof customElements !== 'undefined') {
    opts.isCustomElement = function (tag) {
      return !!customElements.get(tag);
    };
  }

  var _compilerDom$compile = compilerDom.compile(template, opts),
      code = _compilerDom$compile.code;

  function onError(err) {
    var asWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var message = asWarning ? err.message : "Template compilation error: ".concat(err.message);
    var codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
    runtimeDom.warn(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
  } // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(runtimeDom__namespace);
  render._rc = true;
  return compileCache[key] = render;
}

runtimeDom.registerRuntimeCompiler(compileToFunction);
Object.keys(runtimeDom).forEach(function (k) {
  if (k !== 'default') exports[k] = runtimeDom[k];
});
exports.compile = compileToFunction;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/vue/index.js":
/*!***********************************!*\
  !*** ./node_modules/vue/index.js ***!
  \***********************************/
/*! no static exports found */
/*! exports used: Fragment, computed, createApp, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, h, inject, mergeProps, normalizeClass, normalizeStyle, onMounted, openBlock, provide, reactive, ref, renderList, renderSlot, resolveComponent, shallowReactive, toDisplayString, toRaw, toRefs, withCtx */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/vue.cjs.js */ "./node_modules/vue/dist/vue.cjs.js");
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=vendors.js.map