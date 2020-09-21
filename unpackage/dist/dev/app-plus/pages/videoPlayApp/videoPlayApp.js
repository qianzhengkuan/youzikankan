"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/main.js?{"page":"pages%2FvideoPlayApp%2FvideoPlayApp"} ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_videoPlayApp_videoPlayApp_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/videoPlayApp/videoPlayApp.nvue?mpType=page */ 4);\n\n        \n        \n        \n        _pages_videoPlayApp_videoPlayApp_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_videoPlayApp_videoPlayApp_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/videoPlayApp/videoPlayApp'\n        _pages_videoPlayApp_videoPlayApp_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_videoPlayApp_videoPlayApp_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTRFO0FBQzVFLFFBQVEseUZBQUc7QUFDWCxRQUFRLHlGQUFHO0FBQ1gsUUFBUSx5RkFBRztBQUNYLGdCQUFnQix5RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy92aWRlb1BsYXlBcHAvdmlkZW9QbGF5QXBwLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3ZpZGVvUGxheUFwcC92aWRlb1BsYXlBcHAnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/main.js?{"type":"appStyle"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/App.vue?vue&type=style&index=0&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!********************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoPlayApp.nvue?vue&type=template&id=55fc67e8&scoped=true&mpType=page */ 5);\n/* harmony import */ var _videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayApp.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 27);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoPlayApp.nvue?vue&type=style&index=0&id=55fc67e8&scoped=true&lang=css&mpType=page */ 37).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoPlayApp.nvue?vue&type=style&index=0&id=55fc67e8&scoped=true&lang=css&mpType=page */ 37).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"55fc67e8\",\n  \"3b25708c\",\n  false,\n  _videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPlayApp/videoPlayApp.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUo7QUFDako7QUFDNEU7QUFDTDtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlHQUF5RjtBQUM3SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUdBQXlGO0FBQ2xKOztBQUVBOztBQUVBO0FBQ3VNO0FBQ3ZNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSwrR0FBTTtBQUNSLEVBQUUsd0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlb1BsYXlBcHAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NWZjNjdlOCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlkZW9QbGF5QXBwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlkZW9QbGF5QXBwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvUGxheUFwcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTVmYzY3ZTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdmlkZW9QbGF5QXBwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NWZjNjdlOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjU1ZmM2N2U4XCIsXG4gIFwiM2IyNTcwOGNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdmlkZW9QbGF5QXBwL3ZpZGVvUGxheUFwcC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=template&id=55fc67e8&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoPlayApp.nvue?vue&type=template&id=55fc67e8&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_template_id_55fc67e8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=template&id=55fc67e8&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: ["page"], style: { height: _vm.height } },
        [
          _c(
            "view",
            {
              staticClass: ["close-top"],
              staticStyle: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
              }
            },
            [
              _c("u-image", {
                staticStyle: {
                  width: "70rpx",
                  height: "65rpx",
                  position: "fixed",
                  left: "50rpx",
                  top: "70rpx",
                  zIndex: "99999"
                },
                attrs: { src: "../../static/images/icon/back.png", mode: "" },
                on: {
                  click: function($event) {
                    _vm.navBack()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              attrs: { vertical: true, current: _vm.index },
              on: {
                change: _vm.changeCurrent,
                animationfinish: _vm.animationFinish
              }
            },
            _vm._l(_vm.videoList, function(item, idx) {
              return _c(
                "swiper-item",
                {
                  key: idx,
                  staticClass: ["swiper-item"],
                  on: {
                    click: function($event) {
                      _vm.clickVideo()
                    }
                  }
                },
                [
                  Math.abs(_vm.index - idx) <= 1
                    ? _c(
                        "div",
                        { staticClass: ["video-box"] },
                        [
                          item.src
                            ? _c(
                                "block",
                                [
                                  Math.abs(_vm.index - idx) <= 1
                                    ? _c("chunlei-video", {
                                        staticClass: ["video"],
                                        attrs: {
                                          src: item.src,
                                          height: _vm.height,
                                          width: _vm.width,
                                          play: item.flag,
                                          gDuration: item.duration,
                                          initialTime: item.initialTime,
                                          objectFit: item.objectFit
                                        },
                                        on: {
                                          pause: _vm.pauseVideo,
                                          playEnd: _vm.playEnd
                                        }
                                      })
                                    : _vm._e(),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-left"] },
                                    [
                                      _c(
                                        "cover-view",
                                        { staticClass: ["left-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            { staticClass: ["left-text"] },
                                            [_vm._v(_vm._s(item.content))]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-right"] },
                                    [
                                      _c("cover-image", {
                                        staticClass: ["img"],
                                        staticStyle: { marginLeft: "7rpx" },
                                        attrs: {
                                          src: item.check
                                            ? "../../static/image/aixinRed.png"
                                            : "../../static/image/aixin.png"
                                        },
                                        on: { click: _vm.tapLove }
                                      }),
                                      _c(
                                        "u-text",
                                        { staticClass: ["right-text"] },
                                        [_vm._v(_vm._s(item.like))]
                                      ),
                                      _c("cover-image", {
                                        staticClass: ["img"],
                                        attrs: {
                                          src:
                                            "../../static/image/fenxiang11.png"
                                        },
                                        on: { click: _vm.tapShare }
                                      }),
                                      _c(
                                        "u-text",
                                        { staticClass: ["right-text"] },
                                        [_vm._v("分享")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoPlayApp.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1pQixDQUFnQix3a0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvUGxheUFwcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb1BsYXlBcHAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 10));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! @/common/api.js */ 12));\nvar _common = _interopRequireDefault(__webpack_require__(/*! @/common/common.js */ 14));\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! ./components/chunlei-video/chunlei-video.nvue */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o) {if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    chunleiVideo: _chunleiVideo.default },\n\n  data: function data() {\n    return {\n      homeApi: _api.default,\n      sysheight: 0,\n      playCount: 1, //剩余多少视频加载视频列表\n      videoList: [],\n      height: '687px',\n      index: 0,\n      width: '',\n      oldIndex: 0,\n      videoId: '', //视频id\n      page: 1 };\n\n  },\n  created: function created() {\n\n    plus.screen.lockOrientation(\"portrait-primary\");\n    //隐藏subnvue\n    uni.getSubNVueById('comment').hide();\n    uni.getSubNVueById('input-box').hide();\n\n    this.sysheight = uni.getSystemInfoSync().windowHeight;\n    this.height = \"\".concat(this.sysheight, \"px\");\n    var width = uni.getSystemInfoSync().windowWidth;\n    this.width = \"\".concat(width, \"px\");\n    // this.videoList.length = 300\n    this.videoList.fill({\n      src: '' });\n\n  },\n  // 接收传处过来的视频id\n  onLoad: function onLoad(option) {\n    // console.log(this.videoList)\n    __f__(\"log\", option, \" at pages/videoPlayApp/videoPlayApp.nvue:96\");\n    this.videoId = option.id;\n    this.page = Number(option.page);\n    // console.log(this.videoId)\n\n  },\n  mounted: function mounted() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var id;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              //设置id 通过id轮到相应位置\n              id = \"http://img.kaiyanapp.com/255365dbfc2622930eb0cdb33e43abf0.jpeg?imageMogr2/quality/60/format/jpg\";_context.next = 3;return (\n                _this.pushVideoList());case 3:\n\n              _this.index = _this.videoList.reduce(function (total, item) {\n                if (id == '' || id == item.id) {\n                  id = '';\n                } else {\n                  total++;\n                }\n                return total;\n              }, 0);\n              if (!_this.index) {\n                _this.$nextTick(function () {\n                  _this.videoPlay(_this.index);\n                });\n              }case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  onHide: function onHide() {var _iterator = _createForOfIteratorHelper(\n    this.videoList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n        item.flag = false;\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  },\n  methods: {\n    // 返回\n    navBack: function navBack() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    animationFinish: function animationFinish(e) {\n\n      this.changeCurrent(e);\n\n    },\n    changeCurrent: function changeCurrent(e) {var _this2 = this;\n      this.index = e.detail.current;\n\n      this.$nextTick(function () {var _iterator2 = _createForOfIteratorHelper(\n\n        _this2.videoList),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;\n            item.flag = false;\n          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}\n        _this2.videoList[_this2.index].flag = true;\n      });\n    },\n    pushVideoList: function pushVideoList() {var _this3 = this;\n      this.homeApi.getVideoList({\n        page: this.page++ }).\n      then(function (res) {\n        // console.log(res)\n        // console.log(res.backlist)\n        var videoGroup = [];var _iterator3 = _createForOfIteratorHelper(\n        res.backlist),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var item = _step3.value;\n            videoGroup.push({\n              src: item.file,\n              content: item.title,\n              flag: false,\n              check: false,\n              like: '1w',\n              comment: '1045',\n              id: item.id });\n\n          }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}\n        var len = _this3.videoList.filter(function (item) {return item.src;}).length;\n\n        for (var i = len; i < len + videoGroup.length; i++) {\n          _this3.$set(_this3.videoList, i, videoGroup[i - len]);\n        }\n\n        var vid = _this3.videoId;\n        var news1 = _this3.videoList.filter(function (obj) {return obj.id == vid;});\n        // console.log(news1)\n        var news2 = _this3.videoList.filter(function (obj) {return obj.id != vid;});\n        // console.log(news2)\n        var arr3 = [].concat(_toConsumableArray(news1), _toConsumableArray(news2));\n        // console.log(arr3)\n        _this3.videoList = arr3;\n\n        arr3.forEach(function (item) {\n          // console.log(vid)\n          // console.log(item.id)\n          if (item.id == vid) {\n            _this3.videoList[_this3.index].flag = true;\n          }\n        });\n\n      });\n    },\n    tapLove: function tapLove() {\n      this.videoList[this.index].check = !this.videoList[this.index].check;\n      this.videoList = _toConsumableArray(this.videoList);\n    },\n    tapShare: function tapShare() {\n      uni.showToast({\n        icon: 'none',\n        // title: `分享索引为${this.index}的视频`,\n        title: '等待程序员小宇宙爆发吧' });\n\n    },\n    videoPlay: function videoPlay(index) {var _this4 = this;\n      var promise = new Promise(function (resolve, reject) {\n        resolve();\n      });\n      promise.then(function (res) {\n        _this4.$set(_this4.videoList[index], 'flag', !_this4.videoList[index].flag);\n      });\n    },\n    pauseVideo: function pauseVideo(val) {\n      if (typeof this.videoList[this.oldIndex].initialTime != 'undefined') this.videoList[this.oldIndex].initialTime =\n      val;\n    },\n    clickVideo: function clickVideo() {\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    } },\n\n  watch: {\n    index: function index(newVal, oldVal) {\n      var len = this.videoList.filter(function (item) {return item.src;}).length;\n      //加载视频\n      if (len - this.index - 1 <= this.playCount) {\n        this.pushVideoList();\n      }\n      this.oldIndex = oldVal;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QbGF5QXBwL3ZpZGVvUGxheUFwcC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFDQTtBQUNBLHlIO0FBQ0E7QUFDQTtBQUNBLHVDQURBLEVBREE7O0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxrQkFGQTtBQUdBLGtCQUhBLEVBR0E7QUFDQSxtQkFKQTtBQUtBLHFCQUxBO0FBTUEsY0FOQTtBQU9BLGVBUEE7QUFRQSxpQkFSQTtBQVNBLGlCQVRBLEVBU0E7QUFDQSxhQVZBOztBQVlBLEdBakJBO0FBa0JBLFNBbEJBLHFCQWtCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBOztBQUdBLEdBakNBO0FBa0NBO0FBQ0EsUUFuQ0Esa0JBbUNBLE1BbkNBLEVBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQTFDQTtBQTJDQSxTQTNDQSxxQkEyQ0E7QUFDQTtBQUNBLGdCQUZBLEdBRUEsaUdBRkE7QUFHQSxxQ0FIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFQQSxFQU9BLENBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQTtBQUdBLGVBakJBO0FBa0JBLEdBN0RBO0FBOERBLFFBOURBLG9CQThEQTtBQUNBLGtCQURBLGFBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxHQWxFQTtBQW1FQTtBQUNBO0FBQ0EsV0FGQSxxQkFFQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FOQTtBQU9BLG1CQVBBLDJCQU9BLENBUEEsRUFPQTs7QUFFQTs7QUFFQSxLQVhBO0FBWUEsaUJBWkEseUJBWUEsQ0FaQSxFQVlBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBRkEsY0FFQTtBQUNBO0FBQ0EsV0FKQTtBQUtBO0FBQ0EsT0FOQTtBQU9BLEtBdEJBO0FBdUJBLGlCQXZCQSwyQkF1QkE7QUFDQTtBQUNBLHlCQURBO0FBRUEsVUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUhBO0FBSUEsb0JBSkEsY0FJQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQ0FGQTtBQUdBLHlCQUhBO0FBSUEsMEJBSkE7QUFLQSx3QkFMQTtBQU1BLDZCQU5BO0FBT0EseUJBUEE7O0FBU0EsV0FkQTtBQWVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7O0FBUUEsT0F4Q0E7QUF5Q0EsS0FqRUE7QUFrRUEsV0FsRUEscUJBa0VBO0FBQ0E7QUFDQTtBQUNBLEtBckVBO0FBc0VBLFlBdEVBLHNCQXNFQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBLDRCQUhBOztBQUtBLEtBNUVBO0FBNkVBLGFBN0VBLHFCQTZFQSxLQTdFQSxFQTZFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXBGQTtBQXFGQSxjQXJGQSxzQkFxRkEsR0FyRkEsRUFxRkE7QUFDQTtBQUNBLFNBREE7QUFFQSxLQXhGQTtBQXlGQSxjQXpGQSx3QkF5RkE7QUFDQTtBQUNBLEtBM0ZBLEVBbkVBOztBQWdLQTtBQUNBLFNBREEsaUJBQ0EsTUFEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUkEsRUFoS0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicGFnZVwiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiID5cblxuXHRcdDx2aWV3IGNsYXNzPVwiY2xvc2UtdG9wXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9pY29uL2JhY2sucG5nXCIgbW9kZT1cIlwiIHN0eWxlPVwid2lkdGg6IDcwcnB4O2hlaWdodDogNjVycHg7cG9zaXRpb246IGZpeGVkO2xlZnQ6IDUwcnB4O3RvcDo3MHJweDt6LWluZGV4OiA5OTk5OTtcIlxuXHRcdFx0IEBjbGljaz1cIm5hdkJhY2soKVwiPjwvaW1hZ2U+XG5cdFx0PC92aWV3PlxuXG5cdFx0PHN3aXBlciBjbGFzcz1cInN3aXBlclwiIDp2ZXJ0aWNhbD1cInRydWVcIiBAY2hhbmdlPVwiY2hhbmdlQ3VycmVudFwiIEBhbmltYXRpb25maW5pc2g9XCJhbmltYXRpb25GaW5pc2hcIiA6Y3VycmVudD1cImluZGV4XCIgPlxuXHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKGl0ZW0sIGlkeCkgaW4gdmlkZW9MaXN0XCIgOmtleT1cImlkeFwiIGNsYXNzPVwic3dpcGVyLWl0ZW1cIiAgQGNsaWNrPVwiY2xpY2tWaWRlbygpXCI+XG5cdFx0XHRcdDwhLS0g6KeG6aKR5riy5p+T5pWw6aKE5Yqg6L295pWw5b2x5ZON5oCn6IO9IC0tPlxuXHRcdFx0XHQ8ZGl2IHYtaWY9XCJNYXRoLmFicyhpbmRleC1pZHgpPD0xXCIgY2xhc3M9XCJ2aWRlby1ib3hcIj5cblx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cIml0ZW0uc3JjXCI+XG5cdFx0XHRcdFx0XHQ8Y2h1bmxlaS12aWRlbyBjbGFzcz1cInZpZGVvXCIgOnNyYz1cIml0ZW0uc3JjXCIgOmhlaWdodD1cImhlaWdodFwiIDp3aWR0aD1cIndpZHRoXCIgOnBsYXk9XCJpdGVtLmZsYWdcIiB2LWlmPVwiTWF0aC5hYnMoaW5kZXgtaWR4KTw9MVwiXG5cdFx0XHRcdFx0XHQgOmdEdXJhdGlvbj1cIml0ZW0uZHVyYXRpb25cIiA6aW5pdGlhbFRpbWU9XCJpdGVtLmluaXRpYWxUaW1lXCIgQHBhdXNlPVwicGF1c2VWaWRlb1wiIDpvYmplY3RGaXQ9XCJpdGVtLm9iamVjdEZpdFwiXG5cdFx0XHRcdFx0XHQgQHBsYXlFbmQ9XCJwbGF5RW5kXCIgPlxuXHRcdFx0XHRcdFx0PC9jaHVubGVpLXZpZGVvPlxuXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImxlZnQtdmlld1wiPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxuXHRcdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwibGVmdC10ZXh0XCI+e3tpdGVtLmNvbnRlbnR9fTwvY292ZXItdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSA6c3JjPVwiaXRlbS5jaGVjaz8nLi4vLi4vc3RhdGljL2ltYWdlL2FpeGluUmVkLnBuZyc6Jy4uLy4uL3N0YXRpYy9pbWFnZS9haXhpbi5wbmcnXCIgY2xhc3M9XCJpbWdcIlxuXHRcdFx0XHRcdFx0XHQgQGNsaWNrLnN0b3A9XCJ0YXBMb3ZlXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDo3cnB4O1wiPjwvY292ZXItaW1hZ2U+XG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5saWtlfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAtLT5cblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3tpdGVtLmxpa2V9fTwvY292ZXItdmlldz5cblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlL2ZlbnhpYW5nMTEucG5nXCIgY2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcFNoYXJlXCI+PC9jb3Zlci1pbWFnZT5cblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+5YiG5LqrPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dFwiPuWIhuS6qzwvY292ZXItdmlldz5cblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cblx0XHRcdFx0XHQ8L2Jsb2NrPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHQ8L3N3aXBlcj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IGFwaUpzIGZyb20gJ0AvY29tbW9uL2FwaS5qcydcblx0aW1wb3J0IGNvbW1vbkpzIGZyb20gJ0AvY29tbW9uL2NvbW1vbi5qcydcblx0aW1wb3J0IGNodW5sZWlWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLm52dWUnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRjaHVubGVpVmlkZW9cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRob21lQXBpOiBhcGlKcyxcblx0XHRcdFx0c3lzaGVpZ2h0OiAwLFxuXHRcdFx0XHRwbGF5Q291bnQ6MSwgLy/liankvZnlpJrlsJHop4bpopHliqDovb3op4bpopHliJfooahcblx0XHRcdFx0dmlkZW9MaXN0OiBbXSxcblx0XHRcdFx0aGVpZ2h0OiAnNjg3cHgnLFxuXHRcdFx0XHRpbmRleDogMCxcblx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHRvbGRJbmRleDogMCxcblx0XHRcdFx0dmlkZW9JZDonJywvL+inhumikWlkXG5cdFx0XHRcdHBhZ2U6MSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHQvLyNpZmRlZiBBUFAtUExVU1xuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKFwicG9ydHJhaXQtcHJpbWFyeVwiKVxuXHRcdFx0Ly/pmpDol49zdWJudnVlXG5cdFx0XHR1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2NvbW1lbnQnKS5oaWRlKClcblx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnaW5wdXQtYm94JykuaGlkZSgpXG5cdFx0XHQvLyNlbmRpZlxuXHRcdFx0dGhpcy5zeXNoZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcblx0XHRcdHRoaXMuaGVpZ2h0ID0gYCR7dGhpcy5zeXNoZWlnaHR9cHhgXG5cdFx0XHRsZXQgd2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aFxuXHRcdFx0dGhpcy53aWR0aCA9IGAke3dpZHRofXB4YFxuXHRcdFx0Ly8gdGhpcy52aWRlb0xpc3QubGVuZ3RoID0gMzAwXG5cdFx0XHR0aGlzLnZpZGVvTGlzdC5maWxsKHtcblx0XHRcdFx0c3JjOiAnJ1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOaOpeaUtuS8oOWkhOi/h+adpeeahOinhumikWlkXG5cdFx0b25Mb2FkKG9wdGlvbikge1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWRlb0xpc3QpXG5cdFx0XHRjb25zb2xlLmxvZyhvcHRpb24pXG5cdFx0XHR0aGlzLnZpZGVvSWQgPSBvcHRpb24uaWRcblx0XHRcdHRoaXMucGFnZSA9TnVtYmVyKG9wdGlvbi5wYWdlKSBcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudmlkZW9JZClcblx0XHRcdFxuXHRcdH0sXG5cdFx0YXN5bmMgbW91bnRlZCgpIHtcblx0XHRcdC8v6K6+572uaWQg6YCa6L+HaWTova7liLDnm7jlupTkvY3nva5cblx0XHRcdGxldCBpZCA9IFwiaHR0cDovL2ltZy5rYWl5YW5hcHAuY29tLzI1NTM2NWRiZmMyNjIyOTMwZWIwY2RiMzNlNDNhYmYwLmpwZWc/aW1hZ2VNb2dyMi9xdWFsaXR5LzYwL2Zvcm1hdC9qcGdcIlxuXHRcdFx0YXdhaXQgdGhpcy5wdXNoVmlkZW9MaXN0KClcblxuXHRcdFx0dGhpcy5pbmRleCA9IHRoaXMudmlkZW9MaXN0LnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHtcblx0XHRcdFx0aWYgKGlkID09ICcnIHx8IGlkID09IGl0ZW0uaWQpIHtcblx0XHRcdFx0XHRpZCA9ICcnXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG90YWwrK1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0b3RhbFxuXHRcdFx0fSwgMClcblx0XHRcdGlmICghdGhpcy5pbmRleCkge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy52aWRlb1BsYXkodGhpcy5pbmRleClcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uSGlkZSgpIHtcblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcblx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOi/lOWbnlxuXHRcdFx0bmF2QmFjaygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XG5cdFx0XHRcdFx0ZGVsdGE6IDFcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRhbmltYXRpb25GaW5pc2goZSkge1xuXHRcdFx0XHQvLyNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHR0aGlzLmNoYW5nZUN1cnJlbnQoZSlcblx0XHRcdFx0Ly8jZW5kaWZcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2VDdXJyZW50KGUpIHtcblx0XHRcdFx0dGhpcy5pbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG5cblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZGVvTGlzdCkge1xuXHRcdFx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9IHRydWVcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRwdXNoVmlkZW9MaXN0KCkge1xuXHRcdFx0XHR0aGlzLmhvbWVBcGkuZ2V0VmlkZW9MaXN0KHtcblx0XHRcdFx0XHRwYWdlOnRoaXMucGFnZSsrXG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzLmJhY2tsaXN0KVxuXHRcdFx0XHRcdGxldCB2aWRlb0dyb3VwID0gW11cblx0XHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIHJlcy5iYWNrbGlzdCkge1xuXHRcdFx0XHRcdFx0dmlkZW9Hcm91cC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0c3JjOiBpdGVtLmZpbGUsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGl0ZW0udGl0bGUsXG5cdFx0XHRcdFx0XHRcdGZsYWc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjaGVjazogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGxpa2U6ICcxdycsXG5cdFx0XHRcdFx0XHRcdGNvbW1lbnQ6ICcxMDQ1Jyxcblx0XHRcdFx0XHRcdFx0aWQ6aXRlbS5pZCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBsZW4gPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNyYykubGVuZ3RoXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGxlbjsgaSA8IGxlbiArIHZpZGVvR3JvdXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdCwgaSwgdmlkZW9Hcm91cFtpIC0gbGVuXSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgdmlkID0gdGhpcy52aWRlb0lkXG5cdFx0XHRcdFx0bGV0IG5ld3MxID0gdGhpcy52aWRlb0xpc3QuZmlsdGVyKG9iaj0+b2JqLmlkID09IHZpZClcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhuZXdzMSlcblx0XHRcdFx0XHRsZXQgbmV3czIgPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIob2JqPT5vYmouaWQgIT0gdmlkKVxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG5ld3MyKVxuXHRcdFx0XHRcdGxldCBhcnIzID0gWy4uLm5ld3MxLC4uLm5ld3MyXVxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGFycjMpXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBhcnIzXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YXJyMy5mb3JFYWNoKGl0ZW09Pntcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZpZClcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGl0ZW0uaWQpXG5cdFx0XHRcdFx0XHRpZihpdGVtLmlkID09IHZpZCApe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHRhcExvdmUoKSB7XG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0ID0gWy4uLnRoaXMudmlkZW9MaXN0XVxuXHRcdFx0fSxcblx0XHRcdHRhcFNoYXJlKCkge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0Ly8gdGl0bGU6IGDliIbkuqvntKLlvJXkuLoke3RoaXMuaW5kZXh955qE6KeG6aKRYCxcblx0XHRcdFx0XHR0aXRsZTogJ+etieW+heeoi+W6j+WRmOWwj+Wuh+WumeeIhuWPkeWQpydcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHR2aWRlb1BsYXkoaW5kZXgpIHtcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHByb21pc2UudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFtpbmRleF0sICdmbGFnJywgIXRoaXMudmlkZW9MaXN0W2luZGV4XS5mbGFnKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdHBhdXNlVmlkZW8odmFsKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy52aWRlb0xpc3RbdGhpcy5vbGRJbmRleF0uaW5pdGlhbFRpbWUgIT0gJ3VuZGVmaW5lZCcpIHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lID1cblx0XHRcdFx0XHR2YWxcblx0XHRcdH0sXG5cdFx0XHRjbGlja1ZpZGVvKCkge1xuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmZsYWdcblx0XHRcdH1cblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRpbmRleChuZXdWYWwsIG9sZFZhbCkge1xuXHRcdFx0XHRsZXQgbGVuID0gdGhpcy52aWRlb0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zcmMpLmxlbmd0aFxuXHRcdFx0XHQvL+WKoOi9veinhumikVxuXHRcdFx0XHRpZiAobGVuIC0gdGhpcy5pbmRleCAtIDEgPD0gdGhpcy5wbGF5Q291bnQpIHtcblx0XHRcdFx0XHR0aGlzLnB1c2hWaWRlb0xpc3QoKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub2xkSW5kZXggPSBvbGRWYWxcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cblx0LnN3aXBlciB7XG5cdFx0ZmxleDogMTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHR9XG5cblx0LnN3aXBlci1pdGVtIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0LnZpZGVvIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0LnZpZGVvLWJveCB7XG5cdFx0ZmxleDogMTtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHR9XG5cblx0LmNvdmVyLXZpZXctY2VudGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRvcGFjaXR5OiAwLjE7XG5cdFx0ei1pbmRleDogOTk5O1xuXHR9XG5cblx0LmNvdmVyLXZpZXctbGVmdCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdG1hcmdpbi1sZWZ0OiAyNXVweDtcblx0XHR3aWR0aDogNTAwdXB4O1xuXHRcdGJvdHRvbTogMTYwdXB4O1xuXHRcdHotaW5kZXg6IDk5OTk7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXG5cdC5sZWZ0LXZpZXcge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwdXB4O1xuXHR9XG5cblx0LmxlZnQtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXG5cdC5hdmF0ZXIge1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwdXB4O1xuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci13aWR0aDogMnB4O1xuXHR9XG5cblx0LmNvdmVyLXZpZXctcmlnaHQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDE2MHVweDtcblx0XHRyaWdodDogMjB1cHg7XG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdHotaW5kZXg6IDk5OTk7XG5cdH1cblxuXHQucmlnaHQtdGV4dC1hdmF0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0dG9wOiA4MHVweDtcblx0XHRsZWZ0OiAzMHVweDtcblx0XHRoZWlnaHQ6IDQwdXB4O1xuXHRcdHdpZHRoOiA0MHVweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREO1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGluZS1oZWlnaHQ6IDQwdXB4O1xuXHRcdHotaW5kZXg6IDk5OTtcblx0fVxuXG5cdC5hdmF0ZXItaWNvbiB7XG5cdFx0aGVpZ2h0OiA0MHVweDtcblx0XHR3aWR0aDogNDB1cHg7XG5cblx0XHRjb2xvcjogI2ZmZjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMzB1cHg7XG5cdFx0dG9wOiAtMjB1cHg7XG5cdH1cblxuXHQucmlnaHQtdGV4dCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHVweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdH1cblxuXHQuaW1nIHtcblx0XHRoZWlnaHQ6IDUwdXB4O1xuXHRcdHdpZHRoOiA1MHVweDtcblx0XHRvcGFjaXR5OiAwLjk7XG5cdFx0bWFyZ2luLWxlZnQ6IDNycHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogM3JweDtcblx0fVxuXG5cdC5wYWdlIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleDogMTtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 11);

/***/ }),
/* 11 */
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 12 */
/*!*********************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/common/api.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _module$exports;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var utils = __webpack_require__(/*! ./http.js */ 13);\n// const http = \"http://39.98.119.186:8082\";\n// const http_no_v = \"http://admin.youzikankan.com/api/\";\n\n// 正式\nvar http_no_v = \"https://www.youzikankan.com/api/\";\nvar http = \"https://www.youzikankan.com/api/v1/\";\n\n// 测试\n// const http_no_v = \"http://testfas.youzikankan.com/api/\";\n// const http = \"http://testfas.youzikankan.com/api/v1/\"; \n\nmodule.exports = (_module$exports = {\n  http: http,\n\n  myReleaseDel: function myReleaseDel(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //删除我的发布\n    return utils.postRequest(\n    http + 'myReleaseDel',\n    data,\n    config);\n\n  },\n\n\n\n  getdayranking: function getdayranking(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取每日点击次数排行\n    return utils.getRequest(\n    http + 'get-day-ranking/' + data.page,\n    data,\n    config);\n\n  },\n\n\n  setRanking: function setRanking(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //保存文章点击次数\n    return utils.postRequest(\n    http + 'set-ranking',\n    data,\n    config);\n\n  },\n\n\n  jumpList: function jumpList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //跳转对应 商会 || 宗祠\n    return utils.postRequest(\n    http + 'jump-list',\n    data,\n    config);\n\n  },\n\n\n  getAppImageReple: function getAppImageReple(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLogin: true }; //移动端文章详情页获取封面图\n    return utils.getRequest(\n    http + 'getAppImageReple/' + data.id,\n    data,\n    config);\n\n  },\n\n  setNewsPublishImage: function setNewsPublishImage(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //文章发布缩略图上传\n    return utils.postRequest(\n    http + 'setNewsPublishImage',\n    data,\n    config);\n\n  },\n\n  setNewsPublish: function setNewsPublish(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //新闻发布接口\n    return utils.postRequest(\n    http + 'setNewsPublish',\n    data,\n    config);\n\n  },\n\n  getNewsCategory: function getNewsCategory(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取新闻类型\n    return utils.getRequest(\n    http + 'getNewsCategory',\n    data,\n    config);\n\n  },\n\n  editorUploadImage: function editorUploadImage(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //得到分文本编辑器上传图片\n    return utils.postRequest(\n    http + 'editorUploadImage',\n    data,\n    config);\n\n  },\n  getSignPackage: function getSignPackage(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //得到分享签名\n    return utils.postRequest(\n    http_no_v + 'getSignPackage',\n    data,\n    config);\n\n  },\n  weixinLogin: function weixinLogin(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //微信登陆\n    return utils.postRequest(\n    http + 'weixinLogin',\n    data,\n    config);\n\n  },\n  getIndexColumn: function getIndexColumn(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //资讯栏目\n    return utils.getRequest(\n    http + 'getIndexColumn',\n    data,\n    config);\n\n  },\n  upUserImage: function upUserImage(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //修改用户头像\n    return utils.postRequest(\n    http + 'upUserImage',\n    data,\n    config);\n\n  },\n  upUser: function upUser(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //修改用户资料\n    return utils.postRequest(\n    http + 'upUser',\n    data,\n    config);\n\n  },\n  upPwd: function upPwd(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //修改密码\n    return utils.postRequest(\n    http + 'upPwd',\n    data,\n    config);\n\n  },\n  getTempleJoinStatus: function getTempleJoinStatus(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //寺庙入驻状态\n    return utils.getRequest(\n    http + 'getTempleJoinStatus',\n    data,\n    config);\n\n  },\n  setTempleJoinID: function setTempleJoinID(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙入驻身份证上传\n    return utils.postRequest(\n    http + 'setTempleJoinID',\n    data,\n    config);\n\n  },\n  setTempleJoin: function setTempleJoin(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙入驻\n    return utils.postRequest(\n    http + 'setTempleJoin',\n    data,\n    config);\n\n  },\n  getAllNewList: function getAllNewList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页资讯\n    return utils.postRequest(\n    http + 'getNewsList',\n    data,\n    config);\n\n  },\n  getNewsList: function getNewsList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页推荐\n    return utils.getRequest(\n    http + 'getRecommendList/' + data.page,\n    data,\n    config);\n\n  },\n  getHotList: function getHotList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页热门新闻\n    return utils.getRequest(\n    http + 'getHotList/' + data.page,\n    data,\n    config);\n\n  },\n  getNewsSearch: function getNewsSearch(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页搜索\n    return utils.postRequest(\n    http + 'getNewsSearch/' + data.page,\n    data,\n    config);\n\n  },\n  getVideoList: function getVideoList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页视频列表\n    return utils.postRequest(\n    http + 'getVideoList/' + data.page,\n    data,\n    config);\n\n  },\n  getPictureList: function getPictureList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //首页图片列表\n    return utils.postRequest(\n    http + 'getPictureList/' + data.page,\n    data,\n    config);\n\n  },\n  getPictureDetail: function getPictureDetail(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLogin: true }; //首页图片详情\n    return utils.getRequest(\n    http + 'getPictureDetail/' + data.id,\n    data,\n    config);\n\n  },\n  getNewsInfo: function getNewsInfo(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLogin: true }; //资讯详情\n    return utils.getRequest(\n    http + 'getNewsDetail/' + data.id,\n    data,\n    config);\n\n  },\n  getChamberUser: function getChamberUser(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //成员列表\n    return utils.getRequest(\n    http + 'getChamberUser/' + data.id,\n    data,\n    config);\n\n  },\n  getLoginChamberList: function getLoginChamberList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //获取商会列表，加入商会时候的选择列表\n    return utils.getRequest(\n    http + 'getLoginChamberList/' + data.page,\n    data,\n    config);\n\n  } }, _defineProperty(_module$exports, \"getVideoList\",\nfunction getVideoList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取视频列表\n  return utils.postRequest(\n  http + 'getVideoList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getVideoDetail\",\nfunction getVideoDetail(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取视频详情\n  return utils.getRequest(\n  http + 'getVideoDetail/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getMyChamberList\",\nfunction getMyChamberList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会列表\n  return utils.getRequest(\n  http + 'getMyChamberList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberList\",\nfunction getChamberList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会列表\n  return utils.getRequest(\n  http + 'getChamberList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberJoin\",\nfunction getChamberJoin(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会入驻状态\n  return utils.getRequest(\n  http + 'getChamberJoin',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setChamberJoin\",\nfunction setChamberJoin(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //商会入驻\n  return utils.postRequest(\n  http + 'setChamberJoin',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setChamberAdd\",\nfunction setChamberAdd(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //加入商会\n  return utils.postRequest(\n  http + 'setChamberAdd',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberDetail\",\nfunction getChamberDetail(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会详情\n  return utils.getRequest(\n  http + 'getChamberDetail/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberNewsList\",\nfunction getChamberNewsList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会资讯列表\n  return utils.getRequest(\n  http + 'getChamberNewsList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getActivityEnrollStatus\",\nfunction getActivityEnrollStatus(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会活动报名状态\n  return utils.getRequest(\n  http + 'getActivityEnrollStatus/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"activityEnroll\",\nfunction activityEnroll(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //商会活动报名\n  return utils.postRequest(\n  http + 'activityEnroll',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberActivityList\",\n\nfunction getChamberActivityList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会活动列表\n  return utils.getRequest(\n  http + 'getChamberActivityList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getMyChamberActivity\",\nfunction getMyChamberActivity(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取我的活动\n  return utils.getRequest(\n  http + 'getMyChamberActivity/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setCollectionActivity\",\nfunction setCollectionActivity(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //收藏商会活动\n  return utils.postRequest(\n  http + 'setCollectionActivity',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getCollectionActivity\",\nfunction getCollectionActivity(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //活动收藏状态\n  return utils.getRequest(\n  http + 'getCollectionActivity/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setCollectionNews\", function setCollectionNews(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //收藏新闻\n  return utils.postRequest(\n  http + 'setCollectionNews',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getCollectionNews\",\nfunction getCollectionNews(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //新闻收藏状态\n  return utils.getRequest(\n  http + 'getCollectionNews/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getChamberActivityDetail\",\nfunction getChamberActivityDetail(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取商会活动详情\n  return utils.getRequest(\n  http + 'getChamberActivityDetail/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getTempleNewsPopularList\",\nfunction getTempleNewsPopularList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙热门资讯\n  return utils.getRequest(\n  http + 'getTempleNewsPopularList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getTemplePopularList\",\nfunction getTemplePopularList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //热门寺庙\n  return utils.getRequest(\n  http + 'getTemplePopularList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getTempleNewsList\",\nfunction getTempleNewsList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙新闻列表\n  return utils.getRequest(\n  http + 'getTempleNewsList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"zongciList\",\nfunction zongciList(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙列表\n  return utils.getRequest(\n  http + 'getTempleList/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getTempleNewsDetail\",\nfunction getTempleNewsDetail(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙详情\n  return utils.getRequest(\n  http + 'getTempleNewsDetail/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"zongciInfo\",\nfunction zongciInfo(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //寺庙详情\n  return utils.getRequest(\n  http + 'getTempleDetail/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getComment\",\n\nfunction getComment(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获得评论列表\n  return utils.getRequest(\n  http + 'getComment/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getLoginComment\",\nfunction getLoginComment(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //获得登陆后的评论列表（显示点赞状态）\n  return utils.getRequest(\n  http + 'getLoginComment/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getCommentReply\",\nfunction getCommentReply(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获得回复列表\n  return utils.getRequest(\n  http + 'getCommentReply/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"replyComment\",\n\nfunction replyComment(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //回复评论\n  return utils.postRequest(\n  http + 'replyComment',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setComment\",\nfunction setComment(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //评论\n  return utils.postRequest(\n  http + 'setComment',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setFabulousUser\",\nfunction setFabulousUser(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //给评论点赞\n  return utils.postRequest(\n  http + 'setFabulousUser',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getFabulousUserCode\",\nfunction getFabulousUserCode(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取用户点赞状态\n  return utils.getRequest(\n  http + 'getFabulousUserCode/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getLoginCommentReply\",\nfunction getLoginCommentReply(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //二级回复的点赞（评论详情页点赞）\n  return utils.getRequest(\n  http + 'getLoginCommentReply/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setFabulousNews\",\nfunction setFabulousNews(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //点赞新闻\n  return utils.postRequest(\n  http + 'setFabulousNews',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getFabulousNewsCode\",\nfunction getFabulousNewsCode(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //获取新闻点赞状态\n  return utils.getRequest(\n  http + 'getFabulousNewsCode/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"setFollow\",\nfunction setFollow(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //关注作者\n  return utils.postRequest(\n  http + 'setFollow',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getFollowCode\",\nfunction getFollowCode(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { noLoginCanSee: true }; //获取关注作者状态\n  return utils.getRequest(\n  http + 'getFollowCode/' + data.id,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"myCollection\",\n\nfunction myCollection(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取我的收藏\n  return utils.getRequest(\n  http + 'myCollection/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"myRelease\",\nfunction myRelease(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取我的发布\n  return utils.getRequest(\n  http + 'myRelease/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"myFollow\",\nfunction myFollow(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取我的关注\n  return utils.getRequest(\n  http + 'myFollow/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"myFans\",\n\nfunction myFans(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取我的粉丝\n  return utils.getRequest(\n  http + 'myFans/' + data.page,\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"login\",\n\nfunction login(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //用户登陆\n  return utils.postRequest(\n  http + 'login',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getUser\",\nfunction getUser(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取用户信息\n  return utils.getRequest(\n  http + 'getUser',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"phoneLogin\",\nfunction phoneLogin(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //手机号登陆\n  return utils.postRequest(\n  http + 'phoneLogin',\n  data,\n  config);\n\n}), _defineProperty(_module$exports, \"getCode\",\nfunction getCode(data) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; //获取验证码\n  return utils.postRequest(\n  http + 'getCode',\n  data,\n  config);\n\n}), _module$exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJodHRwX25vX3YiLCJodHRwIiwibW9kdWxlIiwiZXhwb3J0cyIsIm15UmVsZWFzZURlbCIsImRhdGEiLCJjb25maWciLCJwb3N0UmVxdWVzdCIsImdldGRheXJhbmtpbmciLCJnZXRSZXF1ZXN0IiwicGFnZSIsInNldFJhbmtpbmciLCJqdW1wTGlzdCIsImdldEFwcEltYWdlUmVwbGUiLCJub0xvZ2luIiwiaWQiLCJzZXROZXdzUHVibGlzaEltYWdlIiwic2V0TmV3c1B1Ymxpc2giLCJnZXROZXdzQ2F0ZWdvcnkiLCJlZGl0b3JVcGxvYWRJbWFnZSIsImdldFNpZ25QYWNrYWdlIiwid2VpeGluTG9naW4iLCJnZXRJbmRleENvbHVtbiIsInVwVXNlckltYWdlIiwidXBVc2VyIiwidXBQd2QiLCJnZXRUZW1wbGVKb2luU3RhdHVzIiwibm9Mb2dpbkNhblNlZSIsInNldFRlbXBsZUpvaW5JRCIsInNldFRlbXBsZUpvaW4iLCJnZXRBbGxOZXdMaXN0IiwiZ2V0TmV3c0xpc3QiLCJnZXRIb3RMaXN0IiwiZ2V0TmV3c1NlYXJjaCIsImdldFZpZGVvTGlzdCIsImdldFBpY3R1cmVMaXN0IiwiZ2V0UGljdHVyZURldGFpbCIsImdldE5ld3NJbmZvIiwiZ2V0Q2hhbWJlclVzZXIiLCJnZXRMb2dpbkNoYW1iZXJMaXN0Il0sIm1hcHBpbmdzIjoiOE5BQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG1CQUFELENBQXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQU1DLFNBQVMsR0FBRyxrQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUcscUNBQWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBQyxNQUFNLENBQUNDLE9BQVA7QUFDRUYsTUFBSSxFQUFFQSxJQURSOztBQUdFRyxjQUFZLEVBQUUsc0JBQVVDLElBQVYsRUFBNkIsS0FBYkMsTUFBYSx1RUFBSixFQUFJLEVBQUU7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Q3ZDLFNBQU9SLEtBQUssQ0FBQ1csVUFBTjtBQUNMUixNQUFJLEdBQUcsV0FBUCxHQUFtQkksSUFBSSxDQUFDSyxJQURuQjtBQUVMTCxNQUZLO0FBR0xDLFFBSEssQ0FBUDs7QUFLRCxDQXZlSDs7QUF5ZVUsZ0JBQVVELElBQVYsRUFBNkIsS0FBYkMsTUFBYSx1RUFBSixFQUFJLEVBQUU7QUFDckMsU0FBT1IsS0FBSyxDQUFDVyxVQUFOO0FBQ0xSLE1BQUksR0FBRyxTQUFQLEdBQWlCSSxJQUFJLENBQUNLLElBRGpCO0FBRUxMLE1BRks7QUFHTEMsUUFISyxDQUFQOztBQUtELENBL2VIOztBQWlmUyxlQUFVRCxJQUFWLEVBQTZCLEtBQWJDLE1BQWEsdUVBQUosRUFBSSxFQUFFO0FBQ3BDLFNBQU9SLEtBQUssQ0FBQ1MsV0FBTjtBQUNMTixNQUFJLEdBQUcsT0FERjtBQUVMSSxNQUZLO0FBR0xDLFFBSEssQ0FBUDs7QUFLRCxDQXZmSDtBQXdmVyxpQkFBVUQsSUFBVixFQUE2QixLQUFiQyxNQUFhLHVFQUFKLEVBQUksRUFBRTtBQUN0QyxTQUFPUixLQUFLLENBQUNXLFVBQU47QUFDTFIsTUFBSSxHQUFHLFNBREY7QUFFTEksTUFGSztBQUdMQyxRQUhLLENBQVA7O0FBS0QsQ0E5Zkg7QUErZmMsb0JBQVVELElBQVYsRUFBNkIsS0FBYkMsTUFBYSx1RUFBSixFQUFJLEVBQUU7QUFDekMsU0FBT1IsS0FBSyxDQUFDUyxXQUFOO0FBQ0xOLE1BQUksR0FBRyxZQURGO0FBRUxJLE1BRks7QUFHTEMsUUFISyxDQUFQOztBQUtELENBcmdCSDtBQXNnQlcsaUJBQVVELElBQVYsRUFBNkIsS0FBYkMsTUFBYSx1RUFBSixFQUFJLEVBQUU7QUFDdEMsU0FBT1IsS0FBSyxDQUFDUyxXQUFOO0FBQ0xOLE1BQUksR0FBRyxTQURGO0FBRUxJLE1BRks7QUFHTEMsUUFISyxDQUFQOztBQUtELENBNWdCSCIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi9odHRwLmpzJyk7XHJcbi8vIGNvbnN0IGh0dHAgPSBcImh0dHA6Ly8zOS45OC4xMTkuMTg2OjgwODJcIjtcclxuLy8gY29uc3QgaHR0cF9ub192ID0gXCJodHRwOi8vYWRtaW4ueW91emlrYW5rYW4uY29tL2FwaS9cIjtcclxuXHJcbi8vIOato+W8j1xyXG5jb25zdCBodHRwX25vX3YgPSBcImh0dHBzOi8vd3d3LnlvdXppa2Fua2FuLmNvbS9hcGkvXCI7XHJcbmNvbnN0IGh0dHAgPSBcImh0dHBzOi8vd3d3LnlvdXppa2Fua2FuLmNvbS9hcGkvdjEvXCI7XHJcblxyXG4vLyDmtYvor5VcclxuLy8gY29uc3QgaHR0cF9ub192ID0gXCJodHRwOi8vdGVzdGZhcy55b3V6aWthbmthbi5jb20vYXBpL1wiO1xyXG4vLyBjb25zdCBodHRwID0gXCJodHRwOi8vdGVzdGZhcy55b3V6aWthbmthbi5jb20vYXBpL3YxL1wiOyBcclxuIFxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgXHJcbiAgaHR0cDogaHR0cCxcclxuICBcclxuICBteVJlbGVhc2VEZWw6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WIoOmZpOaIkeeahOWPkeW4g1xyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ215UmVsZWFzZURlbCcsXHJcbiAgICAgIGRhdGEsIFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBcclxuICBcclxuICBcclxuICBnZXRkYXlyYW5raW5nOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bmr4/ml6Xngrnlh7vmrKHmlbDmjpLooYxcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldC1kYXktcmFua2luZy8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbiAgc2V0UmFua2luZzogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5L+d5a2Y5paH56ug54K55Ye75qyh5pWwXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0LXJhbmtpbmcnLFxyXG4gICAgICBkYXRhLCBcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbiAganVtcExpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+i3s+i9rOWvueW6lCDllYbkvJogfHwg5a6X56WgXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnanVtcC1saXN0JyxcclxuICAgICAgZGF0YSwgXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIFxyXG4gIFxyXG4gIGdldEFwcEltYWdlUmVwbGU6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7bm9Mb2dpbjp0cnVlfSkgeyAvL+enu+WKqOerr+aWh+eroOivpuaDhemhteiOt+WPluWwgemdouWbvlxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0QXBwSW1hZ2VSZXBsZS8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIFxyXG4gIHNldE5ld3NQdWJsaXNoSW1hZ2U6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+aWh+eroOWPkeW4g+e8qeeVpeWbvuS4iuS8oFxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldE5ld3NQdWJsaXNoSW1hZ2UnLFxyXG4gICAgICBkYXRhLCBcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgc2V0TmV3c1B1Ymxpc2g6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+aWsOmXu+WPkeW4g+aOpeWPo1xyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldE5ld3NQdWJsaXNoJyxcclxuICAgICAgZGF0YSwgXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIFxyXG4gIGdldE5ld3NDYXRlZ29yeTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W5paw6Ze757G75Z6LXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXROZXdzQ2F0ZWdvcnknLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBcclxuICBlZGl0b3JVcGxvYWRJbWFnZTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5b6X5Yiw5YiG5paH5pys57yW6L6R5Zmo5LiK5Lyg5Zu+54mHXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZWRpdG9yVXBsb2FkSW1hZ2UnLFxyXG4gICAgICBkYXRhLCBcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0U2lnblBhY2thZ2U6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+W+l+WIsOWIhuS6q+etvuWQjVxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwX25vX3YgKyAnZ2V0U2lnblBhY2thZ2UnLFxyXG4gICAgICBkYXRhLCBcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgd2VpeGluTG9naW46IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+W+ruS/oeeZu+mZhlxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3dlaXhpbkxvZ2luJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0SW5kZXhDb2x1bW46IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+i1hOiur+agj+ebrlxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0SW5kZXhDb2x1bW4nLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICB1cFVzZXJJbWFnZTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5L+u5pS555So5oi35aS05YOPXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAndXBVc2VySW1hZ2UnLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICB1cFVzZXI6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+S/ruaUueeUqOaIt+i1hOaWmVxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3VwVXNlcicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHVwUHdkOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/kv67mlLnlr4bnoIFcclxuICAgIHJldHVybiB1dGlscy5wb3N0UmVxdWVzdChcclxuICAgICAgaHR0cCArICd1cFB3ZCcsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldFRlbXBsZUpvaW5TdGF0dXM6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7bm9Mb2dpbkNhblNlZTp0cnVlfSkgeyAvL+WvuuW6meWFpempu+eKtuaAgVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0VGVtcGxlSm9pblN0YXR1cycsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHNldFRlbXBsZUpvaW5JRDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5a+65bqZ5YWl6am76Lqr5Lu96K+B5LiK5LygXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0VGVtcGxlSm9pbklEJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc2V0VGVtcGxlSm9pbjogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5a+65bqZ5YWl6am7XHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0VGVtcGxlSm9pbicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldEFsbE5ld0xpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+mmlumhtei1hOiur1xyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldE5ld3NMaXN0JyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0TmV3c0xpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+mmlumhteaOqOiNkFxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0UmVjb21tZW5kTGlzdC8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0SG90TGlzdDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6aaW6aG154Ot6Zeo5paw6Ze7XHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRIb3RMaXN0LycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXROZXdzU2VhcmNoOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/pppbpobXmkJzntKJcclxuICAgIHJldHVybiB1dGlscy5wb3N0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXROZXdzU2VhcmNoLycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRWaWRlb0xpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+mmlumhteinhumikeWIl+ihqFxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFZpZGVvTGlzdC8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0UGljdHVyZUxpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+mmlumhteWbvueJh+WIl+ihqFxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFBpY3R1cmVMaXN0LycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRQaWN0dXJlRGV0YWlsOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge25vTG9naW46dHJ1ZX0pIHsgLy/pppbpobXlm77niYfor6bmg4VcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFBpY3R1cmVEZXRhaWwvJytkYXRhLmlkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXROZXdzSW5mbzogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHtub0xvZ2luOnRydWV9KSB7IC8v6LWE6K6v6K+m5oOFXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXROZXdzRGV0YWlsLycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0Q2hhbWJlclVzZXI6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+aIkOWRmOWIl+ihqFxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0Q2hhbWJlclVzZXIvJytkYXRhLmlkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRMb2dpbkNoYW1iZXJMaXN0OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge25vTG9naW5DYW5TZWU6dHJ1ZX0pIHsgLy/ojrflj5bllYbkvJrliJfooajvvIzliqDlhaXllYbkvJrml7blgJnnmoTpgInmi6nliJfooahcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldExvZ2luQ2hhbWJlckxpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldFZpZGVvTGlzdDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W6KeG6aKR5YiX6KGoXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0VmlkZW9MaXN0LycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRWaWRlb0RldGFpbDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W6KeG6aKR6K+m5oOFXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRWaWRlb0RldGFpbC8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldE15Q2hhbWJlckxpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+iOt+WPluWVhuS8muWIl+ihqFxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0TXlDaGFtYmVyTGlzdC8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0Q2hhbWJlckxpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+iOt+WPluWVhuS8muWIl+ihqFxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0Q2hhbWJlckxpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gZ2V0Q2hhbWJlckpvaW46ZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KXsgLy/ojrflj5bllYbkvJrlhaXpqbvnirbmgIFcclxuXHQgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcblx0ICAgaHR0cCArICdnZXRDaGFtYmVySm9pbicsXHJcblx0ICAgZGF0YSxcclxuXHQgICBjb25maWdcclxuXHQgKTtcclxuIH0sXHJcbiAgc2V0Q2hhbWJlckpvaW46IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WVhuS8muWFpempu1xyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldENoYW1iZXJKb2luJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgc2V0Q2hhbWJlckFkZDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5Yqg5YWl5ZWG5LyaXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0Q2hhbWJlckFkZCcsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENoYW1iZXJEZXRhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+iOt+WPluWVhuS8muivpuaDhVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0Q2hhbWJlckRldGFpbC8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENoYW1iZXJOZXdzTGlzdDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W5ZWG5Lya6LWE6K6v5YiX6KGoXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDaGFtYmVyTmV3c0xpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldEFjdGl2aXR5RW5yb2xsU3RhdHVzOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bllYbkvJrmtLvliqjmiqXlkI3nirbmgIFcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldEFjdGl2aXR5RW5yb2xsU3RhdHVzLycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgYWN0aXZpdHlFbnJvbGw6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WVhuS8mua0u+WKqOaKpeWQjVxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2FjdGl2aXR5RW5yb2xsJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiBcclxuICBnZXRDaGFtYmVyQWN0aXZpdHlMaXN0OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bllYbkvJrmtLvliqjliJfooahcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldENoYW1iZXJBY3Rpdml0eUxpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldE15Q2hhbWJlckFjdGl2aXR5OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bmiJHnmoTmtLvliqhcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldE15Q2hhbWJlckFjdGl2aXR5LycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBzZXRDb2xsZWN0aW9uQWN0aXZpdHk6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+aUtuiXj+WVhuS8mua0u+WKqFxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldENvbGxlY3Rpb25BY3Rpdml0eScsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENvbGxlY3Rpb25BY3Rpdml0eTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5rS75Yqo5pS26JeP54q25oCBXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDb2xsZWN0aW9uQWN0aXZpdHkvJytkYXRhLmlkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxzZXRDb2xsZWN0aW9uTmV3czogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5pS26JeP5paw6Ze7XHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0Q29sbGVjdGlvbk5ld3MnLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRDb2xsZWN0aW9uTmV3czogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHtub0xvZ2luQ2FuU2VlOnRydWV9KSB7IC8v5paw6Ze75pS26JeP54q25oCBXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDb2xsZWN0aW9uTmV3cy8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENoYW1iZXJBY3Rpdml0eURldGFpbDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W5ZWG5Lya5rS75Yqo6K+m5oOFXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDaGFtYmVyQWN0aXZpdHlEZXRhaWwvJytkYXRhLmlkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSwgICAgXHJcbiAgZ2V0VGVtcGxlTmV3c1BvcHVsYXJMaXN0OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/lr7rlupnng63pl6jotYTorq9cclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFRlbXBsZU5ld3NQb3B1bGFyTGlzdC8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0VGVtcGxlUG9wdWxhckxpc3Q6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+eDremXqOWvuuW6mVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0VGVtcGxlUG9wdWxhckxpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldFRlbXBsZU5ld3NMaXN0OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/lr7rlupnmlrDpl7vliJfooahcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFRlbXBsZU5ld3NMaXN0LycrZGF0YS5wYWdlLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICB6b25nY2lMaXN0OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/lr7rlupnliJfooahcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldFRlbXBsZUxpc3QvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldFRlbXBsZU5ld3NEZXRhaWw6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WvuuW6meivpuaDhVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0VGVtcGxlTmV3c0RldGFpbC8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHpvbmdjaUluZm86IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WvuuW6meivpuaDhVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0VGVtcGxlRGV0YWlsLycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgZ2V0Q29tbWVudDogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635b6X6K+E6K665YiX6KGoXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDb21tZW50LycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0TG9naW5Db21tZW50OiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge25vTG9naW5DYW5TZWU6dHJ1ZX0pIHsgLy/ojrflvpfnmbvpmYblkI7nmoTor4TorrrliJfooajvvIjmmL7npLrngrnotZ7nirbmgIHvvIlcclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldExvZ2luQ29tbWVudC8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENvbW1lbnRSZXBseTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635b6X5Zue5aSN5YiX6KGoXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRDb21tZW50UmVwbHkvJytkYXRhLmlkLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBcclxuICByZXBseUNvbW1lbnQ6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+WbnuWkjeivhOiuulxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3JlcGx5Q29tbWVudCcsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHNldENvbW1lbnQ6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+ivhOiuulxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldENvbW1lbnQnLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfSxcclxuICBzZXRGYWJ1bG91c1VzZXI6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+e7meivhOiuuueCuei1nlxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldEZhYnVsb3VzVXNlcicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gZ2V0RmFidWxvdXNVc2VyQ29kZTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W55So5oi354K56LWe54q25oCBXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRGYWJ1bG91c1VzZXJDb2RlLycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0TG9naW5Db21tZW50UmVwbHk6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7bm9Mb2dpbkNhblNlZTp0cnVlfSkgeyAvL+S6jOe6p+WbnuWkjeeahOeCuei1nu+8iOivhOiuuuivpuaDhemhteeCuei1nu+8iVxyXG4gICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICAgaHR0cCArICdnZXRMb2dpbkNvbW1lbnRSZXBseS8nK2RhdGEuaWQsXHJcbiAgICAgICBkYXRhLFxyXG4gICAgICAgY29uZmlnXHJcbiAgICAgKTtcclxuICAgfSxcclxuICBzZXRGYWJ1bG91c05ld3M6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+eCuei1nuaWsOmXu1xyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ3NldEZhYnVsb3VzTmV3cycsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldEZhYnVsb3VzTmV3c0NvZGU6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7bm9Mb2dpbkNhblNlZTp0cnVlfSkgeyAvL+iOt+WPluaWsOmXu+eCuei1nueKtuaAgVxyXG4gICAgcmV0dXJuIHV0aWxzLmdldFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnZ2V0RmFidWxvdXNOZXdzQ29kZS8nK2RhdGEuaWQsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIHNldEZvbGxvdzogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5YWz5rOo5L2c6ICFXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAnc2V0Rm9sbG93JyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0Rm9sbG93Q29kZTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHtub0xvZ2luQ2FuU2VlOnRydWV9KSB7IC8v6I635Y+W5YWz5rOo5L2c6ICF54q25oCBXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRGb2xsb3dDb2RlLycrZGF0YS5pZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgbXlDb2xsZWN0aW9uOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bmiJHnmoTmlLbol49cclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ215Q29sbGVjdGlvbi8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sIFxyXG4gIG15UmVsZWFzZTogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W5oiR55qE5Y+R5biDXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdteVJlbGVhc2UvJytkYXRhLnBhZ2UsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LCBcclxuICBteUZvbGxvdzogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W5oiR55qE5YWz5rOoXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdteUZvbGxvdy8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgbXlGYW5zOiBmdW5jdGlvbiAoZGF0YSwgY29uZmlnID0ge30pIHsgLy/ojrflj5bmiJHnmoTnsonkuJ1cclxuICAgIHJldHVybiB1dGlscy5nZXRSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ215RmFucy8nK2RhdGEucGFnZSxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgXHJcbiAgbG9naW46IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+eUqOaIt+eZu+mZhlxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2xvZ2luJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0VXNlcjogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v6I635Y+W55So5oi35L+h5oGvXHJcbiAgICByZXR1cm4gdXRpbHMuZ2V0UmVxdWVzdChcclxuICAgICAgaHR0cCArICdnZXRVc2VyJyxcclxuICAgICAgZGF0YSxcclxuICAgICAgY29uZmlnXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgcGhvbmVMb2dpbjogZnVuY3Rpb24gKGRhdGEsIGNvbmZpZyA9IHt9KSB7IC8v5omL5py65Y+355m76ZmGXHJcbiAgICByZXR1cm4gdXRpbHMucG9zdFJlcXVlc3QoXHJcbiAgICAgIGh0dHAgKyAncGhvbmVMb2dpbicsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgKTtcclxuICB9LFxyXG4gIGdldENvZGU6IGZ1bmN0aW9uIChkYXRhLCBjb25maWcgPSB7fSkgeyAvL+iOt+WPlumqjOivgeeggVxyXG4gICAgcmV0dXJuIHV0aWxzLnBvc3RSZXF1ZXN0KFxyXG4gICAgICBodHRwICsgJ2dldENvZGUnLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBjb25maWdcclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/common/http.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.getCommonHeader = getCommonHeader;exports.request = request;exports.getRequest = getRequest;exports.postRequest = postRequest;exports.ajaxUploadFile = ajaxUploadFile;var _common = _interopRequireDefault(__webpack_require__(/*! ./common.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                     * 获取header\r\n                                                                                                                                                                                                                                                                                                                                                                                                                     */\nfunction getCommonHeader(imgUpload) {\n  var header;\n  if (imgUpload) {\n    header = {\n      'Content-type': 'multipart/form-data' };\n\n  } else {\n    header = {\n      'Content-type': 'application/json;charset=UTF-8' };\n\n  }\n\n  // 如果token有值则带上\n  var token = uni.getStorageSync(\"accesstoken\");\n  // let token = \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzA3Nzg4NTQ5OSIsImNyZWF0ZWQiOjE1NzYyMjY5OTQ0NzgsImV4cCI6MTU3NjMxMzM5NH0.KSRIiSiFtdUkXFF7XTUR-ueaOmdZfW93M5QuuVoPW2nIZ5DNlEZpLp6_9lvIrL2MW1LmZnOdrTTKo1u2NlYEDQ\";\n  header = {\n    'accesstoken': token || '0',\n\n\n\n\n    'equipment': 'app' };\n\n\n\n\n\n  return header;\n};\n\n\n/** \r\n    * 网络请求\r\n    * config['noLoginCanSee'] :  无需登陆也可查看     resolve('seeOther')\r\n    */\n\nvar ajaxTimes = 0;\n\nfunction request(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"POST\";var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10000;\n\n  ajaxTimes++;\n  uni.showLoading({\n    title: '加载中...',\n    mask: true });\n\n\n  // header 空值处理\n  var _header = getCommonHeader();\n\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: url,\n      data: data,\n      timeout: timeout,\n      header: _header,\n      method: method,\n      success: function success(res) {\n\n\n        ajaxTimes--;\n        if (ajaxTimes === 0) {\n          uni.hideLoading();\n        }\n\n\n        // 浏览器状态码\n        var statusCode = res.statusCode;\n        // 服务器返回的data\n        var result = res.data;\n        // 服务器 非200 错误\n        if (statusCode == 200) {\n          if (result.status != 1) {\n            uni.showToast({\n              title: result.message,\n              icon: 'none' });\n\n            return;\n          }\n        } else if (statusCode == 401) {\n          if (config.noLoginCanSee) {\n            resolve('seeOther');\n          } else {\n            uni.setStorageSync('userInfo', {\n              defaultHeadImg: \"/static/images/icon/defLogo.png\" });\n\n            uni.showToast({\n              title: result.message,\n              icon: 'none' });\n\n            uni.navigateTo({\n              url: '/pages/package_other/login' });\n\n            return;\n          }\n        } else if (statusCode == 404) {\n          uni.showToast({\n            title: '网络错误--404',\n            icon: 'none' });\n\n          return;\n        }\n        resolve(result.data);\n      },\n      fail: function fail(err) {\n        if (err.errMsg == \"request:fail timeout\" || err.errMsg.includes(\"时\")) {\n          uni.showToast({\n            title: '请求超时',\n            icon: 'none' });\n\n        } else if (err.errMsg == \"request:fail\") {\n          // uni.showToast({\n          // \ttitle: '网络错误--'+err.errMsg,\n          // \ticon: 'none'\n          // });\n        }\n        reject(err);\n        return;\n      } });\n\n\n\n\n\n\n\n\n\n\n  });\n\n};\n\n/**\r\n    * 请求状态码\r\n    * @param {Object} s\r\n    */\nfunction checkCode(s) {\n  return new Promise(function (resolve, reject) {\n    switch (Number(s)) {\n      case 1:\n        uni.showToast({\n          title: '服务器 ' + result.status + ' 错误',\n          icon: 'none' });\n\n        resolve(result.data);\n        return;\n        break;\n      case 401:\n        uni.setStorageSync('userInfo', {\n          defaultHeadImg: \"/static/images/icon/defLogo.png\" });\n\n        uni.navigateTo({\n          url: '/pages/package_other/login' });\n\n        return;\n        break;\n      default:\n        break;}\n\n\n  });\n}\n\n\n/**\r\n   * get 网络请求\r\n   */\nfunction getRequest(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return request(url, data, \"GET\", config);\n}\n\n/**\r\n   * post 网络请求 \r\n   */\nfunction postRequest(url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var timeout = arguments.length > 3 ? arguments[3] : undefined;\n  return request(url, data, \"POST\", config, timeout);\n}\n\n/**\r\n   * 文件上传\r\n   */\n\nfunction ajaxUploadFile(url, tempFilePaths) {var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var headerConfig = getCommonHeader(1);\n  return new Promise(function (resolve, reject) {\n    __f__(\"log\", '上传的图片文件为' + tempFilePaths, \" at common/http.js:190\");\n    var uploadTask = uni.uploadFile({\n      url: url,\n      filePath: tempFilePaths.file,\n      name: 'file',\n      header: headerConfig,\n      success: function success(res) {\n        // 服务器 非200 错误\n        if (res.status && res.status != 200) {\n          uni.showToast({\n            title: '服务器 ' + res.status + ' 错误',\n            icon: 'none' });\n\n          resolve(res);\n          return;\n        } else if (res.data.code == 2001) {//token过期了，重新登录\n          uni.reLaunch({\n            url: '/pages/package_other/login/index' });\n\n        }\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        if (err.errMsg.indexOf('url not in domain list') > -1) {\n          uni.showToast({\n            title: '请求url不在合法域名中，请打开调试模式',\n            icon: 'none' });\n\n        }\n        reject(err);\n      } });\n\n    uploadTask.onProgressUpdate(function (res) {\n      __f__(\"log\", '上传进度', res.progress, \" at common/http.js:223\");\n    });\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2h0dHAuanMiXSwibmFtZXMiOlsiZ2V0Q29tbW9uSGVhZGVyIiwiaW1nVXBsb2FkIiwiaGVhZGVyIiwidG9rZW4iLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsImFqYXhUaW1lcyIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiY29uZmlnIiwidGltZW91dCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwiX2hlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwic3RhdHVzQ29kZSIsInJlc3VsdCIsInN0YXR1cyIsInNob3dUb2FzdCIsIm1lc3NhZ2UiLCJpY29uIiwibm9Mb2dpbkNhblNlZSIsInNldFN0b3JhZ2VTeW5jIiwiZGVmYXVsdEhlYWRJbWciLCJuYXZpZ2F0ZVRvIiwiZmFpbCIsImVyciIsImVyck1zZyIsImluY2x1ZGVzIiwiY2hlY2tDb2RlIiwicyIsIk51bWJlciIsImdldFJlcXVlc3QiLCJwb3N0UmVxdWVzdCIsImFqYXhVcGxvYWRGaWxlIiwidGVtcEZpbGVQYXRocyIsImhlYWRlckNvbmZpZyIsInVwbG9hZFRhc2siLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJmaWxlIiwibmFtZSIsImNvZGUiLCJyZUxhdW5jaCIsImluZGV4T2YiLCJvblByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiJ5UkFBQSxpRjtBQUNBOzs7QUFHQSxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUNuQyxNQUFJQyxNQUFKO0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ2RDLFVBQU0sR0FBRztBQUNSLHNCQUFnQixxQkFEUixFQUFUOztBQUdBLEdBSkQsTUFJTztBQUNOQSxVQUFNLEdBQUc7QUFDUixzQkFBZ0IsZ0NBRFIsRUFBVDs7QUFHQTs7QUFFRDtBQUNBLE1BQUlDLEtBQUssR0FBR0MsR0FBRyxDQUFDQyxj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QUFJO0FBQ2IsWUFBSUEsR0FBRyxDQUFDQyxNQUFKLENBQVdpQixPQUFYLENBQW1CLHdCQUFuQixJQUErQyxDQUFDLENBQXBELEVBQXVEO0FBQ3REaEQsYUFBRyxDQUFDc0IsU0FBSixDQUFjO0FBQ2JaLGlCQUFLLEVBQUUsc0JBRE07QUFFYmMsZ0JBQUksRUFBRSxNQUZPLEVBQWQ7O0FBSUE7QUFDRFQsY0FBTSxDQUFDZSxHQUFELENBQU47QUFDQSxPQTdCOEIsRUFBZixDQUFqQjs7QUErQkFXLGNBQVUsQ0FBQ1EsZ0JBQVgsQ0FBNEIsVUFBQ2hDLEdBQUQsRUFBUztBQUNwQyxtQkFBWSxNQUFaLEVBQW9CQSxHQUFHLENBQUNpQyxRQUF4QjtBQUNBLEtBRkQ7QUFHQSxHQXBDTSxDQUFQO0FBcUNBLEMiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbW9uSnMgZnJvbSAnLi9jb21tb24uanMnXHJcbi8qKlxyXG4gKiDojrflj5ZoZWFkZXJcclxuICovXHJcbmZ1bmN0aW9uIGdldENvbW1vbkhlYWRlcihpbWdVcGxvYWQpIHtcclxuXHRsZXQgaGVhZGVyO1xyXG5cdGlmIChpbWdVcGxvYWQpIHtcclxuXHRcdGhlYWRlciA9IHtcclxuXHRcdFx0J0NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aGVhZGVyID0ge1xyXG5cdFx0XHQnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvLyDlpoLmnpx0b2tlbuacieWAvOWImeW4puS4ilxyXG5cdGxldCB0b2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYyhcImFjY2Vzc3Rva2VuXCIpO1xyXG5cdC8vIGxldCB0b2tlbiA9IFwiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKemRXSWlPaUl4TXpBM056ZzROVFE1T1NJc0ltTnlaV0YwWldRaU9qRTFOell5TWpZNU9UUTBOemdzSW1WNGNDSTZNVFUzTmpNeE16TTVOSDAuS1NSSWlTaUZ0ZFVrWEZGN1hUVVItdWVhT21kWmZXOTNNNVF1dVZvUFcybklaNURObEVacExwNl85bHZJckwyTVcxTG1abk9kclRUS28xdTJObFlFRFFcIjtcclxuXHRoZWFkZXIgPSB7XHJcblx0XHQnYWNjZXNzdG9rZW4nOiB0b2tlbiB8fCAnMCcsXHJcblxyXG5cclxuXHJcblxyXG5cdFx0J2VxdWlwbWVudCc6ICdhcHAnLFxyXG5cclxuXHJcblxyXG5cclxuXHR9XHJcblx0cmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcblxyXG4vKiogXHJcbiAqIOe9kee7nOivt+axglxyXG4gKiBjb25maWdbJ25vTG9naW5DYW5TZWUnXSA6ICDml6DpnIDnmbvpmYbkuZ/lj6/mn6XnnIsgICAgIHJlc29sdmUoJ3NlZU90aGVyJylcclxuICovXHJcblxyXG5sZXQgYWpheFRpbWVzID0gMDtcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QodXJsLCBkYXRhID0ge30sIG1ldGhvZCA9IFwiUE9TVFwiLCBjb25maWcgPSB7fSwgdGltZW91dCA9IDEwMDAwKSB7XHJcblx0XHJcblx0YWpheFRpbWVzKys7XHJcblx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdHRpdGxlOifliqDovb3kuK0uLi4nLFxyXG5cdFx0bWFzazp0cnVlXHJcblx0fSlcclxuXHRcclxuXHQvLyBoZWFkZXIg56m65YC85aSE55CGXHJcblx0bGV0IF9oZWFkZXIgPSBnZXRDb21tb25IZWFkZXIoKTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdHRpbWVvdXQ6IHRpbWVvdXQsXHJcblx0XHRcdGhlYWRlcjogX2hlYWRlcixcclxuXHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdHN1Y2Nlc3M6IChyZXMgPT4ge1xyXG5cdFx0XHRcdCBcclxuXHJcblx0XHRcdFx0IGFqYXhUaW1lcy0tO1xyXG5cdFx0XHRcdCBcdGlmKGFqYXhUaW1lcz09PTApe1xyXG5cdFx0XHRcdCBcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0IFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDmtY/op4jlmajnirbmgIHnoIFcclxuXHRcdFx0XHR2YXIgc3RhdHVzQ29kZT1yZXMuc3RhdHVzQ29kZTtcclxuXHRcdFx0XHQvLyDmnI3liqHlmajov5Tlm57nmoRkYXRhXHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdC8vIOacjeWKoeWZqCDpnZ4yMDAg6ZSZ6K+vXHJcblx0XHRcdFx0aWYgKHN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRpZihyZXN1bHQuc3RhdHVzIT0xKXtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PSA0MDEpe1xyXG5cdFx0XHRcdFx0aWYoY29uZmlnLm5vTG9naW5DYW5TZWUpe1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKCdzZWVPdGhlcicpO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB7IFxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRIZWFkSW1nOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vZGVmTG9nby5wbmdcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYWNrYWdlX290aGVyL2xvZ2luJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgaWYoc3RhdHVzQ29kZSA9PSA0MDQpe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn572R57uc6ZSZ6K+vLS00MDQnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuXHRcdFx0fSksXHJcblx0XHRcdGZhaWw6IChlcnIgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIuZXJyTXNnID09IFwicmVxdWVzdDpmYWlsIHRpbWVvdXRcIiB8fCBlcnIuZXJyTXNnLmluY2x1ZGVzKFwi5pe2XCIpKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7fmsYLotoXml7YnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1lbHNlIGlmKGVyci5lcnJNc2cgPT0gXCJyZXF1ZXN0OmZhaWxcIil7XHJcblx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdC8vIFx0dGl0bGU6ICfnvZHnu5zplJnor68tLScrZXJyLmVyck1zZyxcclxuXHRcdFx0XHRcdC8vIFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiDor7fmsYLnirbmgIHnoIFcclxuICogQHBhcmFtIHtPYmplY3R9IHNcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrQ29kZShzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHN3aXRjaCAoTnVtYmVyKHMpKSB7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5ZmoICcgKyByZXN1bHQuc3RhdHVzICsgJyDplJnor68nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQwMTpcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywge1xyXG5cdFx0XHRcdFx0ZGVmYXVsdEhlYWRJbWc6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9kZWZMb2dvLnBuZ1wiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3BhY2thZ2Vfb3RoZXIvbG9naW4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogZ2V0IOe9kee7nOivt+axglxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdCh1cmwsIGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh1cmwsIGRhdGEsIFwiR0VUXCIsIGNvbmZpZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBwb3N0IOe9kee7nOivt+axgiBcclxuICovXHJcbmZ1bmN0aW9uIHBvc3RSZXF1ZXN0KHVybCwgZGF0YSA9IHt9LCBjb25maWcgPSB7fSwgdGltZW91dCkge1xyXG5cdHJldHVybiByZXF1ZXN0KHVybCwgZGF0YSwgXCJQT1NUXCIsIGNvbmZpZywgdGltZW91dCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlofku7bkuIrkvKBcclxuICovXHJcblxyXG5mdW5jdGlvbiBhamF4VXBsb2FkRmlsZSh1cmwsIHRlbXBGaWxlUGF0aHMsIGNvbmZpZyA9IHt9KSB7XHJcblx0bGV0IGhlYWRlckNvbmZpZyA9IGdldENvbW1vbkhlYWRlcigxKTtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ+S4iuS8oOeahOWbvueJh+aWh+S7tuS4uicgKyB0ZW1wRmlsZVBhdGhzKTtcclxuXHRcdHZhciB1cGxvYWRUYXNrID0gdW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHMuZmlsZSxcclxuXHRcdFx0bmFtZTogJ2ZpbGUnLFxyXG5cdFx0XHRoZWFkZXI6IGhlYWRlckNvbmZpZyxcclxuXHRcdFx0c3VjY2VzczogKHJlcyA9PiB7XHJcblx0XHRcdFx0Ly8g5pyN5Yqh5ZmoIOmdnjIwMCDplJnor69cclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1cyAmJiByZXMuc3RhdHVzICE9IDIwMCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5pyN5Yqh5ZmoICcgKyByZXMuc3RhdHVzICsgJyDplJnor68nLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDAxKSB7IC8vdG9rZW7ov4fmnJ/kuobvvIzph43mlrDnmbvlvZVcclxuXHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9wYWNrYWdlX290aGVyL2xvZ2luL2luZGV4JyxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0ZmFpbDogKGVyciA9PiB7XHJcblx0XHRcdFx0aWYgKGVyci5lcnJNc2cuaW5kZXhPZigndXJsIG5vdCBpbiBkb21haW4gbGlzdCcpID4gLTEpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+axgnVybOS4jeWcqOWQiOazleWfn+WQjeS4re+8jOivt+aJk+W8gOiwg+ivleaooeW8jycsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0XHR1cGxvYWRUYXNrLm9uUHJvZ3Jlc3NVcGRhdGUoKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5LiK5Lyg6L+b5bqmJywgcmVzLnByb2dyZXNzKVxyXG5cdFx0fSlcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG5cdGdldENvbW1vbkhlYWRlcixcclxuXHRyZXF1ZXN0LFxyXG5cdGdldFJlcXVlc3QsXHJcblx0cG9zdFJlcXVlc3QsXHJcblx0YWpheFVwbG9hZEZpbGVcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/common/common.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 10);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var timeFormat = {\n  UNITS: {\n    '年': 31557600000,\n    '月': 2629800000,\n    '天': 86400000,\n    '小时': 3600000,\n    '分钟': 60000,\n    '秒': 1000 },\n\n  humanize: function humanize(milliseconds) {\n    var humanize = '';\n    for (var key in this.UNITS) {\n      if (milliseconds >= this.UNITS[key]) {\n        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';\n        break;\n      }\n    }\n    return humanize || '刚刚';\n  },\n  // 2019-12-20 02:33:30   ---->    2019年12月03日01时10分     t:是否显示刚刚  默认：false显示\n  format: function format(dateStr, t) {\n    var date = this.parse(dateStr);\n    var diff = Date.now() - date.getTime();\n    if (diff < this.UNITS['天'] && !t) {\n      return this.humanize(diff);\n    }\n    var _format = function _format(number) {\n      return number < 10 ? '0' + number : number;\n    };\n    return date.getFullYear() + '年' + _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + '日' +\n    _format(date.getHours()) + '时' + _format(date.getMinutes()) + '分';\n  },\n  noYearFormat: function noYearFormat(dateStr, t) {\n    var date = this.parse(dateStr);\n    var diff = Date.now() - date.getTime();\n    if (diff < this.UNITS['天'] && !t) {\n      return this.humanize(diff);\n    }\n    var _format = function _format(number) {\n      return number < 10 ? '0' + number : number;\n    };\n    return _format(date.getMonth() + 1) + '月' + _format(date.getDate()) + '日' +\n    _format(date.getHours()) + '时' + _format(date.getMinutes()) + '分';\n  },\n  parse: function parse(str) {//将\"yyyy-mm-dd HH:MM:ss\"格式的字符串，转化为一个Date对象\n    var a = str.split(/[^0-9]/);\n    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);\n  } };\n\n\n\n/**\n        * \n        * @param {Object} n 时间戳转字符串\n        * 1586515001 ----> 2020-08-09 12:00:00\n        */\nfunction numberToDate(n) {\n  var date = new Date(n * 1000);\n  var _format = function _format(number) {\n    return number < 10 ? '0' + number : number;\n  };\n  var date_str = date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDay()) + ' ' +\n  _format(date.getHours()) + ':' + _format(date.getMinutes()) + ':' + _format(date.getSeconds());\n  __f__(\"log\", date_str, \" at common/common.js:64\");\n  __f__(\"log\", timeFormat.noYearFormat(date_str), \" at common/common.js:65\");\n  return timeFormat.noYearFormat(date_str);\n}\n\n\n/**\n   * 两个时间的相差天数\n   * @param {Object} sDate1\n   * @param {Object} sDate2\n   */\nfunction DateDiff(start, end) {\n  var times = new Date(end).getTime() - new Date(start).getTime();\n  var days = Math.floor(times / (24 * 3600 * 1000));\n  var hours = Math.floor(times % (24 * 3600 * 1000) / (3600 * 1000));\n  var month = Math.floor(times % (24 * 3600 * 1000) / (60 * 1000)) % 60;\n  return (days ? days + '天' : '') + (hours ? hours + '小时' : '') + (month ? month + '分钟' : '');\n}\n\n// 新闻类资讯文本超出省略号\nvar newContentFormat = function newContentFormat(str) {\n  var newStr, flag;\n  if (str.length > 78) {\n    newStr = str.substring(0, 70) + '......';\n    flag = true;\n  } else {\n    newStr = str;\n    flag = false;\n  }\n  return [newStr, flag];\n};\n\n// 跳转\nvar navTo = function navTo(url) {\n  uni.navigateTo({\n    url: url });\n\n};\n// 返回\nvar navBack = function navBack() {\n\n  uni.navigateBack();\n\n\n\n\n};\n\n// 重定向\nvar closeNavTo = function closeNavTo(url) {\n  uni.redirectTo({\n    url: url });\n\n};\n\n/**\n    * 判断运行在哪个平台\n    */\nfunction whichApp() {\n  return new Promise(function (resolve, reject) {\n    switch (uni.getSystemInfoSync().platform) {\n      case 'android':\n        __f__(\"log\", '运行Android上', \" at common/common.js:126\");\n        resolve(1);\n        break;\n      case 'ios':\n        __f__(\"log\", '运行iOS上', \" at common/common.js:130\");\n        resolve(2);\n        break;\n      default:\n        __f__(\"log\", '运行在开发者工具上', \" at common/common.js:134\");\n        break;}\n\n  });\n}\n\n\n/**\n   * 刷新页面\n   */\nfunction refrashPage() {\n  var pages = getCurrentPages();\n  var page = pages[pages.length - 1];\n  page.onLoad();\n}\n\n\n/**\n   * 上一个页面\n   * @param {Object} beforTwo  上上个页面\n   */\nfunction getBeforePage(beforTwo) {\n  var that = this;\n  var pages = getCurrentPages(); //当前页面栈  \n  var beforePage;\n  if (pages.length > 1) {\n    beforePage = beforTwo ? pages[pages.length - 3] : pages[pages.length - 2]; //获取上一个页面实例对象  \n  }\n  return beforePage;\n\n}\n\n\n\n// 弹窗\nvar uniMsg = function uniMsg(msg, type) {\n  if (type == 'success') {\n    uni.showToast({\n      icon: 'success',\n      title: msg,\n      duration: 2000 });\n\n  } else if (type == 'error') {\n    uni.showToast({\n      icon: '',\n      title: msg,\n      duration: 2000 });\n\n  } else {\n    uni.showToast({\n      icon: 'none',\n      title: msg,\n      duration: 2000 });\n\n  }\n};\n\n// 获取form表单值\nvar getFomrValue = function getFomrValue(t, paramArr) {\n  var formDatas = paramArr.map(function (item) {\n    return t.$refs[item.ref][0].returnVal();\n  });\n  return formDatas;\n};\n\n\nvar isOpenGps = function isOpenGps() {\n  return new Promise(function (resolve, reject) {\n    var system = uni.getSystemInfoSync(); // 获取系统信息\n    __f__(\"log\", JSON.stringify(system), \" at common/common.js:203\");\n    if (system.platform === 'android') {// 判断平台\n      var context = plus.android.importClass(\"android.content.Context\");\n      var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n      var main = plus.android.runtimeMainActivity();\n      var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n      if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {\n        uni.showModal({\n          title: '提示',\n          content: '请打开定位服务功能',\n          showCancel: false, // 不显示取消按钮\n          success: function success() {\n            if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {\n              var Intent = plus.android.importClass('android.content.Intent');\n              var Settings = plus.android.importClass('android.provider.Settings');\n              var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);\n              main.startActivity(intent); // 打开系统设置GPS服务页面\n            } else {\n              resolve(1);\n            }\n          } });\n\n      }\n    }\n  });\n};\n\n\n// 定位\nvar getCity = function getCity() {\n  return new Promise(function (resolve, reject) {\n    if (checkPermission) {\n      uni.getLocation({\n        type: 'wgs84',\n        geocode: true,\n        success: function success(res) {\n          resolve(res);\n        },\n        fail: function fail(err) {\n          reject(err);\n        } });\n\n    }\n  });\n};\n\n\n/**\n    * 手动定位\n    */\nvar changeCity = function changeCity() {\n  return new Promise(function (resolve, reject) {\n    isOpenGps().then(function (res) {\n      if (res) {\n        uni.chooseLocation({\n          success: function success(res) {\n            resolve(res);\n          },\n          fail: function fail(err) {\n            reject(err);\n          } });\n\n      }\n    });\n  });\n};\n\n\n// 获取经纬度\nfunction formatLocation(longitude, latitude) {\n  if (typeof longitude === 'string' && typeof latitude === 'string') {\n    longitude = parseFloat(longitude);\n    latitude = parseFloat(latitude);\n  }\n  longitude = longitude.toFixed(2);\n  latitude = latitude.toFixed(2);\n  return {\n    longitude: longitude.toString().split('.'),\n    latitude: latitude.toString().split('.') };\n\n}\n\n// 选择地点\nvar chooseLocation = function chooseLocation() {\n  return new Promise(function (resolve, reject) {\n    uni.chooseLocation({\n      success: function success(res) {\n        resolve(res);\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n\nvar checkPermission = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(code) {var type, status;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            type = code ? code - 1 : this.sourceTypeIndex;if (!\n            permision.isIOS) {_context.next = 7;break;}_context.next = 4;return permision.requestIOS(sourceType[type][0]);case 4:_context.t0 = _context.sent;_context.next = 10;break;case 7:_context.next = 9;return (\n              permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :\n              'android.permission.READ_EXTERNAL_STORAGE'));case 9:_context.t0 = _context.sent;case 10:status = _context.t0;\n            if (status === null || status === 1) {\n              status = 1;\n            } else {\n              uni.showModal({\n                content: \"没有开启权限\",\n                confirmText: \"设置\",\n                success: function success(res) {\n                  if (res.confirm) {\n                    permision.gotoAppSetting();\n                  }\n                } });\n\n            }return _context.abrupt(\"return\",\n\n            status);case 13:case \"end\":return _context.stop();}}}, _callee, this);}));return function checkPermission(_x) {return _ref.apply(this, arguments);};}();\n\n\n// 选择媒体文件\nfunction chooseImage(len) {var _this = this;\n  return new Promise(function (resolve, reject) {\n    uni.chooseImage({\n      sourceType: ['camera', 'album'],\n      sizeType: ['compressed', 'original'],\n      count: len,\n      success: function success(res) {\n        __f__(\"log\", res.tempFilePaths, \" at common/common.js:329\");\n        resolve(res.tempFilePaths);\n      },\n      fail: function fail(err) {\n\n        if (err['code'] && err.code !== 0 && _this.sourceTypeIndex === 2) {\n          checkPermission(err.code);\n        }\n\n      } });\n\n  });\n}\n\n\n//图片转base64\nfunction urlTobase64(url) {\n\n\n  return new Promise(function (resolve, reject) {\n    plus.zip.compressImage({\n      src: url,\n      dst: \"_doc/temp/\".concat(+new Date(), \".jpg\"),\n      quality: 70 },\n\n    function (_ref2) {var target = _ref2.target,size = _ref2.size;\n      plus.io.resolveLocalFileSystemURL(target, function (file) {\n        var fileReader = new plus.io.FileReader();\n        fileReader.readAsDataURL(file);\n        fileReader.onloadend = function (_ref3) {var result = _ref3.target.result;\n          resolve(result);\n        };\n      });\n    },\n    function (e) {\n      reject(e);\n    });\n  });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n}\n\n/**\n   * 预览图片\n   * @param {String} e 当前图片的data-src\n   * @param {Array} arr 要预览的图片数组\n   * @param {Number} i 要预览的图片索引\n   */\nfunction previewImage(e, arr, i) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  uni.previewImage({\n    current: e,\n    urls: arr,\n    indicator: 'default' });\n\n\n\n}\n\n\n\n/**\n   * 删除数组的某一项\n   * @param {Object} arr 需要操作的数组\n   * @param {Object} key 需要对比的key\n   * @param {Object} val 需要对比的值\n   */\nfunction deleteArrIndex(arr, key, val) {\n  return arr.splice(arr.findIndex(function (item) {return item[key] === val;}), 1);\n}\n\n\n// 是否登陆\nfunction isLogin() {\n  return new Promise(function (resolve, reject) {\n    if (uni.getStorageSync('accesstoken')) {\n      resolve(1);\n    } else {\n      __f__(\"log\", '没有登陆', \" at common/common.js:441\");\n      navTo('/pages/package_other/login');\n    }\n  });\n}\n\n\n// 跳转至的登陆页\nfunction toLoginPage() {\n  uni.navigateTo({\n    url: '/pages/package_other/login' });\n\n}\n\n\n/**\n   * app 分享\n   * type:   :    0:图文   1：纯文字    2：纯图片    3：音乐    4：视频     5:小程序\n   * scene   :    WXSceneSession:分享到聊天界面     WXSenceTimeline:分享到朋友圈     WXSceneFavorite:分享到微信收藏\n   */\nfunction shareYzkkToWx(option) {\n  return new Promise(function (resolve, reject) {\n    var sceneList = ['WXSceneSession', 'WXSenceTimeline', 'WXSceneFavorite'];\n    uni.share({\n      provider: \"weixin\",\n      scene: sceneList[option.scene],\n      type: option.type || 0,\n      href: option.link,\n      title: option.title,\n      summary: option.desc,\n      imageUrl: option.shareImg || '',\n      success: function success(res) {\n        __f__(\"log\", \"success:\" + JSON.stringify(res), \" at common/common.js:473\");\n        resolve(res);\n      },\n      fail: function fail(err) {\n        __f__(\"log\", \"fail:\" + JSON.stringify(err), \" at common/common.js:477\");\n        reject(err);\n      } });\n\n  });\n}\n\n/**\n   * 数组去掉重复项    ['aa','b','c','cc','db','e'] ， ['c', 'b']  ===>  [\"aa\", \"cc\", \"db\", \"e\"]\n   * @param {Object} a  ['aa','b','c','cc','db','e']\n   * @param {Object} b  ['c', 'b']\n   */\nfunction noSame(a, b) {\n  return a.filter(function (c) {return b.findIndex(function (d) {return d === c;}) === -1;});\n}\n\n\n\nmodule.exports = {\n  shareYzkkToWx: shareYzkkToWx,\n  urlTobase64: urlTobase64,\n  isLogin: isLogin,\n  timeFormat: timeFormat,\n  numberToDate: numberToDate,\n  DateDiff: DateDiff,\n  newContentFormat: newContentFormat,\n  navTo: navTo,\n  navBack: navBack,\n  closeNavTo: closeNavTo,\n  getFomrValue: getFomrValue,\n  uniMsg: uniMsg,\n  getCity: getCity,\n  formatLocation: formatLocation,\n  chooseLocation: chooseLocation,\n  chooseImage: chooseImage,\n  previewImage: previewImage,\n  deleteArrIndex: deleteArrIndex,\n  whichApp: whichApp,\n  getBeforePage: getBeforePage,\n  changeCity: changeCity,\n  refrashPage: refrashPage,\n  toLoginPage: toLoginPage,\n  noSame: noSame };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJ0aW1lRm9ybWF0IiwiVU5JVFMiLCJodW1hbml6ZSIsIm1pbGxpc2Vjb25kcyIsImtleSIsIk1hdGgiLCJmbG9vciIsImZvcm1hdCIsImRhdGVTdHIiLCJ0IiwiZGF0ZSIsInBhcnNlIiwiZGlmZiIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwiX2Zvcm1hdCIsIm51bWJlciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwibm9ZZWFyRm9ybWF0Iiwic3RyIiwiYSIsInNwbGl0IiwibnVtYmVyVG9EYXRlIiwibiIsImRhdGVfc3RyIiwiZ2V0RGF5IiwiZ2V0U2Vjb25kcyIsIkRhdGVEaWZmIiwic3RhcnQiLCJlbmQiLCJ0aW1lcyIsImRheXMiLCJob3VycyIsIm1vbnRoIiwibmV3Q29udGVudEZvcm1hdCIsIm5ld1N0ciIsImZsYWciLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJuYXZUbyIsInVybCIsInVuaSIsIm5hdmlnYXRlVG8iLCJuYXZCYWNrIiwibmF2aWdhdGVCYWNrIiwiY2xvc2VOYXZUbyIsInJlZGlyZWN0VG8iLCJ3aGljaEFwcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybSIsInJlZnJhc2hQYWdlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwib25Mb2FkIiwiZ2V0QmVmb3JlUGFnZSIsImJlZm9yVHdvIiwidGhhdCIsImJlZm9yZVBhZ2UiLCJ1bmlNc2ciLCJtc2ciLCJ0eXBlIiwic2hvd1RvYXN0IiwiaWNvbiIsInRpdGxlIiwiZHVyYXRpb24iLCJnZXRGb21yVmFsdWUiLCJwYXJhbUFyciIsImZvcm1EYXRhcyIsIm1hcCIsIml0ZW0iLCIkcmVmcyIsInJlZiIsInJldHVyblZhbCIsImlzT3BlbkdwcyIsInN5c3RlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZXh0IiwicGx1cyIsImFuZHJvaWQiLCJpbXBvcnRDbGFzcyIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJydW50aW1lTWFpbkFjdGl2aXR5IiwibWFpblN2ciIsImdldFN5c3RlbVNlcnZpY2UiLCJMT0NBVElPTl9TRVJWSUNFIiwiaXNQcm92aWRlckVuYWJsZWQiLCJHUFNfUFJPVklERVIiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJJbnRlbnQiLCJTZXR0aW5ncyIsImludGVudCIsIkFDVElPTl9MT0NBVElPTl9TT1VSQ0VfU0VUVElOR1MiLCJzdGFydEFjdGl2aXR5IiwiZ2V0Q2l0eSIsImNoZWNrUGVybWlzc2lvbiIsImdldExvY2F0aW9uIiwiZ2VvY29kZSIsInJlcyIsImZhaWwiLCJlcnIiLCJjaGFuZ2VDaXR5IiwidGhlbiIsImNob29zZUxvY2F0aW9uIiwiZm9ybWF0TG9jYXRpb24iLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJjb2RlIiwic291cmNlVHlwZUluZGV4IiwicGVybWlzaW9uIiwiaXNJT1MiLCJyZXF1ZXN0SU9TIiwic291cmNlVHlwZSIsInJlcXVlc3RBbmRyb2lkIiwic3RhdHVzIiwiY29uZmlybVRleHQiLCJjb25maXJtIiwiZ290b0FwcFNldHRpbmciLCJjaG9vc2VJbWFnZSIsImxlbiIsInNpemVUeXBlIiwiY291bnQiLCJ0ZW1wRmlsZVBhdGhzIiwidXJsVG9iYXNlNjQiLCJ6aXAiLCJjb21wcmVzc0ltYWdlIiwic3JjIiwiZHN0IiwicXVhbGl0eSIsInRhcmdldCIsInNpemUiLCJpbyIsInJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwiLCJmaWxlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmVzdWx0IiwiZSIsInByZXZpZXdJbWFnZSIsImFyciIsImkiLCJjdXJyZW50IiwidXJscyIsImluZGljYXRvciIsImRlbGV0ZUFyckluZGV4IiwidmFsIiwic3BsaWNlIiwiZmluZEluZGV4IiwiaXNMb2dpbiIsImdldFN0b3JhZ2VTeW5jIiwidG9Mb2dpblBhZ2UiLCJzaGFyZVl6a2tUb1d4Iiwib3B0aW9uIiwic2NlbmVMaXN0Iiwic2hhcmUiLCJwcm92aWRlciIsInNjZW5lIiwiaHJlZiIsImxpbmsiLCJzdW1tYXJ5IiwiZGVzYyIsImltYWdlVXJsIiwic2hhcmVJbWciLCJub1NhbWUiLCJiIiwiZmlsdGVyIiwiYyIsImQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoicXlCQUFBLElBQUlBLFVBQVUsR0FBRztBQUNoQkMsT0FBSyxFQUFFO0FBQ04sU0FBSyxXQURDO0FBRU4sU0FBSyxVQUZDO0FBR04sU0FBSyxRQUhDO0FBSU4sVUFBTSxPQUpBO0FBS04sVUFBTSxLQUxBO0FBTU4sU0FBSyxJQU5DLEVBRFM7O0FBU2hCQyxVQUFRLEVBQUUsa0JBQVNDLFlBQVQsRUFBdUI7QUFDaEMsUUFBSUQsUUFBUSxHQUFHLEVBQWY7QUFDQSxTQUFLLElBQUlFLEdBQVQsSUFBZ0IsS0FBS0gsS0FBckIsRUFBNEI7QUFDM0IsVUFBSUUsWUFBWSxJQUFJLEtBQUtGLEtBQUwsQ0FBV0csR0FBWCxDQUFwQixFQUFxQztBQUNwQ0YsZ0JBQVEsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksR0FBRyxLQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBMUIsSUFBNkNBLEdBQTdDLEdBQW1ELEdBQTlEO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsV0FBT0YsUUFBUSxJQUFJLElBQW5CO0FBQ0EsR0FsQmU7QUFtQmhCO0FBQ0FLLFFBQU0sRUFBRSxnQkFBU0MsT0FBVCxFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDNUIsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0gsT0FBWCxDQUFYO0FBQ0EsUUFBSUksSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsS0FBYUosSUFBSSxDQUFDSyxPQUFMLEVB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WSxFQUFaQSxZQWpCZ0I7QUFrQmhCTSxnQkFBYyxFQUFkQSxjQWxCZ0I7QUFtQmhCOUcsVUFBUSxFQUFSQSxRQW5CZ0I7QUFvQmhCVyxlQUFhLEVBQWJBLGFBcEJnQjtBQXFCaEJtRCxZQUFVLEVBQVZBLFVBckJnQjtBQXNCaEJ4RCxhQUFXLEVBQVhBLFdBdEJnQjtBQXVCaEI4RyxhQUFXLEVBQVhBLFdBdkJnQjtBQXdCaEJhLFFBQU0sRUFBTkEsTUF4QmdCLEVBQWpCLEMiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGltZUZvcm1hdCA9IHtcblx0VU5JVFM6IHtcblx0XHQn5bm0JzogMzE1NTc2MDAwMDAsXG5cdFx0J+aciCc6IDI2Mjk4MDAwMDAsXG5cdFx0J+WkqSc6IDg2NDAwMDAwLFxuXHRcdCflsI/ml7YnOiAzNjAwMDAwLFxuXHRcdCfliIbpkp8nOiA2MDAwMCxcblx0XHQn56eSJzogMTAwMFxuXHR9LFxuXHRodW1hbml6ZTogZnVuY3Rpb24obWlsbGlzZWNvbmRzKSB7XG5cdFx0dmFyIGh1bWFuaXplID0gJyc7XG5cdFx0Zm9yICh2YXIga2V5IGluIHRoaXMuVU5JVFMpIHtcblx0XHRcdGlmIChtaWxsaXNlY29uZHMgPj0gdGhpcy5VTklUU1trZXldKSB7XG5cdFx0XHRcdGh1bWFuaXplID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyB0aGlzLlVOSVRTW2tleV0pICsga2V5ICsgJ+WJjSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaHVtYW5pemUgfHwgJ+WImuWImic7XG5cdH0sXG5cdC8vIDIwMTktMTItMjAgMDI6MzM6MzAgICAtLS0tPiAgICAyMDE55bm0MTLmnIgwM+aXpTAx5pe2MTDliIYgICAgIHQ65piv5ZCm5pi+56S65Yia5YiaICDpu5jorqTvvJpmYWxzZeaYvuekulxuXHRmb3JtYXQ6IGZ1bmN0aW9uKGRhdGVTdHIsIHQpIHtcblx0XHR2YXIgZGF0ZSA9IHRoaXMucGFyc2UoZGF0ZVN0cilcblx0XHR2YXIgZGlmZiA9IERhdGUubm93KCkgLSBkYXRlLmdldFRpbWUoKTtcblx0XHRpZiAoZGlmZiA8IHRoaXMuVU5JVFNbJ+WkqSddICYmICF0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5odW1hbml6ZShkaWZmKTtcblx0XHR9XG5cdFx0dmFyIF9mb3JtYXQgPSBmdW5jdGlvbihudW1iZXIpIHtcblx0XHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XG5cdFx0fTtcblx0XHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgJ+W5tCcgKyBfZm9ybWF0KGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJ+aciCcgKyBfZm9ybWF0KGRhdGUuZ2V0RGF0ZSgpKSArICfml6UnICtcblx0XHRcdF9mb3JtYXQoZGF0ZS5nZXRIb3VycygpKSArICfml7YnICsgX2Zvcm1hdChkYXRlLmdldE1pbnV0ZXMoKSkgKyAn5YiGJztcblx0fSxcblx0bm9ZZWFyRm9ybWF0OiBmdW5jdGlvbihkYXRlU3RyLCB0KSB7XG5cdFx0dmFyIGRhdGUgPSB0aGlzLnBhcnNlKGRhdGVTdHIpXG5cdFx0dmFyIGRpZmYgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRUaW1lKCk7XG5cdFx0aWYgKGRpZmYgPCB0aGlzLlVOSVRTWyflpKknXSAmJiAhdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaHVtYW5pemUoZGlmZik7XG5cdFx0fVxuXHRcdHZhciBfZm9ybWF0ID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHRyZXR1cm4gKG51bWJlciA8IDEwID8gKCcwJyArIG51bWJlcikgOiBudW1iZXIpO1xuXHRcdH07XG5cdFx0cmV0dXJuIF9mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAn5pyIJyArIF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpICsgJ+aXpScgK1xuXHRcdFx0X2Zvcm1hdChkYXRlLmdldEhvdXJzKCkpICsgJ+aXticgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKSArICfliIYnO1xuXHR9LFxuXHRwYXJzZTogZnVuY3Rpb24oc3RyKSB7IC8v5bCGXCJ5eXl5LW1tLWRkIEhIOk1NOnNzXCLmoLzlvI/nmoTlrZfnrKbkuLLvvIzovazljJbkuLrkuIDkuKpEYXRl5a+56LGhXG5cdFx0dmFyIGEgPSBzdHIuc3BsaXQoL1teMC05XS8pO1xuXHRcdHJldHVybiBuZXcgRGF0ZShhWzBdLCBhWzFdIC0gMSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBuIOaXtumXtOaIs+i9rOWtl+espuS4slxuICogMTU4NjUxNTAwMSAtLS0tPiAyMDIwLTA4LTA5IDEyOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIG51bWJlclRvRGF0ZShuKSB7XG5cdHZhciBkYXRlID0gbmV3IERhdGUobiAqIDEwMDApO1xuXHR2YXIgX2Zvcm1hdCA9IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdHJldHVybiAobnVtYmVyIDwgMTAgPyAoJzAnICsgbnVtYmVyKSA6IG51bWJlcik7XG5cdH07XG5cdHZhciBkYXRlX3N0ciA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIF9mb3JtYXQoZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLScgKyBfZm9ybWF0KGRhdGUuZ2V0RGF5KCkpICsgJyAnICtcblx0XHRfZm9ybWF0KGRhdGUuZ2V0SG91cnMoKSkgKyAnOicgKyBfZm9ybWF0KGRhdGUuZ2V0TWludXRlcygpKSArICc6JyArIF9mb3JtYXQoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXHRjb25zb2xlLmxvZyhkYXRlX3N0cik7XG5cdGNvbnNvbGUubG9nKHRpbWVGb3JtYXQubm9ZZWFyRm9ybWF0KGRhdGVfc3RyKSk7XG5cdHJldHVybiB0aW1lRm9ybWF0Lm5vWWVhckZvcm1hdChkYXRlX3N0cik7XG59XG5cblxuLyoqXG4gKiDkuKTkuKrml7bpl7TnmoTnm7jlt67lpKnmlbBcbiAqIEBwYXJhbSB7T2JqZWN0fSBzRGF0ZTFcbiAqIEBwYXJhbSB7T2JqZWN0fSBzRGF0ZTJcbiAqL1xuZnVuY3Rpb24gRGF0ZURpZmYoc3RhcnQsIGVuZCkge1xuXHR2YXIgdGltZXMgPSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCk7XG5cdHZhciBkYXlzID0gTWF0aC5mbG9vcih0aW1lcyAvICgyNCAqIDM2MDAgKiAxMDAwKSk7XG5cdHZhciBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVzICUgKDI0ICogMzYwMCAqIDEwMDApKSAvICgzNjAwICogMTAwMCkpO1xuXHR2YXIgbW9udGggPSBNYXRoLmZsb29yKCh0aW1lcyAlICgyNCAqIDM2MDAgKiAxMDAwKSkgLyAoNjAgKiAxMDAwKSkgJSA2MDtcblx0cmV0dXJuIChkYXlzID8gZGF5cyArICflpKknIDogJycpICsgKGhvdXJzID8gaG91cnMgKyAn5bCP5pe2JyA6ICcnKSArIChtb250aCA/IG1vbnRoICsgJ+WIhumSnycgOiAnJyk7XG59XG5cbi8vIOaWsOmXu+exu+i1hOiur+aWh+acrOi2heWHuuecgeeVpeWPt1xudmFyIG5ld0NvbnRlbnRGb3JtYXQgPSBmdW5jdGlvbihzdHIpIHtcblx0dmFyIG5ld1N0ciwgZmxhZztcblx0aWYgKHN0ci5sZW5ndGggPiA3OCkge1xuXHRcdG5ld1N0ciA9IHN0ci5zdWJzdHJpbmcoMCwgNzApICsgJy4uLi4uLic7XG5cdFx0ZmxhZyA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0bmV3U3RyID0gc3RyO1xuXHRcdGZsYWcgPSBmYWxzZTtcblx0fVxuXHRyZXR1cm4gW25ld1N0ciwgZmxhZ11cbn1cblxuLy8g6Lez6L2sXG52YXIgbmF2VG8gPSBmdW5jdGlvbih1cmwpIHtcblx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdHVybFxuXHR9KVxufVxuLy8g6L+U5ZueXG52YXIgbmF2QmFjayA9IGZ1bmN0aW9uKCkge1xuXG5cdHVuaS5uYXZpZ2F0ZUJhY2soKVxuXG5cblxuXG59XG5cbi8vIOmHjeWumuWQkVxudmFyIGNsb3NlTmF2VG8gPSBmdW5jdGlvbih1cmwpIHtcblx0dW5pLnJlZGlyZWN0VG8oe1xuXHRcdHVybFxuXHR9KVxufVxuXG4vKipcbiAqIOWIpOaWrei/kOihjOWcqOWTquS4quW5s+WPsFxuICovXG5mdW5jdGlvbiB3aGljaEFwcCgpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRzd2l0Y2ggKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtKSB7XG5cdFx0XHRjYXNlICdhbmRyb2lkJzpcblx0XHRcdFx0Y29uc29sZS5sb2coJ+i/kOihjEFuZHJvaWTkuIonKVxuXHRcdFx0XHRyZXNvbHZlKDEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaW9zJzpcblx0XHRcdFx0Y29uc29sZS5sb2coJ+i/kOihjGlPU+S4iicpXG5cdFx0XHRcdHJlc29sdmUoMilcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L+Q6KGM5Zyo5byA5Y+R6ICF5bel5YW35LiKJylcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KVxufVxuXG5cbi8qKlxuICog5Yi35paw6aG16Z2iXG4gKi9cbmZ1bmN0aW9uIHJlZnJhc2hQYWdlKCl7XG5cdGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xuXHRsZXQgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xuXHRwYWdlLm9uTG9hZCgpXG59XG5cblxuLyoqXG4gKiDkuIrkuIDkuKrpobXpnaJcbiAqIEBwYXJhbSB7T2JqZWN0fSBiZWZvclR3byAg5LiK5LiK5Liq6aG16Z2iXG4gKi9cbmZ1bmN0aW9uIGdldEJlZm9yZVBhZ2UoYmVmb3JUd28pIHtcblx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpOyAvL+W9k+WJjemhtemdouagiCAgXG5cdHZhciBiZWZvcmVQYWdlO1xuXHRpZiAocGFnZXMubGVuZ3RoID4gMSkge1xuXHRcdGJlZm9yZVBhZ2UgPSBiZWZvclR3byA/IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDNdIDogcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v6I635Y+W5LiK5LiA5Liq6aG16Z2i5a6e5L6L5a+56LGhICBcblx0fVxuXHRyZXR1cm4gYmVmb3JlUGFnZTtcblxufVxuXG5cblxuLy8g5by556qXXG52YXIgdW5pTXNnID0gZnVuY3Rpb24obXNnLCB0eXBlKSB7XG5cdGlmICh0eXBlID09ICdzdWNjZXNzJykge1xuXHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGl0bGU6IG1zZyxcblx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0fSlcblx0fSBlbHNlIGlmICh0eXBlID09ICdlcnJvcicpIHtcblx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdGljb246ICcnLFxuXHRcdFx0dGl0bGU6IG1zZyxcblx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0fSlcblx0fSBlbHNlIHtcblx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdGljb246ICdub25lJyxcblx0XHRcdHRpdGxlOiBtc2csXG5cdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdH0pXG5cdH1cbn1cblxuLy8g6I635Y+WZm9ybeihqOWNleWAvFxudmFyIGdldEZvbXJWYWx1ZSA9IGZ1bmN0aW9uKHQsIHBhcmFtQXJyKSB7XG5cdHZhciBmb3JtRGF0YXMgPSBwYXJhbUFyci5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gdC4kcmVmc1tpdGVtLnJlZl1bMF0ucmV0dXJuVmFsKClcblx0fSlcblx0cmV0dXJuIGZvcm1EYXRhc1xufVxuXG5cbnZhciBpc09wZW5HcHMgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgc3lzdGVtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7IC8vIOiOt+WPluezu+e7n+S/oeaBr1xuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN5c3RlbSkpO1xuXHRcdGlmIChzeXN0ZW0ucGxhdGZvcm0gPT09ICdhbmRyb2lkJykgeyAvLyDliKTmlq3lubPlj7Bcblx0XHRcdHZhciBjb250ZXh0ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkNvbnRleHRcIik7XG5cdFx0XHR2YXIgbG9jYXRpb25NYW5hZ2VyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5sb2NhdGlvbi5Mb2NhdGlvbk1hbmFnZXJcIik7XG5cdFx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG5cdFx0XHR2YXIgbWFpblN2ciA9IG1haW4uZ2V0U3lzdGVtU2VydmljZShjb250ZXh0LkxPQ0FUSU9OX1NFUlZJQ0UpO1xuXHRcdFx0aWYgKCFtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpKSB7XG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRcdFx0XHRjb250ZW50OiAn6K+35omT5byA5a6a5L2N5pyN5Yqh5Yqf6IO9Jyxcblx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSwgLy8g5LiN5pi+56S65Y+W5raI5oyJ6ZKuXG5cdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdGlmICghbWFpblN2ci5pc1Byb3ZpZGVyRW5hYmxlZChsb2NhdGlvbk1hbmFnZXIuR1BTX1BST1ZJREVSKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmNvbnRlbnQuSW50ZW50Jyk7XG5cdFx0XHRcdFx0XHRcdHZhciBTZXR0aW5ncyA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncycpO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW50ZW50ID0gbmV3IEludGVudChTZXR0aW5ncy5BQ1RJT05fTE9DQVRJT05fU09VUkNFX1NFVFRJTkdTKTtcblx0XHRcdFx0XHRcdFx0bWFpbi5zdGFydEFjdGl2aXR5KGludGVudCk7IC8vIOaJk+W8gOezu+e7n+iuvue9rkdQU+acjeWKoemhtemdolxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgxKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufVxuXG5cbi8vIOWumuS9jVxudmFyIGdldENpdHkgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAoY2hlY2tQZXJtaXNzaW9uKSB7XG5cdFx0XHR1bmkuZ2V0TG9jYXRpb24oe1xuXHRcdFx0XHR0eXBlOiAnd2dzODQnLFxuXHRcdFx0XHRnZW9jb2RlOiB0cnVlLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KVxufVxuXG5cbi8qKlxuICog5omL5Yqo5a6a5L2NXG4gKi9cbnZhciBjaGFuZ2VDaXR5ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aXNPcGVuR3BzKCkudGhlbihyZXMgPT4ge1xuXHRcdFx0aWYgKHJlcykge1xuXHRcdFx0XHR1bmkuY2hvb3NlTG9jYXRpb24oe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufVxuXG5cbi8vIOiOt+WPlue7j+e6rOW6plxuZnVuY3Rpb24gZm9ybWF0TG9jYXRpb24obG9uZ2l0dWRlLCBsYXRpdHVkZSkge1xuXHRpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGxhdGl0dWRlID09PSAnc3RyaW5nJykge1xuXHRcdGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKVxuXHRcdGxhdGl0dWRlID0gcGFyc2VGbG9hdChsYXRpdHVkZSlcblx0fVxuXHRsb25naXR1ZGUgPSBsb25naXR1ZGUudG9GaXhlZCgyKVxuXHRsYXRpdHVkZSA9IGxhdGl0dWRlLnRvRml4ZWQoMilcblx0cmV0dXJuIHtcblx0XHRsb25naXR1ZGU6IGxvbmdpdHVkZS50b1N0cmluZygpLnNwbGl0KCcuJyksXG5cdFx0bGF0aXR1ZGU6IGxhdGl0dWRlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVxuXHR9XG59XG5cbi8vIOmAieaLqeWcsOeCuVxudmFyIGNob29zZUxvY2F0aW9uID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dW5pLmNob29zZUxvY2F0aW9uKHtcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0cmVzb2x2ZShyZXMpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pO1xufVxuXG52YXIgY2hlY2tQZXJtaXNzaW9uID0gYXN5bmMgZnVuY3Rpb24oY29kZSkge1xuXHRsZXQgdHlwZSA9IGNvZGUgPyBjb2RlIC0gMSA6IHRoaXMuc291cmNlVHlwZUluZGV4O1xuXHRsZXQgc3RhdHVzID0gcGVybWlzaW9uLmlzSU9TID8gYXdhaXQgcGVybWlzaW9uLnJlcXVlc3RJT1Moc291cmNlVHlwZVt0eXBlXVswXSkgOlxuXHRcdGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCh0eXBlID09PSAwID8gJ2FuZHJvaWQucGVybWlzc2lvbi5DQU1FUkEnIDpcblx0XHRcdCdhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFJyk7XG5cdGlmIChzdGF0dXMgPT09IG51bGwgfHwgc3RhdHVzID09PSAxKSB7XG5cdFx0c3RhdHVzID0gMTtcblx0fSBlbHNlIHtcblx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdGNvbnRlbnQ6IFwi5rKh5pyJ5byA5ZCv5p2D6ZmQXCIsXG5cdFx0XHRjb25maXJtVGV4dDogXCLorr7nva5cIixcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFNldHRpbmcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRyZXR1cm4gc3RhdHVzO1xufVxuXG4vLyDpgInmi6nlqpLkvZPmlofku7ZcbmZ1bmN0aW9uIGNob29zZUltYWdlKGxlbikge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHVuaS5jaG9vc2VJbWFnZSh7XG5cdFx0XHRzb3VyY2VUeXBlOiBbJ2NhbWVyYScsICdhbGJ1bSddLFxuXHRcdFx0c2l6ZVR5cGU6IFsnY29tcHJlc3NlZCcsICdvcmlnaW5hbCddLFxuXHRcdFx0Y291bnQ6IGxlbixcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aHMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlcy50ZW1wRmlsZVBhdGhzKTtcblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cblx0XHRcdFx0aWYgKGVyclsnY29kZSddICYmIGVyci5jb2RlICE9PSAwICYmIHRoaXMuc291cmNlVHlwZUluZGV4ID09PSAyKSB7XG5cdFx0XHRcdFx0Y2hlY2tQZXJtaXNzaW9uKGVyci5jb2RlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn1cblxuXG4vL+WbvueJh+i9rGJhc2U2NFxuZnVuY3Rpb24gdXJsVG9iYXNlNjQodXJsKSB7XG5cdFxuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7ICBcblx0ICAgICAgICBwbHVzLnppcC5jb21wcmVzc0ltYWdlKHsgIFxuXHQgICAgICAgICAgc3JjOiB1cmwsICBcblx0ICAgICAgICAgIGRzdDogYF9kb2MvdGVtcC8keytuZXcgRGF0ZSgpfS5qcGdgLCAgXG5cdCAgICAgICAgICBxdWFsaXR5OiA3MCwgIFxuXHQgICAgICAgIH0sICBcblx0ICAgICAgICAoeyB0YXJnZXQsIHNpemUgfSkgPT4geyAgXG5cdCAgICAgICAgICBwbHVzLmlvLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodGFyZ2V0LCAoZmlsZSkgPT4geyAgXG5cdCAgICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgcGx1cy5pby5GaWxlUmVhZGVyKCk7ICBcblx0ICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpOyAgXG5cdCAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkZW5kID0gKHsgdGFyZ2V0OiB7IHJlc3VsdCB9IH0pID0+IHsgIFxuXHQgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTsgIFxuXHQgICAgICAgICAgICB9OyAgXG5cdCAgICAgICAgICB9KTsgIFxuXHQgICAgICAgIH0sICBcblx0ICAgICAgICAoZSkgPT4geyAgXG5cdCAgICAgICAgICByZWplY3QoZSk7ICBcblx0ICAgICAgICB9KTsgIFxuXHQgICAgICB9KTsgIFxuXG5cdFxuXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59XG5cbi8qKlxuICog6aKE6KeI5Zu+54mHXG4gKiBAcGFyYW0ge1N0cmluZ30gZSDlvZPliY3lm77niYfnmoRkYXRhLXNyY1xuICogQHBhcmFtIHtBcnJheX0gYXJyIOimgemihOiniOeahOWbvueJh+aVsOe7hFxuICogQHBhcmFtIHtOdW1iZXJ9IGkg6KaB6aKE6KeI55qE5Zu+54mH57Si5byVXG4gKi9cbmZ1bmN0aW9uIHByZXZpZXdJbWFnZShlLCBhcnIsIGkpIHtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdHVuaS5wcmV2aWV3SW1hZ2Uoe1xuXHRcdGN1cnJlbnQ6IGUsXG5cdFx0dXJsczogYXJyLFxuXHRcdGluZGljYXRvcjonZGVmYXVsdCdcblx0fSlcblxuXG59XG5cblxuXG4vKipcbiAqIOWIoOmZpOaVsOe7hOeahOafkOS4gOmhuVxuICogQHBhcmFtIHtPYmplY3R9IGFyciDpnIDopoHmk43kvZznmoTmlbDnu4RcbiAqIEBwYXJhbSB7T2JqZWN0fSBrZXkg6ZyA6KaB5a+55q+U55qEa2V5XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIOmcgOimgeWvueavlOeahOWAvFxuICovXG5mdW5jdGlvbiBkZWxldGVBcnJJbmRleChhcnIsIGtleSwgdmFsKSB7XG5cdHJldHVybiBhcnIuc3BsaWNlKGFyci5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW2tleV0gPT09IHZhbCksIDEpO1xufVxuXG5cbi8vIOaYr+WQpueZu+mZhlxuZnVuY3Rpb24gaXNMb2dpbigpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAodW5pLmdldFN0b3JhZ2VTeW5jKCdhY2Nlc3N0b2tlbicpKSB7XG5cdFx0XHRyZXNvbHZlKDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygn5rKh5pyJ55m76ZmGJyk7XG5cdFx0XHRuYXZUbygnL3BhZ2VzL3BhY2thZ2Vfb3RoZXIvbG9naW4nKVxuXHRcdH1cblx0fSlcbn1cblxuXG4vLyDot7Povazoh7PnmoTnmbvpmYbpobVcbmZ1bmN0aW9uIHRvTG9naW5QYWdlKCkge1xuXHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0dXJsOicvcGFnZXMvcGFja2FnZV9vdGhlci9sb2dpbidcblx0fSlcbn1cblxuXG4vKipcbiAqIGFwcCDliIbkuqtcbiAqIHR5cGU6ICAgOiAgICAwOuWbvuaWhyAgIDHvvJrnuq/mloflrZcgICAgMu+8mue6r+WbvueJhyAgICAz77ya6Z+z5LmQICAgIDTvvJrop4bpopEgICAgIDU65bCP56iL5bqPXG4gKiBzY2VuZSAgIDogICAgV1hTY2VuZVNlc3Npb2465YiG5Lqr5Yiw6IGK5aSp55WM6Z2iICAgICBXWFNlbmNlVGltZWxpbmU65YiG5Lqr5Yiw5pyL5Y+L5ZyIICAgICBXWFNjZW5lRmF2b3JpdGU65YiG5Lqr5Yiw5b6u5L+h5pS26JePXG4gKi9cbmZ1bmN0aW9uIHNoYXJlWXpra1RvV3gob3B0aW9uKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IHNjZW5lTGlzdCA9IFsnV1hTY2VuZVNlc3Npb24nLCAnV1hTZW5jZVRpbWVsaW5lJywgJ1dYU2NlbmVGYXZvcml0ZSddXG5cdFx0dW5pLnNoYXJlKHtcblx0XHRcdHByb3ZpZGVyOiBcIndlaXhpblwiLFxuXHRcdFx0c2NlbmU6IHNjZW5lTGlzdFtvcHRpb24uc2NlbmVdLFxuXHRcdFx0dHlwZTogb3B0aW9uLnR5cGUgfHwgMCxcblx0XHRcdGhyZWY6IG9wdGlvbi5saW5rLFxuXHRcdFx0dGl0bGU6IG9wdGlvbi50aXRsZSxcblx0XHRcdHN1bW1hcnk6IG9wdGlvbi5kZXNjLFxuXHRcdFx0aW1hZ2VVcmw6IG9wdGlvbi5zaGFyZUltZyB8fCAnJyxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInN1Y2Nlc3M6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0cmVzb2x2ZShyZXMpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZmFpbDpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufVxuXG4vKipcbiAqIOaVsOe7hOWOu+aOiemHjeWkjemhuSAgICBbJ2FhJywnYicsJ2MnLCdjYycsJ2RiJywnZSddIO+8jCBbJ2MnLCAnYiddICA9PT0+ICBbXCJhYVwiLCBcImNjXCIsIFwiZGJcIiwgXCJlXCJdXG4gKiBAcGFyYW0ge09iamVjdH0gYSAgWydhYScsJ2InLCdjJywnY2MnLCdkYicsJ2UnXVxuICogQHBhcmFtIHtPYmplY3R9IGIgIFsnYycsICdiJ11cbiAqL1xuZnVuY3Rpb24gbm9TYW1lKGEsYil7XG4gICAgcmV0dXJuIGEuZmlsdGVyKGPCoD0+wqBiLmZpbmRJbmRleChkwqA9PsKgZMKgPT09wqBjKcKgPT09wqAtMSlcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzaGFyZVl6a2tUb1d4LFxuXHR1cmxUb2Jhc2U2NCxcblx0aXNMb2dpbixcblx0dGltZUZvcm1hdCxcblx0bnVtYmVyVG9EYXRlLFxuXHREYXRlRGlmZixcblx0bmV3Q29udGVudEZvcm1hdCxcblx0bmF2VG8sXG5cdG5hdkJhY2ssXG5cdGNsb3NlTmF2VG8sXG5cdGdldEZvbXJWYWx1ZSxcblx0dW5pTXNnLFxuXHRnZXRDaXR5LFxuXHRmb3JtYXRMb2NhdGlvbixcblx0Y2hvb3NlTG9jYXRpb24sXG5cdGNob29zZUltYWdlLFxuXHRwcmV2aWV3SW1hZ2UsXG5cdGRlbGV0ZUFyckluZGV4LFxuXHR3aGljaEFwcCxcblx0Z2V0QmVmb3JlUGFnZSxcblx0Y2hhbmdlQ2l0eSxcblx0cmVmcmFzaFBhZ2UsXG5cdHRvTG9naW5QYWdlLFxuXHRub1NhbWVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=15ef54f2&scoped=true& */ 16);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 27);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=15ef54f2&scoped=true&lang=css& */ 35).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=15ef54f2&scoped=true&lang=css& */ 35).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"15ef54f2\",\n  \"1dccaca0\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZWY1NGYyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNWVmNTRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTVlZjU0ZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTVlZjU0ZjJcIixcbiAgXCIxZGNjYWNhMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlb1BsYXlBcHAvY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=15ef54f2&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=15ef54f2&scoped=true& */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_15ef54f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=15ef54f2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video"] },
    [
      _c("u-video", {
        ref: "`video_${src}`",
        staticClass: ["video"],
        style: { height: _vm.height },
        attrs: {
          src: _vm.src,
          controls: _vm.controls,
          showPlayBtn: false,
          muted: !_vm.load || !_vm.play,
          loop: true,
          enableProgressGesture: false,
          objectFit: _vm.objectFit,
          initialTime: _vm.startTime,
          id: "video_" + _vm.src
        },
        on: {
          play: _vm.continuePlay,
          ended: _vm.playEnd,
          timeupdate: _vm.timeupdate
        }
      }),
      !_vm.play && !_vm.playFirst
        ? _c("cover-view", { staticClass: ["icon-view"] }, [
            _c(
              "u-text",
              { staticClass: ["icon"], staticStyle: { color: "#FFF" } },
              [_vm._v("")]
            )
          ])
        : _vm._e(),
      _vm.poster != "" && _vm.playFirst
        ? _c("cover-image", {
            staticClass: ["img"],
            style: { height: _vm.height },
            attrs: { src: _vm.poster }
          })
        : _vm._e(),
      _c("cover-view", { staticClass: ["top"] }),
      _c("cover-view", { staticClass: ["bottom"] }),
      _c("cover-view", { staticClass: ["danmu-view"] }),
      _c(
        "cover-view",
        { staticClass: ["slider-view"] },
        [
          _c("chunLei-slider", {
            style: { width: 380 + "px" },
            attrs: {
              max: _vm.duration,
              value: _vm.time,
              screenLeft: 120,
              width: 380
            },
            on: { change: _vm.changeCurrent }
          })
        ],
        1
      ),
      _c("cover-image", {
        staticClass: ["rotate-img"],
        style: { transform: "rotate(" + _vm.time * 20 + "deg)" },
        attrs: { src: _vm.rotateImg }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 18 */
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 19);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 20));\n\nvar _chunLeiDanmu = _interopRequireDefault(__webpack_require__(/*! ./chunLei-danmu/chunLei-danmu.nvue */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { chunLeiSlider: _chunLeiSlider.default, chunLeiDanmu: _chunLeiDanmu.default }, props: { controls: { type: Boolean, default: false }, src: { type: String, default: '' }, rotateImg: { type: String, default: '' }, play: { type: Boolean, default: false }, height: { type: String, default: '' },\n\n    width: {\n      type: String,\n      default: '' },\n\n    initialTime: {\n      type: Number,\n      default: 0 },\n\n    gDuration: {\n      type: Number,\n      default: 999 },\n    //大概时长使进度条更准确\n    objectFit: {\n      type: String,\n      default: 'contain' },\n\n    poster: { //视频封面的图片\n      type: String,\n      default: '' }\n\n    // danmuList:{\n    // \ttype:Array,\n    // \tdefault:[]\n    // }\n  },\n  data: function data() {\n    return {\n      time: 0,\n      duration: 0,\n      playFirst: true,\n      load: false,\n      timer: null };\n\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('//static/chunlei-video/text-icon.ttf')\" });\n\n\n  },\n  mounted: function mounted() {var _this = this;\n    this.videoCtx = uni.createVideoContext(\"video_\".concat(this.src), this);\n\n    setTimeout(function () {_this.videoCtx.play();}, 200);\n\n  },\n  methods: {\n    continuePlay: function continuePlay() {var _this2 = this;\n      if (!this.load) {\n        setTimeout(function () {\n          _this2.load = true;\n          _this2.videoPlay();\n        }, 1000);\n\n      }\n    },\n    //拖动滑块\n    changeCurrent: function changeCurrent(e) {\n      this.time = e.detail.value;\n      this.videoCtx.seek(this.time);\n    },\n    playEnd: function playEnd() {\n      this.$emit('playEnd');\n    },\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      if (this.time >= event.detail.duration) this.time = 0;\n      this.time = event.detail.currentTime;\n      this.$emit('timeupdate', this.time);\n    },\n    videoPlay: function videoPlay() {var _this3 = this;\n      if (this.timer) clearTimeout(this.timer);\n      this.timer = setTimeout(function () {\n        if (_this3.play) {\n          _this3.videoCtx.play();\n          _this3.playFirst = false;\n        } else {\n          _this3.videoCtx.pause();\n          _this3.$emit('pause', _this3.time);\n        }\n      });\n\n    } },\n\n  watch: {\n    //防抖 防止视频播放暂停太快\n    play: function play(newVal, oldVal) {if (this.load) this.videoPlay();},\n    startTime: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.time = newVal;\n      } },\n\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.duration = newVal;\n      } } },\n\n\n  computed: {\n    barWidth: function barWidth() {\n\n      var width = this.time / this.duration * parseInt(this.width);\n\n      return \"\".concat(width, \"px\");\n    },\n    startTime: function startTime() {\n      return this.initialTime;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QbGF5QXBwL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBOztBQUVBLDhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUEsRUFDQSxjQUNBLHFDQURBLEVBR0EsbUNBSEEsRUFEQSxFQU9BLFNBQ0EsWUFDQSxhQURBLEVBRUEsY0FGQSxFQURBLEVBS0EsT0FDQSxZQURBLEVBRUEsV0FGQSxFQUxBLEVBU0EsYUFDQSxZQURBLEVBRUEsV0FGQSxFQVRBLEVBYUEsUUFDQSxhQURBLEVBRUEsY0FGQSxFQWJBLEVBaUJBLFVBQ0EsWUFEQSxFQUVBLFdBRkEsRUFqQkE7O0FBcUJBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQXJCQTs7QUF5QkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBekJBOztBQTZCQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUE3QkE7QUFnQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQSxHQVBBO0FBcURBLE1BckRBLGtCQXFEQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLGlCQUZBO0FBR0EscUJBSEE7QUFJQSxpQkFKQTtBQUtBLGlCQUxBOztBQU9BLEdBN0RBO0FBOERBLGNBOURBLDBCQThEQTs7QUFFQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwwREFGQTs7O0FBS0EsR0F0RUE7QUF1RUEsU0F2RUEscUJBdUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0E1RUE7QUE2RUE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxFQUdBLElBSEE7O0FBS0E7QUFDQSxLQVRBO0FBVUE7QUFDQSxpQkFYQSx5QkFXQSxDQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0EsS0FkQTtBQWVBLFdBZkEscUJBZUE7QUFDQTtBQUNBLEtBakJBO0FBa0JBLGNBbEJBLHNCQWtCQSxLQWxCQSxFQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQSxLQXBDQSxFQTdFQTs7QUFtSEE7QUFDQTtBQUNBLDBFQUZBO0FBR0E7QUFDQSxxQkFEQTtBQUVBLGFBRkEsbUJBRUEsTUFGQSxFQUVBLE1BRkEsRUFFQTs7QUFFQTtBQUNBLE9BTEEsRUFIQTs7QUFVQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBOztBQUVBO0FBQ0EsT0FMQSxFQVZBLEVBbkhBOzs7QUFxSUE7QUFDQSxZQURBLHNCQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FOQTtBQU9BLGFBUEEsdUJBT0E7QUFDQTtBQUNBLEtBVEEsRUFySUEsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ2aWRlb1wiPlxuXHRcdDx2aWRlbyA6c3JjPVwic3JjXCIgOmNvbnRyb2xzPVwiY29udHJvbHNcIiA6c2hvdy1wbGF5LWJ0bj1cImZhbHNlXCIgOm11dGVkPVwiIWxvYWR8fCFwbGF5XCJcblx0XHRcdDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiIDpsb29wPVwidHJ1ZVwiIEBwbGF5PVwiY29udGludWVQbGF5XCJcblx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCIgOm9iamVjdEZpdD1cIm9iamVjdEZpdFwiIEBlbmRlZD1cInBsYXlFbmRcIjppbml0aWFsLXRpbWU9XCJzdGFydFRpbWVcIlxuXHRcdFx0OmlkPVwiYHZpZGVvXyR7c3JjfWBcIiByZWY9XCJgdmlkZW9fJHtzcmN9YFwiIGNsYXNzPVwidmlkZW9cIiBAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj5cblx0XHQ8L3ZpZGVvPlxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiaWNvbi12aWV3XCIgdi1pZj1cIiFwbGF5JiYhcGxheUZpcnN0XCI+PHRleHQgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJjb2xvcjojRkZGXCI+JiN4ZTg5Njs8L3RleHQ+PC9jb3Zlci12aWV3PlxuXHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImltZ1wiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiIDpzcmM9XCJwb3N0ZXJcIiB2LWlmPVwicG9zdGVyIT0nJyYmcGxheUZpcnN0XCI+PC9jb3Zlci1pbWFnZT5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInRvcFwiPjwvY292ZXItdmlldz5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImJvdHRvbVwiPjwvY292ZXItdmlldz5cblx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUyAtLT5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImRhbm11LXZpZXdcIj5cblx0XHRcdDwhLS0gPGNodW5MZWktZGFubXUgOmRhbm11TGlzdD1cImRhbm11TGlzdFwiIDp3aWR0aD1cIjc1MFwiICA6Y3VycmVudD1cInRpbWVcIiByZWY9XCJkYW5tdVwiPjwvY2h1bkxlaS1kYW5tdT4gLS0+XG5cdFx0PC9jb3Zlci12aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmbmRlZiBNUC1XRUlYSU4gLS0+XG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJzbGlkZXItdmlld1wiPlxuXHRcdFx0PGNodW5MZWktc2xpZGVyIDptYXg9XCJkdXJhdGlvblwiIDp2YWx1ZT1cInRpbWVcIiA6c3R5bGU9XCJ7d2lkdGg6YCR7MzgwfXB4YH1cIiA6c2NyZWVuTGVmdD1cIjEyMFwiIDp3aWR0aD1cIjM4MFwiIEBjaGFuZ2U9XCJjaGFuZ2VDdXJyZW50XCI+PC9jaHVuTGVpLXNsaWRlcj5cblx0XHQ8L2NvdmVyLXZpZXc+XG5cdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJyb3RhdGVJbWdcIiBjbGFzcz1cInJvdGF0ZS1pbWdcIiA6c3R5bGU9XCJ7dHJhbnNmb3JtOmByb3RhdGUoJHt0aW1lKjIwfWRlZylgfVwiPjwvY292ZXItaW1hZ2U+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0PCEtLSAjaWZkZWYgTVAtV0VJWElOIC0tPlxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicHJvZ3Jlc3NCYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBiYXJXaWR0aCB9XCI+PC9jb3Zlci12aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRcblx0aW1wb3J0IGNodW5MZWlTbGlkZXIgZnJvbSAnLi9jaHVuTGVpLXNsaWRlci9jaHVuTGVpLXNsaWRlci5udnVlJztcblx0Ly8jaWZkZWYgQVBQLU5WVUVcblx0aW1wb3J0IGNodW5MZWlEYW5tdSBmcm9tICcuL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlJztcblx0Ly8jZW5kaWZcblx0ZXhwb3J0IGRlZmF1bHR7IFxuXHRcdGNvbXBvbmVudHM6e1xuXHRcdFx0Y2h1bkxlaVNsaWRlcixcblx0XHRcdC8vI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRjaHVuTGVpRGFubXVcblx0XHRcdC8vI2VuZGlmXG5cdFx0fSxcblx0XHRwcm9wczp7XG5cdFx0XHRjb250cm9sczp7XG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNyYzp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicnXG5cdFx0XHR9LFxuXHRcdFx0cm90YXRlSW1nOntcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHRwbGF5Ontcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aGVpZ2h0Ontcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHR3aWR0aDp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicnXG5cdFx0XHR9LFxuXHRcdFx0aW5pdGlhbFRpbWU6e1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDowXG5cdFx0XHR9LFxuXHRcdFx0Z0R1cmF0aW9uOntcblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6OTk5XG5cdFx0XHR9LCAvL+Wkp+amguaXtumVv+S9v+i/m+W6puadoeabtOWHhuehrlxuXHRcdFx0b2JqZWN0Rml0Ontcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J2NvbnRhaW4nXG5cdFx0XHR9LFxuXHRcdFx0cG9zdGVyOnsgLy/op4bpopHlsIHpnaLnmoTlm77niYdcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHQvLyBkYW5tdUxpc3Q6e1xuXHRcdFx0Ly8gXHR0eXBlOkFycmF5LFxuXHRcdFx0Ly8gXHRkZWZhdWx0OltdXG5cdFx0XHQvLyB9XG5cdFx0fSxcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm57XG5cdFx0XHRcdHRpbWU6MCxcblx0XHRcdFx0ZHVyYXRpb246MCxcblx0XHRcdFx0cGxheUZpcnN0OnRydWUsXG5cdFx0XHRcdGxvYWQ6ZmFsc2UsXG5cdFx0XHRcdHRpbWVyOm51bGxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJlZm9yZUNyZWF0ZSgpIHtcblx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRcdFx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJ0ZXh0aWNvbnNcIixcblx0XHRcdFx0J3NyYyc6IFwidXJsKCcvL3N0YXRpYy9jaHVubGVpLXZpZGVvL3RleHQtaWNvbi50dGYnKVwiXG5cdFx0XHR9KTtcblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuc3JjfWAsdGhpcylcclxuXHRcdFx0Ly8jaWZuZGVmIE1QLVdFSVhJTlxuXHRcdFx0c2V0VGltZW91dCgoKT0+e3RoaXMudmlkZW9DdHgucGxheSgpO30sMjAwKVxyXG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0Y29udGludWVQbGF5KCl7XG5cdFx0XHRcdGlmKCF0aGlzLmxvYWQpe1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdHRoaXMubG9hZCA9IHRydWVcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9QbGF5KClcblx0XHRcdFx0XHR9LDEwMDApXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvL+aLluWKqOa7keWdl1xuXHRcdFx0Y2hhbmdlQ3VycmVudChlKXtcblx0XHRcdFx0dGhpcy50aW1lID0gZS5kZXRhaWwudmFsdWVcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMudGltZSlcblx0XHRcdH0sXG5cdFx0XHRwbGF5RW5kKCl7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3BsYXlFbmQnKVxuXHRcdFx0fSxcblx0XHRcdHRpbWV1cGRhdGUoZXZlbnQpe1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gZXZlbnQuZGV0YWlsLmR1cmF0aW9uXG5cdFx0XHRcdGlmKHRoaXMudGltZT49ZXZlbnQuZGV0YWlsLmR1cmF0aW9uKSB0aGlzLnRpbWU9MFxuXHRcdFx0XHR0aGlzLnRpbWUgPSBldmVudC5kZXRhaWwuY3VycmVudFRpbWVcblx0XHRcdFx0dGhpcy4kZW1pdCgndGltZXVwZGF0ZScsdGhpcy50aW1lKVxuXHRcdFx0fSxcblx0XHRcdHZpZGVvUGxheTpmdW5jdGlvbigpe1xuXHRcdFx0XHRpZih0aGlzLnRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRpZih0aGlzLnBsYXkpe1xuXHRcdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wbGF5KCk7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXlGaXJzdCA9IGZhbHNlXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBhdXNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdwYXVzZScsdGhpcy50aW1lKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0d2F0Y2g6e1xuXHRcdFx0Ly/pmLLmipYg6Ziy5q2i6KeG6aKR5pKt5pS+5pqC5YGc5aSq5b+rXG5cdFx0XHRwbGF5OiBmdW5jdGlvbiAobmV3VmFsLG9sZFZhbCl7aWYodGhpcy5sb2FkKSB0aGlzLnZpZGVvUGxheSgpfSxcblx0XHRcdHN0YXJ0VGltZTp7XG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBuZXdWYWxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGdEdXJhdGlvbjp7XG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gbmV3VmFsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOntcblx0XHRcdGJhcldpZHRoKCl7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgd2lkdGggPSB0aGlzLnRpbWUvdGhpcy5kdXJhdGlvbipwYXJzZUludCh0aGlzLndpZHRoKVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIGAke3dpZHRofXB4YFxuXHRcdFx0fSxcblx0XHRcdHN0YXJ0VGltZSgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbml0aWFsVGltZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogXCJ0ZXh0aWNvbnNcIjtcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0fVxuXHQvKiAjZW5kaWYqL1xuXHQudmlkZW97XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cdC5pbWd7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFxuXHRcdHdpZHRoOiA3NTBycHg7XG5cdH1cblx0Lmljb24tdmlld3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdH1cblx0LnRvcHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOjA7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCAsIHJnYmEoMCwwLDAsMCkgLCByZ2JhKDAsMCwwLDAuNykpO1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0aGVpZ2h0OiAzMDBycHg7XG5cdH1cblx0Lmljb257XG5cdFx0b3BhY2l0eTogMC42O1xuXHRcdGZvbnQtc2l6ZTogNDJweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cblx0XHRmb250LWZhbWlseTogXCJ0ZXh0aWNvbnNcIjtcblx0XHQvKiAjZW5kaWYqL1xuXHRcdGZvbnQtZmFtaWx5OiB0ZXh0aWNvbnM7XG5cdH1cblx0LmJvdHRvbXtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgLCByZ2JhKDAsMCwwLDAuNykgLCByZ2JhKDAsMCwwLDApKTtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdGhlaWdodDogMzAwcnB4O1xuXHR9XG5cdC5zbGlkZXItdmlld3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRib3R0b206IDMwcHg7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0fVxuXHQucHJvZ3Jlc3NCYXJ7XG5cdFx0Ym9yZGVyLXJhZGl1czogMnVweDtcblx0XHRoZWlnaHQ6IDR1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym90dG9tOiAzMHB4O1xuXHRcdC8vI2lmbmRlZiBBUFAtUExVUy1OVlVFXG5cdFx0YW5pbWF0aW9uOiBmbGlja2VyIDRzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZTtcblx0XHQvLyNlbmRpZlxuXHR9XG5cdC8vI2lmbmRlZiBBUFAtUExVUy1OVlVFXG5cdEBrZXlmcmFtZXMgZmxpY2tlciB7XG5cdFx0MCUgeyBib3gtc2hhZG93OjAgMCAwICNGRkZGRkY7IH1cblx0ICAgICAvKiog5pqC5YGc5pWI5p6cICovXG5cdFx0MTAlIHsgYm94LXNoYWRvdzowIDAgMnVweCAjRkZGRkZGOyB9XG5cdCAgICA1MCUgeyBib3gtc2hhZG93OjAgMCAxMHVweCAjRkZGRkZGOyB9XG5cdCAgICA2MCUgeyBib3gtc2hhZG93OjAgMCAxMnVweCAjRkZGRkZGOyB9XG5cdCAgICA5MCUgeyBib3gtc2hhZG93OjAgMCAxOHVweCAjRkZGRkZGOyB9XG5cdCAgICAxMDAlIHsgYm94LXNoYWRvdzowIDAgMjB1cHggI0ZGRkZGRjsgfVxuXHRcblx0fVxuXHQvLyNlbmRpZlxuXHQuZGFubXUtdmlld3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOjA7XG5cdFx0aGVpZ2h0OiAxNjBweDtcblx0fVxuXHQucm90YXRlLWltZ3tcblx0XHR3aWR0aDogOTBycHg7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxMDBycHg7XG5cdFx0cmlnaHQ6IDIwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDQ1cnB4O1xuXHR9XHJcblx0XHJcblx0XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=28e74263&scoped=true& */ 21);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 27);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=28e74263&lang=scss&scoped=true& */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=28e74263&lang=scss&scoped=true& */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"28e74263\",\n  \"7b21ec58\",\n  false,\n  _chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGU3NDI2MyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjhlNzQyNjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjhlNzQyNjMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI4ZTc0MjYzXCIsXG4gIFwiN2IyMWVjNThcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdmlkZW9QbGF5QXBwL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVuTGVpLXNsaWRlci9jaHVuTGVpLXNsaWRlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=28e74263&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=template&id=28e74263&scoped=true& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_28e74263_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=28e74263&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" }
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor }
          })
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px"
          },
          on: { click: function($event) {} }
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart
              }
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=script&lang=js& */ 24);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    min: {\n      type: Number,\n      default: 0 },\n\n    max: {\n      type: Number,\n      default: 0 },\n\n    value: {\n      type: Number,\n      default: 0 },\n\n    width: {\n      type: Number,\n      default: 0 },\n\n    ratio: {\n      type: Number,\n      default: 1 },\n\n    direction: {\n      type: String,\n      default: 'screenX' },\n\n    backgroundColor: { //滑块右侧背景条的颜色\n      type: String,\n      default: '#e9e9e9' },\n\n    blockColor: { //滑块颜色\n      type: String,\n      default: '#ffffff' },\n\n    screenLeft: { //slider距离左边距离\n      type: Number,\n      default: 0 },\n\n    iosDirection: {\n      type: Number,\n      default: 1 } },\n\n\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false };\n\n  },\n  mounted: function mounted() {\n\n\n  },\n  methods: {\n    sliderTouch: function sliderTouch(e) {\n      __f__(\"log\", e, \" at pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue:78\");\n      var touches = e.changedTouches[0];\n      this.leftWidth = (touches[this.direction] || touches['clientX']) * this.ratio - this.screenLeft;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n      this.blockTouchEnd();\n\n    },\n    // 触摸开始\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      this.oldToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX;\n\n      newToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n\n      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      var current = this.leftWidth / this.currentWidth * this.max;\n      var event = { detail: { value: current } };\n      this.$emit('change', event);\n      this.touch = false;\n    },\n    colorRgb: function colorRgb(string, opacity) {\n      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n      var sColor = string.toLowerCase();\n      if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n          var sColorNew = \"#\";\n          for (var i = 1; i < 4; i += 1) {\n            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n          }\n          sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n          sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        }\n        return \"rgba(\" + sColorChange.join(\",\") + \",\".concat(opacity) + \")\";\n      } else {\n        return sColor;\n      }\n    } },\n\n  computed: {\n    blockOuterColor: function blockOuterColor() {\n      return this.colorRgb(this.blockColor, 0.4);\n    },\n    blockBackgroundColor: function blockBackgroundColor() {\n      return this.colorRgb(this.blockColor, 0.5);\n    },\n    currentWidth: function currentWidth() {\n      return this.width - 40;\n    } },\n\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n\n        this.leftWidth = newVal / this.max * this.currentWidth;\n        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      } } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QbGF5QXBwL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVuTGVpLXNsaWRlci9jaHVuTGVpLXNsaWRlci5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFEQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFMQTs7QUFTQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFUQTs7QUFhQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFiQTs7QUFpQkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBakJBOztBQXFCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBN0JBOztBQWlDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQXJDQSxFQURBOzs7QUEyQ0EsTUEzQ0Esa0JBMkNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGtCQUZBO0FBR0EscUJBSEE7QUFJQSxrQkFKQTs7QUFNQSxHQWxEQTtBQW1EQSxTQW5EQSxxQkFtREE7OztBQUdBLEdBdERBO0FBdURBO0FBQ0EsZUFEQSx1QkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FUQTtBQVVBO0FBQ0EsbUJBWEEsMkJBV0EsQ0FYQSxFQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQTtBQUNBLGtCQWpCQSwwQkFpQkEsQ0FqQkEsRUFpQkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0ExQkE7QUEyQkE7QUFDQSxpQkE1QkEseUJBNEJBLENBNUJBLEVBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpDQTtBQWtDQSxZQWxDQSxvQkFrQ0EsTUFsQ0EsRUFrQ0EsT0FsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BZEEsTUFjQTtBQUNBO0FBQ0E7QUFDQSxLQXREQSxFQXZEQTs7QUErR0E7QUFDQSxtQkFEQSw2QkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLHdCQUpBLGtDQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsZ0JBUEEsMEJBT0E7QUFDQTtBQUNBLEtBVEEsRUEvR0E7O0FBMEhBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGFBRkEsbUJBRUEsTUFGQSxFQUVBLE1BRkEsRUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQVBBLEVBREEsRUExSEEsRSIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwic2xpZGVyIGZsZXhcIiBpZD1cInNsaWRlclwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCIgcmVmPVwic2xpZGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwic2xpZGVyLWxlZnQgZmxleFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2xlZnRXaWR0aH1weGAgfVwiIEB0b3VjaGVuZC5zdG9wPVwic2xpZGVyVG91Y2hcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxlZnRcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcn1cIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInNsaWRlci1yaWdodCBmbGV4XCIgQHRvdWNoZW5kLnN0b3A9XCJzbGlkZXJUb3VjaFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2N1cnJlbnRXaWR0aC1sZWZ0V2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJpZ2h0XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJibG9jayBmbGV4XCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjp0b3VjaD9ibG9ja091dGVyQ29sb3I6J3JnYmEoMCwwLDAsMCknLCBsZWZ0OiBgJHtsZWZ0V2lkdGh9cHhgfVwiXHJcblx0XHRcdEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJibG9jay1pbm5lciBmbGV4XCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpibG9ja0JhY2tncm91bmRDb2xvcn1cIiAgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJibG9ja1RvdWNoTW92ZVwiIEB0b3VjaGVuZD1cImJsb2NrVG91Y2hFbmRcIiBAdG91Y2hzdGFydD1cImJsb2NrVG91Y2hTdGFydFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9jay1pbm5lci1pbm5lclwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6YmxvY2tDb2xvcn1cIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0bWluOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0bWF4OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWU6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhdGlvOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjFcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlyZWN0aW9uOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OidzY3JlZW5YJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6eyAvL+a7keWdl+WPs+S+p+iDjOaZr+adoeeahOminOiJslxyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JyNlOWU5ZTknXHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrQ29sb3I6eyAvL+a7keWdl+minOiJslxyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JyNmZmZmZmYnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcmVlbkxlZnQ6eyAvL3NsaWRlcui3neemu+W3pui+uei3neemu1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpb3NEaXJlY3Rpb246e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0b2xkVG91Y2VzWDowLFxyXG5cdFx0XHRcdGxlZnRXaWR0aDowLFxyXG5cdFx0XHRcdG9sZExlZnRXaWR0aDowLFxyXG5cdFx0XHRcdHRvdWNoOmZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdHNsaWRlclRvdWNoKGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0bGV0IHRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSAodG91Y2hlc1t0aGlzLmRpcmVjdGlvbl18fHRvdWNoZXNbJ2NsaWVudFgnXSkqdGhpcy5yYXRpby10aGlzLnNjcmVlbkxlZnRcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMD8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0dGhpcy5ibG9ja1RvdWNoRW5kKClcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Kem5pG45byA5aeLXHJcblx0XHRcdGJsb2NrVG91Y2hTdGFydChlKSB7XHJcblx0XHRcdFx0dGhpcy50b3VjaCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLm9sZExlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0dGhpcy5vbGRUb3VjZXNYID0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl18fGUuY2hhbmdlZFRvdWNoZXNbMF1bJ2NsaWVudFgnXTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6h566X5pa55ZCRXHJcblx0XHRcdGJsb2NrVG91Y2hNb3ZlKGUpIHtcclxuXHRcdFx0XHRsZXQgbmV3VG91Y2VzWFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG5ld1RvdWNlc1g9IGUuY2hhbmdlZFRvdWNoZXNbMF1bdGhpcy5kaXJlY3Rpb25dfHxlLmNoYW5nZWRUb3VjaGVzWzBdWydjbGllbnRYJ107XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmlvc0RpcmVjdGlvbioobmV3VG91Y2VzWCAtIHRoaXMub2xkVG91Y2VzWCkqdGhpcy5yYXRpbysgdGhpcy5vbGRMZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMD8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7k+adn+inpuaRuFxyXG5cdFx0XHRibG9ja1RvdWNoRW5kKGUpIHtcclxuXHRcdFx0XHRsZXQgY3VycmVudCA9IHRoaXMubGVmdFdpZHRoIC8gdGhpcy5jdXJyZW50V2lkdGggKnRoaXMubWF4XHJcblx0XHRcdFx0Y29uc3QgZXZlbnQgPSB7ZGV0YWlsOnt2YWx1ZTpjdXJyZW50fX1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLGV2ZW50KVxyXG5cdFx0XHRcdHRoaXMudG91Y2ggPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvclJnYihzdHJpbmcsb3BhY2l0eSl7XHJcblx0XHRcdFx0dmFyIHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcclxuXHRcdFx0XHR2YXIgc0NvbG9yID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0aWYoc0NvbG9yICYmIHJlZy50ZXN0KHNDb2xvcikpe1xyXG5cdFx0XHRcdCAgICBpZihzQ29sb3IubGVuZ3RoID09PSA0KXtcclxuXHRcdFx0XHQgICAgICAgIHZhciBzQ29sb3JOZXcgPSBcIiNcIjtcclxuXHRcdFx0XHQgICAgICAgIGZvcih2YXIgaT0xOyBpPDQ7IGkrPTEpe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHNDb2xvck5ldyArPSBzQ29sb3Iuc2xpY2UoaSxpKzEpLmNvbmNhdChzQ29sb3Iuc2xpY2UoaSxpKzEpKTsgICBcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIHNDb2xvciA9IHNDb2xvck5ldztcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICAvL+WkhOeQhuWFreS9jeeahOminOiJsuWAvFxyXG5cdFx0XHRcdCAgICB2YXIgc0NvbG9yQ2hhbmdlID0gW107XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaT0xOyBpPDc7IGkrPTIpe1xyXG5cdFx0XHRcdCAgICAgICAgc0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoXCIweFwiK3NDb2xvci5zbGljZShpLGkrMikpKTsgIFxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIHJldHVybiBcInJnYmEoXCIgKyBzQ29sb3JDaGFuZ2Uuam9pbihcIixcIikgK2AsJHtvcGFjaXR5fWArXCIpXCI7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ICAgIHJldHVybiBzQ29sb3I7ICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdGJsb2NrT3V0ZXJDb2xvcigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbG9yUmdiKHRoaXMuYmxvY2tDb2xvciwwLjQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrQmFja2dyb3VuZENvbG9yKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3JSZ2IodGhpcy5ibG9ja0NvbG9yLDAuNSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudFdpZHRoKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMud2lkdGggLSA0MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHR2YWx1ZTp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2gpIHJldHVyblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IG5ld1ZhbC90aGlzLm1heCAqIHRoaXMuY3VycmVudFdpZHRoXHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQuZmxleHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFxyXG5cdH1cclxuXHQuc2xpZGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvdHRvbTogLTIwcnB4O1xyXG5cdFx0bGVmdDogLTIwcnB4O1xyXG5cdH1cclxuXHQuc2xpZGVyLWxlZnR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmxlZnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0fVxyXG5cdC5zbGlkZXItcmlnaHR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnJpZ2h0e1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuYmxvY2t7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0fVxyXG5cdC5ibG9jay1pbm5lcntcclxuXHRcdGhlaWdodDogMTRweDtcclxuXHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmJsb2NrLWlubmVyLWlubmVye1xyXG5cdFx0aGVpZ2h0OiA3cHg7XHJcblx0XHR3aWR0aDogN3B4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=28e74263&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=style&index=0&id=28e74263&lang=scss&scoped=true& */ 26);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_28e74263_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=28e74263&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "relative",
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center",
    "bottom": "-20rpx",
    "left": "-20rpx"
  },
  "slider-left": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left": {
    "flex": 1,
    "height": "1"
  },
  "slider-right": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "height": "1",
    "flex": 1,
    "backgroundColor": "#FFFFFF"
  },
  "block": {
    "position": "absolute",
    "height": "40",
    "width": "40",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999999
  },
  "block-inner": {
    "height": "14",
    "width": "14",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "block-inner-inner": {
    "height": "7",
    "width": "7",
    "borderRadius": "5"
  }
}

/***/ }),
/* 27 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 28 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=template&id=e7a295b6& */ 29);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=script&lang=js& */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 27);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 33).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 33).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6c821450\",\n  false,\n  _chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3YTI5NWI2JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNmM4MjE0NTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdmlkZW9QbGF5QXBwL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVuTGVpLWRhbm11L2NodW5MZWktZGFubXUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=e7a295b6& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=template&id=e7a295b6& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_e7a295b6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=e7a295b6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["danmu"], style: { width: _vm.width + "px" } },
    [
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList1, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList2, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList3, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList4, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=script&lang=js& */ 32);\n/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9qQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _createForOfIteratorHelper(o) {if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default2 =\n{\n  props: {\n    width: {\n      type: Number,\n      default: 0 },\n\n    danmuList: { //弹幕\n      type: [Array],\n      default: function _default() {return [];} },\n\n    platform: {\n      type: String,\n      default: 'android' },\n\n    current: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      danmuList1: [],\n      danmuList2: [],\n      danmuList3: [],\n      danmuList4: [] };\n\n  },\n  methods: {\n    promise: function promise() {\n      var promise = new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve();\n        }, 100);\n      });\n      return promise;\n    },\n    cleanDanmu: function cleanDanmu() {\n      this.danmuList1 = [];\n      this.danmuList2 = [];\n      this.danmuList3 = [];\n      this.danmuList4 = [];\n    },\n    randomRange: function randomRange(min, max) {// min最小值，max最大值\n      return Math.floor(Math.random() * (max - min)) + min;\n    },\n    animationText: function animationText(id, distance, fn) {\n      var el;\n      var elList = this.$refs.move;var _iterator = _createForOfIteratorHelper(\n      elList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n          if (item.attr.id == id) {\n            el = item;\n          }\n\n        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n      animation.transition(el, {\n        styles: {\n          transform: \"translate( \".concat(distance, \"px, 0px)\") },\n\n        duration: 20000, //ms\n        timingFunction: 'ease',\n        delay: 0 //ms\n      }, function () {\n        fn();\n      });\n\n    } },\n\n  watch: {\n    danmuList: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        for (var key in newVal) {\n          newVal[key]._id = key;\n        }\n      } },\n\n    current: {\n      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {var _this = this;var _iterator2, _step2, _loop;return _regenerator.default.wrap(function _callee$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(\n\n\n                  Math.abs(newVal - oldVal) >= 0.24)) {_context2.next = 17;break;}_iterator2 = _createForOfIteratorHelper(\n                  this.danmuList);_context2.prev = 2;_loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {var item, num;return _regenerator.default.wrap(function _loop$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:item = _step2.value;if (!(\n                            item.time > Math.floor(newVal * 1) && item.time <= Math.floor(newVal * 1 + 0.25))) {_context.next = 7;break;}\n                            num = _this.randomRange(1, 5);\n                            _this[\"danmuList\".concat(num)].push(item);_context.next = 6;return (\n                              _this.promise());case 6:\n\n                            //开始动画\n                            _this.animationText(item._id, -_this.width * 2, function () {\n                              var index;\n                              //删除动画后的text\n                              for (var key in _this[\"danmuList\".concat(num)]) {\n                                if (_this[\"danmuList\".concat(num)][key]._id == item._id) {\n                                  index = key;\n                                }\n                              }\n                              _this[\"danmuList\".concat(num)].splice(index, 1);\n                            });case 7:case \"end\":return _context.stop();}}}, _loop);});_iterator2.s();case 5:if ((_step2 = _iterator2.n()).done) {_context2.next = 9;break;}return _context2.delegateYield(_loop(), \"t0\", 7);case 7:_context2.next = 5;break;case 9:_context2.next = 14;break;case 11:_context2.prev = 11;_context2.t1 = _context2[\"catch\"](2);_iterator2.e(_context2.t1);case 14:_context2.prev = 14;_iterator2.f();return _context2.finish(14);case 17:case \"end\":return _context2.stop();}}}, _callee, this, [[2, 11, 14, 17]]);}));function handler(_x, _x2) {return _handler.apply(this, arguments);}return handler;}() } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QbGF5QXBwL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVuTGVpLWRhbm11L2NodW5MZWktZGFubXUubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7QUFDQSx3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFEQTs7QUFLQTtBQUNBLG1CQURBO0FBRUEsK0NBRkEsRUFMQTs7QUFTQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFUQTs7QUFhQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFiQSxFQURBOzs7QUFtQkEsTUFuQkEsa0JBbUJBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQSxvQkFKQTs7QUFNQSxHQTFCQTtBQTJCQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsR0FGQTtBQUdBLE9BSkE7QUFLQTtBQUNBLEtBUkE7QUFTQSxjQVRBLHdCQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsZUFmQSx1QkFlQSxHQWZBLEVBZUEsR0FmQSxFQWVBO0FBQ0E7QUFDQSxLQWpCQTtBQWtCQSxpQkFsQkEseUJBa0JBLEVBbEJBLEVBa0JBLFFBbEJBLEVBa0JBLEVBbEJBLEVBa0JBO0FBQ0E7QUFDQSxtQ0FGQTtBQUdBLFlBSEEsYUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQVJBO0FBU0E7QUFDQTtBQUNBLCtEQURBLEVBREE7O0FBSUEsdUJBSkEsRUFJQTtBQUNBLDhCQUxBO0FBTUEsZ0JBTkEsQ0FNQTtBQU5BLFNBT0E7QUFDQTtBQUNBLE9BVEE7O0FBV0EsS0F0Q0EsRUEzQkE7O0FBbUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGFBRkEsbUJBRUEsTUFGQSxFQUVBLE1BRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkEsRUFEQTs7QUFTQTtBQUNBOzs7QUFHQSxtREFIQTtBQUlBLGdDQUpBLDBOQUlBLElBSkE7QUFLQSw0R0FMQTtBQU1BLCtCQU5BLEdBTUEsdUJBTkE7QUFPQSxzRUFQQTtBQVFBLDZDQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBVEEsRUFYQSw2a0JBREEsRUFUQSxFQW5FQSxFIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJkYW5tdVwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3QxXCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhbm11LXJvd1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHRcdDxkaXYgOnN0eWxlPVwieyBsZWZ0OmAke3dpZHRofXB4YH1cIiByZWY9XCJtb3ZlXCIgOmlkPVwiaXRlbS5faWRcIiB2LWZvcj1cIml0ZW0gaW4gZGFubXVMaXN0MlwiIDprZXk9XCJpdGVtLl9pZFwiIGNsYXNzPVwibW92ZURpdlwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cImltZ1wiIHYtaWY9XCJpdGVtLmF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cInsgY29sb3I6aXRlbS5jb2xvcj9pdGVtLmNvbG9yOicjZmZmJyB9XCI+e3tpdGVtLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDNcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3Q0XCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xyXG5cdGNvbnN0IG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpO1xyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHR3aWR0aDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhbm11TGlzdDp7IC8v5by55bmVXHJcblx0XHRcdFx0dHlwZTpbQXJyYXldLFxyXG5cdFx0XHRcdGRlZmF1bHQ6KCk9PltdXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXRmb3JtOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OidhbmRyb2lkJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdGRhbm11TGlzdDE6W10sXHJcblx0XHRcdFx0ZGFubXVMaXN0MjpbXSxcclxuXHRcdFx0XHRkYW5tdUxpc3QzOltdLFxyXG5cdFx0XHRcdGRhbm11TGlzdDQ6W10sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0cHJvbWlzZSgpe1xyXG5cdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHByb21pc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYW5EYW5tdSgpe1xyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0MSA9IFtdXHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3QyID0gW11cclxuXHRcdFx0XHR0aGlzLmRhbm11TGlzdDMgPSBbXVxyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0NCA9IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7IC8vIG1pbuacgOWwj+WAvO+8jG1heOacgOWkp+WAvFxyXG5cdFx0XHQgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuXHRcdFx0fSxcclxuXHRcdFx0YW5pbWF0aW9uVGV4dChpZCxkaXN0YW5jZSxmbil7XHJcblx0XHRcdFx0bGV0IGVsXHJcblx0XHRcdFx0bGV0IGVsTGlzdCA9IHRoaXMuJHJlZnMubW92ZVxyXG5cdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgZWxMaXN0KSB7XHJcblx0XHRcdFx0XHRpZihpdGVtLmF0dHIuaWQgPT0gaWQpe1xyXG5cdFx0XHRcdFx0XHRlbCA9IGl0ZW1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbihlbCwge1xyXG5cdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZSggJHtkaXN0YW5jZX1weCwgMHB4KWAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAwLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRmbigpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHRkYW5tdUxpc3Q6e1xyXG5cdFx0XHRcdGltbWVkaWF0ZTp0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gbmV3VmFsKSB7XHJcblx0XHRcdFx0XHRcdG5ld1ZhbFtrZXldLl9pZCA9IGtleVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudDp7XHJcblx0XHRcdFx0aGFuZGxlcjphc3luYyBmdW5jdGlvbihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly/pl7TpmpQwLjI1XHJcblx0XHRcdFx0XHRpZihNYXRoLmFicyhuZXdWYWwtb2xkVmFsKT49MC4yNCl7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy5kYW5tdUxpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiggaXRlbS50aW1lID4gTWF0aC5mbG9vcihuZXdWYWwqMSkgJiYgaXRlbS50aW1lIDw9IE1hdGguZmxvb3IobmV3VmFsKjErIDAuMjUpICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG51bSA9IHRoaXMucmFuZG9tUmFuZ2UoMSw1KVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpc1tgZGFubXVMaXN0JHtudW19YF0ucHVzaChpdGVtKVxyXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wcm9taXNlKClcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly/lvIDlp4vliqjnlLtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uVGV4dChpdGVtLl9pZCwtdGhpcy53aWR0aCoyLCgpPT57XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBpbmRleFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL+WIoOmZpOWKqOeUu+WQjueahHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHRoaXNbYGRhbm11TGlzdCR7bnVtfWBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYodGhpc1tgZGFubXVMaXN0JHtudW19YF1ba2V5XS5faWQ9PWl0ZW0uX2lkKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4ID0ga2V5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXNbYGRhbm11TGlzdCR7bnVtfWBdLnNwbGljZShpbmRleCwxKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uZGFubXV7XHJcblx0aGVpZ2h0OiAxNjBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFxyXG59XHJcbi5kYW5tdS1yb3d7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFxyXG59XHJcbi5tb3ZlRGl2e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hbmRyb2lkLXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uaW1ne1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5pb3MtdGl0bGV7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 34);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "danmu": {
    "height": "160",
    "flexDirection": "column"
  },
  "danmu-row": {
    "position": "relative",
    "height": "40",
    "flexDirection": "row"
  },
  "moveDiv": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "android-title": {
    "fontSize": "24"
  },
  "img": {
    "width": "30",
    "height": "30",
    "marginLeft": "10",
    "borderRadius": "15"
  },
  "ios-title": {
    "fontSize": "24"
  }
}

/***/ }),
/* 35 */
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=15ef54f2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=15ef54f2&scoped=true&lang=css& */ 36);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_15ef54f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=15ef54f2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "position": "absolute",
    "width": "750rpx"
  },
  "icon-view": {
    "position": "absolute"
  },
  "top": {
    "position": "absolute",
    "top": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.7))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "icon": {
    "opacity": 0.6,
    "fontSize": "42",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "bottom": {
    "position": "absolute",
    "bottom": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0.7) , rgba(0,0,0,0))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "slider-view": {
    "position": "absolute",
    "left": 0,
    "bottom": "30",
    "width": "750rpx"
  },
  "progressBar": {
    "borderRadius": "2upx",
    "height": "4upx",
    "backgroundColor": "#FFFFFF",
    "zIndex": 999999,
    "position": "absolute",
    "left": 0,
    "bottom": "30"
  },
  "danmu-view": {
    "position": "absolute",
    "top": 0,
    "height": "160"
  },
  "rotate-img": {
    "width": "90rpx",
    "height": "90rpx",
    "position": "absolute",
    "bottom": "100rpx",
    "right": "20rpx",
    "borderRadius": "45rpx"
  }
}

/***/ }),
/* 37 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=style&index=0&id=55fc67e8&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.6.16.20200424/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoPlayApp.nvue?vue&type=style&index=0&id=55fc67e8&scoped=true&lang=css&mpType=page */ 38);
/* harmony import */ var _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_6_16_20200424_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoPlayApp_nvue_vue_type_style_index_0_id_55fc67e8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/97807/Desktop/uni-yzkk-app/pages/videoPlayApp/videoPlayApp.nvue?vue&type=style&index=0&id=55fc67e8&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "swiper": {
    "flex": 1,
    "backgroundColor": "#000000"
  },
  "swiper-item": {
    "flex": 1
  },
  "video": {
    "flex": 1
  },
  "video-box": {
    "flex": 1,
    "width": "750rpx"
  },
  "cover-view-center": {
    "position": "absolute",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity": 0.1,
    "zIndex": 999
  },
  "cover-view-left": {
    "position": "absolute",
    "marginLeft": "25upx",
    "width": "500upx",
    "bottom": "160upx",
    "zIndex": 9999,
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "left-view": {
    "marginBottom": "20upx"
  },
  "left-text": {
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "avater": {
    "borderRadius": "50upx",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "cover-view-right": {
    "position": "absolute",
    "bottom": "160upx",
    "right": "20upx",
    "zIndex": 9999
  },
  "right-text-avater": {
    "position": "absolute",
    "fontSize": "14",
    "top": "80upx",
    "left": "30upx",
    "height": "40upx",
    "width": "40upx",
    "backgroundColor": "#DD524D",
    "color": "#FFFFFF",
    "borderRadius": 50,
    "textAlign": "center",
    "lineHeight": "40upx",
    "zIndex": 999
  },
  "avater-icon": {
    "height": "40upx",
    "width": "40upx",
    "color": "#ffffff",
    "backgroundColor": "#DD524D",
    "borderRadius": 50,
    "position": "absolute",
    "left": "30upx",
    "top": "-20upx"
  },
  "right-text": {
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "marginBottom": "50upx",
    "height": "20"
  },
  "img": {
    "height": "50upx",
    "width": "50upx",
    "opacity": 0.9,
    "marginLeft": "3rpx",
    "marginBottom": "3rpx"
  },
  "page": {
    "flex": 1
  }
}

/***/ })
/******/ ]);