/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import {
    useStoreEditorState,
    useEventEditorId,
    setPositionAtSelection,
    PortalBody,
    ToolbarTable,
    deleteTable,
    addRow,
    addColumn,
    deleteRow,
    deleteColumn,
    getAbove,
    ELEMENT_TABLE,
} from '@udecode/slate-plugins';
import {
    AiOutlineInsertRowBelow as InsertRowIcon,
    AiOutlineInsertRowRight as InsertColumnIcon,
    AiOutlineDeleteColumn as DeleteRowIcon,
    AiOutlineDeleteRow as DeleteColumnIcon,
    AiOutlineDelete as DeleteTableIcon,
} from 'react-icons/ai';
// import { Transforms } from 'slate';
// import { useEditorStore } from '../store/editorStore';
import cx from 'classnames';
import './BalloonTable.css';

function BalloonTable() {
    const ref = useRef(null);
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const [show, setShow] = useState(false);
    // const [value, setValue] = useState('');
    const [selection, setSelection] = useState(null);
    // const [isEditMode, setIsEditMode] = useState(true);

    // const isTableOpen = useEditorStore((state) => state.isTableOpen);
    // const setIsTableOpen = useEditorStore((state) => state.setIsTableOpen);
    // const editorSelection = useEditorStore((state) => state.editorSelection);
    // const setEditorSelection = useEditorStore(
    //     (state) => state.setEditorSelection
    // );

    // useEffect(() => {
    //     // console.log(isTableOpen, editorSelection);
    //     setShow((prevState) => isTableOpen);
    //     setPositionAtSelection(ref.current);
    // }, [isTableOpen]);

    useEffect(() => {
        if (editor && editor.selection && show) {
            setPositionAtSelection(ref.current, 'bottom');
            let left = ref.current.style.left;
            left = parseInt(left.split('px')[0], 10);

            if (left < 35) {
                ref.current.style.setProperty('left', '35px');
            } else {
                left = left + 85;
                ref.current.style.setProperty('left', left + 'px');
            }

            const width = ref.current.offsetWidth;
            const right = left + width;
            if (right > window.innerWidth - 35) {
                ref.current.style.setProperty(
                    'left',
                    `${window.innerWidth - 35 - width}px`
                );
            }
        }
    }, [show, selection]);

    useEffect(() => {
        // console.log(show, editor?.selection);
        if (!editor || !editor.selection) {
            return;
        }
        // console.log(editor.selection);
        //to check if selection on editor is a link
        const active = getAbove(editor, {
            match: {
                type: ELEMENT_TABLE,
            },
        });
        if (!active) {
            setShow(false);
            return;
        }
        if (active) {
            //get parent of the selection
            const linkNode = getAbove(editor, {
                match: {
                    type: ELEMENT_TABLE,
                },
            });
            //get the url value of the link
            if (linkNode) {
                console.log(editor.selection);
                setSelection(editor.selection);
                setShow(true);
                // console.log(linkNode);
            }
            //show the link component
        }
    });

    return (
        <PortalBody>
            <div
                className={cx('table__container', show ? 'show' : '')}
                ref={ref}
            >
                <span className='toolbar__table toolbar__table--deltab'>
                    <ToolbarTable
                        icon={<DeleteTableIcon />}
                        transform={deleteTable}
                        tooltip={{
                            content: 'Delete table',
                            arrow: true,
                            delay: 0,
                            duration: [200, 0],
                            hideOnClick: true,
                            offset: [0, 17],
                            placement: 'bottom',
                        }}
                    />
                </span>
                <span className='toolbar__table toolbar__table--addrow'>
                    <ToolbarTable
                        icon={<InsertRowIcon />}
                        transform={addRow}
                        tooltip={{
                            content: 'Add row',
                            arrow: true,
                            delay: 0,
                            duration: [200, 0],
                            hideOnClick: true,
                            offset: [0, 17],
                            placement: 'bottom',
                        }}
                    />
                </span>
                <span className='toolbar__table toolbar__table--delrow'>
                    <ToolbarTable
                        icon={<DeleteRowIcon />}
                        transform={deleteRow}
                        tooltip={{
                            content: 'Delete row',
                            arrow: true,
                            delay: 0,
                            duration: [200, 0],
                            hideOnClick: true,
                            offset: [0, 17],
                            placement: 'bottom',
                        }}
                    />
                </span>
                <span className='toolbar__table toolbar__table--addcol'>
                    <ToolbarTable
                        icon={<InsertColumnIcon />}
                        transform={addColumn}
                        tooltip={{
                            content: 'Add column',
                            arrow: true,
                            delay: 0,
                            duration: [200, 0],
                            hideOnClick: true,
                            offset: [0, 17],
                            placement: 'bottom',
                        }}
                    />
                </span>
                <span className='toolbar__table toolbar__table--delcol'>
                    <ToolbarTable
                        icon={<DeleteColumnIcon />}
                        transform={deleteColumn}
                        tooltip={{
                            content: 'Delete column',
                            arrow: true,
                            delay: 0,
                            duration: [200, 0],
                            hideOnClick: true,
                            offset: [0, 17],
                            placement: 'bottom',
                        }}
                    />
                </span>
            </div>
        </PortalBody>
    );
}

export default BalloonTable;
