"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slatePlugins = require("@udecode/slate-plugins");

const plugins = [// editor
(0, _slatePlugins.createReactPlugin)(), // withReact
(0, _slatePlugins.createHistoryPlugin)(), // withHistory
// elements
(0, _slatePlugins.createParagraphPlugin)(), // paragraph element
(0, _slatePlugins.createBlockquotePlugin)(), // blockquote element
(0, _slatePlugins.createCodeBlockPlugin)(), // code block element
(0, _slatePlugins.createHeadingPlugin)(), // heading elements
// marks - bold, italic, underline, strikethrough, sub, sup, code
_slatePlugins.createBoldPlugin, _slatePlugins.createItalicPlugin, _slatePlugins.createUnderlinePlugin, _slatePlugins.createStrikethroughPlugin, _slatePlugins.createSubscriptPlugin, _slatePlugins.createSuperscriptPlugin, _slatePlugins.createCodeBlockPlugin];
var _default = plugins;
exports.default = _default;