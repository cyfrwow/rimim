"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _slatePlugins = require("@udecode/slate-plugins");

var _custom = require("./custom");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const preFormat = editor => (0, _slatePlugins.unwrapList)(editor);

const optionsSoftBreakPlugin = {
  rules: [{
    hotkey: "shift+enter"
  }, {
    hotkey: "enter",
    query: {
      allow: [_slatePlugins.ELEMENT_CODE_BLOCK, _slatePlugins.ELEMENT_BLOCKQUOTE, _slatePlugins.ELEMENT_TD]
    }
  }]
};
const resetBlockTypesCommonRule = {
  types: [_slatePlugins.ELEMENT_BLOCKQUOTE, _slatePlugins.ELEMENT_TODO_LI],
  defaultType: _slatePlugins.ELEMENT_PARAGRAPH
};
const optionsResetBlockTypePlugin = {
  rules: [_objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: "Enter",
    predicate: _slatePlugins.isBlockAboveEmpty
  }), _objectSpread(_objectSpread({}, resetBlockTypesCommonRule), {}, {
    hotkey: "Backspace",
    predicate: _slatePlugins.isSelectionAtBlockStart
  })]
};
const optionsExitBreakPlugin = {
  rules: [{
    hotkey: "mod+enter"
  }, {
    hotkey: "mod+shift+enter",
    before: true
  }, {
    hotkey: "enter",
    query: {
      start: true,
      end: true,
      allow: _slatePlugins.KEYS_HEADING
    }
  }]
};
const optionsAutoformat = {
  rules: [{
    type: _slatePlugins.ELEMENT_H1,
    markup: "#",
    preFormat
  }, {
    type: _slatePlugins.ELEMENT_H2,
    markup: "##",
    preFormat
  }, {
    type: _slatePlugins.ELEMENT_H3,
    markup: "###",
    preFormat
  }, {
    type: _slatePlugins.ELEMENT_H4,
    markup: "####",
    preFormat
  }, {
    type: _slatePlugins.ELEMENT_H5,
    markup: "#####",
    preFormat
  }, {
    type: _slatePlugins.ELEMENT_H6,
    markup: "######",
    preFormat
  }, {
    type: _custom.ELEMENT_HR,
    markup: "---"
  }, {
    type: _slatePlugins.ELEMENT_LI,
    markup: ["*", "-"],
    preFormat,
    format: editor => {
      if (editor.selection) {
        const parentEntry = (0, _slatePlugins.getParent)(editor, editor.selection);
        if (!parentEntry) return;
        const [node] = parentEntry;

        if ((0, _slatePlugins.isElement)(node) && !(0, _slatePlugins.isType)(editor, node, _slatePlugins.ELEMENT_CODE_BLOCK) && !(0, _slatePlugins.isType)(editor, node, _slatePlugins.ELEMENT_CODE_LINE)) {
          (0, _slatePlugins.toggleList)(editor, {
            type: _slatePlugins.ELEMENT_UL
          });
        }
      }
    }
  }, {
    type: _slatePlugins.ELEMENT_LI,
    markup: ["1.", "1)"],
    format: editor => {
      if (editor.selection) {
        const parentEntry = (0, _slatePlugins.getParent)(editor, editor.selection);
        if (!parentEntry) return;
        const [node] = parentEntry;

        if ((0, _slatePlugins.isElement)(node) && !(0, _slatePlugins.isType)(editor, node, _slatePlugins.ELEMENT_CODE_BLOCK) && !(0, _slatePlugins.isType)(editor, node, _slatePlugins.ELEMENT_CODE_LINE)) {
          (0, _slatePlugins.toggleList)(editor, {
            type: _slatePlugins.ELEMENT_OL
          });
        }
      }
    }
  }, {
    type: _slatePlugins.ELEMENT_TODO_LI,
    markup: ["[]"]
  }, {
    type: _slatePlugins.ELEMENT_BLOCKQUOTE,
    markup: [">"],
    preFormat
  }, {
    type: _slatePlugins.MARK_BOLD,
    between: ["**", "**"],
    mode: "inline",
    insertTrigger: true
  }, {
    type: _slatePlugins.MARK_UNDERLINE,
    between: ["__", "__"],
    mode: "inline",
    insertTrigger: true
  }, {
    type: _slatePlugins.MARK_ITALIC,
    between: ["*", "*"],
    mode: "inline",
    insertTrigger: true
  }, {
    type: _slatePlugins.MARK_CODE,
    between: ["`", "`"],
    mode: "inline",
    insertTrigger: true
  }, {
    type: _slatePlugins.MARK_STRIKETHROUGH,
    between: ["~~", "~~"],
    mode: "inline",
    insertTrigger: true
  }, {
    type: _slatePlugins.ELEMENT_CODE_BLOCK,
    markup: "``",
    trigger: "`",
    triggerAtBlockStart: false,
    preFormat,
    format: editor => {
      (0, _slatePlugins.insertEmptyCodeBlock)(editor, {
        defaultType: (0, _slatePlugins.getSlatePluginType)(editor, _slatePlugins.ELEMENT_DEFAULT),
        insertNodesOptions: {
          select: true
        }
      });
    }
  }]
};
const plugins = [(0, _slatePlugins.createResetNodePlugin)(optionsResetBlockTypePlugin), (0, _slatePlugins.createSoftBreakPlugin)(optionsSoftBreakPlugin), (0, _slatePlugins.createExitBreakPlugin)(optionsExitBreakPlugin), (0, _slatePlugins.createAutoformatPlugin)(optionsAutoformat), (0, _slatePlugins.createTrailingBlockPlugin)({
  type: _slatePlugins.ELEMENT_PARAGRAPH
})];
var _default = plugins;
exports.default = _default;