"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButtonsTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _slatePlugins = require("@udecode/slate-plugins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolbarButtonsTable = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "+T",
  transform: _slatePlugins.insertTable
}), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "-T",
  transform: _slatePlugins.deleteTable
}), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "+R",
  transform: _slatePlugins.addRow
}), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "-R",
  transform: _slatePlugins.deleteRow
}), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "+C",
  transform: _slatePlugins.addColumn
}), /*#__PURE__*/_react.default.createElement(_slatePlugins.ToolbarTable, {
  icon: "-C",
  transform: _slatePlugins.deleteColumn
}));

exports.ToolbarButtonsTable = ToolbarButtonsTable;