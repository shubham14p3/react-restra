exports.ids = [51];
exports.modules = {

/***/ "h8s3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


let timer;
let state;
let activeRequests = 0;
const delay = 250;

function load() {
  if (state === "loading") {
    return;
  }

  state = "loading";
  timer = setTimeout(function () {
    nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
  }, delay); // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = "stop";
  clearTimeout(timer);
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
}

next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeStart", load);
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeComplete", stop);
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeError", stop);
const originalFetch = window.fetch;

window.fetch = async function (...args) {
  if (activeRequests === 0) {
    load();
  }

  activeRequests++;

  try {
    const response = await originalFetch(...args);
    return response;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    activeRequests -= 1;

    if (activeRequests === 0) {
      stop();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return null;
});

/***/ })

};;