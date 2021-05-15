module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1SSe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_auth_authAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nQwQ");
/* harmony import */ var _auth_facebookAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4epu");
/* harmony import */ var _auth_googleAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("pHB0");












const LoginPage2 = ({
  onClick,
  customer,
  goBack
}) => {
  const {
    0: password,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('password');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    Text
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

  const isPasswordVisible = () => {
    if ('password' === password) {
      setType(() => 'text');
    }

    if ('text' === password) {
      setType(() => 'password');
    }
  };

  const onFinish = async values => {
    try {
      const vals = {
        login: values.email.trim(),
        password: values.password
      };
      const userData = await dispatch(Object(_redux_actions_auth_authAction__WEBPACK_IMPORTED_MODULE_6__[/* userLogin */ "a"])(vals)); // console.log('cheffyCredentials', userData);

      if (userData && userData.token) {
        let callbackUrl = '/';

        if (userData.data.userResponse.user_type == 'user') {
          callbackUrl = '/food';
        } else if (userData.data.userResponse.user_type == 'chef') {
          callbackUrl = '/chef';
        } else if (userData.data.userResponse.user_type == 'admin') {
          callbackUrl = '/kitchen';
        } else if (userData.data.userResponse.user_type == 'driver') {
          callbackUrl = '/driver';
        }

        const user = {
          apiToken: userData.token,
          id: userData.data.userResponse.id,
          name: userData.data.userResponse.name,
          email: userData.data.userResponse.email,
          role: userData.data.userResponse.user_type,
          image: userData.data.userResponse.imagePath,
          callbackUrl: `${process.env.NEXTAUTH_URL}${callbackUrl}`
        }; // console.log('user', user);

        Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["signIn"])('cheffyCredentials', user);
      }
    } catch (err) {
      //console.log('err', err.toString());
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(err.message);
    }
  };

  const googleHandler = async ({
    profileObj
  }) => {
    try {
      const {
        email,
        googleId: provider_user_id
      } = profileObj;
      const userData = {
        email,
        provider_user_id,
        provider: "google"
      };
      const res = await dispatch(Object(_redux_actions_auth_authAction__WEBPACK_IMPORTED_MODULE_6__[/* userLoginSocial */ "b"])(userData));
      const user = {
        apiToken: res.token,
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        role: res.data.user_type,
        image: res.data.imagePath,
        callbackUrl: `${process.env.NEXTAUTH_URL}`
      };
      Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["signIn"])('cheffyCredentials', user);
    } catch (error) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(error === null || error === void 0 ? void 0 : error.message);
    }
  };

  const facebookHandler = async ({
    email,
    userID: provider_user_id
  }) => {
    try {
      const userData = {
        email,
        provider_user_id,
        provider: "facebook"
      };
      const res = await dispatch(Object(_redux_actions_auth_authAction__WEBPACK_IMPORTED_MODULE_6__[/* userLoginSocial */ "b"])(userData));
      const user = {
        apiToken: res.token,
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        role: res.data.user_type,
        image: res.data.imagePath,
        callbackUrl: `${process.env.NEXTAUTH_URL}`
      };
      Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["signIn"])('cheffyCredentials', user);
    } catch (error) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(error === null || error === void 0 ? void 0 : error.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "flex flex-row justify-between align-center mb-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Text, {
        className: "text-4xl font-extrabold",
        children: [customer, " Sign In"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 cursor-pointer",
        onClick: onClick
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Text, {
      className: "my-8",
      children: ["or", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
        className: "text-red-500 ml-2",
        children: "Sign Up"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "mt-10",
      layout: "vertical",
      onFinish: onFinish,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        name: "email",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          className: "signup-input",
          placeholder: "Email",
          type: "email"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        name: "password",
        rules: [{
          required: true,
          message: "Please enter password"
        }],
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
          className: "px-6 py-4 signup-input",
          placeholder: "Password"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          htmlType: "submit",
          className: "py-6 flex flex-row justify-center items-center",
          block: true,
          type: "primary",
          children: "Sign In"
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
      className: "text-red-500",
      children: "Forgot Password ?"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
      className: "text-center block mt-8 mb-4 font-semibold text-base md:text-xl",
      children: "Or Sign In With"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "flex justify-center items-center gap-2 md:gap-4",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_auth_facebookAuth__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        handler: facebookHandler
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_auth_googleAuth__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        handler: googleHandler
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "mt-4 flex flex-row justify-center mx-auto items-center",
      onClick: goBack,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {}), " Back"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LoginPage2);

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "20nU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dev = {
  BASE_URL: 'http://localhost:9000',
  MOKE_URL: 'http://127.0.0.1:3004/api/v1',
  GRAPH_QL_URL: 'http://127.0.0.1:8080/graphql'
};
const prod = {
  BASE_URL: 'https://mycheffy.herokuapp.com',
  MOKE_URL: 'https://salty-badlands-81511.herokuapp.com/api/v1',
  GRAPH_QL_URL: 'https://server-api-dot-mwarereacttvms.appspot.com/graphql'
};
const config = true ? prod : undefined;
/* harmony default export */ __webpack_exports__["a"] = (_objectSpread({
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  TIMEOUT: 60000,
  AUTH_TOKEN: '@cheffy/token',
  AUTH_TYPE: '@cheffy/userType',
  AUTH_IN: '@cheffy/expiresIn',
  AUTH_AT: '@cheffy/expiresAt'
}, config));

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ha+7");


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

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4epu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("G4lZ");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);





 // const appId = "487197492716393"

const appId = "375554720364133";

const FacebookLoginComp = ({
  handler
}) => {
  const facebookCallback = res => {
    console.log("[Facebook Login response]:", res);
    if (res.email) handler(res);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default.a, {
      appId: appId,
      fields: "name,email,picture",
      callback: facebookCallback,
      render: ({
        onClick,
        isSdkLoaded
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "py-6 px-5 md:py-6 md:px-8 rounded-md flex flex-row gap-2 justify-center font-semibold items-center bg-blue-900 text-white hover:border-blue-600 hover:border-4",
        onClick: onClick,
        disabled: !isSdkLoaded,
        icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaFacebookF"], {}),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "inline-block",
          children: "Facebook"
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (FacebookLoginComp);

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Ox+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asyncLocalStorage; });
const asyncLocalStorage = {
  setItem: async (key, value) => {
    try {
      await Promise.resolve();
      window.localStorage.setItem(key, value);
    } catch (err) {
      throw err;
    }
  },
  getItem: async key => {
    try {
      await Promise.resolve();
      return window.localStorage.getItem(key);
    } catch (err) {
      throw err;
    }
  }
};

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "7luo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ FoodFooter["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ home_FoodContent; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ FoodLayout["a" /* default */]; });

// UNUSED EXPORTS: FoodHeader, FoodContent1, FoodContent2, FoodSearchBar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// CONCATENATED MODULE: ./src/components/Layouts/home/FoodHeader.jsx







const FoodHeader = props => {
  const [session, loading] = Object(client_["useSession"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    style: {
      backgroundColor: "#F7FCFF"
    },
    className: "dark:bg-gray-800 stickey",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "mx-auto py-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "md:flex md:items-center md:justify-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hidden md:flex cursor-pointer red pl-12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "md:hidden cursor-pointer red  pl-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/mobile-logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex md:hidden pr-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400",
              "aria-label": "toggle menu",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                viewBox: "0 0 24 24",
                className: "h-6 w-6 fill-current",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                  fillRule: "evenodd",
                  d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                })
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "hidden md:flex md:items-center md:justify-between flex-1",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "hidden md:flex md:items-center md:justify-between flex-1",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-col -mx-4 md:flex-row md:items-center md:mx-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/about",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "About"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/about",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
                  children: "Contact us"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex items-center mt-4 md:mt-0",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/kitchen",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm",
                  children: "Rent Kitchen"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/chef",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm",
                  children: "Chef"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/driver",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm",
                  children: "Driver"
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var home_FoodHeader = (FoodHeader); // const menu = (
//   <Menu className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//     <Menu.Item key="0">
//       <Link href="/food">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           role="menuitem"
//         >
//           Dashboard
//         </a>
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <Link href="/food/profile">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           role="menuitem"
//         >
//           Profile
//         </a>
//       </Link>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <a
//         href="#"
//         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         role="menuitem"
//         onClick={(e) => {
//           e.preventDefault();
//           signOut();
//         }}
//       >
//         Sign out
//       </a>
//     </Menu.Item>
//   </Menu>
// );

{
  /* <Link href="/about">
   <a>About</a>
  </Link>
  <Link href="/about">
   <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">Contact us</a>
  </Link> */
}
{
  /* {!session && (
   <>
     <Link href="/food/signup">
       <a>Sign up</a>
     </Link>
     <Link href="/food/login">
       <a className="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md">Log in</a>
     </Link>
   </>
  )} */
}
{
  /* Profile dropdown */
}
{
  /* {session && (
   <>
     <div className="relative">
       <Dropdown overlay={menu} trigger={['click']}>
         <a
           className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
           onClick={(e) => e.preventDefault()}
         >
           <img className="h-8 w-8 rounded-full" src={session.user.image} alt="" />
         </a>
       </Dropdown>
     </div>
   </>
  )} */
}
// EXTERNAL MODULE: ./src/components/Layouts/home/FoodFooter.jsx
var FoodFooter = __webpack_require__("LzWN");

// EXTERNAL MODULE: ./src/redux/actions/food/index.js + 2 modules
var food = __webpack_require__("R/HV");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__("eRny");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// CONCATENATED MODULE: ./src/components/Layouts/home/FoodBanner.jsx








const FoodBanner = ({
  keyword,
  setKeyword,
  searchData
}) => {
  const {
    Text
  } = external_antd_["Typography"];
  const {
    Option
  } = external_antd_["Select"];

  const doSearch = () => {
    if (!keyword) {
      console.log("No Search Keyword");
      return;
    }

    console.log(keyword);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
    className: "top-head mb-16 mt-16 w-100",
    align: "middle",
    justify: "center",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
      span: 32,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
        justify: "center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
            className: "text-4xl sm:text-6xl md:ml-0 ml-4 font-bold m-auto md:mt-0 mt-6 mb-0 block",
            children: "Craving for Pizza?"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
        className: "mb-4 align-center flex justify-center",
        justify: "start",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          className: "xs:w-11/12 sm:w-11/12 md:w-full mx-auto xs:m-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
            className: "head-tag m-auto mt-0 mb-0 block",
            children: "Find the best pizza restaurant for hunger satisfaction"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
        gutter: 24,
        align: "middle",
        className: "flex flex-col md:flex-row w-full mb-2 p-2 md:mt-12 items-center justify-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
          className: "md:w-4/6 w-5/6 md:mr-4 py-1 bg-white border-2 rounded-xl flex items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["SearchOutlined"], {
            className: "text-xl pb-1"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
            onChange: e => searchData(e.target.value),
            placeholder: "Search",
            bordered: false,
            className: "text-xl",
            size: "large",
            allowClear: true
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
          className: "md:w-44 w-3/5 py-1 mr-1 bg-white border-2 rounded-xl flex items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiCurrentLocation"], {
            className: "text-xl"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Select"], {
            suffixIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowDown"], {
              className: "text-xl"
            }),
            size: "large",
            bordered: false,
            className: "w-full",
            placeholder: "Location",
            showSearch: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
              value: "1",
              children: "State 1"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
              value: "2",
              children: "State 2"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
              value: "3",
              children: "State 3"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Option, {
              value: "4",
              children: "State 4"
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var home_FoodBanner = (FoodBanner);
{
  /* <Col span={16} className="bg-white flex mr-4 items-center border-2 rounded-xl py-1">
  					<Input placeholder="Enter Keyword to Search"/>
  				<SearchOutlined  className="text-xl mb-1"/>
  					<Input size="large" className="w-82 border-2 py-1" id="home-search" allowClear placeholder="Search, restaurant or a dish" bordered={false} />
  				</Col>
  				<Col span={16} className="flex items-center border-2 rounded-xl py-2">
  				<SearchOutlined className="font-bold text-xl pb-1" />
  				<Select className="w-56" bordered={false} size="large" showSearch={true} allowClear placeholder="Select State" 
  					// filterOption={}
  				>
  						<Option value="1">State 1</Option>
  						<Option value="2">State 1</Option>
  						<Option value="3">State 1</Option>
  						<Option value="4">State 1</Option>
  				</Select>
  				</Col>
  				<Col span={8} className="search-location text-center py-3 rounded-xl">
  					<Select defaultValue="virginia" style={{ width: '100%' }} bordered={false}>
  						<Option value="virginia">Virginia</Option>
  						<Option value="richmond">RichMond</Option>
  						<Option value="centreville">Centreville</Option>
  					</Select>
  				</Col>
  				<Col span={16} className="flex flew-row justify-end items-center">
  					<Input id="home-search" allowClear placeholder="Search, restaurant or a dish" bordered={false} />
  					<SearchOutlined className="my-3" size={48} />
  				</Col> */
}
// CONCATENATED MODULE: ./src/components/Layouts/home/FoodGrid.jsx








const {
  Text: FoodGrid_Text
} = external_antd_["Typography"];

const FoodGrid = ({
  category
}) => {
  const data = Object(external_react_redux_["useSelector"])(foodSelector, external_react_redux_["shallowEqual"]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "font-extrabold px-8 md:px-12 xl:px-16 my-6 md:my-8 md:text-5xl text-3xl sm:text-4xl",
      children: "Categories"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      justify: "center",
      gutter: [32, 48],
      align: "middle",
      children: [category && category.map((plate, index) => {
        return index < 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          xs: 12,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 4,
          xxl: 4,
          className: "gutter-row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/category",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "flex flex-col food-card h-56",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  className: "category-icon object-cover",
                  src: plate.url,
                  alt: ""
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "category-label cursor-pointer",
                  children: plate.name
                })]
              })
            })
          })
        }, plate.id) : '';
      }), category && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/category",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodGrid_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Categories"
            })
          })
        })
      })]
    })]
  });
};

const foodSelector = Object(external_reselect_["createSelector"])(state => state.food.collection, data => data);
/* harmony default export */ var home_FoodGrid = (FoodGrid);
// CONCATENATED MODULE: ./src/components/Layouts/home/FoodSearch.jsx






const FoodSearch = ({
  results
}) => {
  const StarIcon = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "mr-2 w-4 h-4",
      src: "/images/star.png",
      alt: "rating"
    });
  };

  const ClockIcon = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "mr-2 w-4 h-4",
      src: "/images/clock.png",
      alt: "time"
    });
  };

  const TruckIcon = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "mr-2",
      src: "/images/truck.png",
      width: "20px",
      alt: "delivery"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-10",
      gutter: [32, 48],
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
        className: "food-grid",
        gutter: [32, 48],
        justify: "center",
        align: "top",
        children: results && results.map((data, index) => {
          var _data$PlateImages$;

          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 8,
            xl: 6,
            xxl: 6,
            className: "new-food-card",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: `/food-detail/${encodeURIComponent(data.id)}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                  justify: "center",
                  className: "new-food-image",
                  style: {
                    backgroundImage: `url(${(_data$PlateImages$ = data.PlateImages[0]) === null || _data$PlateImages$ === void 0 ? void 0 : _data$PlateImages$.url})`
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                  className: "my-5 ml-1 mr-2",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                    span: 8,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                      align: "middle",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StarIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        children: "4.5"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                    span: 8,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                      align: "middle",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ClockIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        children: "15-20 min"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                    span: 8,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                      align: "middle",
                      justify: "end",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TruckIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                        children: "Delivery"
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                    className: "label",
                    children: data.name
                  })
                })]
              })
            })
          }, data.id);
        })
      })
    })
  });
};

/* harmony default export */ var home_FoodSearch = (FoodSearch);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// CONCATENATED MODULE: ./src/components/Layouts/home/NewOnCheffy.jsx









const {
  Text: NewOnCheffy_Text
} = external_antd_["Typography"];

const NewOnCheffy_StarIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/star.png",
    alt: "rating"
  });
};

const NewOnCheffy_ClockIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/clock.png",
    alt: "time"
  });
};

const NewOnCheffy_TruckIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2",
    src: "/images/truck.png",
    width: "20px",
    alt: "delivery"
  });
};

const NewOnCheffy = ({
  _new
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 sm:mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold text-3xl md:text-5xl xs:text-4xl sm:text-4xl lg:text-5xl",
          children: "New on Cheffy"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      gutter: [32, 48],
      justify: "center",
      align: "top",
      children: [_new && _new.map((data, index) => {
        var _data$PlateImages$;

        return index < 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
          xxl: 6,
          className: "new-food-card",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/food-detail/${encodeURIComponent(data.id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                justify: "center",
                align: "middle",
                className: "new-food-image",
                style: {
                  backgroundImage: `url(${(_data$PlateImages$ = data.PlateImages[0]) === null || _data$PlateImages$ === void 0 ? void 0 : _data$PlateImages$.url})`
                }
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                className: "my-5",
                justify: "space-between",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  xs: 8,
                  sm: 6,
                  md: 8,
                  lg: 8,
                  xl: 6,
                  xxl: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    justify: "start",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NewOnCheffy_StarIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "4.5"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  xs: 8,
                  sm: 9,
                  md: 8,
                  lg: 8,
                  xl: 9,
                  xxl: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    justify: "start",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NewOnCheffy_ClockIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "15-20 min"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  xs: 8,
                  sm: 9,
                  md: 8,
                  lg: 8,
                  xl: 9,
                  xxl: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    justify: "end",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NewOnCheffy_TruckIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "Delivery"
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "label",
                  children: data.name
                })
              })]
            })
          })
        }, data.id) : "";
      }), _new && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/new-on-cheffy",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewOnCheffy_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Plates"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var home_NewOnCheffy = (NewOnCheffy);
// CONCATENATED MODULE: ./src/components/Layouts/home/PopularNearYou.jsx








const {
  Text: PopularNearYou_Text
} = external_antd_["Typography"];

const PopularNearYou_StarIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/star.png",
    alt: "rating"
  });
};

const PopularNearYou_ClockIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2 w-4 h-4",
    src: "/images/clock.png",
    alt: "time"
  });
};

const PopularNearYou_TruckIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "mr-2",
    src: "/images/truck.png",
    width: "20px",
    alt: "delivery"
  });
};

const PopularNearYou = ({
  popular
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 md:mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold text-3xl sm:text-4xl md:text-4xl lg:text-5xl",
          children: "Popular Near You"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      gutter: [32, 48],
      justify: "center",
      align: "top",
      children: [popular && popular.map((data, index) => {
        var _data$PlateImages$;

        return index > 4 && index < 9 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
          xxl: 6,
          className: "new-food-card",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/food-detail/${encodeURIComponent(data.id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                justify: "center",
                className: "new-food-image",
                style: {
                  backgroundImage: `url(${(_data$PlateImages$ = data.PlateImages[0]) === null || _data$PlateImages$ === void 0 ? void 0 : _data$PlateImages$.url})`
                }
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                className: "my-5 ml-1 mr-2",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  span: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PopularNearYou_StarIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "4.5"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  span: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PopularNearYou_ClockIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "15-20 min"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  span: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
                    align: "middle",
                    justify: "end",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PopularNearYou_TruckIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                      children: "Delivery"
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "label",
                  children: data.name
                })
              })]
            })
          })
        }, data.id) : "";
      }), popular && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/popular-near-you",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PopularNearYou_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Plates"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var home_PopularNearYou = (PopularNearYou);
// EXTERNAL MODULE: ./src/redux/actions/chef/chefAction.js
var chefAction = __webpack_require__("F2HQ");

// CONCATENATED MODULE: ./src/components/Layouts/home/MustTryChef.jsx








const {
  Text: MustTryChef_Text
} = external_antd_["Typography"];

const MustTryChef = () => {
  const {
    0: mustTry,
    1: setMustTry
  } = Object(external_react_["useState"])('');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(async () => {
    const getMustTryAndRecommended = await dispatch(Object(chefAction["f" /* mustTryAndRecommendedChef */])());
    const data = getMustTryAndRecommended.data;
    setMustTry(data['mustTryChefs']);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 md:mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold text-3xl sm:text-4xl lg:text-5xl",
          children: "Chef You Must Try"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      justify: "center",
      gutter: 32,
      align: "middle",
      children: [mustTry && mustTry.map((chef, index) => {
        return index < 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          className: "gutter-row h-64",
          xs: 12,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 4,
          xxl: 4,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/food-detail/${encodeURIComponent(chef.id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "flex flex-col py-6 px-3 items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  className: "category-icon mb-4",
                  src: chef.imagePath,
                  alt: ""
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "category-label cursor-pointer",
                  children: chef.name
                })]
              })
            })
          })
        }, chef.id) : '';
      }), mustTry && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/chefs",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MustTryChef_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Chefs"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var home_MustTryChef = (MustTryChef);
// CONCATENATED MODULE: ./src/components/Layouts/home/RecommendedChef.jsx








const {
  Text: RecommendedChef_Text
} = external_antd_["Typography"];

const RecommendedChef = () => {
  const {
    0: recommended,
    1: setRecommended
  } = Object(external_react_["useState"])("");
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(async () => {
    const getMustTryAndRecommended = await dispatch(Object(chefAction["f" /* mustTryAndRecommendedChef */])());
    const data = getMustTryAndRecommended.data;
    setRecommended(data["recommendedChefs"]);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 md:mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold text-3xl sm:text-4xl lg:text-5xl",
          children: "Recommended Chef"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      justify: "center",
      gutter: 32,
      align: "middle",
      children: [recommended && recommended.map((chef, index) => {
        return index < 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          className: "gutter-row h-64",
          xs: 12,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 4,
          xxl: 4,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/food-detail/${encodeURIComponent(chef.id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "flex flex-col py-6 px-3 items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  className: "category-icon mb-4",
                  src: chef.imagePath,
                  alt: ""
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "category-label cursor-pointer",
                  children: chef.name
                })]
              })
            })
          })
        }, chef.id) : "";
      }), recommended && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/recommended-chef",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RecommendedChef_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Chefs"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var home_RecommendedChef = (RecommendedChef);
// EXTERNAL MODULE: ./src/utils/axios-config.js
var axios_config = __webpack_require__("fSZ1");

// CONCATENATED MODULE: ./src/components/Layouts/home/TopKitchens.jsx









const {
  Text: TopKitchens_Text
} = external_antd_["Typography"];

function TopKitchens() {
  const {
    0: topKitchens,
    1: settopKitchens
  } = Object(external_react_["useState"])('');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(async () => {
    const url = "https://cheffyus-api.herokuapp.com/kitchens/";

    try {
      const res = await Object(axios_config["a" /* default */])(url);
      settopKitchens(res);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 md:mb-10",
      gutter: 32,
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold text-3xl sm:text-4xl lg:text-5xl",
          children: "Kitchens You Should see"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "food-grid",
      justify: "center",
      gutter: 32,
      align: "middle",
      children: [topKitchens && topKitchens.map((item, index) => {
        console.log(item);
        return index < 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
          className: "gutter-row h-64",
          xs: 12,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 4,
          xxl: 4,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/kitchen/${encodeURIComponent(item["kitchen"]["name"])}/${encodeURIComponent(item["kitchen"].id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "flex flex-col py-6 px-3 items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  className: "category-icon mb-4",
                  src: item["kitchen"]["image_urls"][0],
                  alt: ""
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "category-label cursor-pointer",
                  children: item["kitchen"]["name"]
                })]
              })
            })
          })
        }, item["kitchen"].id) : '';
      }), topKitchens && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/kitchen",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TopKitchens_Text, {
              className: "text-xl bg-primary px-4 text-white rounded-md py-1",
              strong: true,
              children: "View More Kitchens"
            })
          })
        })
      })]
    })]
  });
}

;
/* harmony default export */ var home_TopKitchens = (TopKitchens);
// EXTERNAL MODULE: ./styles/foodContent.css
var foodContent = __webpack_require__("PqY4");

// CONCATENATED MODULE: ./src/components/Layouts/Skeleton.jsx




const FoodGridSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
    className: "food-grid",
    justify: "center",
    gutter: [32, 48],
    align: "middle",
    children: data.map(index => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
      xs: 12,
      sm: 8,
      md: 6,
      lg: 4,
      xl: 4,
      xxl: 4,
      className: "gutter-row",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col food-card",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Avatar, {
          active: true,
          shape: "circle",
          size: 120,
          className: "mb-4"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Input, {
          className: "w-28 rounded-lg",
          size: "small",
          active: true
        })]
      })
    }, index))
  });
};
const NewAndPopularSkeleton = ({
  title
}) => {
  const data = [1, 2, 3, 4];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid mt-16 mb-4 sm:mb-10",
      gutter: [32, 48],
      justify: "start",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        className: "my-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          className: "font-extrabold md:text-5xl text-3xl sm:text-4xl",
          children: title
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "food-grid",
      gutter: 32,
      justify: "center",
      align: "top",
      children: data.map(index => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
        xs: 24,
        sm: 12,
        md: 12,
        lg: 8,
        xl: 6,
        xxl: 6,
        className: "new-food-card",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Avatar, {
          shape: "square",
          active: true,
          className: "new-food-image",
          style: {
            width: "100%",
            height: "40vh"
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
          className: "my-5 ml-1 mr-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
            span: 8,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
              align: "middle",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Input, {
                className: "w-12 rounded",
                size: "small",
                active: true
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
            span: 8,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
              align: "middle",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Input, {
                className: "w-20 rounded",
                size: "small",
                active: true
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
            span: 8,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
              align: "middle",
              justify: "end",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Input, {
                className: "w-20 rounded",
                size: "small",
                active: true
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Skeleton"].Input, {
            className: "w-32 rounded-lg",
            size: "small",
            active: true
          })
        })]
      }, index))
    })]
  });
};
// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__("jYXs");
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);

// CONCATENATED MODULE: ./src/components/Layouts/home/FoodContent.jsx




















const FoodContent = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: popular,
    1: setPopular
  } = Object(external_react_["useState"])("");
  const {
    0: _new,
    1: setNew
  } = Object(external_react_["useState"])("");
  const {
    0: category,
    1: setCategory
  } = Object(external_react_["useState"])("");
  const itemCount = Object(external_react_redux_["useSelector"])(countSelector, external_react_redux_["shallowEqual"]);
  const {
    0: keyword,
    1: setKeyword
  } = Object(external_react_["useState"])("");
  const {
    0: results,
    1: setResults
  } = Object(external_react_["useState"])([]);
  const {
    0: searchIn,
    1: setSearchIn
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(async () => {
    var allPlates = await dispatch(Object(food["e" /* popularAndNew */])());
    const getNewAndPopular = await dispatch(Object(food["e" /* popularAndNew */])());
    setPopular(getNewAndPopular.data.popular);
    setNew(getNewAndPopular.data.new);
    const resCategory = await dispatch(Object(food["c" /* getCategory */])());
    console.log(resCategory.message);
    setCategory(resCategory.data);
    setSearchIn(allPlates.data.popular);
    dispatch(Object(food["a" /* fetchFood */])());
  }, []);

  const searchData = pattern => {
    setKeyword(pattern);
    setResults([]);
    const fuse = new external_fuse_js_default.a(searchIn, {
      keys: ["name"],
      options: {
        threshold: 1,
        distance: 1000
      }
    });
    const result = fuse.search(pattern);
    const matches = [];

    if (!result.length) {
      setResults([]);
    } else {
      result.forEach(({
        item
      }) => {
        if (matches.length < 6) {
          matches.push(item);
        }
      });
      setResults(matches);
    }

    console.log(searchIn);
    console.log(matches);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(home_FoodBanner, {
      keyword: keyword,
      setKeyword: setKeyword,
      searchData: searchData
    }), !keyword.length ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [category.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_FoodGrid, {
        category: category
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodGridSkeleton, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
        id: "newOnCheffy",
        children: [_new.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_NewOnCheffy, {
          _new: _new
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewAndPopularSkeleton, {
          title: "New On Cheffy"
        }), popular.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_PopularNearYou, {
          popular: popular
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewAndPopularSkeleton, {
          title: "Popular Near You"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(home_RecommendedChef, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_MustTryChef, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_TopKitchens, {})]
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_FoodSearch, {
      results: results
    })]
  });
};

const countSelector = Object(external_reselect_["createSelector"])(state => state.food.collection, items => items.length);
/* harmony default export */ var home_FoodContent = (FoodContent);
// CONCATENATED MODULE: ./src/components/Layouts/home/FoodLocationBar.jsx





const ArrowIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/next-arrow.png",
    alt: "plus"
  });
};

class FoodLocationBar_FoodLocationBar extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "px-4 py-4 md:hidden",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
        value: "2179 Brooklyn Street",
        prefix: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["EnvironmentOutlined"], {
          style: {
            color: '#c92c37'
          }
        }),
        suffix: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowIcon, {})
      })
    });
  }

}

/* harmony default export */ var home_FoodLocationBar = (FoodLocationBar_FoodLocationBar);
// CONCATENATED MODULE: ./src/components/Layouts/home/FoodSearchBar.jsx





const ListIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/list.png",
    alt: "plus"
  });
};

const CloseIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/close.png",
    alt: "plus"
  });
};

class FoodSearchBar_FoodSearchBar extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "px-4 md:hidden",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
        placeholder: "Find a food or Restaurent",
        prefix: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["SearchOutlined"], {
          style: {
            color: '#c92c37'
          }
        }),
        suffix: !this.props.selected ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListIcon, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseIcon, {}),
        value: this.props.selectedVal
      })
    });
  }

}

/* harmony default export */ var home_FoodSearchBar = (FoodSearchBar_FoodSearchBar);
// EXTERNAL MODULE: ./src/redux/actions/food/categoryAction.js
var categoryAction = __webpack_require__("8NlZ");

// CONCATENATED MODULE: ./src/components/Layouts/home/FoodContent1.jsx



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FoodContent1_StarIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/star.png",
    alt: "plus"
  });
};

const FoodContent1_ClockIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/clock.png",
    alt: "plus"
  });
};

const FoodContent1_TruckIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/truck.png",
    alt: "plus"
  });
};

const HeartIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/heart.png",
    alt: "plus"
  });
};

class FoodContent1_FoodContent1 extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selected: false,
      selectedVal: ""
    });
  }

  async componentDidMount() {
    const categories = await this.props.dispatch(Object(categoryAction["a" /* foodCategories */])());
    this.setState({
      data: categories.data
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "h-96 mt-24",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "h-3/5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(home_FoodLocationBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home_FoodSearchBar, {
          selected: this.state.selected,
          selectedVal: this.state.selectedVal
        }), this.state && this.state.selected ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "category-card-wrapper p-4 absolute",
          style: {
            width: "100%"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
            gutter: 4,
            children: this.state && this.state.data && this.state.data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
              span: 24,
              className: "py-2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"], {
                bordered: false,
                className: "items-center rounded-lg text-sm ",
                align: "middle",
                cover: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative center-align text-white text-lg",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    style: {
                      backgroundImage: `url(${item.url})`,
                      borderRadius: "5px",
                      width: "100%",
                      maxHeight: 150,
                      boxShadow: "10px 10px 16px 2px #cacaca",
                      minHeight: 150,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    },
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "favourite-wrapper p-4",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeartIcon, {})
                    })
                  })
                }),
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "category-details-wrapper flex pt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "item-name flex text-lg text-back-700 ",
                    children: item.name
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "flex",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center ",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "star-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent1_StarIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-1 detail-text",
                        children: "4.9(200)"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center pl-4",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "star-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent1_ClockIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-1 detail-text",
                        children: "15-20 min"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center pl-4",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "truck-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent1_TruckIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-1 detail-text",
                        children: "Delivery"
                      })]
                    })]
                  })]
                })
              })
            }, item.id))
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "category-card-wrapper p-4 absolute",
          style: {
            width: "100%"
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
            gutter: (16, 16),
            children: this.state && this.state.data && this.state.data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
              span: 12,
              className: "py-2",
              onClick: () => this.setState({
                selected: true,
                selectedVal: item.name
              }),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"], {
                bordered: false,
                className: "items-center rounded-lg text-sm ",
                align: "middle",
                cover: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "realtive center-align text-white text-lg",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    style: {
                      backgroundImage: `linear-gradient(to bottom, rgb(248 248 248 / 0%), rgb(65 63 63)),url(${item.url})`,
                      borderRadius: "10px",
                      width: "100%",
                      maxHeight: 150,
                      minHeight: 150,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "absolute",
                    style: {
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    },
                    children: item.name
                  })]
                })
              })
            }, item.id))
          })
        })]
      })
    });
  }

}

/* harmony default export */ var home_FoodContent1 = (FoodContent1_FoodContent1);
// CONCATENATED MODULE: ./src/components/Layouts/home/FoodContent2.jsx



function FoodContent2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FoodContent2_StarIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/star.png",
    alt: "plus"
  });
};

const FoodContent2_ClockIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/clock.png",
    alt: "plus"
  });
};

const FoodContent2_TruckIcon = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    src: "/images/truck.png",
    alt: "plus"
  });
};

const sortData = [{
  id: 0,
  title: 'Picked for you (default)'
}, {
  id: 1,
  title: 'Most Popular'
}, {
  id: 2,
  title: 'Rating'
}, {
  id: 3,
  title: 'Delivery time'
}];

class FoodContent2_FoodContent2 extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    FoodContent2_defineProperty(this, "state", {
      selected: false,
      selectedVal: ''
    });

    FoodContent2_defineProperty(this, "handleResize", e => {
      this.setState({
        windowWidth: window.innerWidth
      });
    });
  }

  async componentDidMount() {
    const categories = await this.props.dispatch(Object(categoryAction["a" /* foodCategories */])());
    this.setState({
      data: categories.data,
      windowWidth: window.innerWidth
    });
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const data = [];
    if (this.state && this.state.data) for (let i = 1; i < 4; i++) {
      data.push(this.state && this.state.data && this.state.data[i]);
    }
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "h-96 mt-24",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "h-3/5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "category-card-wrapper p-4 absolute px-16",
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
            gutter: 40,
            className: "p4",
            children: data && data.length > 0 && data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
              span: this.state.windowWidth > 778 ? 8 : 24,
              className: "py-2",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"], {
                bordered: false,
                className: "items-center rounded-lg text-sm ",
                align: "middle",
                cover: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "relative center-align text-white text-lg",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    style: {
                      backgroundImage: `url(${item.url})`,
                      borderRadius: "5px",
                      width: '100%',
                      maxHeight: 270,
                      boxShadow: '10px 10px 16px 2px #cacaca',
                      minHeight: 270,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: "center",
                      backgroundSize: 'cover'
                    }
                  })
                }),
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "category-details-wrapper flex pt-4",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "item-name flex text-lg text-back-700 ",
                    children: item.name
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center ",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "star-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_StarIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-2 detail-text",
                        children: "4.9(200)"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center pl-4",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "star-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_ClockIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-2 detail-text",
                        children: "15-20 min"
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "flex items-center pl-4",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "truck-icon flex ",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_TruckIcon, {})
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "pl-2 detail-text",
                        children: "Delivery"
                      })]
                    })]
                  })]
                })
              })
            }, item.id))
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
            gutter: 40,
            className: "p4 mt-16 ",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
              span: this.state.windowWidth > 776 ? 6 : 6,
              className: "p-2 ",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "pt-2 mb-8 ",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "text-3xl sort-title",
                  children: "Sort"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "pt-6",
                  children: sortData && sortData.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                    class: "container-check",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "text-xl check-title",
                      children: item.title
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                      type: "checkbox",
                      name: "radio"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      class: "checkmark"
                    })]
                  }, item.id))
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "pt-2 mb-8",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "text-3xl sort-title",
                  children: "Dietary"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "flex pt-6",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "\u20AC Halal"
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "pt-2 mb-8",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "text-3xl sort-title",
                  children: "Price Range"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "flex pt-6",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper mr-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "$"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper mr-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "$$"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper mr-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "$$$"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper mr-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "$$$$"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "location-wrapper mr-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "sort-label",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        children: "$$$$$"
                      })
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
              span: 18,
              className: "py-2 bg-white",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
                gutter: 50,
                className: "p4",
                children: this.state && this.state.data && this.state.data.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  span: this.state.windowWidth > 778 ? 8 : 24,
                  className: "py-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Card"], {
                    bordered: false,
                    className: "items-center rounded-lg text-sm ",
                    align: "middle",
                    cover: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: "relative center-align text-white text-lg",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        style: {
                          backgroundImage: `url(${item.url})`,
                          borderRadius: "5px",
                          width: '100%',
                          maxHeight: 270,
                          boxShadow: '10px 10px 16px 2px #cacaca',
                          minHeight: 270,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: "center",
                          backgroundSize: 'cover'
                        }
                      })
                    }),
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "category-details-wrapper flex pt-4",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "item-name flex text-lg text-back-700 ",
                        children: item.name
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                        className: "flex justify-between",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "flex items-center ",
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "star-icon flex ",
                            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_StarIcon, {})
                          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "pl-2 detail-text",
                            children: "4.9(200)"
                          })]
                        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "flex items-center pl-4",
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "star-icon flex ",
                            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_ClockIcon, {})
                          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "pl-2 detail-text",
                            children: "15-20 min"
                          })]
                        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                          className: "flex items-center pl-4",
                          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "truck-icon flex ",
                            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodContent2_TruckIcon, {})
                          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                            className: "pl-2 detail-text",
                            children: "Delivery"
                          })]
                        })]
                      })]
                    })
                  })
                }, item.id))
              })
            })]
          })]
        })
      })
    });
  }

}

/* harmony default export */ var home_FoodContent2 = (FoodContent2_FoodContent2);
// EXTERNAL MODULE: ./src/components/Layouts/home/FoodLayout.jsx
var FoodLayout = __webpack_require__("nZky");

// CONCATENATED MODULE: ./src/components/Layouts/home/index.js








/***/ }),

/***/ "8NlZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foodCategories; });
/* harmony import */ var _foodTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xsLT");
/* harmony import */ var _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fSZ1");


function foodCategories(params = {
  page: 1,
  pageSize: 10
}) {
  return async dispatch => {
    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('category/', {
        params
      });
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


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

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

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

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F2HQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return chefOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return chefBalanceToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return chefPlates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mustTryAndRecommendedChef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPlates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPlateImages; });
/* harmony import */ var _chefType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DTHT");
/* harmony import */ var _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fSZ1");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function chefOrders(params = {}) {
  return async dispatch => {
    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('order/list/chef', {
        params: params
      });
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
function chefBalanceToday(params = {}) {
  // const todayDate = new Date().toISOString().split("T")[0];
  return async dispatch => {
    try {
      // console.log(`user/balance?from=${todayDate}&to=${todayDate}`);
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`user/chef/balance`);
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function chefPlates(params = {}, chefId) {
  return async dispatch => {
    dispatch({
      type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_PLATES_REQUEST */ "g"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`plate/chef/${chefId}`, {
        params: params
      });
      dispatch({
        type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_PLATES_SUCCESS */ "h"],
        payload: res
      });
      return res;
    } catch (error) {
      dispatch({
        type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_PLATES_SUCCESS */ "h"]
      });
      return Promise.reject(error);
    }
  };
}
function mustTryAndRecommendedChef(params = {
  page: 1,
  pageSize: 10
}) {
  return async dispatch => {
    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('user/mustTryAndRecommendedChefs', {// params,
      });
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
function addPlates(param) {
  return async dispatch => {
    dispatch({
      type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_REQUEST */ "e"]
    });
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    console.log(session.apiToken);

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('plate', param, {
        headers: {
          'content-type': 'application/json',
          'x-access-token': session.apiToken
        }
      });
      console.log(res);
      const status = res.status;

      if (status == 201) {
        dispatch({
          type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_SUCCESS */ "f"],
          payload: res.plate
        });
        return res;
      } else {
        dispatch({
          type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_FAILURE */ "a"]
        });
        console.log(res.status);
        return Promise.reject();
      }
    } catch (e) {
      dispatch({
        type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_FAILURE */ "a"]
      });
      return Promise.reject(e);
    }
  };
}
function addPlateImages(image) {
  return async dispatch => {
    dispatch({
      type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_IMAGES_REQUEST */ "c"]
    });
    const proxyurl = 'https://afternoon-brook-18118.herokuapp.com/';
    const url = 'https://cheffyus-api.herokuapp.com/';

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(proxyurl + url + `images/`, image);
      const status = res.status;

      if (status === 200) {
        dispatch({
          type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_IMAGES_SUCCESS */ "d"],
          payload: res.data.url
        });
        return res;
      } else {
        dispatch({
          type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_IMAGES_FAILURE */ "b"]
        });
        return Promise.reject();
      }
    } catch (error) {
      dispatch({
        type: _chefType__WEBPACK_IMPORTED_MODULE_0__[/* CHEF_ADD_PLATES_IMAGES_FAILURE */ "b"]
      });
      return Promise.reject();
    }
  };
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "G4lZ":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "GnJv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addItemsToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return increaseItemToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return decreaseItemToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setCartItemsWithSessionFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setCartItemsWithoutSessionFlag; });
/* harmony import */ var _cartType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2IMM");
/* harmony import */ var _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fSZ1");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function addToCart(param) {
  return async dispatch => {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    console.log("action====");
    console.log(param.plates[0].plateId);
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_PLATE_REQUEST */ "f"]
    });
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_ITEM */ "a"],
      payload: param.plates[0].plateId
    });
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_INCREASE_ITEM */ "l"]
    });

    if (session) {
      try {
        const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post("basket", param);
        dispatch({
          type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_PLATE_SUCCESS */ "g"],
          payload: res
        });
        return res;
      } catch (e) {
        dispatch({
          type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_PLATE_FAILURE */ "e"]
        });
        return Promise.reject(e);
      }
    }
  };
}
function addItemsToCart(param) {
  console.log("addItemsToCart");
  console.log(param);
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_MULTI_PLATE_REQUEST */ "c"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post("basket", param);
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_MULTI_PLATE_SUCCESS */ "d"],
        payload: res
      });
      console.log("res==>>");
      console.log(res);
      return res;
    } catch (e) {
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_ADD_MULTI_PLATE_FAILURE */ "b"]
      });
      return Promise.reject(e);
    }
  };
}
const getUserBasket = deliveryType => {
  return async dispatch => {
    try {
      const res = _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`basket?deliveryType=${deliveryType}`);
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
function increaseItemToCart(basketItemId, deliveryType) {
  let param = {
    deliveryType: deliveryType
  };
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_INCREASE_ITEM_REQUEST */ "n"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].put(`/basket/add/${basketItemId}`, param);
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_INCREASE_ITEM_SUCCESS */ "o"],
        payload: res
      });
      return res;
    } catch (e) {
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_INCREASE_ITEM_FAILURE */ "m"]
      });
      return Promise.reject(e);
    }
  };
}
function decreaseItemToCart(basketItemId, deliveryType) {
  let param = {
    deliveryType: deliveryType
  };
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_DECREASE_ITEM_REQUEST */ "j"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].put(`/basket/subtract/${basketItemId}`, param);
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_DECREASE_ITEM_SUCCESS */ "k"],
        payload: res
      });
      return res;
    } catch (e) {
      dispatch({
        type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_DECREASE_ITEM_FAILURE */ "i"]
      });
      return Promise.reject(e);
    }
  };
}
function removeInCart(basketItemId, deliveryType, plateID) {
  return async dispatch => {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_REMOVE_PLATE_REQUEST */ "r"]
    });
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_REMOVE_ITEM */ "p"],
      payload: plateID
    });
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_DECREASE_ITEM */ "h"]
    });

    if (session) {
      try {
        const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].delete(`/basket/delete/${basketItemId}`, {
          data: {
            deliveryType: deliveryType
          }
        });
        dispatch({
          type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_REMOVE_PLATE_SUCCESS */ "s"],
          payload: res
        });
        return res;
      } catch (e) {
        dispatch({
          type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_REMOVE_PLATE_FAILURE */ "q"]
        });
        return Promise.reject(e);
      }
    }
  };
}
function setCartItems(cartItems) {
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_SET_ITEM_COUNT */ "t"],
      payload: cartItems
    });
  };
}
function setCartItemsWithSessionFlag() {
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_SET_ITEM_COUNT_WITH_SESSION_FLAG */ "v"]
    });
  };
}
function setCartItemsWithoutSessionFlag() {
  return async dispatch => {
    dispatch({
      type: _cartType__WEBPACK_IMPORTED_MODULE_0__[/* CART_SET_ITEM_COUNT_WITHOUT_SESSION_FLAG */ "u"]
    });
  };
}

/***/ }),

/***/ "Ha+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/Layouts/foodList/FoodListContent.jsx







function FoodListContent({
  data
}) {
  const router = Object(router_["useRouter"])();
  const {
    Text
  } = external_antd_["Typography"];
  const {
    TabPane
  } = external_antd_["Tabs"];

  const showFood = id => {
    router.push(`/food-detail/${id}`);
  };

  const TabName = ({
    name
  }) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
      strong: true,
      className: "text-black",
      children: name
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "mt-20 pt-2 pb-4 mx-auto w-3/5",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Col"], {
        span: 24,
        className: "flex justify-start items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["HomeFilled"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
          strong: true,
          className: "text-black ml-4",
          children: "Thanksgiving Dinner"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "w-full bg-fixed bg-cover bg-no-repeat bg-center relative",
      style: {
        backgroundImage: `url(/images/food-list.png)`,
        height: "30vh",
        backgroundSize: "100%",
        filter: "brightness(50%)"
      },
      justify: "center",
      align: "middle"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
      className: "absolute w-full",
      style: {
        height: "30vh",
        transform: "translateY(-100%)"
      },
      justify: "center",
      align: "middle",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
          level: 1,
          strong: true,
          className: "block text-white text-5xl",
          children: "Thanksgiving Dinner"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "py-20 w-4/5 md:w-3/5 mx-auto",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Tabs"], {
        defaultActiveKey: "relavence",
        className: "font-bold",
        size: "large",
        direction: "rtl",
        moreIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["MenuOutlined"], {}),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TabPane, {
          tab: "Filters",
          children: "Filters Tab"
        }, "filters"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabPane, {
          tab: "Ratings",
          children: "Ratings Tab"
        }, "ratings"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabPane, {
          tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabName, {
            name: "Delivery Time"
          }),
          children: "Content of Tab Pane 3"
        }, "3"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabPane, {
          tab: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TabName, {
            name: "Cost for Two"
          }),
          children: "Content of Tab Pane 2"
        }, "2"), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TabPane, {
          tab: "Relavence",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "kitchen-item ",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Row"], {
              gutter: [16, 16],
              className: "flex pt-4",
              dir: "ltr",
              children: data && data.map((item, i) => {
                return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Col"], {
                  onClick: () => showFood(item.id),
                  className: "cursor-pointer",
                  span: 8,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "kitchen-card pb-6",
                    dir: "ltr",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: item.PlateImages.map((image, i) => {
                        return i === 0 && image.url;
                      }),
                      className: "w-100 h-auto"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "pt-2 font-normal text-2xl",
                      children: item.name
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                      className: "flex items-center text-base pt-2 font-light",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["StarFilled"], {
                        className: "pr-1 text-yellow-500"
                      }), `${item.rating}`, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                        className: "flex items-center pl-6",
                        dir: "ltr",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ClockCircleFilled"], {
                          className: "pr-1"
                        }), `$ ${item.price}`]
                      })]
                    })]
                  })
                });
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            dir: "ltr",
            className: "flex items-center justify-center pt-10 load-more",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: "text-white flex items-center bg-red-500 py-4 px-10 text-lg",
              children: ["Load More ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoMdArrowDropdown"], {
                className: "text-3xl"
              })]
            })
          })]
        }, "relavence")]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Layouts/Header/HomeHeader.jsx + 13 modules
var HomeHeader = __webpack_require__("oG/r");

// EXTERNAL MODULE: ./src/components/Layouts/home/index.js + 15 modules
var home = __webpack_require__("7luo");

// CONCATENATED MODULE: ./pages/food-list/index.jsx







const Index = ({
  data
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HomeHeader["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FoodListContent, {
      data: data
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(home["b" /* FoodFooter */], {})]
  });
};

async function getServerSideProps() {
  let response = await (await fetch(`https://mycheffy.herokuapp.com/plate/`)).json();
  const data = await response.data;
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var food_list = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "J1UA":
/***/ (function(module, exports) {



/***/ }),

/***/ "LzWN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);






const HomeIcon = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: "/images/home-24.png",
    alt: "plus"
  });
};

const NotificationIcon = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: "/images/notification-24.png",
    alt: "plus"
  });
};

const PlusIcon = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: "/images/plus-icon.png",
    alt: "plus"
  });
};

const CartIcon = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: "/images/cart-24.png",
    alt: "plus"
  });
};

const ProfileIcon = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: "/images/user-24.png",
    alt: "plus"
  });
};

class FoodFooter extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("footer", {
        className: "mt-5",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "food-grid",
          justify: "center",
          gutter: 32,
          align: "middle",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              className: "mx-4 text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-300",
              "aria-label": "Linkedin",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
                className: "h-8 w-8 fill-current",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  d: "M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                })
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              className: "mx-4 text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-300",
              "aria-label": "Facebook",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
                className: "h-8 w-8 fill-current",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  d: "M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                })
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "#",
              className: "mx-2 text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-300",
              "aria-label": "Twitter",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
                className: "h-8 w-8 fill-current",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("path", {
                  d: "M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                })
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "food-grid",
          justify: "center",
          align: "middle",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "text-gray-800 dark:text-white mb-12",
            children: "Copyright \xA9 2021, Oluha Company. All rights reserved."
          })
        })]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FoodFooter);

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PqY4":
/***/ (function(module, exports) {



/***/ }),

/***/ "R/HV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ fetchFood; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getPlateByID; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getCategory; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ categoryAction["a" /* foodCategories */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ popularAndNew; });

// UNUSED EXPORTS: allPlates

// EXTERNAL MODULE: ./src/redux/actions/food/foodTypes.js
var foodTypes = __webpack_require__("xsLT");

// EXTERNAL MODULE: ./src/utils/axios-config.js
var axios_config = __webpack_require__("fSZ1");

// CONCATENATED MODULE: ./src/redux/actions/food/foodAction.js


const setIsFetchingFood = isFetching => {
  return {
    type: foodTypes["c" /* SET_IS_FETCHING_FOOD */],
    isFetching
  };
};
const setErrorFetchingFood = errorFetching => {
  return {
    type: foodTypes["b" /* SET_ERROR_FETCHING_FOOD */],
    errorFetching
  };
};
const getPlateByID = plateID => {
  return async dispatch => {
    try {
      const res = axios_config["a" /* default */].get(`plate/show/${plateID}`);
      return res;
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
const addFoodToCollection = food => {
  return {
    type: foodTypes["a" /* ADD_FOOD_TO_COLLECTION */],
    payload: food
  };
};
const errorFetchingFood = error => {
  return dispatch => {
    dispatch(setIsFetchingFood(true));
    dispatch(setErrorFetchingFood(false));
    console.log(error);
  };
};
const getCategory = () => {
  return async dispatch => {
    try {
      const res = axios_config["a" /* default */].get("/category");
      return res;
    } catch (e) {
      console.log(e);
      new Promise.reject(e);
    }
  };
};
const fetchFood = () => {
  return async (dispatch, getState) => {
    const {
      food: {
        collection,
        status: {
          isFetching
        }
      }
    } = getState();

    if (isFetching) {
      return;
    }

    dispatch(setErrorFetchingFood(false));
    dispatch(setIsFetchingFood(true));
    const request = await axios_config["a" /* default */].get('plate/');
    const food = request.data;

    try {
      dispatch(addFoodToCollection(food));
      dispatch(setIsFetchingFood(false));
    } catch (error) {
      return dispatch(setErrorFetchingFood(error));
    }
  };
};
// EXTERNAL MODULE: ./src/redux/actions/food/categoryAction.js
var categoryAction = __webpack_require__("8NlZ");

// CONCATENATED MODULE: ./src/redux/actions/food/popularAndNew.js


function popularAndNew(params = {
  page: 1,
  pageSize: 10
}) {
  return async dispatch => {
    try {
      const res = await axios_config["a" /* default */].get('plate/popularAndNew?city=Centreville', {// params,
      });
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
function allPlates(params = {
  page: 1,
  pageSize: 10
}) {
  return async dispatch => {
    try {
      const res = await axios_config["a" /* default */].get('plate/', {// params,
      });
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
// CONCATENATED MODULE: ./src/redux/actions/food/index.js





/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SqZu":
/***/ (function(module, exports) {

module.exports = require("ahooks");

/***/ }),

/***/ "Tr0R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);





const LoginPage1 = ({
  onClick,
  onPartnerSignInClick,
  onUserSignInClick
}) => {
  const {
    Text
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "flex flex-row justify-between align-center mb-8",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
        className: "text-4xl font-extrabold",
        children: "Sign in for"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 cursor-pointer",
        onClick: onClick
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Text, {
      className: "my-8",
      children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit perspiciatis, repellat cum voluptate cumque?"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onPartnerSignInClick,
      block: true,
      className: "py-8 bg-black text-white font-bold text-2xl mb-5 mt-10 flex items-center justify-center",
      children: "Partners"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onUserSignInClick,
      block: true,
      className: "py-8 font-bold text-2xl flex items-center justify-center border-black border-2",
      children: "Users"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LoginPage1);

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eRny":
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fSZ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("20nU");



const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].BASE_URL}/`
});
axiosClient.interceptors.request.use(async function (config) {
  //const token = localStorage.getItem('token');
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();

  if (session && session.apiToken) {
    // console.log('axiosClient session', session.apiToken);
    config.headers['x-access-token'] = session.apiToken;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosClient.interceptors.response.use(response => {
  // console.debug('Axios onResponseSuccess', response);
  return response.data;
}, error => {
  // console.debug('Axios onResponseError', error.response);
  if (error.response && error.response.status === 403) {
    return Promise.reject(error.response.data);
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (axiosClient);

/***/ }),

/***/ "fscR":
/***/ (function(module, exports) {

module.exports = require("react-icons/fc");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "mTxg":
/***/ (function(module, exports) {

module.exports = require("react-icons/cg");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nQwQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userLoginSocial; });
/* unused harmony export userSignup */
/* unused harmony export saveTokens */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fSZ1");
/* harmony import */ var _authType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hk/V");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6Ox+");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("20nU");





function userLogin(params) {
  return async dispatch => {
    dispatch({
      type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_REQUEST */ "b"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/login', params, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(res.token);
      console.log(res);
      dispatch({
        type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_SUCCESS */ "c"],
        payload: decoded
      });
      return res;
    } catch (error) {
      //console.log('error', error);
      dispatch({
        type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_FAILURE */ "a"]
      });
      return Promise.reject(error);
    }
  };
}
function userLoginSocial(params) {
  return async dispatch => {
    dispatch({
      type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_REQUEST */ "b"]
    });

    try {
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/socialauth', params, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(res.token);
      console.log(res);
      dispatch({
        type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_SUCCESS */ "c"],
        payload: decoded
      });
      return res;
    } catch (error) {
      //console.log('error', error);
      dispatch({
        type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_LOGIN_FAILURE */ "a"]
      });
      return Promise.reject(error);
    }
  };
}
function userSignup(parms) {
  return async dispatch => {
    dispatch({
      type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_SIGNUP_REQUEST */ "k"]
    });

    try {
      console.log(parms);
      const res = await _utils_axios_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('user/complete-registration', parms, {
        headers: {
          'Content-Type': 'application/json'
        }
      }); // console.log(res)

      const status = res.status;

      if (status == 201) {
        dispatch({
          type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_SIGNUP_SUCCESS */ "l"],
          payload: res.result.name
        });
        return res.status;
      } else {
        dispatch({
          type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_SIGNUP_FAILURE */ "j"]
        });
        return Promise.reject(e);
      }
    } catch (e) {
      dispatch({
        type: _authType__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_SIGNUP_FAILURE */ "j"]
      });
      return Promise.reject(e);
    }
  };
}
async function saveTokens(params) {
  try {
    //console.log("saveTokens params", params);
    const {
      access_token,
      decoded
    } = params;
    const {
      expires_in,
      type
    } = decoded;
    const expires_at = new Date();
    expires_at.setSeconds(expires_at.getSeconds() + expires_in);
    await _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* asyncLocalStorage */ "a"].setItem(_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].AUTH_IN, expires_in);
    await _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* asyncLocalStorage */ "a"].setItem(_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].AUTH_AT, expires_at.getTime());
    await _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* asyncLocalStorage */ "a"].setItem(_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].AUTH_TOKEN, access_token);
    await _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__[/* asyncLocalStorage */ "a"].setItem(_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].AUTH_TYPE, type);
    return Promise.resolve(true);
  } catch (err) {
    throw err;
  }
}

/***/ }),

/***/ "nZky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oG/r");
/* harmony import */ var _FoodFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LzWN");







class FoodLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: children
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_FoodFooter__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {})]
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FoodLayout);

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oG/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./styles/input.css
var input = __webpack_require__("oZ4M");

// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/Page1.jsx





const Page1 = ({
  onClick,
  onPartnerSignUpClick,
  onUserSignUpClick
}) => {
  const {
    Text
  } = external_antd_["Typography"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row justify-between align-center mb-8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
        className: "text-4xl font-extrabold",
        children: "Sign up for"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 cursor-pointer",
        onClick: onClick
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
      className: "my-8",
      children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit perspiciatis, repellat cum voluptate cumque?"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      onClick: onPartnerSignUpClick,
      block: true,
      className: "py-8 bg-black text-white font-bold text-2xl mb-5 mt-10 flex items-center justify-center",
      children: "Partners"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      onClick: onUserSignUpClick,
      block: true,
      className: "py-8 font-bold text-2xl flex items-center justify-center border-black border-2",
      children: "Users"
    })]
  });
};

/* harmony default export */ var Signup_Page1 = (Page1);
// EXTERNAL MODULE: ./src/utils/axios-config.js
var axios_config = __webpack_require__("fSZ1");

// EXTERNAL MODULE: ./src/components/auth/facebookAuth.js
var facebookAuth = __webpack_require__("4epu");

// EXTERNAL MODULE: ./src/components/auth/googleAuth.js
var googleAuth = __webpack_require__("pHB0");

// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/User/Step1.js









const {
  Text: Step1_Text
} = external_antd_["Typography"];

const Step1 = ({
  form,
  prevStep,
  nextStep,
  onClick
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  const continueHandler = async () => {
    setLoading(true);

    try {
      const errors = await form.validateFields();
    } catch (errors) {
      setLoading(false);
      return;
    }

    const {
      email
    } = form.getFieldsValue(true); // send verify token

    try {
      var _res$result, _res$message;

      const res = await axios_config["a" /* default */].post("user/", {
        email
      });
      console.log(res); // if user doesn't already exists & is sent verification email

      if ((res === null || res === void 0 ? void 0 : res.status) === 201 || (res === null || res === void 0 ? void 0 : (_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.verification_email_status) === "pending") {
        nextStep();
      }

      if (res !== null && res !== void 0 && (_res$message = res.message) !== null && _res$message !== void 0 && _res$message.includes("Already registered")) external_antd_["message"].error(res.message);
    } catch (error) {
      external_antd_["message"].error(error.message);
      console.log(error);
    }

    setLoading(false);
    console.log("No errors FOUND");
  };

  const googleHandler = async ({
    profileObj
  }) => {
    try {
      const {
        email,
        name,
        googleId: provider_user_id,
        imageUrl: imagePath
      } = profileObj;
      const userData = {
        email,
        name,
        provider_user_id,
        imagePath,
        provider: "google",
        user_type: "user"
      };
      const res = await axios_config["a" /* default */].post("user/socialauth/register", userData);
      console.log(res);
      nextStep(2);
    } catch (error) {
      var _error$response, _error$response$data;

      external_antd_["message"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);
    }
  };

  const facebookHandler = async ({
    email,
    name,
    userID: provider_user_id,
    picture
  }) => {
    try {
      var _picture$data;

      const userData = {
        email,
        name,
        provider_user_id,
        imagePath: picture === null || picture === void 0 ? void 0 : (_picture$data = picture.data) === null || _picture$data === void 0 ? void 0 : _picture$data.url,
        provider: "facebook",
        user_type: "user"
      };
      console.log(userData);
      const res = await axios_config["a" /* default */].post("user/socialauth/register", userData);
      nextStep(2);
    } catch (error) {
      var _error$response2, _error$response2$data;

      external_antd_["message"].error(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message);
    }
  };

  Object(external_react_["useEffect"])(() => {
    form.setFields([{
      name: "user_type",
      value: "user"
    }]);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row justify-between align-center mb-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Step1_Text, {
        className: "text-4xl font-extrabold",
        children: "Sign Up"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 cursor-pointer",
        onClick: onClick
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Step1_Text, {
      className: "my-8",
      children: ["or", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step1_Text, {
        className: "text-red-500 ml-2",
        children: "login to your account"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"], {
      form: form,
      name: "signup-form",
      className: "mt-10",
      layout: "vertical",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
        name: "phone",
        rules: [{
          required: false,
          message: "Please input your phone number"
        }],
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          className: "signup-input",
          placeholder: "Phone Number",
          type: "integer"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
        name: "name",
        rules: [{
          required: true,
          message: "Please input your name"
        }],
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          className: "signup-input",
          placeholder: "Name",
          type: "text"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
        name: "email",
        rules: [{
          required: true,
          message: "Please input your email",
          type: "email"
        }],
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          className: "signup-input",
          placeholder: "Email",
          type: "email"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
        name: "password",
        rules: [{
          required: true,
          message: "Please input password"
        }],
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].Password, {
          className: "signup-input px-6 py-4 bg-inputBg",
          placeholder: "Password"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step1_Text, {
        className: "mb-6",
        children: "Have a referral code?"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Form"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Button"], {
          className: "py-6 flex flex-row gap-2 justify-center items-center",
          block: true,
          type: "primary",
          htmlType: "submit",
          onClick: () => continueHandler(),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: "Continue"
          }), loading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Spin"], {
            indicator: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LoadingOutlined"], {
              style: {
                fontSize: 24,
                color: "white"
              },
              spin: true
            })
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Step1_Text, {
      children: ["By creating an account, I accept the ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step1_Text, {
        className: "text-red-500",
        children: "Terms & Conditions"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step1_Text, {
      className: "text-center block mt-8 mb-4 font-semibold text-base md:text-xl",
      children: "Or Sign Up With"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Row"], {
      className: "flex justify-center items-center gap-2 md:gap-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(facebookAuth["a" /* default */], {
        handler: facebookHandler
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(googleAuth["a" /* default */], {
        handler: googleHandler
      })]
    })]
  });
};

/* harmony default export */ var User_Step1 = (Step1);
// CONCATENATED MODULE: ./src/utils/hooks/usePrevious.js


function usePrevious(value) {
  const ref = Object(external_react_["useRef"])(); // Store current value in ref

  Object(external_react_["useEffect"])(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

/* harmony default export */ var hooks_usePrevious = (usePrevious);
// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/User/OTPInput.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function SingleOTPInputComponent(props) {
  const {
    focus,
    autoFocus
  } = props,
        rest = _objectWithoutProperties(props, ["focus", "autoFocus"]);

  const inputRef = Object(external_react_["useRef"])(null);
  const prevFocus = hooks_usePrevious(!!focus);
  Object(external_react_["useLayoutEffect"])(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }

      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread({
    ref: inputRef
  }, rest));
}

const SingleInput = /*#__PURE__*/external_react_default.a.memo(SingleOTPInputComponent);
function OTPInputComponent(props) {
  const {
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onChangeOTP,
    inputClassName,
    inputStyle
  } = props,
        rest = _objectWithoutProperties(props, ["length", "isNumberInput", "autoFocus", "disabled", "onChangeOTP", "inputClassName", "inputStyle"]);

  const {
    0: activeInput,
    1: setActiveInput
  } = Object(external_react_["useState"])(0);
  const {
    0: otpValues,
    1: setOTPValues
  } = Object(external_react_["useState"])(Array(length).fill("")); // Helper to return OTP from inputs

  const handleOtpChange = Object(external_react_["useCallback"])(otp => {
    const otpValue = otp.join("");
    onChangeOTP(otpValue);
  }, [onChangeOTP]); // Helper to return value with the right type: 'text' or 'number'

  const getRightValue = Object(external_react_["useCallback"])(str => {
    let changedValue = str;

    if (!isNumberInput) {
      return changedValue;
    }

    return !changedValue || /\d/.test(changedValue) ? changedValue : "";
  }, [isNumberInput]); // Change OTP value at focussing input

  const changeCodeAtFocus = Object(external_react_["useCallback"])(str => {
    const updatedOTPValues = [...otpValues];
    updatedOTPValues[activeInput] = str[0] || "";
    setOTPValues(updatedOTPValues);
    handleOtpChange(updatedOTPValues);
  }, [activeInput, handleOtpChange, otpValues]); // Focus `inputIndex` input

  const focusInput = Object(external_react_["useCallback"])(inputIndex => {
    const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
    setActiveInput(selectedIndex);
  }, [length]);
  const focusPrevInput = Object(external_react_["useCallback"])(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);
  const focusNextInput = Object(external_react_["useCallback"])(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]); // Handle onFocus input

  const handleOnFocus = Object(external_react_["useCallback"])(index => () => {
    focusInput(index);
  }, [focusInput]); // Handle onChange value for each input

  const handleOnChange = Object(external_react_["useCallback"])(e => {
    const val = getRightValue(e.currentTarget.value);

    if (!val) {
      e.preventDefault();
      return;
    }

    changeCodeAtFocus(val);
    focusNextInput();
  }, [changeCodeAtFocus, focusNextInput, getRightValue]); // Hanlde onBlur input

  const onBlur = Object(external_react_["useCallback"])(() => {
    setActiveInput(-1);
  }, []); // Handle onKeyDown input

  const handleOnKeyDown = Object(external_react_["useCallback"])(e => {
    switch (e.key) {
      case "Backspace":
      case "Delete":
        {
          e.preventDefault();

          if (otpValues[activeInput]) {
            changeCodeAtFocus("");
          } else {
            focusPrevInput();
          }

          break;
        }

      case "ArrowLeft":
        {
          e.preventDefault();
          focusPrevInput();
          break;
        }

      case "ArrowRight":
        {
          e.preventDefault();
          focusNextInput();
          break;
        }

      case " ":
        {
          e.preventDefault();
          break;
        }

      default:
        break;
    }
  }, [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]);
  const handleOnPaste = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim().slice(0, length - activeInput).split("");

    if (pastedData) {
      let nextFocusIndex = 0;
      const updatedOTPValues = [...otpValues];
      updatedOTPValues.forEach((val, index) => {
        if (index >= activeInput) {
          const changedValue = getRightValue(pastedData.shift() || val);

          if (changedValue) {
            updatedOTPValues[index] = changedValue;
            nextFocusIndex = index;
          }
        }
      });
      setOTPValues(updatedOTPValues);
      setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
    }
  }, [activeInput, getRightValue, length, otpValues]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({}, rest), {}, {
    children: Array(length).fill("").map((_, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(SingleInput, {
      focus: activeInput === index,
      autocomplete: "new-password",
      value: otpValues && otpValues[index],
      autoFocus: autoFocus,
      onFocus: handleOnFocus(index),
      onChange: handleOnChange,
      onKeyDown: handleOnKeyDown,
      onBlur: onBlur,
      onPaste: handleOnPaste,
      style: inputStyle,
      className: inputClassName,
      disabled: disabled
    }, `SingleInput-${index}`))
  }));
}
const OTPInput = /*#__PURE__*/Object(external_react_["memo"])(OTPInputComponent);
/* harmony default export */ var User_OTPInput = (OTPInput);
// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/User/Step2.js









const Step2 = ({
  form,
  prevStep,
  nextStep,
  onClick
}) => {
  const {
    0: token,
    1: setToken
  } = Object(external_react_["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    Text
  } = external_antd_["Typography"];

  const continueHandler = async () => {
    setLoading(true);
    const {
      email,
      email_token,
      name,
      password,
      user_type
    } = form.getFieldsValue(true); // verify token

    try {
      const res = await axios_config["a" /* default */].post("user/verify-email-token", {
        email,
        email_token
      });
      console.log(res); // if user doesn't already exists & is sent verification email

      if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        external_antd_["message"].success(res.message);

        try {
          const completeRegRes = await axios_config["a" /* default */].post("user/complete-registration", {
            email,
            name,
            password,
            user_type
          });

          if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
            external_antd_["message"].success(res.message);
          }
        } catch (err) {}

        nextStep();
      }
    } catch (error) {
      var _error$response, _error$response$data, _error$response2, _error$response2$data;

      external_antd_["message"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);

      if ((_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2$data = _error$response2.data.message) !== null && _error$response2$data !== void 0 && _error$response2$data.includes("Already Verified")) {
        try {
          const completeRegRes = await axios_config["a" /* default */].post("user/complete-registration", {
            email,
            name,
            password,
            user_type
          });
          external_antd_["message"].success(res.message);
        } catch (err) {}
      }
    }

    setLoading(false);
    console.log("No errors FOUND");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row justify-between align-center mb-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
        className: "text-4xl font-extrabold",
        children: "Verify Your Account"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 cursor-pointer",
        onClick: onClick
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
      className: "my-8",
      children: "Enter 4-digit code you have sent received your email Phone number"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Form"], {
      form: form,
      name: "signup-form",
      autoComplete: "off",
      className: "mt-10",
      layout: "vertical",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(User_OTPInput, {
        autoFocus: true,
        isNumberInput: true,
        length: 4,
        className: "otpContainer flex gap-2",
        inputClassName: "otpInput px-4 py-4 bg-inputBg w-16 h-16",
        onChangeOTP: otp => form.setFields([{
          name: "email_token",
          value: otp
        }])
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Button"], {
        className: "py-6 flex my-4 mt-12 flex-row gap-2 justify-center items-center",
        block: true,
        type: "primary",
        htmlType: "submit",
        onClick: () => continueHandler(),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: "Continue"
        }), loading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Spin"], {
          indicator: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LoadingOutlined"], {
            style: {
              fontSize: 24,
              color: "white"
            },
            spin: true
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Button"], {
        className: "py-6 flex flex-row gap-2 justify-center items-center mt-0",
        block: true,
        type: "default",
        htmlType: "submit",
        onClick: () => prevStep(),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: "Back"
        }), loading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Spin"], {
          indicator: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LoadingOutlined"], {
            style: {
              fontSize: 24,
              color: "white"
            },
            spin: true
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var User_Step2 = (Step2);
// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/User/Step3.js






const {
  Text: Step3_Text
} = external_antd_["Typography"];

const Step3 = ({
  onClick
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "flex flex-row justify-end align-center mb-6",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        onClick: onClick,
        className: "h-4 w-4 cursor-pointer"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "flex justify-center items-center mb-8",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CheckCircleOutlined"], {
        style: {
          fontSize: '5em',
          color: 'green'
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Step3_Text, {
        className: "text-4xl block font-extrabold",
        children: "Signed up Successfully!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step3_Text, {
        className: "my-8 text-lg block",
        children: "Please login to continue."
      })]
    })]
  });
};

/* harmony default export */ var User_Step3 = (Step3);
// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/Page2.jsx



function Page2_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Page2_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Page2_ownKeys(Object(source), true).forEach(function (key) { Page2_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Page2_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Page2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Page2 = ({
  onClick,
  customer
}) => {
  const [form] = external_antd_["Form"].useForm();
  const {
    0: currStep,
    1: setCurrStep
  } = Object(external_react_["useState"])(0);

  const nextStep = (step = 1) => {
    if (currStep < Object.keys(STEPS).length - 1) setCurrStep(currStep + step);
  };

  const prevStep = () => {
    if (currStep > 0) setCurrStep(currStep - 1);
  };

  const stepsProps = {
    nextStep,
    prevStep,
    form,
    onClick
  };
  const STEPS = {
    0: /*#__PURE__*/Object(jsx_runtime_["jsx"])(User_Step1, Page2_objectSpread({}, stepsProps)),
    1: /*#__PURE__*/Object(jsx_runtime_["jsx"])(User_Step2, Page2_objectSpread({}, stepsProps)),
    2: /*#__PURE__*/Object(jsx_runtime_["jsx"])(User_Step3, Page2_objectSpread({}, stepsProps))
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: STEPS[currStep]
  });
};

/* harmony default export */ var Signup_Page2 = (Page2);
// CONCATENATED MODULE: ./src/components/Layouts/Header/Signup/Signup.jsx




function Signup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Signup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Signup_ownKeys(Object(source), true).forEach(function (key) { Signup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Signup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Signup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Signup = ({
  isMobile
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    page1: true,
    page2: false,
    page3: false,
    page4: false
  });

  const moveToPage2 = () => {
    setState(Signup_objectSpread(Signup_objectSpread({}, state), {}, {
      page1: false,
      page2: true
    }));
  };

  const handleDrawerClose = () => {
    setState({
      page1: true,
      page2: false,
      page3: false,
      page4: false
    });
    setVisible(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [isMobile ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      onClick: () => setVisible(true),
      className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
      children: "Signup"
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      className: "ml-7 mr-4 rounded-xl px-7 py-5 flex items-center",
      onClick: () => setVisible(true),
      children: "Signup"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Drawer"], {
      destroyOnClose: true,
      placement: "left",
      closable: false,
      onClose: () => handleDrawerClose(),
      visible: visible,
      width: isMobile ? '100%' : '35%',
      drawerStyle: {
        width: '83%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      keyboard: true,
      children: [state.page1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Signup_Page1, {
        onClick: () => setVisible(false),
        onPartnerSignUpClick: moveToPage2,
        onUserSignUpClick: moveToPage2
      }), state.page2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Signup_Page2, {
        onClick: () => handleDrawerClose()
      })]
    })]
  });
};

/* harmony default export */ var Signup_Signup = (Signup);
// EXTERNAL MODULE: ./src/components/Layouts/Header/Login/LoginPage1.jsx
var LoginPage1 = __webpack_require__("Tr0R");

// EXTERNAL MODULE: ./src/components/Layouts/Header/Login/LoginPage2.jsx
var LoginPage2 = __webpack_require__("1SSe");

// CONCATENATED MODULE: ./src/components/Layouts/Header/Login/Login.jsx




function Login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Login_ownKeys(Object(source), true).forEach(function (key) { Login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Login = ({
  isMobile
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    customer: "",
    page1: true,
    page2: false
  });

  const moveToPage2 = () => {
    setState(Login_objectSpread(Login_objectSpread({}, state), {}, {
      page1: false,
      page2: true
    }));
  };

  const goToPage1 = () => {
    setState(Login_objectSpread(Login_objectSpread({}, state), {}, {
      page1: true,
      page2: false
    }));
  };

  const onClose = () => {
    setTimeout(() => {
      setState(Login_objectSpread(Login_objectSpread({}, state), {}, {
        page1: true,
        page2: false
      }));
    }, 500);
    setVisible(false);
  };

  const {
    Text
  } = external_antd_["Typography"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [isMobile ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      onClick: () => setVisible(true),
      className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
      children: "Login"
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
      type: "primary",
      className: "mr-4 rounded-xl px-7 py-5 flex items-center",
      onClick: () => setVisible(true),
      children: "Login"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Drawer"], {
      destroyOnClose: true,
      placement: "left",
      closable: false,
      onClose: onClose,
      visible: visible,
      width: isMobile ? "100%" : "35%",
      drawerStyle: {
        width: "83%",
        marginLeft: "auto",
        marginRight: "auto"
      },
      keyboard: true,
      children: [state.page1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginPage1["a" /* default */], {
        onClick: () => setVisible(false),
        onPartnerSignInClick: moveToPage2,
        onUserSignInClick: moveToPage2
      }), state.page2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LoginPage2["a" /* default */], {
        onClick: onClose,
        goBack: goToPage1,
        customer: state.customer
      })]
    })]
  });
};

/* harmony default export */ var Login_Login = (Login);
// EXTERNAL MODULE: external "ahooks"
var external_ahooks_ = __webpack_require__("SqZu");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__("mTxg");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// CONCATENATED MODULE: ./src/components/Layouts/menu/LeftMenu.jsx
















const {
  Panel
} = external_antd_["Collapse"];

const UserMenu = ({
  onClose
}) => {
  var _session$user;

  const [session, loading] = Object(client_["useSession"])();
  const {
    0: cartCount,
    1: setCartCount
  } = Object(external_react_["useState"])(0);
  const [items, setItems] = Object(external_ahooks_["useLocalStorageState"])("cartitems");
  const isChef = (session === null || session === void 0 ? void 0 : session.role) === "chef";
  const isDriver = (session === null || session === void 0 ? void 0 : session.role) === "driver";
  const isUser = (session === null || session === void 0 ? void 0 : session.role) === "user";
  Object(external_react_["useEffect"])(async () => {
    try {
      setCartCount(items["items"].length); // console.log("Count has been set")
    } catch (e) {
      console.log(e);
    }
  }, [items]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Collapse"], {
    accordion: true,
    bordered: false,
    ghost: true,
    expandIconPosition: "right",
    className: "px-0 mt-8",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Panel, {
      header: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        style: {
          borderBottom: "1px solid #A0AEC0"
        },
        className: "px-0 py-4",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          style: {
            fontSize: 18
          },
          className: "flex align-center disable",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaUser"], {
            style: {
              color: "#d73d36",
              fontSize: "1.8em"
            },
            color: "#d73d36",
            className: "mr-5",
            size: 30
          }), session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name]
        })
      }),
      className: "text-lg",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        style: {
          borderBottom: "1px solid #A0AEC0"
        },
        className: "pt-5 pb-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef" : isDriver ? "/driver" : "/#"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            style: {
              fontSize: 18
            },
            className: "flex align-center disable",
            onClick: onClose,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdDashboard"], {
              color: "#d73d36",
              className: "mr-5",
              size: 30
            }), "Dashboard"]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        style: {
          borderBottom: "1px solid #A0AEC0"
        },
        className: "pt-5 pb-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef/profile" : isDriver ? "/driver/profile" : "/user/profile"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            style: {
              fontSize: 18
            },
            className: "flex align-center disable",
            onClick: onClose,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(cg_["CgProfile"], {
              color: "#d73d36",
              className: "mr-5",
              size: 30
            }), "Profile"]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        style: {
          borderBottom: "1px solid #A0AEC0"
        },
        className: "pt-5 pb-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            style: {
              fontSize: 18
            },
            className: "flex align-center",
            onClick: onClose,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaShoppingBag"], {
              color: "#d73d36",
              className: "mr-5",
              size: 30
            }), "Cart (", cartCount, ")"]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        style: {
          borderBottom: "1px solid #A0AEC0"
        },
        className: "pt-5 pb-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/help",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            href: "#",
            className: "flex align-center",
            role: "menuitem",
            onClick: e => {
              e.preventDefault();
              Object(client_["signOut"])({
                callbackUrl: "/"
              });
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ai_["AiOutlineLogout"], {
              color: "#d73d36",
              className: "mr-5",
              size: 30
            }), "Sign out"]
          })
        })
      })]
    }, "1")
  });
};

const LeftMenu = ({
  login,
  signup
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(external_react_["useState"])(false);
  const [session, loading] = Object(client_["useSession"])();

  const onClose = () => {
    setVisible(false);
  };

  Object(external_react_["useEffect"])(() => {
    window.screen.width < 780 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      type: "button",
      className: "text-dark-500 pl-12 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400",
      "aria-label": "toggle menu",
      onClick: () => setVisible(true),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiAlignLeft"], {
        size: 30
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Drawer"], {
      placement: "left",
      closable: false,
      onClose: onClose,
      width: isMobile ? "100%" : "35%",
      visible: visible,
      drawerStyle: {
        width: "85%",
        margin: "0 auto"
      },
      keyboard: true,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "/images/close.png",
        alt: "close",
        className: "h-4 w-4 mb-4 cursor-pointer float-right",
        onClick: onClose
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: "sidebar flex flex-col h-full",
        children: [session && /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserMenu, {
          onClose: onClose
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          style: {
            borderBottom: "1px solid #A0AEC0"
          },
          className: "pt-5 pb-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/new-on-cheffy",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaBroadcastTower"], {
                color: "#d73d36",
                className: "mr-5",
                size: 30
              }), "New in cheffy"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          style: {
            borderBottom: "1px solid #A0AEC0"
          },
          className: "pt-5 pb-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/category",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaGripHorizontal"], {
                color: "#d73d36",
                className: "mr-5",
                size: 30
              }), "Categories"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          style: {
            borderBottom: "1px solid #A0AEC0"
          },
          className: "pt-5 pb-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/chef",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/chef/chef.svg",
                alt: "",
                className: "mr-7"
              }), "Chef"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          style: {
            borderBottom: "1px solid #A0AEC0"
          },
          className: "pt-5 pb-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/kitchen",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaUtensils"], {
                color: "#d73d36",
                className: "mr-5",
                size: 30
              }), "Rent a kitchen"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Collapse"], {
          accordion: true,
          bordered: false,
          ghost: true,
          expandIconPosition: "right",
          className: "px-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Panel, {
            header: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              style: {
                borderBottom: "1px solid #A0AEC0"
              },
              className: "px-0 py-4",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                style: {
                  fontSize: 18
                },
                className: "flex align-center disable",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["BarsOutlined"], {
                  style: {
                    color: "#d73d36",
                    fontSize: "1.8em"
                  },
                  color: "#d73d36",
                  className: "mr-5",
                  size: 30
                }), "More"]
              })
            }),
            className: "text-lg",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              style: {
                borderBottom: "1px solid #A0AEC0"
              },
              className: "pt-5 pb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/blog",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  style: {
                    fontSize: 18
                  },
                  className: "flex align-center disable",
                  onClick: onClose,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaEdit"], {
                    color: "#d73d36",
                    className: "mr-5",
                    size: 30
                  }), "Blog"]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              style: {
                borderBottom: "1px solid #A0AEC0"
              },
              className: "pt-5 pb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/faq",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  style: {
                    fontSize: 18
                  },
                  className: "flex align-center",
                  onClick: onClose,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaComments"], {
                    color: "#d73d36",
                    className: "mr-5",
                    size: 30
                  }), "Faq"]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              style: {
                borderBottom: "1px solid #A0AEC0"
              },
              className: "pt-5 pb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/help",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  style: {
                    fontSize: 18
                  },
                  className: "flex align-center",
                  onClick: onClose,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaQuestionCircle"], {
                    color: "#d73d36",
                    className: "mr-5",
                    size: 30
                  }), "Help"]
                })
              })
            })]
          }, "1")
        }), !session && isMobile && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: {
              borderBottom: "1px solid #A0AEC0"
            },
            className: "pt-5 pb-5 mt-auto",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["UserAddOutlined"], {
                style: {
                  color: "#d73d36",
                  fontSize: "1.7em"
                },
                color: "#d73d36",
                className: "mr-5",
                size: 30
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Signup_Signup, {
                isMobile: true
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: {
              borderBottom: "1px solid #A0AEC0"
            },
            className: "pt-5 pb-5 mb-20",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              style: {
                fontSize: 18
              },
              className: "flex align-center",
              onClick: onClose,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LoginOutlined"], {
                style: {
                  color: "#d73d36",
                  fontSize: "1.7em"
                },
                className: "mr-5"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Login_Login, {
                isMobile: true
              })]
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var menu_LeftMenu = (LeftMenu);
// EXTERNAL MODULE: ./src/utils/localStorage.js
var localStorage = __webpack_require__("6Ox+");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/cart/cartAction.js
var cartAction = __webpack_require__("GnJv");

// CONCATENATED MODULE: ./src/components/auto-complete/google-autocomplete.js
const googleAutocomplete = async (text) => new Promise((resolve, reject) => {
  if (!text) {
    return reject("Need valid text input");
  } // for use in things like GatsbyJS where the html is generated first


  if (true) {
    return reject("Need valid window object");
  }

  try {
    new window.google.maps.places.AutocompleteService().getPlacePredictions({
      input: text,
      componentRestrictions: {
        country: "gb"
      }
    }, resolve);
  } catch (e) {
    reject(e);
  }
});
// EXTERNAL MODULE: ./src/components/auto-complete/auto-complete.css
var auto_complete = __webpack_require__("J1UA");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__("eRny");

// CONCATENATED MODULE: ./constants/index.js
const GOOGLE_MAP_API_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBbakHYrx-anepIbe5nyyMKVGEhdCHTfEI&language=en&libraries=places";
const GEO_CODE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBbakHYrx-anepIbe5nyyMKVGEhdCHTfEI";
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/auto-complete/index.jsx













function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

let geocoder;
function PredictionsOnInputChange({
  searchValue,
  onChange,
  setSearchValue
}) {
  const router = Object(router_["useRouter"])();
  const {
    0: predictions,
    1: setPredictions
  } = Object(external_react_["useState"])([]);
  const {
    0: cityName,
    1: setCityName
  } = Object(external_react_["useState"])(null);
  console.log(setSearchValue, onChange);

  const onSelect = data => {
    console.log('onSelect', data);
  };

  Object(external_react_["useEffect"])(async () => {
    if (cityName != null) {
      router.reload();
    }
  }, []);

  const onSearch = async text => {
    try {
      if (!text) {
        setPredictions([]);
        return;
      }

      const nextPredictions = await googleAutocomplete(text);
      const results = nextPredictions.map((prediction, index) => {
        var _prediction$structure;

        const label = prediction === null || prediction === void 0 ? void 0 : (_prediction$structure = prediction.structured_formatting) === null || _prediction$structure === void 0 ? void 0 : _prediction$structure.main_text;
        return {
          key: index,
          value: label,
          label
        };
      });
      setPredictions(results);
    } catch (e) {
      console.error(e);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = async position => {
    var _result$results$, _result$results$2;

    // const lat = position.coords.latitude;
    // const long = position.coords.longitude;
    const lat = "43.20577420";
    const long = "-77.66710000"; // const lat = "43.12285180";
    // const long = "-77.61803020";

    const apiUrl = `${GEO_CODE_API_URL}&latlng=${lat},${long}`;
    const rawRespnse = await fetch(apiUrl);
    const result = await rawRespnse.json();
    onChange(result === null || result === void 0 ? void 0 : (_result$results$ = result.results[0]) === null || _result$results$ === void 0 ? void 0 : _result$results$.formatted_address);
    console.log(result === null || result === void 0 ? void 0 : result.results[0]);
    console.log("address: " + (result === null || result === void 0 ? void 0 : (_result$results$2 = result.results[0]) === null || _result$results$2 === void 0 ? void 0 : _result$results$2.formatted_address)); // geocoder = new window.google.maps.Geocoder();
    // var latlng = new google.maps.LatLng(lat, long);
    // var itemLocality="";
    //   var country = null, countryCode = null, cityName = null, cityAlt = null;
    //   new window.google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //         if (results[1]) {
    //             var c, lc, component;
    //             for (var r = 0, rl = results.length; r < rl; r += 1) {
    //                 var result = results[r];
    //                 if (!cityName && result.types[0] === 'locality') {
    //                     for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
    //                         component = result.address_components[c];
    //                         if (component.types[0] === 'locality') {
    //                           cityName = component.long_name;
    //                             break;
    //                         }
    //                     }
    //                 }
    //                 else if (!cityName && !cityAlt && result.types[0] === 'administrative_area_level_1') {
    //                     for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
    //                         component = result.address_components[c];
    //                         if (component.types[0] === 'administrative_area_level_1') {
    //                             cityAlt = component.long_name;
    //                             break;
    //                         }
    //                     }
    //                 } else if (!country && result.types[0] === 'country') {
    //                     country = result.address_components[0].long_name;
    //                     countryCode = result.address_components[0].short_name;
    //                 }
    //                 if (cityName && country) {
    //                     break;
    //                 }
    //             }
    //             console.log("City: " + cityName + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
    //             setCityName(cityName);
    //             asyncLocalStorage.setItem("cityName", cityName)
    //           }
    //         if(cityName==null || cityName==''){
    //           geocoder.geocode({latLng: latlng}, function(results, status) {
    //             if (status == google.maps.GeocoderStatus.OK) {
    //               if (results[1]) {
    //                 var arrAddress = results[1].address_components;
    //                 console.log("****************")
    //                 console.log(results);
    //                 arrAddress.map((address_component,index) => {
    //                   console.log("==>>")
    //                   console.log("==>>>>>>>>>>"+address_component.types[0]) 
    //                   console.log(address_component)
    //                   if (address_component.types[0] == "locality") {
    //                     console.log("cityName: " + address_component.long_name);
    //                     cityName = address_component.long_name;
    //                     asyncLocalStorage.setItem("cityName", cityName)
    //                     setCityName(cityName);    
    //                     // router.reload(); 
    //                   }
    //                 })
    //               } else {
    //                 alert("No results found");
    //               }
    //             } else {
    //               alert("Geocoder failed due to: " + status);
    //             }
    //           });
    //         }
    //     }
    // });
    // setSearchValue(result?.results[0]?.formatted_address);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: "flex items-center border-b-2 border-gray-600",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiCurrentLocation"], {
        className: "text-lg cursor-pointer",
        onClick: getCurrentLocation
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["AutoComplete"], {
        suffixIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowDown"], {}),
        name: "predictionSearch",
        value: searchValue,
        options: predictions,
        onSelect: onSelect // style={{
        //   width: 300,
        // }}
        ,
        allowClear: true,
        dropdownMatchSelectWidth: false,
        placeholder: "Location..",
        className: "w-full text-lg py-1 ",
        bordered: false,
        onSearch: debounce(onSearch, 400),
        onChange: value => {
          onChange(value);
          localStorage["a" /* asyncLocalStorage */].setItem("cityName", value);
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(io_["IoIosArrowDown"], {
        className: "mr-2"
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/components/Layouts/Header/HomeHeader.jsx


















const FoodHeader = ({
  cart
}) => {
  const [session, loading] = Object(client_["useSession"])();
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])("");
  const {
    0: cartCount,
    1: setCartCount
  } = Object(external_react_["useState"])(0);
  const {
    0: basketItems,
    1: setBasketItems
  } = Object(external_react_["useState"])([]);
  const isChef = (session === null || session === void 0 ? void 0 : session.role) === "chef";
  const isDriver = (session === null || session === void 0 ? void 0 : session.role) === "driver";
  const isUser = (session === null || session === void 0 ? void 0 : session.role) === "user";
  const [items, setItems] = Object(external_ahooks_["useLocalStorageState"])("cartitems");
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(async () => {
    try {
      console.log("SESSION: ==>>");
      console.log(session);
      let localBasketItems = items ? items["items"] : [];
      let platesArray = [];
      let cartItemsArray = [];
      let deliveryType = "user";

      if (session) {
        if (!cart.cartItemSetWithSessionFlag) {
          console.log("1");
          let userBasketItemsBefore = await dispatch(Object(cartAction["d" /* getUserBasket */])(deliveryType)); //

          localBasketItems.map(item => {
            console.log("2");

            if (!userBasketItemsBefore.items.some(basket => basket.plate.id.toString() === item.plateId.toString())) {
              console.log("not match: " + item.plateId);
              platesArray.push({
                quantity: 1,
                plateId: item.plateId,
                note: "Special Instructions goes here"
              });
            }
          });
          console.log("3");

          if (platesArray.length > 0) {
            let reqBasket = {
              deliveryType: "user",
              plates: platesArray
            };
            console.log("4");
            await dispatch(Object(cartAction["a" /* addItemsToCart */])(reqBasket));
          } // get user basket items


          let userBasketItemsAfter = await dispatch(Object(cartAction["d" /* getUserBasket */])(deliveryType));
          console.log("5");
          console.log(userBasketItemsAfter); // if both basket is not empty

          userBasketItemsAfter.items.map(item => {
            console.log("6");
            cartItemsArray.push({
              ordered: item.quantity,
              plateId: item.plate.id
            });
          });
          console.log("7");
          await localStorage["a" /* asyncLocalStorage */].setItem("cartitems", JSON.stringify({
            items: cartItemsArray
          }));
          dispatch(Object(cartAction["g" /* setCartItems */])(cartItemsArray));
          dispatch(Object(cartAction["h" /* setCartItemsWithSessionFlag */])());
          console.log("8");
        }
      } else {
        if (!cart.cartItemSetWithoutSessionFlag) {
          dispatch(Object(cartAction["g" /* setCartItems */])(localBasketItems));
          dispatch(Object(cartAction["i" /* setCartItemsWithoutSessionFlag */])());
        }
      }

      console.log("9");
      setCartCount(cart.itemCount);
    } catch (e) {
      console.log(e);
    }
  }, [cart, session]);

  const DropdownMobile = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
      className: "mt-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: !session ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Signup_Signup, {
          isMobile: true
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef" : isDriver ? "/driver" : "/user"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
            role: "menuitem",
            children: "Dashboard"
          })
        })
      }, "0"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: !session ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Login_Login, {
          isMobile: true
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef/profile" : isDriver ? "/driver/profile" : "/user/profile"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: "block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100",
            role: "menuitem",
            children: "Profile"
          })
        })
      }, "1"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/about",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
            children: "About"
          })
        })
      }, "2"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/contact",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
            children: "Contact us"
          })
        })
      }, "3"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: "cursor-pointer flex items-center",
            children: ["Cart (", cartCount, ")"]
          })
        })
      }, "4"), session ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        className: "py-6 px-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          role: "menuitem",
          onClick: e => {
            e.preventDefault();
            Object(client_["signOut"])({
              callbackUrl: "/"
            });
          },
          children: "Sign out"
        })
      }, "4") : null]
    });
  };

  const ImgIcon = () => {
    // console.log(session.user.image)
    if (session.user.image == "null") {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaUser"], {
        className: "text-2xl h-8 w-8 rounded-full mr-2"
      });
    } else {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: session.user.image,
        className: "user-img h-8 w-8 rounded-full mr-6",
        alt: ""
      });
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaUser"], {});
  };

  const DropdownMenu = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Menu"], {
      className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef" : isDriver ? "/driver" : "/#"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
            role: "menuitem",
            children: "Dashboard"
          })
        })
      }, "0"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `${isChef ? "/chef/profile" : isDriver ? "/driver/profile" : "/user/profile"}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#",
            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
            role: "menuitem",
            children: "Profile"
          })
        })
      }, "1"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Menu"].Item, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          role: "menuitem",
          onClick: e => {
            e.preventDefault();
            Object(client_["signOut"])({
              callbackUrl: "/"
            });
          },
          children: "Sign out"
        })
      }, "2")]
    });
  };

  return session ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    style: {
      backgroundColor: "#F7FCFF",
      boxShadow: "0 0 5px #ddd"
    },
    className: "dark:bg-gray-800 stickey",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "mx-auto py-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "md:flex md:items-center md:justify-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex justify-between items-center px-8 md:px-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_LeftMenu, {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hidden md:flex cursor-pointer red pl-12",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "md:hidden cursor-pointer red",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/mobile-logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex md:hidden",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_LeftMenu, {})
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "hidden md:flex md:items-center md:justify-between flex-1",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "hidden md:flex md:items-center md:justify-between flex-1",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-col -mx-4 md:flex-row md:items-center md:mx-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/about",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "About"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/contact",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
                  children: "Contact us"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "mr-32 w-52",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PredictionsOnInputChange, {
                searchValue: searchValue,
                setSearchValue: e => setSearchValue(e),
                onChange: value => {
                  setSearchValue(value);
                }
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Badge"], {
                count: cartCount,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/cart",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "cursor-pointer flex items-center",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaShoppingBag"], {
                      className: "text-2xl"
                    })
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Dropdown"], {
                className: "flex flex-row justify-center items-center mt-4 md:mt-0",
                overlay: DropdownMenu,
                trigger: ["click"],
                placement: "bottomRight",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Button"], {
                  style: {
                    backgroundColor: "transparent"
                  },
                  className: "px-6 flex flex-row justify-center items-center",
                  type: "text",
                  icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImgIcon, {}),
                  children: [session.user.name, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DownOutlined"], {
                    className: "ml-2"
                  })]
                })
              })]
            })]
          })
        })]
      })
    })
  }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    style: {
      backgroundColor: "#F7FCFF",
      boxShadow: "0 0 5px #ddd"
    },
    className: "dark:bg-gray-800 stickey",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "mx-auto py-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "md:flex md:items-center md:justify-between",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex justify-between items-center px-8 md:px-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_LeftMenu, {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hidden md:flex cursor-pointer red pl-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "md:hidden cursor-pointer red",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/images/mobile-logo.png"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex md:hidden",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(menu_LeftMenu, {})
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "hidden md:flex md:items-center md:justify-between flex-1",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "hidden md:flex md:items-center md:justify-between flex-1",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex flex-col -mx-4 md:flex-row md:items-center md:mx-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/about",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "About"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/contact",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "mx-2 mt-2 md:mt-0 px-2 py-1 text-sm rounded-md",
                  children: "Contact us"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "mr-32 w-52",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PredictionsOnInputChange, {
                searchValue: searchValue,
                setSearchValue: e => setSearchValue(e),
                onChange: value => {
                  setSearchValue(value);
                }
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex items-center mt-4 md:mt-0",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Badge"], {
                count: cartCount,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/cart",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaShoppingBag"], {
                      className: "text-2xl"
                    })
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Signup_Signup, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Login_Login, {})]
            })]
          })
        })]
      })
    })
  });
};

const mapToProps = state => {
  // console.log(state)
  return {
    cart: state.cart
  };
};

/* harmony default export */ var HomeHeader = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapToProps)(FoodHeader));

/***/ }),

/***/ "oZ4M":
/***/ (function(module, exports) {



/***/ }),

/***/ "pHB0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rCsO");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fscR");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__);





const clientId = "710426436210-6vdt9q2m40bsdj37op1ljfuvihfjea53.apps.googleusercontent.com";

const GoogleLoginComp = ({
  handler
}) => {
  const onFailure = res => {
    console.log("[Login failed] res:", res);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_google_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLogin"], {
      clientId: clientId,
      buttonText: "Login",
      onSuccess: handler,
      onFailure: onFailure,
      cookiePolicy: 'single_host_origin',
      style: {
        marginTop: '100px'
      },
      isSigned: true,
      render: ({
        onClick,
        disabled
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "py-6 px-5 md:py-6 md:px-8 rounded-md flex flex-row gap-2 justify-center font-semibold items-center",
        onClick: onClick,
        disabled: disabled,
        icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__["FcGoogle"], {}),
        children: "Google"
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (GoogleLoginComp);

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xsLT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_IS_FETCHING_FOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_ERROR_FETCHING_FOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_FOOD_TO_COLLECTION; });
/* unused harmony export SET_IS_FETCHING_FOOD_CATEGORY */
/* unused harmony export SET_ERROR_FETCHING_FOOD_CATEGORY */
/* unused harmony export ADD_FOOD_CATEGORY_TO_COLLECTION */
/* unused harmony export SET_IS_FETCHING_POPULAR_AND_NEW */
/* unused harmony export SET_ERROR_FETCHING_POPULAR_AND_NEW */
/* unused harmony export ADD_POPULAR_FOOD_TO_COLLECTION */
/* unused harmony export ADD_NEW_FOOD_TO_COLLECTION */
//food
const SET_IS_FETCHING_FOOD = 'SET_IS_FETCHING_FOOD';
const SET_ERROR_FETCHING_FOOD = 'SET_ERROR_FETCHING_FOOD';
const ADD_FOOD_TO_COLLECTION = 'ADD_FOOD_TO_COLLECTION'; //category

const SET_IS_FETCHING_FOOD_CATEGORY = 'SET_IS_FETCHING_FOOD_CATEGORY';
const SET_ERROR_FETCHING_FOOD_CATEGORY = 'SET_ERROR_FETCHING_FOOD_CATEGORY';
const ADD_FOOD_CATEGORY_TO_COLLECTION = 'ADD_FOOD_CATEGORY_TO_COLLECTION'; //popular_and_new

const SET_IS_FETCHING_POPULAR_AND_NEW = 'SET_IS_FETCHING_POPULAR_AND_NEW';
const SET_ERROR_FETCHING_POPULAR_AND_NEW = 'SET_ERROR_FETCHING_POPULAR_AND_NEW';
const ADD_POPULAR_FOOD_TO_COLLECTION = 'ADD_POPULAR_FOOD_TO_COLLECTION';
const ADD_NEW_FOOD_TO_COLLECTION = 'ADD_NEW_FOOD_TO_COLLECTION';

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });