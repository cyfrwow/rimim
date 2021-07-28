import { useCallback } from 'react';
import {
    toggleNodeType,
    toggleMark,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_UL,
    ELEMENT_OL,
    ELEMENT_BLOCKQUOTE,
    MARK_CODE,
    toggleList,
    insertEmptyCodeBlock,
} from '@udecode/slate-plugins';
import insertTable from '../helpers/insertTable';

const useKeyDown = () => {
    return useCallback(
        (editor) => (event) => {
            //Ctrl ⌘ + Alt ⌥  + ⇧
            if (
                (event.metaKey || event.ctrlKey) &&
                event.altKey &&
                event.shiftKey
            ) {
                event.preventDefault();
                switch (event.keyCode) {
                    case 77: //M - Code block
                        insertEmptyCodeBlock(editor, {
                            insertNodesOptions: {
                                select: true,
                            },
                        });
                        break;
                    default:
                        return;
                }
            }
            //Ctrl ⌘ + ⇧
            if ((event.metaKey || event.ctrlKey) && event.shiftKey) {
                event.preventDefault();
                let activeType = null;
                let activeMark = null;
                switch (event.key) {
                    case '0':
                        activeType = ELEMENT_H1;
                        break;
                    case '1':
                        activeType = ELEMENT_H2;
                        break;
                    case '2':
                        activeType = ELEMENT_H3;
                        break;
                    case '3':
                        activeType = ELEMENT_H4;
                        break;
                    case '4':
                        activeType = ELEMENT_H5;
                        break;
                    case '5':
                        activeType = ELEMENT_H6;
                        break;
                    case '7':
                        toggleList(editor, {
                            type: ELEMENT_OL,
                        });
                        return;
                    case '8':
                        toggleList(editor, {
                            type: ELEMENT_UL,
                        });
                        return;
                    case 'm':
                        activeMark = MARK_CODE;
                        break;
                    case '.':
                        activeType = ELEMENT_BLOCKQUOTE;
                        break;
                    default:
                        return;
                }
                activeMark
                    ? toggleMark(editor, activeMark)
                    : toggleNodeType(editor, {
                          activeType,
                      });
            }
            //Alt ⌥  + ⇧
            if (event.altKey && event.shiftKey) {
                event.preventDefault();
                switch (event.keyCode) {
                    case 84: //T - Table
                        insertTable(editor, {
                            header: true,
                        });
                        break;
                    default:
                        return;
                }
            }
        },
        []
    );
};

export default useKeyDown;
