"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButtonsCodeMarks = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarButtonsCodeMarks = () => {
  const editor = (0, _slatePlugins.useStoreEditorRef)((0, _slatePlugins.useEventEditorId)("focus"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_CODE),
    icon: "<>"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarElement, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_BLOCKQUOTE),
    icon: '""'
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarCodeBlock, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_CODE_BLOCK),
    icon: "[]"
  }));
};

exports.ToolbarButtonsCodeMarks = ToolbarButtonsCodeMarks;