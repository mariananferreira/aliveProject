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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cropper */ \"react-cropper\");\n/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ \"./node_modules/cropperjs/dist/cropper.css\");\n/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App() {\n    const defaultSrc = \"https://media.discordapp.net/attachments/1008571235766116413/1113774049739423744/fran_grimaldi_1990_screengrab_of_Model_Harry_Potter_wearing_a_c_4464c326-2e12-42c6-8621-7dd3afb7eaaf.png?width=951&height=634\";\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSrc);\n    const [cropData, setCropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cropper, setCropper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getCropData = ()=>{\n        if (typeof cropper !== \"undefined\") {\n            setCropData(cropper.getCroppedCanvas().toDataURL());\n        }\n    };\n    const onChange = (e)=>{\n        e.preventDefault();\n        let files;\n        if (e.dataTransfer) {\n            files = e.dataTransfer.files;\n        } else if (e.target) {\n            files = e.target.files;\n        }\n        const reader = new FileReader();\n        reader.onload = ()=>{\n            setImage(reader.result);\n        };\n        reader.readAsDataURL(files[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"splitdiv\",\n                id: \"leftdiv\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"leftdivcard\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        \"\\xa0 \\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: getCropData,\n                            className: \" mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium bg-emerald-500 text-white shadow-sm hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto\",\n                            type: \"button\",\n                            id: \"leftbutton\",\n                            children: \"Crop Image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_cropper__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"cropper\",\n                            zoomTo: 0.5,\n                            initialAspectRatio: 1,\n                            src: image,\n                            viewMode: 1,\n                            minCropBoxHeight: 10,\n                            minCropBoxWidth: 10,\n                            background: false,\n                            responsive: true,\n                            autoCropArea: 1,\n                            checkOrientation: false,\n                            onInitialized: (instance)=>{\n                                setCropper(instance);\n                            },\n                            guides: true\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"splitdiv\",\n                id: \"rightdiv\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"itemdivcard\",\n                    children: [\n                        cropData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            style: {},\n                            src: cropData,\n                            alt: \"cropped\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Cropped image will apear here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/components/App.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSjtBQUNBO0FBRTVCLFNBQVNHLE1BQU07SUFDcEIsTUFBTUMsYUFDSjtJQUVGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQ0c7SUFDbkMsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDLE1BQU1VLGNBQWMsSUFBTTtRQUN4QixJQUFJLE9BQU9GLFlBQVksYUFBYTtZQUNsQ0QsWUFBWUMsUUFBUUcsZ0JBQWdCLEdBQUdDLFNBQVM7UUFDbEQsQ0FBQztJQUNIO0lBQ0EsTUFBTUMsV0FBVyxDQUFDQyxJQUFNO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlDO1FBQ0osSUFBSUYsRUFBRUcsWUFBWSxFQUFFO1lBQ2xCRCxRQUFRRixFQUFFRyxZQUFZLENBQUNELEtBQUs7UUFDOUIsT0FBTyxJQUFJRixFQUFFSSxNQUFNLEVBQUU7WUFDbkJGLFFBQVFGLEVBQUVJLE1BQU0sQ0FBQ0YsS0FBSztRQUN4QixDQUFDO1FBQ0QsTUFBTUcsU0FBUyxJQUFJQztRQUNuQkQsT0FBT0UsTUFBTSxHQUFHLElBQU07WUFDcEJoQixTQUFTYyxPQUFPRyxNQUFNO1FBQ3hCO1FBQ0FILE9BQU9JLGFBQWEsQ0FBQ1AsS0FBSyxDQUFDLEVBQUU7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTtnQkFBV0MsSUFBRzswQkFDM0IsNEVBQUNGO29CQUFJRSxJQUFHOztzQ0FDTiw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9mLFVBQVVBOzs7Ozs7d0JBQVk7c0NBRXpDLDhEQUFDZ0I7NEJBQ0NDLFNBQVNwQjs0QkFDVGUsV0FBVTs0QkFDVkcsTUFBSzs0QkFDTEYsSUFBRztzQ0FDSjs7Ozs7O3NDQUdELDhEQUFDekIsc0RBQU9BOzRCQUNOd0IsV0FBVTs0QkFDVk0sUUFBUTs0QkFDUkMsb0JBQW9COzRCQUNwQkMsS0FBSzdCOzRCQUNMOEIsVUFBVTs0QkFDVkMsa0JBQWtCOzRCQUNsQkMsaUJBQWlCOzRCQUNqQkMsWUFBWSxLQUFLOzRCQUNqQkMsWUFBWSxJQUFJOzRCQUNoQkMsY0FBYzs0QkFDZEMsa0JBQWtCLEtBQUs7NEJBQ3ZCQyxlQUFlLENBQUNDLFdBQWE7Z0NBQzNCakMsV0FBV2lDOzRCQUNiOzRCQUNBQyxRQUFRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlsQiw4REFBQ25CO2dCQUFJQyxXQUFVO2dCQUFXQyxJQUFHOzBCQUMzQiw0RUFBQ0Y7b0JBQUlFLElBQUc7O3dCQUNMcEIseUJBQ0MsOERBQUNzQzs0QkFBSUMsT0FBTyxDQUFHOzRCQUFHWixLQUFLM0I7NEJBQVV3QyxLQUFJOzs7OztpREFFckMsOERBQUNDO3NDQUFHOzs7OztnQ0FDTDt3QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kdWktc2FsaWVudC8uL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/MWE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDcm9wcGVyIGZyb20gJ3JlYWN0LWNyb3BwZXInXG5pbXBvcnQgJ2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBkZWZhdWx0U3JjID1cbiAgICAnaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy8xMDA4NTcxMjM1NzY2MTE2NDEzLzExMTM3NzQwNDk3Mzk0MjM3NDQvZnJhbl9ncmltYWxkaV8xOTkwX3NjcmVlbmdyYWJfb2ZfTW9kZWxfSGFycnlfUG90dGVyX3dlYXJpbmdfYV9jXzQ0NjRjMzI2LTJlMTItNDJjNi04NjIxLTdkZDNhZmI3ZWFhZi5wbmc/d2lkdGg9OTUxJmhlaWdodD02MzQnXG5cbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3JjKVxuICBjb25zdCBbY3JvcERhdGEsIHNldENyb3BEYXRhXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3JvcHBlciwgc2V0Q3JvcHBlcl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGdldENyb3BEYXRhID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3JvcHBlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldENyb3BEYXRhKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpLnRvRGF0YVVSTCgpKVxuICAgIH1cbiAgfVxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGZpbGVzXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XG4gICAgICBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCkge1xuICAgICAgZmlsZXMgPSBlLnRhcmdldC5maWxlc1xuICAgIH1cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldEltYWdlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdGRpdlwiIGlkPVwibGVmdGRpdlwiPlxuICAgICAgICA8ZGl2IGlkPVwibGVmdGRpdmNhcmRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2dldENyb3BEYXRhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG10LTIgaW5saW5lLWZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNiBweS0zIHRleHQtYmFzZSBmb250LW1lZGl1bSBiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1lbWVyYWxkLTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yIHNtOnctYXV0b1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGlkPVwibGVmdGJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JvcCBJbWFnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxDcm9wcGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjcm9wcGVyXCJcbiAgICAgICAgICAgIHpvb21Ubz17MC41fVxuICAgICAgICAgICAgaW5pdGlhbEFzcGVjdFJhdGlvPXsxfVxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIHZpZXdNb2RlPXsxfVxuICAgICAgICAgICAgbWluQ3JvcEJveEhlaWdodD17MTB9XG4gICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGg9ezEwfVxuICAgICAgICAgICAgYmFja2dyb3VuZD17ZmFsc2V9XG4gICAgICAgICAgICByZXNwb25zaXZlPXt0cnVlfVxuICAgICAgICAgICAgYXV0b0Nyb3BBcmVhPXsxfVxuICAgICAgICAgICAgY2hlY2tPcmllbnRhdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICBvbkluaXRpYWxpemVkPXsoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgc2V0Q3JvcHBlcihpbnN0YW5jZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBndWlkZXM9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXRkaXZcIiBpZD1cInJpZ2h0ZGl2XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJpdGVtZGl2Y2FyZFwiPlxuICAgICAgICAgIHtjcm9wRGF0YSA/IChcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgIH19IHNyYz17Y3JvcERhdGF9IGFsdD1cImNyb3BwZWRcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDE+Q3JvcHBlZCBpbWFnZSB3aWxsIGFwZWFyIGhlcmU8L2gxPlxuICAgICAgICAgICl9eycgJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDcm9wcGVyIiwiQXBwIiwiZGVmYXVsdFNyYyIsImltYWdlIiwic2V0SW1hZ2UiLCJjcm9wRGF0YSIsInNldENyb3BEYXRhIiwiY3JvcHBlciIsInNldENyb3BwZXIiLCJnZXRDcm9wRGF0YSIsImdldENyb3BwZWRDYW52YXMiLCJ0b0RhdGFVUkwiLCJvbkNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGVzIiwiZGF0YVRyYW5zZmVyIiwidGFyZ2V0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ6b29tVG8iLCJpbml0aWFsQXNwZWN0UmF0aW8iLCJzcmMiLCJ2aWV3TW9kZSIsIm1pbkNyb3BCb3hIZWlnaHQiLCJtaW5Dcm9wQm94V2lkdGgiLCJiYWNrZ3JvdW5kIiwicmVzcG9uc2l2ZSIsImF1dG9Dcm9wQXJlYSIsImNoZWNrT3JpZW50YXRpb24iLCJvbkluaXRpYWxpemVkIiwiaW5zdGFuY2UiLCJndWlkZXMiLCJpbWciLCJzdHlsZSIsImFsdCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/App */ \"./src/components/App.jsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"bg-slate-100\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {\n                fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/marianaferreira/Documents/GitHub/aliveProject/src/pages/index.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFFVTtBQUd2QixTQUFTRSxPQUFPO0lBQzdCLHFCQUNFO2tCQUlFLDRFQUFDQztZQUFLQyxXQUFVO3NCQUNmLDRFQUFDSCxnREFBR0E7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kdWktc2FsaWVudC8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJ0AvY29tcG9uZW50cy9BcHAnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxIZWFkIGNsYXNzTmFtZT0nYmctc2xhdGUtMjAwJz5cbiAgICAgICAgPHRpdGxlPkFjb21wYW5oYW1lbnRvIE51dHJpY2lvbmFsPC90aXRsZT5cbiAgICAgIDwvSGVhZD4gKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2JnLXNsYXRlLTEwMCc+XG4gICAgICAgPEFwcCAvPiBcblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFwcCIsIkhvbWUiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cropper":
/*!********************************!*\
  !*** external "react-cropper" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cropper");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();