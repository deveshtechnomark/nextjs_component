"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/datatable/page",{

/***/ "(app-client)/./app/datatable/page.tsx":
/*!********************************!*\
  !*** ./app/datatable/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-datatable */ \"(app-client)/../next-datatable/dist/index.js\");\n/* harmony import */ var next_datatable_dist_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-datatable/dist/index.css */ \"(app-client)/../next-datatable/dist/index.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Datatable_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Datatable.module.css */ \"(app-client)/./app/datatable/Datatable.module.css\");\n/* harmony import */ var _Datatable_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Datatable_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [dummyData, setDummyData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleClick = ()=>{\n        setIsClicked(true);\n        dummyDataHandler();\n    };\n    // Fetching data from API\n    const dummyDataHandler = async ()=>{\n        const response = await fetch(\"https://dummyjson.com/products\");\n        const resData = await response.json();\n        setDummyData(resData.products);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dummyDataHandler();\n    }, []);\n    // Dummy Data\n    // const data = [\n    //   { id: 1, name: 'Product 1', price: 10, category: 'Category 1' },\n    //   { id: 2, name: 'Product 2', price: 20, category: 'Category 2' },\n    //   { id: 3, name: 'Product 3', price: 30, category: 'Category 1' },\n    // ];\n    const headers = [\n        \"id\",\n        \"title\",\n        \"price\",\n        \"category\"\n    ];\n    const header = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            display: \"flex\",\n            justifyContent: \"space-between\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_Datatable_module_css__WEBPACK_IMPORTED_MODULE_5___default().refreshBtn), \" \").concat(isClicked ? \"\".concat((_Datatable_module_css__WEBPACK_IMPORTED_MODULE_5___default().clicked)) : \"\"),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faRotate\n                }, void 0, false, {\n                    fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n    const footer = \"In total there are \".concat(dummyData ? dummyData.length : 0, \" products.\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    marginLeft: \"20px\"\n                },\n                children: \"DataTable\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            dummyData.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_datatable__WEBPACK_IMPORTED_MODULE_1__.DataTable, {\n                data: dummyData,\n                headers: headers,\n                header: header,\n                footer: footer\n            }, void 0, false, {\n                fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Bhargav\\\\Projects\\\\Bhargav\\\\CustomLibrary\\\\FinalDemo\\\\theme\\\\app\\\\datatable\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"NXs1KnnbN/7mkmF2UWD5xb5riCY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2RhdGF0YWJsZS9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkM7QUFDSjtBQUNLO0FBQ3FCO0FBQ0o7QUFDbEI7QUFFM0MsTUFBTU0sT0FBTyxJQUFNOztJQUNqQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxNQUFNUyxjQUFjLElBQU07UUFDeEJELGFBQWEsSUFBSTtRQUNqQkU7SUFDRjtJQUVBLHlCQUF5QjtJQUN6QixNQUFNQSxtQkFBbUIsVUFBWTtRQUNuQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTUMsVUFBVSxNQUFNRixTQUFTRyxJQUFJO1FBQ25DUixhQUFhTyxRQUFRRSxRQUFRO0lBQy9CO0lBRUFoQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXO0lBQ0YsR0FBRyxFQUFFO0lBRUwsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHFFQUFxRTtJQUNyRSxLQUFLO0lBRUwsTUFBTU0sVUFBVTtRQUFDO1FBQU07UUFBUztRQUFTO0tBQVc7SUFFcEQsTUFBTUMsdUJBQ0osOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLGdCQUFnQjtRQUNsQjs7MEJBRUEsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNDQyxXQUFXLEdBQXdCbEIsT0FBckJKLHlFQUFpQixFQUFDLEtBQXdDLE9BQXJDSSxZQUFZLEdBQWtCLE9BQWZKLHNFQUFjLElBQUssRUFBRTtnQkFDdkV5QixTQUFTbkI7MEJBRVQsNEVBQUNSLDJFQUFlQTtvQkFBQzRCLE1BQU0zQix1RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3JDLE1BQU00QixTQUFTLHNCQUVkLE9BREN6QixZQUFZQSxVQUFVMEIsTUFBTSxHQUFHLENBQUMsRUFDakM7SUFFRCxxQkFDRSw4REFBQ2I7OzBCQUNDLDhEQUFDYztnQkFBR2IsT0FBTztvQkFBRWMsWUFBWTtnQkFBTzswQkFBRzs7Ozs7O1lBQ2xDNUIsVUFBVTBCLE1BQU0sR0FBRyxtQkFDbEIsOERBQUNqQyxxREFBU0E7Z0JBQ1JvQyxNQUFNN0I7Z0JBQ05XLFNBQVNBO2dCQUNUQyxRQUFRQTtnQkFDUmEsUUFBUUE7Ozs7Ozs7Ozs7OztBQUtsQjtHQWhFTTFCO0FBa0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXRhdGFibGUvcGFnZS50c3g/YWMwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRGF0YVRhYmxlIH0gZnJvbSBcIm5leHQtZGF0YXRhYmxlXCI7XG5pbXBvcnQgXCJuZXh0LWRhdGF0YWJsZS9kaXN0L2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFSb3RhdGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0YXRhYmxlLm1vZHVsZS5jc3MnXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtkdW1teURhdGEsIHNldER1bW15RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNDbGlja2VkKHRydWUpO1xuICAgIGR1bW15RGF0YUhhbmRsZXIoKTtcbiAgfTtcblxuICAvLyBGZXRjaGluZyBkYXRhIGZyb20gQVBJXG4gIGNvbnN0IGR1bW15RGF0YUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0c1wiKTtcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldER1bW15RGF0YShyZXNEYXRhLnByb2R1Y3RzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGR1bW15RGF0YUhhbmRsZXIoKTtcbiAgfSwgW10pO1xuXG4gIC8vIER1bW15IERhdGFcbiAgLy8gY29uc3QgZGF0YSA9IFtcbiAgLy8gICB7IGlkOiAxLCBuYW1lOiAnUHJvZHVjdCAxJywgcHJpY2U6IDEwLCBjYXRlZ29yeTogJ0NhdGVnb3J5IDEnIH0sXG4gIC8vICAgeyBpZDogMiwgbmFtZTogJ1Byb2R1Y3QgMicsIHByaWNlOiAyMCwgY2F0ZWdvcnk6ICdDYXRlZ29yeSAyJyB9LFxuICAvLyAgIHsgaWQ6IDMsIG5hbWU6ICdQcm9kdWN0IDMnLCBwcmljZTogMzAsIGNhdGVnb3J5OiAnQ2F0ZWdvcnkgMScgfSxcbiAgLy8gXTtcblxuICBjb25zdCBoZWFkZXJzID0gW1wiaWRcIiwgXCJ0aXRsZVwiLCBcInByaWNlXCIsIFwiY2F0ZWdvcnlcIl07XG5cbiAgY29uc3QgaGVhZGVyID0gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVmcmVzaEJ0bn0gJHtpc0NsaWNrZWQgPyBgJHtzdHlsZXMuY2xpY2tlZH1gIDogXCJcIn1gfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVJvdGF0ZX0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnN0IGZvb3RlciA9IGBJbiB0b3RhbCB0aGVyZSBhcmUgJHtcbiAgICBkdW1teURhdGEgPyBkdW1teURhdGEubGVuZ3RoIDogMFxuICB9IHByb2R1Y3RzLmA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiIH19PkRhdGFUYWJsZTwvaDE+XG4gICAgICB7ZHVtbXlEYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgZGF0YT17ZHVtbXlEYXRhfVxuICAgICAgICAgIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XG4gICAgICAgICAgZm9vdGVyPXtmb290ZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJEYXRhVGFibGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhUm90YXRlIiwic3R5bGVzIiwicGFnZSIsImR1bW15RGF0YSIsInNldER1bW15RGF0YSIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiZHVtbXlEYXRhSGFuZGxlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNEYXRhIiwianNvbiIsInByb2R1Y3RzIiwiaGVhZGVycyIsImhlYWRlciIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJoMiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInJlZnJlc2hCdG4iLCJjbGlja2VkIiwib25DbGljayIsImljb24iLCJmb290ZXIiLCJsZW5ndGgiLCJoMSIsIm1hcmdpbkxlZnQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/datatable/page.tsx\n"));

/***/ })

});