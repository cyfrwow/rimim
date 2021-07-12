"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarLinkElement = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarLinkElement = () => {
  return /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarLink, {
    icon: "A"
  });
};

exports.ToolbarLinkElement = ToolbarLinkElement;