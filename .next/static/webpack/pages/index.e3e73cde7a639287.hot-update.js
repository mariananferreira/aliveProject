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

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cropper */ \"./node_modules/react-cropper/dist/react-cropper.es.js\");\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ \"./node_modules/cropperjs/dist/cropper.css\");\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App() {\n    _s();\n    const defaultSrc = \"https://media.discordapp.net/attachments/1008571235766116413/1113774049739423744/fran_grimaldi_1990_screengrab_of_Model_Harry_Potter_wearing_a_c_4464c326-2e12-42c6-8621-7dd3afb7eaaf.png?width=951&height=634\";\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSrc);\n    const [cropData, setCropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cropper, setCropper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getCropData = ()=>{\n        if (typeof cropper !== \"undefined\") {\n            setCropData(cropper.getCroppedCanvas().toDataURL());\n        }\n    };\n    const handleDownloadImage = async ()=>{\n        const element = document.getElementById(\"canvasShot\"), canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(element), data = canvas.toDataURL(\"image/jpg\"), link = document.createElement(\"a\");\n        link.href = data;\n        link.download = \"downloaded-image.jpg\";\n        document.body.appendChild(link);\n        link.click();\n        document.body.removeChild(link);\n    };\n    const onChange = (e)=>{\n        e.preventDefault();\n        let files;\n        if (e.dataTransfer) {\n            files = e.dataTransfer.files;\n        } else if (e.target) {\n            files = e.target.files;\n        }\n        const reader = new FileReader();\n        reader.onload = ()=>{\n            setImage(reader.result);\n        };\n        reader.readAsDataURL(files[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"App\",\n        \"aria-label\": \"\",\n        className: \"lg:pb-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"splitdiv\",\n                    id: \"leftdiv\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"leftdivcard\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            \"\\xa0 \\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: getCropData,\n                                className: \"my-2 mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto\",\n                                type: \"button\",\n                                id: \"leftbutton\",\n                                children: \"Crop Image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cropper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"cropper\",\n                                zoomTo: 0.5,\n                                initialAspectRatio: 1,\n                                src: image,\n                                viewMode: 1,\n                                minCropBoxHeight: 10,\n                                minCropBoxWidth: 10,\n                                background: false,\n                                responsive: true,\n                                autoCropArea: 1,\n                                checkOrientation: false,\n                                onInitialized: (instance)=>{\n                                    setCropper(instance);\n                                },\n                                guides: true\n                            }, void 0, false, {\n                                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"splitdiv\",\n                    id: \"rightdiv\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"itemdivcard\",\n                            children: [\n                                cropData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"canvasShot\",\n                                    className: \"-m-2 rounded-xl bg-emerald-500 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            style: {\n                                                height: \"50%\"\n                                            },\n                                            src: cropData,\n                                            alt: \"cropped\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Cropped image will apear here\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleDownloadImage,\n                            children: \"Capture Div\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"M5K9Ti90O4Do1UTTUtcjjdbg47c=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhELENBQUM7R0E3RmVYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/MWE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENyb3BwZXIgZnJvbSAncmVhY3QtY3JvcHBlcidcbmltcG9ydCAnY3JvcHBlcmpzL2Rpc3QvY3JvcHBlci5jc3MnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkZWZhdWx0U3JjID1cbiAgICAnaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy8xMDA4NTcxMjM1NzY2MTE2NDEzLzExMTM3NzQwNDk3Mzk0MjM3NDQvZnJhbl9ncmltYWxkaV8xOTkwX3NjcmVlbmdyYWJfb2ZfTW9kZWxfSGFycnlfUG90dGVyX3dlYXJpbmdfYV9jXzQ0NjRjMzI2LTJlMTItNDJjNi04NjIxLTdkZDNhZmI3ZWFhZi5wbmc/d2lkdGg9OTUxJmhlaWdodD02MzQnXG5cbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3JjKVxuICBjb25zdCBbY3JvcERhdGEsIHNldENyb3BEYXRhXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3JvcHBlciwgc2V0Q3JvcHBlcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGdldENyb3BEYXRhID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3JvcHBlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldENyb3BEYXRhKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpLnRvRGF0YVVSTCgpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkSW1hZ2UgPSBhc3luYyAoKSA9PiB7IFxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzU2hvdCcpLFxuICAgIGNhbnZhcyA9ICBhd2FpdCBodG1sMmNhbnZhcyhlbGVtZW50KSxcbiAgICBkYXRhID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBnJyksXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiBcbiAgICBsaW5rLmhyZWYgPSBkYXRhO1xuICAgIGxpbmsuZG93bmxvYWQgPSAnZG93bmxvYWRlZC1pbWFnZS5qcGcnO1xuIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBmaWxlc1xuICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xuICAgICAgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQpIHtcbiAgICAgIGZpbGVzID0gZS50YXJnZXQuZmlsZXNcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRJbWFnZShyZWFkZXIucmVzdWx0KVxuICAgIH1cbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJBcHBcIiBhcmlhLWxhYmVsPVwiXCIgY2xhc3NOYW1lPVwibGc6cGItMjRcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXRkaXZcIiBpZD1cImxlZnRkaXZcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdGRpdmNhcmRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Z2V0Q3JvcERhdGF9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTJcdG10LTIgaW5saW5lLWZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctZW1lcmFsZC01MDAgcHgtNiBweS0zIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1lbWVyYWxkLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBpZD1cImxlZnRidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDcm9wIEltYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxDcm9wcGVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyb3BwZXJcIlxuICAgICAgICAgICAgICB6b29tVG89ezAuNX1cbiAgICAgICAgICAgICAgaW5pdGlhbEFzcGVjdFJhdGlvPXsxfVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICB2aWV3TW9kZT17MX1cbiAgICAgICAgICAgICAgbWluQ3JvcEJveEhlaWdodD17MTB9XG4gICAgICAgICAgICAgIG1pbkNyb3BCb3hXaWR0aD17MTB9XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ9e2ZhbHNlfVxuICAgICAgICAgICAgICByZXNwb25zaXZlPXt0cnVlfVxuICAgICAgICAgICAgICBhdXRvQ3JvcEFyZWE9ezF9XG4gICAgICAgICAgICAgIGNoZWNrT3JpZW50YXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkluaXRpYWxpemVkPXsoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDcm9wcGVyKGluc3RhbmNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBndWlkZXM9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdGRpdlwiIGlkPVwicmlnaHRkaXZcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiaXRlbWRpdmNhcmRcIj5cbiAgICAgICAgICAgIHtjcm9wRGF0YSA/IChcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhbnZhc1Nob3RcImNsYXNzTmFtZT1cIi1tLTIgcm91bmRlZC14bCBiZy1lbWVyYWxkLTUwMCBwLTIgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTkwMC8xMCBsZzotbS00IGxnOnJvdW5kZWQtMnhsIGxnOnAtNFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTAlJyB9fSBzcmM9e2Nyb3BEYXRhfSBhbHQ9XCJjcm9wcGVkXCIgLz57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxoMT5Dcm9wcGVkIGltYWdlIHdpbGwgYXBlYXIgaGVyZTwvaDE+XG4gICAgICAgICAgICApfXsnICd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZEltYWdlfT5DYXB0dXJlIERpdjwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNyb3BwZXIiLCJDb250YWluZXIiLCJodG1sMmNhbnZhcyIsIkFwcCIsImRlZmF1bHRTcmMiLCJpbWFnZSIsInNldEltYWdlIiwiY3JvcERhdGEiLCJzZXRDcm9wRGF0YSIsImNyb3BwZXIiLCJzZXRDcm9wcGVyIiwiZ2V0Q3JvcERhdGEiLCJnZXRDcm9wcGVkQ2FudmFzIiwidG9EYXRhVVJMIiwiaGFuZGxlRG93bmxvYWRJbWFnZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiZGF0YSIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsIm9uQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJ0YXJnZXQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInNlY3Rpb24iLCJpZCIsImFyaWEtbGFiZWwiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiem9vbVRvIiwiaW5pdGlhbEFzcGVjdFJhdGlvIiwic3JjIiwidmlld01vZGUiLCJtaW5Dcm9wQm94SGVpZ2h0IiwibWluQ3JvcEJveFdpZHRoIiwiYmFja2dyb3VuZCIsInJlc3BvbnNpdmUiLCJhdXRvQ3JvcEFyZWEiLCJjaGVja09yaWVudGF0aW9uIiwib25Jbml0aWFsaXplZCIsImluc3RhbmNlIiwiZ3VpZGVzIiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJhbHQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n"));

/***/ })

});