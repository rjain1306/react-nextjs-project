"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countries/[code]",{

/***/ "./src/pages/countries/[code].tsx":
/*!****************************************!*\
  !*** ./src/pages/countries/[code].tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountryDetailPage\": function() { return /* binding */ CountryDetailPage; },\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"./node_modules/next-intl/dist/next-intl.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layout */ \"./src/modules/layout/fe/index.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nvar CountryDetailPage = function(param) {\n    var country = param.country;\n    var ref;\n    _s();\n    var t = (0,next_intl__WEBPACK_IMPORTED_MODULE_3__.useTranslations)(\"Country\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        title: t(\"title\") + \" \" + country.name,\n        children: [\n            \"Code: \",\n            country.code,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/ubuntu/Documents/company/assignments/react-nextjs-project/src/pages/countries/[code].tsx\",\n                lineNumber: 20,\n                columnNumber: 27\n            }, _this),\n            \"Languages: \",\n            (ref = country.languages) === null || ref === void 0 ? void 0 : ref.map(function(l, key) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        l.name,\n                        \", \"\n                    ]\n                }, key, true, {\n                    fileName: \"/home/ubuntu/Documents/company/assignments/react-nextjs-project/src/pages/countries/[code].tsx\",\n                    lineNumber: 21,\n                    columnNumber: 55\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ubuntu/Documents/company/assignments/react-nextjs-project/src/pages/countries/[code].tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(CountryDetailPage, \"h6+q2O3NJKPY5uL0BIJGLIanww8=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_3__.useTranslations\n    ];\n});\n_c = CountryDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryDetailPage);\nvar _c;\n$RefreshReg$(_c, \"CountryDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY291bnRyaWVzL1tjb2RlXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ3lDO0FBQ2hCO0FBQ0s7O0FBV3ZCLElBQU1HLGlCQUFpQixHQUFHLGdCQUEyQjtRQUF6QkMsT0FBTyxTQUFQQSxPQUFPO1FBTXhCQSxHQUFpQjs7SUFMakMsSUFBTUMsQ0FBQyxHQUFHTCwwREFBZSxDQUFDLFNBQVMsQ0FBQztJQUVwQyxxQkFDRSw4REFBQ0UsMkNBQU07UUFBQ0ksS0FBSyxFQUFFRCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHRCxPQUFPLENBQUNHLElBQUk7O1lBQUUsUUFDeEM7WUFBQ0gsT0FBTyxDQUFDSSxJQUFJOzBCQUFDLDhEQUFDQyxJQUFFOzs7O3FCQUFFO1lBQUEsYUFDZDtZQUFDTCxDQUFBQSxHQUFpQixHQUFqQkEsT0FBTyxDQUFDTSxTQUFTLGNBQWpCTixHQUFpQixXQUFLLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsR0FBaUIsQ0FBRU8sR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBRUMsR0FBRztxQ0FBTSw4REFBQ0MsTUFBSTs7d0JBQVlGLENBQUMsQ0FBQ0wsSUFBSTt3QkFBQyxJQUFFOzttQkFBZk0sR0FBRzs7Ozt5QkFBbUI7YUFBQyxDQUFDOzs7Ozs7YUFDNUUsQ0FDVjtBQUNILENBQUM7R0FUWVYsaUJBQWlCOztRQUNsQkgsc0RBQWU7OztBQURkRyxLQUFBQSxpQkFBaUI7QUFpQzlCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvdW50cmllcy9bY29kZV0udHN4P2I2MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnXG5pbXBvcnQge3VzZVRyYW5zbGF0aW9uc30gZnJvbSAnbmV4dC1pbnRsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMYXlvdXR9IGZyb20gJ0BsYXlvdXQnXG5pbXBvcnQge3NsdWdBc1N0cmluZ1VuZGVmaW5lZH0gZnJvbSAnQHV0aWxzJ1xuaW1wb3J0IHtJQ291bnRyeX0gZnJvbSAnLi4vLi4vbW9kdWxlcy90YXNrc0NvdW50cmllcy9zaGFyZWRJbnRlcmZhY2VzLzEtdGFrcy1pbnRlcmZhY2UnXG5pbXBvcnQge2dldFN0YXRpY1BhdGhzRm9yQ291bnRyaWVzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Rhc2tzQ291bnRyaWVzL2ZlLzFwcmVzZW50YXRpb24vNi1ib251cy10YXNrLW5leHRqcy1zc3Itc3NnJ1xuaW1wb3J0IHtjb3VudHJ5RGF0YUZyb21BcGl9IGZyb20gJy4uLy4uL21vZHVsZXMvdGFza3NDb3VudHJpZXMvZmUvM2RhdGFBY2Nlc3MvY291bnRyeURhdGEnXG5cblxuaW50ZXJmYWNlIElQYWdlUHJvcHMge1xuICBjb3VudHJ5OiBJQ291bnRyeVxufVxuXG5leHBvcnQgY29uc3QgQ291bnRyeURldGFpbFBhZ2UgPSAoe2NvdW50cnl9OiBJUGFnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoJ0NvdW50cnknKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17dCgndGl0bGUnKSArICcgJyArIGNvdW50cnkubmFtZX0+XG4gICAgICBDb2RlOiB7Y291bnRyeS5jb2RlfTxici8+XG4gICAgICBMYW5ndWFnZXM6IHtjb3VudHJ5Lmxhbmd1YWdlcz8ubWFwKChsLCBrZXkpID0+ICg8c3BhbiBrZXk9e2tleX0+e2wubmFtZX0sIDwvc3Bhbj4pKX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGF3YWl0IGdldFN0YXRpY1BhdGhzRm9yQ291bnRyaWVzKCksXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtwYXJhbXMsIGxvY2FsZX0pID0+IHtcbiAgY29uc3QgY29kZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gc2x1Z0FzU3RyaW5nVW5kZWZpbmVkKHBhcmFtcz8uY29kZSlcblxuICBjb25zdCBjb3VudHJ5ID0gYXdhaXQgY291bnRyeURhdGFGcm9tQXBpKGNvZGUpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY291bnRyeTogY291bnRyeVswXSxcbiAgICAgIG1lc3NhZ2VzOiByZXF1aXJlKGBsb2NhbGl6ZS8ke2xvY2FsZX0uanNvbmApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50cnlEZXRhaWxQYWdlXG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb25zIiwiUmVhY3QiLCJMYXlvdXQiLCJDb3VudHJ5RGV0YWlsUGFnZSIsImNvdW50cnkiLCJ0IiwidGl0bGUiLCJuYW1lIiwiY29kZSIsImJyIiwibGFuZ3VhZ2VzIiwibWFwIiwibCIsImtleSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/countries/[code].tsx\n"));

/***/ })

});