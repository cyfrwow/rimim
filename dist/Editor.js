"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

var _toolbar = _interopRequireDefault(require("./toolbar"));

var _plugins = _interopRequireDefault(require("./plugins"));

var _turndown = _interopRequireDefault(require("turndown"));

var _turndownPluginGfm = require("turndown-plugin-gfm");

require("./Editor.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-hooks/exhaustive-deps */
const components = (0, _slatePlugins.createSlatePluginsComponents)();
const options = (0, _slatePlugins.createSlatePluginsOptions)();
const turndownService = new _turndown.default({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  emDelimiter: "*"
}).use([_turndownPluginGfm.gfm]).addRule("strikethrough", {
  filter: ["del", "s", "strike"],
  replacement: function replacement(content) {
    return "~~" + content + "~~";
  }
}).addRule("underline", {
  filter: ["u"],
  replacement: function replacement(content) {
    return "__" + content + "__";
  }
});

function Editor(_ref) {
  let {
    onChange,
    initialValue = "",
    inputFormat = "html",
    outputFormat = "markdown"
  } = _ref;
  const id = "slate-plugins-editor";
  const editor = (0, _react.useMemo)(() => (0, _slatePlugins.createEditorPlugins)({
    id,
    plugins: _plugins.default,
    options,
    components
  }), []);
  const [value, setValue] = (0, _react.useState)(initialValue);
  const [htmlValue, setHtmlValue] = (0, _react.useState)(null);
  const [markdownValue, setMarkdownValue] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (inputFormat === "html") {
      setValue([{
        children: (0, _slatePlugins.deserializeHTMLToDocumentFragment)(editor, {
          plugins: _plugins.default,
          element: initialValue
        })
      }]);
    } else {
      setValue(initialValue);
    }
  }, [initialValue]);
  (0, _react.useEffect)(() => {
    if (value) {
      if (outputFormat === "slate") {
        onChange && onChange(value);
        return;
      }

      const html = (0, _slatePlugins.serializeHTMLFromNodes)(editor, {
        plugins: _plugins.default,
        nodes: value
      });
      setHtmlValue(html);
    }
  }, [value]);
  (0, _react.useEffect)(() => {
    if (htmlValue && outputFormat === "html") {
      onChange && onChange(htmlValue);
      return;
    }

    if (htmlValue) setMarkdownValue(turndownService.turndown(htmlValue));
  }, [htmlValue]);
  (0, _react.useEffect)(() => {
    if (markdownValue) onChange && onChange(markdownValue);
  }, [markdownValue]);

  function handleOnChange(slateObject) {
    setValue(slateObject);
  }

  const editableProps = {
    placeholder: "Type…",
    autofocus: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_slatePlugins.HeadingToolbar, null, /*#__PURE__*/_react.default.createElement(_toolbar.default, null)), /*#__PURE__*/_react.default.createElement(_slatePlugins.SlatePlugins, {
    id: id,
    plugins: _plugins.default,
    components: components,
    options: options,
    initialValue: value,
    editableProps: editableProps,
    onChange: newValue => handleOnChange(newValue)
  }));
}

var _default = Editor;
exports.default = _default;