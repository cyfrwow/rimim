import {
    getNodeDeserializer,
    getSlateClass,
    getSlatePluginOptions,
} from '@udecode/slate-plugins';

export const ELEMENT_HR = 'hr';

const getThemacticBreakElement = () => (editor) => (props) => {
    if (props.element.type === ELEMENT_HR) {
        return <hr />;
    }
};

const getThemacticBreakDeserialize = () => (editor) => {
    const options = getSlatePluginOptions(editor, ELEMENT_HR);
    console.log(options);
    return {
        element: getNodeDeserializer({
            type: options.type,
            getNode: (el) => ({
                type: options.type,
                value: el.getAttribute('data-slate-value'),
            }),
            rules: [
                {
                    className: getSlateClass(options.type),
                },
            ],
            ...options.deserialize,
        }),
    };
};

function createThematicBreakPlugin() {
    return {
        pluginKeys: ELEMENT_HR,
        deserialize: getThemacticBreakDeserialize(),
        renderElement: getThemacticBreakElement(),
    };
}

const plugins = [createThematicBreakPlugin()];

export default plugins;
