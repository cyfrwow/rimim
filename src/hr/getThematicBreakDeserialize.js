import {
    getNodeDeserializer,
    getSlateClass,
    getSlatePluginOptions,
} from '@udecode/slate-plugins';
import { ELEMENT_HR } from './defaults';

export const getThematicBreakDeserialize = () => (editor) => {
    const options = getSlatePluginOptions(editor, ELEMENT_HR);

    return {
        element: getNodeDeserializer({
            type: options.type,
            getNode: (el) => ({
                type: options.type,
                value: el.getAttribute('data-slate-value'),
            }),
            rules: [{ className: getSlateClass(options.type) }],
            ...options.deserialize,
        }),
    };
};
