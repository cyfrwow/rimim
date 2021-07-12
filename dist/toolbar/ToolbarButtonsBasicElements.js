"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButtonsBasicElements = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarButtonsBasicElements = () => {
  const editor = (0, _slatePlugins.useStoreEditorRef)((0, _slatePlugins.useEventEditorId)("focus"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_DEFAULT),
    icon: "P"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H1),
    icon: "H1"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H2),
    icon: "H2"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H3),
    icon: "H3"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H4),
    icon: "H4"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H5),
    icon: "H5"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_H6),
    icon: "H6"
  }));
};

exports.ToolbarButtonsBasicElements = ToolbarButtonsBasicElements;