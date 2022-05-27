/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://cities.local.tnw.dev/api\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    ssrMode: true,\n    assumeImmutableResults: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsd0RBQVksQ0FBQztJQUM1QkcsR0FBRyxFQUFFLGtDQUFrQztJQUN2Q0MsS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7SUFDMUJJLE9BQU8sRUFBRSxJQUFJO0lBQ2JDLHNCQUFzQixFQUFFLElBQUk7Q0FLL0IsQ0FBQztBQUVGLGlFQUFlSixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZm5leHQvLi9hcG9sbG8tY2xpZW50LmpzPzNjZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogJ2h0dHBzOi8vY2l0aWVzLmxvY2FsLnRudy5kZXYvYXBpJyxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBzc3JNb2RlOiB0cnVlLFxuICAgIGFzc3VtZUltbXV0YWJsZVJlc3VsdHM6IHRydWUsXG4gICAgLy8gdXNlR0VURm9yUXVlcmllczogdHJ1ZSxcbiAgICAvLyBoZWFkZXJzOiB7XG4gICAgLy8gICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgeG1oV18xXzBvTFYyOWRjVjdhUXNOYl9MZHlnTmk1czZgLFxuICAgIC8vIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJzc3JNb2RlIiwiYXNzdW1lSW1tdXRhYmxlUmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./contexts/GlobalContext.jsx":
/*!************************************!*\
  !*** ./contexts/GlobalContext.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"GlobalContextProvider\": () => (/* binding */ GlobalContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst GlobalContextProvider = (props)=>{\n    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: showModalContent , 1: setShowModalContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: toggledText , 1: setToggledText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    let state = {\n        isModalOpen,\n        showModalContent,\n        toggledText\n    };\n    let handlers = {\n        setIsModalOpen,\n        setShowModalContent,\n        setToggledText\n    };\n    const provider = [\n        {\n            state,\n            handlers\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: provider,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/ronan/tnw/cfnext/contexts/GlobalContext.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9HbG9iYWxDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUNoRCxNQUFNRyxhQUFhLGlCQUFHRixvREFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXhDLE1BQU1HLHFCQUFxQixHQUFHLENBQUNDLEtBQUssR0FBSztJQUM1QyxNQUFNLEVBSlYsR0FJWUMsV0FBVyxHQUp2QixHQUl5QkMsY0FBYyxNQUFLTCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN2RCxNQUFNLEVBTFYsR0FLWU0sZ0JBQWdCLEdBTDVCLEdBSzhCQyxtQkFBbUIsTUFBS1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDOUQsTUFBTSxFQU5WLEdBTVlRLFdBQVcsR0FOdkIsR0FNeUJDLGNBQWMsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFbkQsSUFBSVUsS0FBSyxHQUFHO1FBQ1JOLFdBQVc7UUFDWEUsZ0JBQWdCO1FBQ2hCRSxXQUFXO0tBQ2Q7SUFFRCxJQUFJRyxRQUFRLEdBQUc7UUFDWE4sY0FBYztRQUNkRSxtQkFBbUI7UUFDbkJFLGNBQWM7S0FDakI7SUFFRCxNQUFNRyxRQUFRLEdBQUc7UUFBQztZQUFDRixLQUFLO1lBQUVDLFFBQVE7U0FBQztLQUFDO0lBRXBDLHFCQUNJLDhEQUFDVixhQUFhLENBQUNZLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixRQUFRO2tCQUNsQ1QsS0FBSyxDQUFDWSxRQUFROzs7OztpQkFDTSxDQUM1QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2ZuZXh0Ly4vY29udGV4dHMvR2xvYmFsQ29udGV4dC5qc3g/MWE0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTsgXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbIGlzTW9kYWxPcGVuLCBzZXRJc01vZGFsT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgc2hvd01vZGFsQ29udGVudCwgc2V0U2hvd01vZGFsQ29udGVudCBdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFsgdG9nZ2xlZFRleHQsIHNldFRvZ2dsZWRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgXG4gICBcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGlzTW9kYWxPcGVuLFxuICAgICAgICBzaG93TW9kYWxDb250ZW50LFxuICAgICAgICB0b2dnbGVkVGV4dFxuICAgIH07XG5cbiAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgIHNldElzTW9kYWxPcGVuLFxuICAgICAgICBzZXRTaG93TW9kYWxDb250ZW50LFxuICAgICAgICBzZXRUb2dnbGVkVGV4dFxuICAgIH07IFxuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBbe3N0YXRlLCBoYW5kbGVyc31dXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbENvbnRleHRQcm92aWRlciIsInByb3BzIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsInNob3dNb2RhbENvbnRlbnQiLCJzZXRTaG93TW9kYWxDb250ZW50IiwidG9nZ2xlZFRleHQiLCJzZXRUb2dnbGVkVGV4dCIsInN0YXRlIiwiaGFuZGxlcnMiLCJwcm92aWRlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/GlobalContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var _contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../contexts/GlobalContext */ \"./contexts/GlobalContext.jsx\");\n\n\n\n\n\nfunction CfNext({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_4__.GlobalContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ronan/tnw/cfnext/pages/_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ronan/tnw/cfnext/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ronan/tnw/cfnext/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CfNext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ2tCO0FBQ1Y7QUFDOEI7QUFFcEUsU0FBU0csTUFBTSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNMLDBEQUFjO1FBQUNDLE1BQU0sRUFBRUEsc0RBQU07a0JBQzVCLDRFQUFDQywwRUFBcUI7c0JBQ3BCLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDTjs7Ozs7WUFDVCxDQUNqQjtDQUNIO0FBRUQsaUVBQWVGLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZm5leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi8uLi9jb250ZXh0cy9HbG9iYWxDb250ZXh0JztcblxuZnVuY3Rpb24gQ2ZOZXh0KHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8R2xvYmFsQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHRQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDZk5leHRcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIkdsb2JhbENvbnRleHRQcm92aWRlciIsIkNmTmV4dCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();