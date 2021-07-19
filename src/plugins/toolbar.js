import {
    createBasicElementPlugins,
    createBasicMarkPlugins,
    createLinkPlugin,
    createListPlugin,
    createImagePlugin,
    createTablePlugin,
    createSelectOnBackspacePlugin,
    createDeserializeMDPlugin,
    ELEMENT_IMAGE,
} from '@udecode/slate-plugins';

const plugins = [
    ...createBasicElementPlugins(),
    ...createBasicMarkPlugins(),
    createLinkPlugin(),
    createListPlugin(),
    createImagePlugin(),
    createTablePlugin(),
    createSelectOnBackspacePlugin({ allow: [ELEMENT_IMAGE] }),
    createDeserializeMDPlugin(),
];

export default plugins;
