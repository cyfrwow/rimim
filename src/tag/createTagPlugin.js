import { getRenderElement, getSlatePluginTypes } from '@udecode/slate-plugins';
import { ELEMENT_TAG } from './defaults';
import { getTagDeserialize } from './getTagDeserialize';

/**
 * Enables support for hypertags.
 */
export const createTagPlugin = () => ({
    renderElement: getRenderElement(ELEMENT_TAG),
    deserialize: getTagDeserialize(),
    inlineTypes: getSlatePluginTypes(ELEMENT_TAG),
    voidTypes: getSlatePluginTypes(ELEMENT_TAG),
});
