"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Toolbar = () => {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "toolbar"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "toolbar__list"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "toolbar__listitem"
  }, /*#__PURE__*/_react.default.createElement(_index.ToolbarButtonsBasicElements, null)), /*#__PURE__*/_react.default.createElement("li", {
    className: "toolbar__listitem"
  }, /*#__PURE__*/_react.default.createElement(_index.ToolbarButtonsBasicMarks, null), /*#__PURE__*/_react.default.createElement(_index.ToolbarButtonsCodeMarks, null)), /*#__PURE__*/_react.default.createElement("li", {
    className: "toolbar__listitem"
  }, /*#__PURE__*/_react.default.createElement(_index.ToolbarButtonsList, null)), /*#__PURE__*/_react.default.createElement("li", {
    className: "toolbar__listitem"
  }, /*#__PURE__*/_react.default.createElement(_index.ToolbarButtonsTable, null), /*#__PURE__*/_react.default.createElement(_index.ToolbarLinkElement, null), /*#__PURE__*/_react.default.createElement(_index.ToolbarImageElement, null))));
};

exports.Toolbar = Toolbar;