module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"51":"9e71c2e11479b7ec8cd9"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Mzm7");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zPlV");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("KEuA");
/* harmony import */ var _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("pdi6");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 //

const store = _src_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8___default()();

const Noop = ({
  children
}) => children;

const TopProgressBar = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => {
  return __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, "h8s3"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h8s3")],
    modules: ["../src/components/Layouts/TopProgressBar"]
  }
});
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: {
  //       nookies: parseNookies(ctx), // 👈
  //       ...(Component.getInitialProps
  //         ? await Component.getInitialProps(ctx)
  //         : {}),
  //     },
  //   };
  // }
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const Layout = Component.Layout || Noop;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        options: {
          clientMaxAge: 60,
          keepAlive: 5 * 60
        },
        session: pageProps.session,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
          store: store,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(TopProgressBar, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Layout, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
          })]
        })
      })
    });
  }

}

/***/ }),

/***/ "2IMM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CART_ADD_PLATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CART_ADD_PLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CART_ADD_PLATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CART_ADD_MULTI_PLATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CART_ADD_MULTI_PLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CART_ADD_MULTI_PLATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CART_INCREASE_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CART_INCREASE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CART_INCREASE_ITEM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CART_DECREASE_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CART_DECREASE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CART_DECREASE_ITEM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CART_REMOVE_PLATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CART_REMOVE_PLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return CART_REMOVE_PLATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CART_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CART_INCREASE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CART_DECREASE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return CART_SET_ITEM_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return CART_SET_ITEM_COUNT_WITH_SESSION_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return CART_SET_ITEM_COUNT_WITHOUT_SESSION_FLAG; });
const CART_ADD_PLATE_REQUEST = 'CART_ADD_PLATE_REQUEST';
const CART_ADD_PLATE_SUCCESS = 'CART_ADD_PLATE_SUCCESS';
const CART_ADD_PLATE_FAILURE = 'CART_ADD_PLATE_FAILURE';
const CART_ADD_MULTI_PLATE_REQUEST = 'CART_ADD_MULTI_PLATE_REQUEST';
const CART_ADD_MULTI_PLATE_SUCCESS = 'CART_ADD_MULTI_PLATE_SUCCESS';
const CART_ADD_MULTI_PLATE_FAILURE = 'CART_ADD_MULTI_PLATE_FAILURE';
const CART_INCREASE_ITEM_REQUEST = 'CART_INCREASE_ITEM_REQUEST';
const CART_INCREASE_ITEM_SUCCESS = 'CART_INCREASE_ITEM_SUCCESS';
const CART_INCREASE_ITEM_FAILURE = 'CART_INCREASE_ITEM_FAILURE';
const CART_DECREASE_ITEM_REQUEST = 'CART_DECREASE_ITEM_REQUEST';
const CART_DECREASE_ITEM_SUCCESS = 'CART_DECREASE_ITEM_SUCCESS';
const CART_DECREASE_ITEM_FAILURE = 'CART_DECREASE_ITEM_FAILURE';
const CART_REMOVE_PLATE_REQUEST = 'CART_REMOVE_PLATE_REQUEST';
const CART_REMOVE_PLATE_SUCCESS = 'CART_REMOVE_PLATE_SUCCESS';
const CART_REMOVE_PLATE_FAILURE = 'CART_REMOVE_PLATE_FAILURE';
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_INCREASE_ITEM = 'CART_INCREASE_ITEM';
const CART_DECREASE_ITEM = 'CART_DECREASE_ITEM';
const CART_SET_ITEM_COUNT = 'CART_SET_ITEM_COUNT';
const CART_SET_ITEM_COUNT_WITH_SESSION_FLAG = 'CART_SET_ITEM_COUNT_WITH_SESSION_FLAG';
const CART_SET_ITEM_COUNT_WITHOUT_SESSION_FLAG = 'CART_SET_ITEM_COUNT_WITHOUT_SESSION_FLAG';

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7eGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ configureStore; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/redux/reducers/higherOrderReducer.js
const createCollectionReducer = type => {
  return (state = [], action) => {
    switch (action.type) {
      case `ADD_${type}_TO_COLLECTION`:
        return state.concat(action.payload);

      default:
        return state;
    }
  };
};
const createStatusReducer = type => {
  const initialState = {
    isFetching: false,
    errorFetching: false
  };
  return (state = initialState, action) => {
    switch (action.type) {
      case `SET_IS_FETCHING_${type}`:
        return Object.assign({}, state, {
          isFetching: action.isFetching
        });

      case `SET_ERROR_FETCHING_${type}`:
        return Object.assign({}, state, {
          errorFetching: action.errorFetching
        });

      default:
        return state;
    }
  };
};
// CONCATENATED MODULE: ./src/redux/reducers/foodReducer.js


const foodReducer = Object(external_redux_["combineReducers"])({
  collection: createCollectionReducer('FOOD'),
  status: createStatusReducer('FOOD')
});
/* harmony default export */ var reducers_foodReducer = (foodReducer);
// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// EXTERNAL MODULE: ./src/redux/actions/auth/authType.js
var authType = __webpack_require__("hk/V");

// CONCATENATED MODULE: ./src/redux/reducers/authReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //

const authReducer_initialState = {
  isAuthenticated: false,
  isChef: false,
  userInfo: {}
}; //

const authReducer = (state = authReducer_initialState, action) => {
  switch (action.type) {
    case authType["h" /* AUTH_ME_REQUEST */]:
      return state;

    case authType["i" /* AUTH_ME_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true,
        userInfo: action.payload
      });

    case authType["g" /* AUTH_ME_FAILURE */]:
      return state;
    //

    case authType["b" /* AUTH_LOGIN_REQUEST */]:
      return state;

    case authType["c" /* AUTH_LOGIN_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: true,
        isChef: action.payload.type === 'user' ? true : false,
        userInfo: action.payload
      });

    case authType["a" /* AUTH_LOGIN_FAILURE */]:
      return state;
    //

    case authType["e" /* AUTH_LOOUT_REQUEST */]:
      return state;

    case authType["f" /* AUTH_LOOUT_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case authType["d" /* AUTH_LOOUT_FAILURE */]:
      return state;

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./src/redux/actions/chef/chefType.js
var chefType = __webpack_require__("DTHT");

// CONCATENATED MODULE: ./src/redux/reducers/chefReducer.js

 //

const chefReducer_initialState = {
  plates: {
    data: []
  }
}; //

const chefRecipe = (draft = chefReducer_initialState, action) => {
  switch (action.type) {
    case chefType["h" /* CHEF_PLATES_SUCCESS */]:
      draft.plates = action.payload;
      return draft;

    default:
      return draft;
  }
};

const chefReducer = external_immer_default()(chefRecipe);
// CONCATENATED MODULE: ./src/redux/actions/counter/counterType.js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
// CONCATENATED MODULE: ./src/redux/reducers/counterReducer.js



const counterRecipe = (state = 0, {
  type
}) => {
  switch (type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

const counterReducer = external_immer_default()(counterRecipe);
// EXTERNAL MODULE: ./src/redux/actions/cart/cartType.js
var cartType = __webpack_require__("2IMM");

// CONCATENATED MODULE: ./src/redux/reducers/cartReducer.js
function cartReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cartReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cartReducer_ownKeys(Object(source), true).forEach(function (key) { cartReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cartReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_STATE = {
  items: [],
  cart: [],
  itemCount: 0,
  cartItemSetWithSessionFlag: false,
  cartItemSetWithoutSessionFlag: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType["a" /* CART_ADD_ITEM */]:
      // Great Item data from products array
      const item = {
        ordered: 1,
        plateId: action.payload
      }; // Check if Item is in cart already

      const inCart = state.cart.find(item => item.plateId === action.payload ? true : false);
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cart: inCart ? state.cart : [...state.cart, item]
      });
      break;

    case cartType["p" /* CART_REMOVE_ITEM */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cart: state.cart.filter(item => item.plateId !== action.payload)
      });
      break;

    case cartType["l" /* CART_INCREASE_ITEM */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        itemCount: state.cart.length
      });
      break;

    case cartType["h" /* CART_DECREASE_ITEM */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        itemCount: state.cart.length
      });
      break;

    case cartType["t" /* CART_SET_ITEM_COUNT */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cart: action.payload,
        itemCount: action.payload.length
      });
      break;

    case cartType["v" /* CART_SET_ITEM_COUNT_WITH_SESSION_FLAG */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItemSetWithSessionFlag: true
      });
      break;

    case cartType["u" /* CART_SET_ITEM_COUNT_WITHOUT_SESSION_FLAG */]:
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItemSetWithoutSessionFlag: true
      });
      break;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_cartReducer = (cartReducer); // const cartCounter = (state = 0, { type }) => {
//   switch (type) {
//     case "CART_ITEM_ADD":
//       console.log("Adding.!",state+1,state)
//       console.log(window.localStorage.getItem("cartitems"))
//       return state+1;
//     case "CART_ITEM_REMOVE":
//       return state - 1;
//     default:
//       return state;
//   }
// };
// export const cartReducer = produce(cartCounter);
// CONCATENATED MODULE: ./src/redux/reducers/index.js






const rootReducer = Object(external_redux_["combineReducers"])({
  food: reducers_foodReducer,
  counter: counterReducer,
  auth: authReducer,
  chef: chefReducer,
  cart: reducers_cartReducer
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./src/redux/store/configureStore.prod.js




function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();
function configureStore(initialState) {
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "DTHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHEF_PLATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHEF_PLATES_SUCCESS; });
/* unused harmony export CHEF_PLATES_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHEF_ADD_PLATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHEF_ADD_PLATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHEF_ADD_PLATES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHEF_ADD_PLATES_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHEF_ADD_PLATES_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHEF_ADD_PLATES_IMAGES_FAILURE; });
const CHEF_PLATES_REQUEST = 'CHEF_PLATES_REQUEST';
const CHEF_PLATES_SUCCESS = 'CHEF_PLATES_SUCCESS';
const CHEF_PLATES_FAILURE = 'CHEF_PLATES_FAILURE';
const CHEF_ADD_PLATES_REQUEST = 'CHEF_ADD_PLATES_REQUEST';
const CHEF_ADD_PLATES_SUCCESS = 'CHEF_ADD_PLATE_SUCCESS';
const CHEF_ADD_PLATES_FAILURE = 'CHEF_ADD_PLATES_FAILURE';
const CHEF_ADD_PLATES_IMAGES_REQUEST = 'CHEF_ADD_PLATES_IMAGES_REQUEST';
const CHEF_ADD_PLATES_IMAGES_SUCCESS = 'CHEF_ADD_PLATES_IMAGES_SUCCESS';
const CHEF_ADD_PLATES_IMAGES_FAILURE = 'CHEF_ADD_PLATES_IMAGES_FAILURE';

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "KEuA":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__("7eGY");
} else {}

/***/ }),

/***/ "Mzm7":
/***/ (function(module, exports) {



/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hk/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return AUTH_SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return AUTH_SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return AUTH_SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTH_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTH_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AUTH_ME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AUTH_ME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AUTH_ME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AUTH_LOOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AUTH_LOOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AUTH_LOOUT_FAILURE; });
const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST';
const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS';
const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE';
const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
const AUTH_ME_REQUEST = 'AUTH_ME_REQUEST';
const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS';
const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE';
const AUTH_LOOUT_REQUEST = 'AUTH_LOOUT_REQUEST';
const AUTH_LOOUT_SUCCESS = 'AUTH_LOOUT_SUCCESS';
const AUTH_LOOUT_FAILURE = 'AUTH_LOOUT_FAILURE';

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });