"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _basic = _interopRequireDefault(require("./basic"));

var _format = _interopRequireDefault(require("./format"));

var _toolbar = _interopRequireDefault(require("./toolbar"));

var _custom = _interopRequireDefault(require("./custom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const plugins = [..._basic.default, ..._format.default, ..._toolbar.default, ..._custom.default];
var _default = plugins;
exports.default = _default;