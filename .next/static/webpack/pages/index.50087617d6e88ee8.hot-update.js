"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clsx\": function() { return /* binding */ clsx; }\n/* harmony export */ });\nfunction r(e){var t,f,n=\"\";if(\"string\"==typeof e||\"number\"==typeof e)n+=e;else if(\"object\"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=\" \"),n+=f);else for(t in e)e[t]&&(n&&(n+=\" \"),n+=t);return n}function clsx(){for(var e,t,f=0,n=\"\";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=\" \"),n+=t);return n}/* harmony default export */ __webpack_exports__[\"default\"] = (clsx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsY0FBYyxhQUFhLCtDQUErQyx1REFBdUQsV0FBVywwQ0FBMEMseUNBQXlDLFNBQWdCLGdCQUFnQixxQkFBcUIsbUJBQW1CLGtEQUFrRCxTQUFTLCtEQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanM/NzdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/clsx/dist/clsx.m.js\n"));

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cropper */ \"./node_modules/react-cropper/dist/react-cropper.es.js\");\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ \"./node_modules/cropperjs/dist/cropper.css\");\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    const defaultSrc = \"https://media.discordapp.net/attachments/1008571235766116413/1113774049739423744/fran_grimaldi_1990_screengrab_of_Model_Harry_Potter_wearing_a_c_4464c326-2e12-42c6-8621-7dd3afb7eaaf.png?width=951&height=634\";\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSrc);\n    const [cropData, setCropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cropper, setCropper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getCropData = ()=>{\n        if (typeof cropper !== \"undefined\") {\n            setCropData(cropper.getCroppedCanvas().toDataURL());\n        }\n    };\n    const onChange = (e)=>{\n        e.preventDefault();\n        let files;\n        if (e.dataTransfer) {\n            files = e.dataTransfer.files;\n        } else if (e.target) {\n            files = e.target.files;\n        }\n        const reader = new FileReader();\n        reader.onload = ()=>{\n            setImage(reader.result);\n        };\n        reader.readAsDataURL(files[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"splitdiv\",\n                    id: \"leftdiv\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"leftdivcard\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            \"\\xa0 \\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: getCropData,\n                                className: \"my-2 mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto\",\n                                type: \"button\",\n                                id: \"leftbutton\",\n                                children: \"Crop Image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cropper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"cropper\",\n                                zoomTo: 0.5,\n                                initialAspectRatio: 1,\n                                src: image,\n                                viewMode: 1,\n                                minCropBoxHeight: 10,\n                                minCropBoxWidth: 10,\n                                background: false,\n                                responsive: true,\n                                autoCropArea: 1,\n                                checkOrientation: false,\n                                onInitialized: (instance)=>{\n                                    setCropper(instance);\n                                },\n                                guides: true\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"splitdiv\",\n                    id: \"rightdiv\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"itemdivcard\",\n                        children: [\n                            cropData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"-m-2 rounded-xl bg-emerald-500 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        style: {\n                                            height: \"50%\"\n                                        },\n                                        src: cropData,\n                                        alt: \"cropped\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Cropped image will apear here\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"M5K9Ti90O4Do1UTTUtcjjdbg47c=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0o7QUFDQTtBQUNlO0FBRzNDLFNBQVNJLE1BQU07O0lBRXRCLE1BQU1DLGFBQ0Y7SUFFRixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUNJO0lBQ25DLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUUzQyxNQUFNVyxjQUFjLElBQU07UUFDeEIsSUFBSSxPQUFPRixZQUFZLGFBQWE7WUFDbENELFlBQVlDLFFBQVFHLGdCQUFnQixHQUFHQyxTQUFTO1FBQ2xELENBQUM7SUFDSDtJQUNBLE1BQU1DLFdBQVcsQ0FBQ0MsSUFBTTtRQUN0QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJQztRQUNKLElBQUlGLEVBQUVHLFlBQVksRUFBRTtZQUNsQkQsUUFBUUYsRUFBRUcsWUFBWSxDQUFDRCxLQUFLO1FBQzlCLE9BQU8sSUFBSUYsRUFBRUksTUFBTSxFQUFFO1lBQ25CRixRQUFRRixFQUFFSSxNQUFNLENBQUNGLEtBQUs7UUFDeEIsQ0FBQztRQUNELE1BQU1HLFNBQVMsSUFBSUM7UUFDbkJELE9BQU9FLE1BQU0sR0FBRyxJQUFNO1lBQ3BCaEIsU0FBU2MsT0FBT0csTUFBTTtRQUN4QjtRQUNBSCxPQUFPSSxhQUFhLENBQUNQLEtBQUssQ0FBQyxFQUFFO0lBQy9CO0lBRUEscUJBQ0UsOERBQUNRO2tCQUNPLDRFQUFDdkIsNERBQVNBOzs4QkFFaEIsOERBQUN1QjtvQkFBSUMsV0FBVTtvQkFBV0MsSUFBRzs4QkFDM0IsNEVBQUNGO3dCQUFJRSxJQUFHOzswQ0FDTiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9mLFVBQVVBOzs7Ozs7NEJBQVk7MENBRXpDLDhEQUFDZ0I7Z0NBQ0NDLFNBQVNwQjtnQ0FDVGUsV0FBVTtnQ0FDVkcsTUFBSztnQ0FDTEYsSUFBRzswQ0FDSjs7Ozs7OzBDQUdELDhEQUFDMUIscURBQU9BO2dDQUNOeUIsV0FBVTtnQ0FDVk0sUUFBUTtnQ0FDUkMsb0JBQW9CO2dDQUNwQkMsS0FBSzdCO2dDQUNMOEIsVUFBVTtnQ0FDVkMsa0JBQWtCO2dDQUNsQkMsaUJBQWlCO2dDQUNqQkMsWUFBWSxLQUFLO2dDQUNqQkMsWUFBWSxJQUFJO2dDQUNoQkMsY0FBYztnQ0FDZEMsa0JBQWtCLEtBQUs7Z0NBQ3ZCQyxlQUFlLENBQUNDLFdBQWE7b0NBQzNCakMsV0FBV2lDO2dDQUNiO2dDQUNBQyxRQUFRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlsQiw4REFBQ25CO29CQUFJQyxXQUFVO29CQUFXQyxJQUFHOzhCQUMzQiw0RUFBQ0Y7d0JBQUlFLElBQUc7OzRCQUNMcEIseUJBQ0MsOERBQUNrQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNtQjt3Q0FBSUMsT0FBTzs0Q0FBRUMsUUFBUTt3Q0FBTTt3Q0FBR2IsS0FBSzNCO3dDQUFVeUMsS0FBSTs7Ozs7O29DQUFhOzs7Ozs7cURBR2pFLDhEQUFDQzswQ0FBRzs7Ozs7b0NBQ0w7NEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2IsQ0FBQztHQS9FZTlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/MWE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDcm9wcGVyIGZyb20gJ3JlYWN0LWNyb3BwZXInXG5pbXBvcnQgJ2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcblxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuXG5jb25zdCBkZWZhdWx0U3JjID1cbiAgICAnaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy8xMDA4NTcxMjM1NzY2MTE2NDEzLzExMTM3NzQwNDk3Mzk0MjM3NDQvZnJhbl9ncmltYWxkaV8xOTkwX3NjcmVlbmdyYWJfb2ZfTW9kZWxfSGFycnlfUG90dGVyX3dlYXJpbmdfYV9jXzQ0NjRjMzI2LTJlMTItNDJjNi04NjIxLTdkZDNhZmI3ZWFhZi5wbmc/d2lkdGg9OTUxJmhlaWdodD02MzQnXG5cbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3JjKVxuICBjb25zdCBbY3JvcERhdGEsIHNldENyb3BEYXRhXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3JvcHBlciwgc2V0Q3JvcHBlcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGdldENyb3BEYXRhID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3JvcHBlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldENyb3BEYXRhKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpLnRvRGF0YVVSTCgpKVxuICAgIH1cbiAgfVxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGZpbGVzXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCkge1xuICAgICAgZmlsZXMgPSBlLnRhcmdldC5maWxlc1xuICAgIH1cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldEltYWdlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdGRpdlwiIGlkPVwibGVmdGRpdlwiPlxuICAgICAgICA8ZGl2IGlkPVwibGVmdGRpdmNhcmRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2dldENyb3BEYXRhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMlx0bXQtMiBpbmxpbmUtZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1lbWVyYWxkLTUwMCBweC02IHB5LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWVtZXJhbGQtMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgc206dy1hdXRvXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaWQ9XCJsZWZ0YnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcm9wIEltYWdlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPENyb3BwZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyb3BwZXJcIlxuICAgICAgICAgICAgem9vbVRvPXswLjV9XG4gICAgICAgICAgICBpbml0aWFsQXNwZWN0UmF0aW89ezF9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgdmlld01vZGU9ezF9XG4gICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0PXsxMH1cbiAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aD17MTB9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kPXtmYWxzZX1cbiAgICAgICAgICAgIHJlc3BvbnNpdmU9e3RydWV9XG4gICAgICAgICAgICBhdXRvQ3JvcEFyZWE9ezF9XG4gICAgICAgICAgICBjaGVja09yaWVudGF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9eyhpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRDcm9wcGVyKGluc3RhbmNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGd1aWRlcz17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdGRpdlwiIGlkPVwicmlnaHRkaXZcIj5cbiAgICAgICAgPGRpdiBpZD1cIml0ZW1kaXZjYXJkXCI+XG4gICAgICAgICAge2Nyb3BEYXRhID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbS0yIHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAgcC0yIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS05MDAvMTAgbGc6LW0tNCBsZzpyb3VuZGVkLTJ4bCBsZzpwLTRcIj5cbiAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MCUnIH19IHNyYz17Y3JvcERhdGF9IGFsdD1cImNyb3BwZWRcIiAvPnsnICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGgxPkNyb3BwZWQgaW1hZ2Ugd2lsbCBhcGVhciBoZXJlPC9oMT5cbiAgICAgICAgICApfXsnICd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyb3BwZXIiLCJDb250YWluZXIiLCJBcHAiLCJkZWZhdWx0U3JjIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImNyb3BEYXRhIiwic2V0Q3JvcERhdGEiLCJjcm9wcGVyIiwic2V0Q3JvcHBlciIsImdldENyb3BEYXRhIiwiZ2V0Q3JvcHBlZENhbnZhcyIsInRvRGF0YVVSTCIsIm9uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJ0YXJnZXQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInpvb21UbyIsImluaXRpYWxBc3BlY3RSYXRpbyIsInNyYyIsInZpZXdNb2RlIiwibWluQ3JvcEJveEhlaWdodCIsIm1pbkNyb3BCb3hXaWR0aCIsImJhY2tncm91bmQiLCJyZXNwb25zaXZlIiwiYXV0b0Nyb3BBcmVhIiwiY2hlY2tPcmllbnRhdGlvbiIsIm9uSW5pdGlhbGl6ZWQiLCJpbnN0YW5jZSIsImd1aWRlcyIsImltZyIsInN0eWxlIiwiaGVpZ2h0IiwiYWx0IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n"));

/***/ }),

/***/ "./src/components/Container.jsx":
/*!**************************************!*\
  !*** ./src/components/Container.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\nfunction Container(param) {\n    let { className , ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\", className),\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/Container.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVCO0FBRWhCLFNBQVNDLFVBQVUsS0FBdUIsRUFBRTtRQUF6QixFQUFFQyxVQUFTLEVBQUUsR0FBR0MsT0FBTyxHQUF2QjtJQUN4QixxQkFDRSw4REFBQ0M7UUFDQ0YsV0FBV0YsZ0RBQUlBLENBQUMsMENBQTBDRTtRQUN6RCxHQUFHQyxLQUFLOzs7Ozs7QUFHZixDQUFDO0tBUGVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci5qc3g/N2E1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KCdteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOCcsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufSJdLCJuYW1lcyI6WyJjbHN4IiwiQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Container.jsx\n"));

/***/ })

});