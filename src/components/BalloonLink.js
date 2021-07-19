/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import {
    useStoreEditorState,
    useEventEditorId,
    PortalBody,
    setPositionAtSelection,
    ELEMENT_LINK,
    getAbove,
    upsertLinkAtSelection,
} from '@udecode/slate-plugins';
import cx from 'classnames';
import { Transforms } from 'slate';
import { useEditorStore } from '../store/editorStore';
import './BalloonLink.css';

const BalloonLink = () => {
    const ref = useRef(null);
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const [selection, setSelection] = useState(null);

    const isLinkOpen = useEditorStore((state) => state.isLinkOpen);
    const setIsLinkOpen = useEditorStore((state) => state.setIsLinkOpen);
    const editorSelection = useEditorStore((state) => state.editorSelection);
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );

    useEffect(() => {
        // console.log(isLinkOpen, editorSelection);
        setShow((prevState) => isLinkOpen);
    }, [isLinkOpen]);

    useEffect(() => {
        // console.log(show, editor?.selection);
        if (!editor || show || !editor.selection) return;
        //to check if selection on editor is a link

        // if (show && !editor.selection) return;
        const active =
            editor !== null &&
            editor !== void 0 &&
            editor.selection &&
            getAbove(editor, {
                match: {
                    type: ELEMENT_LINK,
                },
            });
        if (!active) return;
        // console.log(editor.selection);
        if (active && !show) {
            //get parent of the selection
            const linkNode = getAbove(editor, {
                match: {
                    type: ELEMENT_LINK,
                },
            });
            //get the url value of the link
            if (linkNode) {
                setValue(linkNode[0].url);
            }
            //move cursor to end of word
            Transforms.move(editor, {
                distance: 1,
                unit: 'word',
                edge: 'start',
            });
            //select the entire word
            Transforms.select(editor, {
                anchor: {
                    path: editor.selection.anchor.path,
                    offset: 0,
                },
                focus: {
                    path: editor.selection.focus.path,
                    offset: editor.selection.anchor.offset,
                },
            });
            //save the selection
            setSelection({
                anchor: {
                    path: editor.selection.anchor.path,
                    offset: 0,
                },
                focus: {
                    path: editor.selection.focus.path,
                    offset: editor.selection.anchor.offset,
                },
            });
            //move the ref component to the selection point
            setPositionAtSelection(ref.current);
            //show the link component
            setIsLinkOpen(true);
        }
    }, [editor?.selection]);

    const handleClick = async (event) => {
        if (!editor) return;
        event.preventDefault();
        //select the previous selection which is lost when focusing on textbox
        Transforms.select(editor, selection ?? editorSelection);
        //insert link at the location, using the saved new url
        upsertLinkAtSelection(editor, {
            url: value,
            wrap: true,
        });
        handleClose();
    };

    const handleClose = () => {
        //close the link component
        setIsLinkOpen(false);
        //reset store value
        setEditorSelection(null);
        //reset local state
        setValue('');
        setShow(false);
        setSelection(null);
    };
    return (
        <PortalBody>
            <div
                className={cx('link__container', show ? 'show' : '')}
                ref={ref}
            >
                <input
                    className='link__input'
                    placeholder='URL'
                    value={value}
                    autoFocus
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className='link__button' onClick={(e) => handleClick(e)}>
                    add
                </span>
                <span className='link__button' onClick={handleClose}>
                    X
                </span>
            </div>
        </PortalBody>
    );
};

export default BalloonLink;
