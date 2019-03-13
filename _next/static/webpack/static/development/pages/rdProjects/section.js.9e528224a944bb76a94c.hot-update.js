webpackHotUpdate("static\\development\\pages\\rdProjects\\section.js",{

/***/ "./pages/rdProjects/section/CollapsibleProject.jsx":
/*!*********************************************************!*\
  !*** ./pages/rdProjects/section/CollapsibleProject.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_CollapsiblePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/CollapsiblePanel */ "./src/components/CollapsiblePanel.jsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/Link */ "./src/components/Link.jsx");
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/utils/content */ "./src/utils/content.js");






var rightMargin = {
  marginRight: '0.3em'
};

var CollapsibleProject = function CollapsibleProject(_ref) {
  var title = _ref.title,
      website = _ref.website,
      preview = _ref.preview,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      onCollapse = _ref.onCollapse,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["title", "website", "preview", "expanded", "onCollapse"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_CollapsiblePanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expanded: expanded,
    title: title,
    onCollapse: onCollapse
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: preview
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: website,
    role: "button",
    className: "btn btn-default",
    style: rightMargin
  }, "Go to website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(other),
    role: "button",
    className: "btn btn-info"
  }, "Read more")));
};

CollapsibleProject.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  website: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  preview: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  bodyHtml: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  short: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  start: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  end: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onCollapse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CollapsibleProject);

/***/ })

})
//# sourceMappingURL=section.js.9e528224a944bb76a94c.hot-update.js.map