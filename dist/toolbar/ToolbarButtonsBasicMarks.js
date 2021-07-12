"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButtonsBasicMarks = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarButtonsBasicMarks = () => {
  const editor = (0, _slatePlugins.useStoreEditorRef)((0, _slatePlugins.useEventEditorId)("focus"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_BOLD),
    icon: "B"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_ITALIC),
    icon: /*#__PURE__*/_react.default.createElement("i", null, "I")
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_UNDERLINE),
    icon: /*#__PURE__*/_react.default.createElement("u", null, "U")
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_STRIKETHROUGH),
    icon: /*#__PURE__*/_react.default.createElement("del", null, "S")
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_SUPERSCRIPT),
    clear: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_SUBSCRIPT),
    icon: "sup"
  }), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarMark, {
    type: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_SUBSCRIPT),
    clear: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.MARK_SUPERSCRIPT),
    icon: "sub"
  }));
};

exports.ToolbarButtonsBasicMarks = ToolbarButtonsBasicMarks;