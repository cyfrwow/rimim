import { useCallback } from 'react';
import {
    getBlockAbove,
    getSlatePluginType,
    insertNodes,
    ELEMENT_LINK,
} from '@udecode/slate-plugins';
import { Editor, Transforms } from 'slate';
import { useLinkboxIsOpen } from '../selectors/useLinkboxIsOpen';
import { useLinkboxStore } from '../../link/useLinkboxStore';
// import { ELEMENT_TAG } from '../defaults';

/**
 * Select the target range, add a tag node and set the target range to null
 */
export const useAddItem = () => {
    const isOpen = useLinkboxIsOpen();
    const targetRange = useLinkboxStore((state) => state.targetRange);
    const closeMenu = useLinkboxStore((state) => state.closeMenu);

    return useCallback(
        (editor, item) => {
            const type = getSlatePluginType(editor, ELEMENT_LINK);

            if (isOpen && targetRange) {
                const pathAbove = getBlockAbove(editor)?.[1];
                const isBlockEnd =
                    editor.selection &&
                    pathAbove &&
                    Editor.isEnd(editor, editor.selection.anchor, pathAbove);

                // insert a space to fix the bug
                if (isBlockEnd) {
                    Transforms.insertText(editor, ' ');
                }

                // select the tag text and insert the tag element
                Transforms.select(editor, targetRange);
                insertNodes(editor, {
                    type,
                    children: [{ text: '' }],
                    value: item.text,
                });
                // move the selection after the tag element
                Transforms.move(editor);

                // delete the inserted space
                if (isBlockEnd) {
                    Transforms.delete(editor);
                }

                return closeMenu();
            }
        },
        [closeMenu, isOpen, targetRange]
    );
};
