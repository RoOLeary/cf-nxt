"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./components/TextBlock.js":
/*!*********************************!*\
  !*** ./components/TextBlock.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TextBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contexts/GlobalContext */ \"./contexts/GlobalContext.jsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction TextBlock(param) {\n    var heading = param.heading, content = param.content;\n    _s();\n    var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);\n    console.log(ctx[0].handlers);\n    var logCurrent = function(e) {\n        console.log(\"clicked\");\n        ctx[0].handlers.setIsModalOpen(!ctx[0].handlers.isModalOpen);\n        ctx[0].handlers.setShowModalContent(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"textBlock\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: heading\n                }, void 0, false, {\n                    fileName: \"/Users/ronan/tnw/cfnext/components/TextBlock.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: function(e) {\n                        return logCurrent(\"\".concat(heading));\n                    },\n                    children: content\n                }, void 0, false, {\n                    fileName: \"/Users/ronan/tnw/cfnext/components/TextBlock.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ronan/tnw/cfnext/components/TextBlock.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(TextBlock, \"/dMy7t63NXD4eYACoT93CePwGrg=\");\n_c = TextBlock;\nvar _c;\n$RefreshReg$(_c, \"TextBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRCbG9jay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUMyQjs7QUFFN0MsU0FBU0UsU0FBUyxDQUFDLEtBQW9CLEVBQUU7UUFBcEJDLE9BQU8sR0FBVCxLQUFvQixDQUFsQkEsT0FBTyxFQUFFQyxPQUFPLEdBQWxCLEtBQW9CLENBQVRBLE9BQU87O0lBRWhELElBQU1DLEdBQUcsR0FBR0wsaURBQVUsQ0FBQ0Msa0VBQWEsQ0FBQztJQUVyQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFHN0IsSUFBTUMsVUFBVSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkosT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkJGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csUUFBUSxDQUFDRyxjQUFjLENBQUMsQ0FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxRQUFRLENBQUNJLFdBQVcsQ0FBQyxDQUFDO1FBQzdEUCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNHLFFBQVEsQ0FBQ0ssbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0M7SUFFQyxxQkFDRTtrQkFDRSw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUUsV0FBVzs7OEJBQzNCLDhEQUFDQyxJQUFFOzhCQUFFYixPQUFPOzs7Ozt3QkFBTTs4QkFDaEIsOERBQUNjLEdBQUM7b0JBQUNDLE9BQU8sRUFBRSxTQUFDUixDQUFDOytCQUFLRCxVQUFVLENBQUMsRUFBQyxDQUFVLE9BQVJOLE9BQU8sQ0FBRSxDQUFDO3FCQUFBOzhCQUFHQyxPQUFPOzs7Ozt3QkFBSzs7Ozs7O2dCQUN0RDtxQkFDTCxDQUNKO0NBQ0Y7R0FyQnFCRixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0QmxvY2suanM/YmVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLy4uL2NvbnRleHRzL0dsb2JhbENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0QmxvY2soeyBoZWFkaW5nLCBjb250ZW50IH0pIHtcblxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7IFxuXG4gICAgY29uc29sZS5sb2coY3R4WzBdLmhhbmRsZXJzKTtcbiAgICBcblxuICAgIGNvbnN0IGxvZ0N1cnJlbnQgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTsgXG4gICAgICBjdHhbMF0uaGFuZGxlcnMuc2V0SXNNb2RhbE9wZW4oIWN0eFswXS5oYW5kbGVycy5pc01vZGFsT3Blbik7XG4gICAgICBjdHhbMF0uaGFuZGxlcnMuc2V0U2hvd01vZGFsQ29udGVudCh0cnVlKTtcbiAgfSBcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RleHRCbG9jayd9PlxuICAgICAgICA8aDI+e2hlYWRpbmd9PC9oMj5cbiAgICAgICAgICA8cCBvbkNsaWNrPXsoZSkgPT4gbG9nQ3VycmVudChgJHtoZWFkaW5nfWApfT57Y29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKVxuICB9Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiVGV4dEJsb2NrIiwiaGVhZGluZyIsImNvbnRlbnQiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlcnMiLCJsb2dDdXJyZW50IiwiZSIsInNldElzTW9kYWxPcGVuIiwiaXNNb2RhbE9wZW4iLCJzZXRTaG93TW9kYWxDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TextBlock.js\n");

/***/ })

});