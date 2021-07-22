/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import { MdDelete as DeleteIcon } from 'react-icons/md'
import {
    useStoreEditorState,
    useEventEditorId,
    PortalBody,
    ELEMENT_IMAGE,
    insertImage,
    getSlatePluginType,
    insertNodes,
    setPositionAtSelection,
    ELEMENT_IMAGE,
    getAbove
} from '@udecode/slate-plugins';
import cx from 'classnames';
import { Transforms } from 'slate';
import { useEditorStore } from '../store/editorStore';
import './BalloonLink.css';

const BalloonImage = () => {
    const ref = useRef(null);
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const [show, setShow] = useState(false);
    const [isEditMode, setIsEditMode] = useState(true);
    const [value, setValue] = useState('');
    const [selection, setSelection] = useState(null);

    const isImageOpen = useEditorStore((state) => state.isImageOpen);
    const setIsImageOpen = useEditorStore((state) => state.setIsImageOpen);
    const editorSelection = useEditorStore((state) => state.editorSelection);
    const editorSelectionText = useEditorStore(
        (state) => state.editorSelectionText
    );
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );

    useEffect(() => {
        setIsEditMode(true);
        setShow(isImageOpen)
    }, [isImageOpen]);

    useEffect(() => {
        if (!editor) return;

        if (isImageOpen && !show) {
            if (editor.selection) {
                //save the selection
                setSelection({
                    anchor: editor.selection.anchor,
                    focus: {
                        path: editor.selection.focus.path,
                        offset: editor.selection.focus.offset,
                    },
                });
                //move the ref component to the selection point
                setPositionAtSelection(ref.current);
                //show the image component
                setIsImageOpen(true);
            }
        }
    }, [show, isImageOpen]);

    useEffect(() => {
        const imageNode = editor?.selection && getAbove(editor, {
            match: {
                type: ELEMENT_IMAGE,
            },
        });

        if (!!imageNode) {
            const { url } = imageNode[0]
            setValue(url);
            setIsEditMode(false);

            //save the selection
            setSelection({
                anchor: editor.selection.anchor,
                focus: {
                    path: editor.selection.focus.path,
                    offset: editor.selection.focus.offset,
                },
            });
            //move the ref component to the selection point
            setPositionAtSelection(ref.current);
            //show the image component
            setShow(true);
        }
        else {
            if (!isImageOpen && show) setShow(false)
        }
    }, [editor?.selection])

    const handleAdd = async (event) => {
        if (!editor) return;
        event.preventDefault();

        //select the previous selection which is lost when focusing on textbox
        Transforms.select(editor, selection ?? editorSelection);

        //insert link at the location, using the saved new url
        // insertImage(editor, value);
        const image = {
            type: getSlatePluginType(editor, ELEMENT_IMAGE),
            url: value,
            caption: editorSelectionText,
            children: [{ text: '' }],
        };
        insertNodes(editor, image);

        //close the link component
        setIsImageOpen(false);

        //reset store value
        setEditorSelection(null);
        //reset local state
        setValue('');
    };

    const handleDelete = async (event) => {
        if (!editor) return;
        event.preventDefault();

        Transforms.select(editor, selection);
        Transforms.removeNodes(editor, {
            match: (n) => n.type === ELEMENT_IMAGE,
        });

        setIsEditMode(true);

        //close the link component
        setIsImageOpen(false);

        //reset store value
        setEditorSelection(null);
        //reset local state
        setValue('');
    };

    const handleClose = async (event) => {
        if (!editor) return;
        event.preventDefault();

        setIsEditMode(true);

        //close the link component
        setIsImageOpen(false);
        setShow(false);

        //reset store value
        setEditorSelection(null);
        //reset local state
        setValue('');
    };

    return (
        <PortalBody>
            <div
                className={cx('link__container', show ? 'show' : '')}
                ref={ref}
                style={show && !isImageOpen ? {
                    transform: 'translateX(100%) translateY(50%)',
                    marginTop: '0px'
                } : {}}
            >
                {isEditMode ?
                    (<><input
                        className='link__input'
                        placeholder='URL'
                        value={value}
                        autoFocus
                        onChange={(event) => setValue(event.target.value)}
                    />
                        <span
                            style={{
                                marginLeft: '8px'
                            }}
                            className='link__button'
                            onClick={(event) => handleAdd(event)}
                        >
                            add
                        </span>
                        <span
                            style={{
                                marginLeft: '8px'
                            }}
                            className='link__button' onClick={handleClose}>
                            X
                        </span>
                    </>) :
                    (<>
                        <span
                            className='link__button'
                            onClick={() => setIsEditMode(true)}
                        >
                            Edit link
                        </span>
                        <span
                            style={{
                                marginLeft: '8px'
                            }} className='link__button' onClick={handleDelete}>
                            <DeleteIcon style={{
                                fontSize: '18px'
                            }} />
                        </span>
                    </>)}
            </div>
        </PortalBody>
    );
};

export default BalloonImage;
