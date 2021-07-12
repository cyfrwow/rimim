"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarImageElement = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarImageElement = () => {
  return /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarImage, {
    icon: "Img"
  });
};

exports.ToolbarImageElement = ToolbarImageElement;