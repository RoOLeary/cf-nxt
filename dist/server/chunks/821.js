"use strict";
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 8600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: "https://cities.local.tnw.dev/api",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
    ssrMode: true,
    assumeImmutableResults: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 2518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ GlobalContext),
/* harmony export */   "n": () => (/* binding */ GlobalContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const GlobalContextProvider = (props)=>{
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showModalContent , 1: setShowModalContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: toggledText , 1: setToggledText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let state = {
        isModalOpen,
        showModalContent,
        toggledText
    };
    let handlers = {
        setIsModalOpen,
        setShowModalContent,
        setToggledText
    };
    const provider = [
        {
            state,
            handlers
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: provider,
        children: props.children
    });
};


/***/ })

};
;