export const ELEMENT_HR = "hr";

const getThemacticBreakElement = () => (editor) => (props) => {
  if (props.element.type === ELEMENT_HR) {
    return <hr />;
  }
};

function createThematicBreakPlugin() {
  return {
    pluginKeys: ELEMENT_HR,
    renderElement: getThemacticBreakElement(),
  };
}

const plugins = [createThematicBreakPlugin()];

export default plugins;
