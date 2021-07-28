import {
    createResetNodePlugin,
    createSoftBreakPlugin,
    createExitBreakPlugin,
    createAutoformatPlugin,
    createTrailingBlockPlugin,
    ELEMENT_PARAGRAPH,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_CODE_BLOCK,
    ELEMENT_TODO_LI,
    ELEMENT_TD,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_LI,
    ELEMENT_UL,
    ELEMENT_OL,
    ELEMENT_CODE_LINE,
    ELEMENT_DEFAULT,
    isElement,
    isType,
    getParent,
    unwrapList,
    toggleList,
    isBlockAboveEmpty,
    isSelectionAtBlockStart,
    insertEmptyCodeBlock,
    getSlatePluginType,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_UNDERLINE,
    MARK_STRIKETHROUGH,
    MARK_CODE,
    KEYS_HEADING,
    ELEMENT_TABLE,
} from '@udecode/slate-plugins';
import * as slatePluginsCommon from '@udecode/slate-plugins-common';
import { ELEMENT_HR } from '../hr/defaults';
import insertTable from '../utils/insertTable';

const preFormat = (editor) => unwrapList(editor);

const optionsSoftBreakPlugin = {
    rules: [
        { hotkey: 'shift+enter' },
        {
            hotkey: 'enter',
            query: {
                allow: [
                    ELEMENT_CODE_BLOCK,
                    ELEMENT_BLOCKQUOTE,
                    ELEMENT_TD,
                    ELEMENT_HR,
                ],
            },
        },
    ],
};

const resetBlockTypesCommonRule = {
    types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
    defaultType: ELEMENT_PARAGRAPH,
};

const optionsResetBlockTypePlugin = {
    rules: [
        {
            ...resetBlockTypesCommonRule,
            hotkey: 'Enter',
            predicate: isBlockAboveEmpty,
        },
        {
            ...resetBlockTypesCommonRule,
            hotkey: 'Backspace',
            predicate: isSelectionAtBlockStart,
        },
    ],
};

const optionsExitBreakPlugin = {
    rules: [
        {
            hotkey: 'mod+enter',
        },
        {
            hotkey: 'mod+shift+enter',
            before: true,
        },
        {
            hotkey: 'enter',
            query: {
                start: true,
                end: true,
                allow: KEYS_HEADING,
            },
        },
    ],
};

const optionsAutoformat = {
    rules: [
        {
            type: ELEMENT_H1,
            markup: '#',
            preFormat,
        },
        {
            type: ELEMENT_H2,
            markup: '##',
            preFormat,
        },
        {
            type: ELEMENT_H3,
            markup: '###',
            preFormat,
        },
        {
            type: ELEMENT_H4,
            markup: '####',
            preFormat,
        },
        {
            type: ELEMENT_H5,
            markup: '#####',
            preFormat,
        },
        {
            type: ELEMENT_H6,
            markup: '######',
            preFormat,
        },
        {
            type: ELEMENT_HR,
            markup: '---',
            format: (editor) => {
                slatePluginsCommon.setNodes(editor, {
                    type: ELEMENT_HR,
                });
                slatePluginsCommon.insertNodes(editor, {
                    type: ELEMENT_DEFAULT,
                    children: [
                        {
                            text: '',
                        },
                    ],
                });
            },
        },
        {
            type: ELEMENT_LI,
            markup: ['*', '-'],
            preFormat,
            format: (editor) => {
                if (editor.selection) {
                    const parentEntry = getParent(editor, editor.selection);
                    if (!parentEntry) return;
                    const [node] = parentEntry;
                    if (
                        isElement(node) &&
                        !isType(editor, node, ELEMENT_CODE_BLOCK) &&
                        !isType(editor, node, ELEMENT_CODE_LINE)
                    ) {
                        toggleList(editor, {
                            type: ELEMENT_UL,
                        });
                    }
                }
            },
        },
        {
            type: ELEMENT_LI,
            markup: ['1.', '1)'],
            format: (editor) => {
                if (editor.selection) {
                    const parentEntry = getParent(editor, editor.selection);
                    if (!parentEntry) return;
                    const [node] = parentEntry;
                    if (
                        isElement(node) &&
                        !isType(editor, node, ELEMENT_CODE_BLOCK) &&
                        !isType(editor, node, ELEMENT_CODE_LINE)
                    ) {
                        toggleList(editor, {
                            type: ELEMENT_OL,
                        });
                    }
                }
            },
        },
        {
            type: ELEMENT_TODO_LI,
            markup: ['[]'],
        },
        {
            type: ELEMENT_BLOCKQUOTE,
            markup: ['>'],
            preFormat,
        },
        {
            type: ELEMENT_TABLE,
            markup: ['||'],
            format: (editor) => {
                insertTable(editor);
            },
        },
        {
            type: MARK_BOLD,
            between: ['**', '**'],
            mode: 'inline',
            insertTrigger: true,
        },
        {
            type: MARK_UNDERLINE,
            between: ['__', '__'],
            mode: 'inline',
            insertTrigger: true,
        },
        {
            type: MARK_ITALIC,
            between: ['*', '*'],
            mode: 'inline',
            insertTrigger: true,
        },
        {
            type: MARK_CODE,
            between: ['`', '`'],
            mode: 'inline',
            insertTrigger: true,
        },
        {
            type: MARK_STRIKETHROUGH,
            between: ['~~', '~~'],
            mode: 'inline',
            insertTrigger: true,
        },
        {
            type: ELEMENT_CODE_BLOCK,
            markup: '``',
            trigger: '`',
            triggerAtBlockStart: false,
            preFormat,
            format: (editor) => {
                insertEmptyCodeBlock(editor, {
                    defaultType: getSlatePluginType(editor, ELEMENT_DEFAULT),
                    insertNodesOptions: { select: true },
                });
            },
        },
    ],
};

const plugins = [
    createResetNodePlugin(optionsResetBlockTypePlugin),
    createSoftBreakPlugin(optionsSoftBreakPlugin),
    createExitBreakPlugin(optionsExitBreakPlugin),
    createAutoformatPlugin(optionsAutoformat),
    createTrailingBlockPlugin({ type: ELEMENT_PARAGRAPH }),
];

export default plugins;
