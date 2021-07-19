import { getRenderElement, getSlatePluginTypes } from '@udecode/slate-plugins';
import { ELEMENT_HR } from './defaults';
import { getThematicBreakDeserialize } from './getThematicBreakDeserialize';

/**
 * Enables support for hypertags.
 */
export const createThematicBreakPlugin = () => ({
    renderElement: getRenderElement(ELEMENT_HR),
    deserialize: getThematicBreakDeserialize(),
    voidTypes: getSlatePluginTypes(ELEMENT_HR),
});
