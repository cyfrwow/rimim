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
    insertEmptyCodeBlock,
    MARK_STRIKETHROUGH,
    toggleList,
    MARK_CODE,
    ELEMENT_BLOCKQUOTE,
} from '@udecode/slate-plugins';
import insertTable from '../utils/insertTable';

const useKeyDown = () => {
    return useCallback(
        (editor) => (event) => {
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
                    case 'S':
                        activeMark = MARK_STRIKETHROUGH;
                        break;
                    case 'M':
                        activeMark = MARK_CODE;
                        break;
                    case '.':
                        activeType = ELEMENT_BLOCKQUOTE;
                        return;
                    default:
                        return;
                }
                activeMark
                    ? toggleMark(editor, {
                          type: activeMark,
                      })
                    : toggleNodeType(editor, {
                          activeType,
                      });
            }
            if (
                (event.metaKey || event.ctrlKey) &&
                event.altKey &&
                event.shiftKey
            ) {
                switch (event.code) {
                    case 'KeyM':
                        insertEmptyCodeBlock(editor, {
                            insertNodesOptions: {
                                select: true,
                            },
                        });
                        return;
                    default:
                        return;
                }
            }
            if (event.altKey && event.shiftKey) {
                event.preventDefault();
                switch (event.keyCode) {
                    case 84:
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
