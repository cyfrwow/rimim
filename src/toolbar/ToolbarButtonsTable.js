import React from 'react';
import { AiOutlineTable as TableIcon } from 'react-icons/ai';
import {
    someNode,
    getSlatePluginType,
    ELEMENT_TABLE,
    insertNodes,
    getEmptyTableNode,
} from '@udecode/slate-plugins';
import { ToolbarTable } from '../toolbar-custom/ToolbarTable';

import { Transforms } from 'slate';

const insertTable = (editor, { header }) => {
    if (
        !someNode(editor, {
            match: {
                type: getSlatePluginType(editor, ELEMENT_TABLE),
            },
        })
    ) {
        insertNodes(
            editor,
            getEmptyTableNode(editor, {
                header,
            })
        );
        //to place the cursor on the first table cell
        const currentPath = editor.selection.anchor.path;
        const newPath = [currentPath[0], 0, 0, 0, 0];
        Transforms.select(editor, {
            anchor: {
                path: newPath,
                offset: 0,
            },
            focus: {
                path: newPath,
                offset: 0,
            },
        });
    }
};
export const ToolbarButtonsTable = () => (
    <>
        <ToolbarTable
            icon={<TableIcon />}
            transform={insertTable}
            tooltip={{
                content: 'Add table',
                arrow: true,
                delay: 0,
                duration: [200, 0],
                hideOnClick: true,
                offset: [0, 17],
                placement: 'bottom',
            }}
        />
    </>
);
