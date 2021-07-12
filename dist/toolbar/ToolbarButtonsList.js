"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButtonsList = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarButtonsList = () => {
  const editor = (0, _slatePlugins.useStoreEditorRef)((0, _slatePlugins.useEventEditorId)("focus"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "toolbar__button"
  }, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarList, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_UL),
    icon: "UL"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "toolbar__button"
  }, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarList, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_OL),
    icon: "OL"
  })));
};

exports.ToolbarButtonsList = ToolbarButtonsList;