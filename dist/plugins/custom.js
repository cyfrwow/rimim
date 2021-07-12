"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ELEMENT_HR = void 0;
const ELEMENT_HR = "hr";
exports.ELEMENT_HR = ELEMENT_HR;

const getThemacticBreakElement = () => editor => props => {
  if (props.element.type === ELEMENT_HR) {
    return /*#__PURE__*/React.createElement("hr", null);
  }
};

function createThematicBreakPlugin() {
  return {
    pluginKeys: ELEMENT_HR,
    renderElement: getThemacticBreakElement()
  };
}

const plugins = [createThematicBreakPlugin()];
var _default = plugins;
exports.default = _default;