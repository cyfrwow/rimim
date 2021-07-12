"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _slatePlugins = require("@udecode/slate-plugins");

const plugins = [...(0, _slatePlugins.createBasicElementPlugins)(), ...(0, _slatePlugins.createBasicMarkPlugins)(), (0, _slatePlugins.createLinkPlugin)(), (0, _slatePlugins.createListPlugin)(), (0, _slatePlugins.createImagePlugin)(), (0, _slatePlugins.createTablePlugin)(), (0, _slatePlugins.createSelectOnBackspacePlugin)({
  allow: [_slatePlugins.ELEMENT_IMAGE]
}), createDeserializeMDPlugin()];
var _default = plugins;
exports.default = _default;