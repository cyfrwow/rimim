/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
    useStoreEditorState,
    useEventEditorId,
    PortalBody,
    insertImage,
    setPositionAtSelection,
    ELEMENT_IMAGE,
    getAbove,
    getSelectionText
} from '@udecode/slate-plugins';
import clx from 'classnames';
import { Transforms } from 'slate';
import { MdModeEdit as EditIcon, MdDelete as DeleteIcon } from 'react-icons/md';
import { useEditorStore } from '../store/editorStore';
import './BalloonImage.css';

const BalloonImage = () => {
    const ref = useRef(null);
    const editor = useStoreEditorState(useEventEditorId('focus'));

    const [url, setUrl] = useState('');
    const [isUrlEditMode, setIsUrlEditMode] = useState(false);

    const isImageBalloonOpen = useEditorStore((state) => state.isImageBalloonOpen);
    const setIsImageBalloonOpen = useEditorStore((state) => state.setIsImageBalloonOpen);
    const isImageBalloonEditModeOpen = useEditorStore((state) => state.isImageBalloonEditModeOpen);
    const setIsImageBalloonEditModeOpen = useEditorStore((state) => state.setIsImageBalloonEditModeOpen);

    const editorSelection = useEditorStore((state) => state.editorSelection);
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );
    const setEditorSelectionText = useEditorStore(
        (state) => state.setEditorSelectionText
    );

    useEffect(
        () => {
            if(editor && editorSelection){
                setPositionAtSelection(ref.current, 'bottom');
                let left = ref.current.style.left;
                left = parseInt(left.split('px')[0], 10);

                if( left < 8 ){
                    ref.current.style.setProperty('left' , '8px')
                }

                const width = ref.current.offsetWidth;
                const right = left + width;
                if( right > window.innerWidth - 8 ){
                    ref.current.style.setProperty('left' , `${window.innerWidth - 8 - width}px`)
                }
            }
        },
        [isImageBalloonOpen]
    )

    const handleOnClose = useCallback(()=> {
        setUrl('');
        setIsUrlEditMode(false);
        setEditorSelection(null);
        setIsImageBalloonOpen(false);
        setIsImageBalloonEditModeOpen(false);
    },[url])

    const handleOnAdd = useCallback(() => {
        if(editor){
            // select lost selection again
            Transforms.select(editor, editorSelection);

            // insert image at the selection
            insertImage(editor, url);

            // deselect editor to avoid edit popup as soon as add
            Transforms.deselect(editor);

            handleOnClose();
        }
    },[editor, editorSelection, url, handleOnClose])

    const handleOnDelete = useCallback(() => {
        if(editor){
            // select lost selection again
            Transforms.select(editor, editorSelection);

            // select lost selection again
            Transforms.delete(editor, {unit: 'block'}, editorSelection);

            // deselect editor to avoid edit popup as soon as add
            Transforms.deselect(editor);

            handleOnClose();
        }
    }, [editor, editorSelection])

    const handleOnEdit = useCallback(() => {
        setIsImageBalloonEditModeOpen(false);
        setIsUrlEditMode(true);
    }, [])

    const handleOnEditComplete = useCallback(() => {
        // select lost selection again
        Transforms.select(editor, editorSelection);

        const imageNode = getAbove(editor, {
            match: {
                type: ELEMENT_IMAGE,
            },
        });

        if(imageNode){
            Transforms.setNodes(editor, { url });
        }

        // deselect editor to avoid edit popup as soon as add
        Transforms.deselect(editor);

        handleOnClose();
    
    }, [editor, editorSelection, url])

    useEffect(
        () => {
            if(editor){
                const imageNode = getAbove(editor, {
                    match: {
                        type: ELEMENT_IMAGE,
                    },
                });
                
                if( imageNode ){
                    setUrl(imageNode[0].url);
                    setIsImageBalloonOpen(true);
                    setIsImageBalloonEditModeOpen(true);

                    // As toolbar not triggering this, selection needs to be done
                    
                    // set selection position in GS
                    setEditorSelection(editor.selection);

                    // set the text under selection in GS
                    setEditorSelectionText(getSelectionText(editor));
                }
                else {
                    if( isImageBalloonOpen ){
                        // handleOnClose();
                    }
                }
            }
        },
        [editor?.selection, editorSelection]
    )

    return (
        <PortalBody>
            <div
                className={clx('image-balloon-container', isImageBalloonOpen ? 'visible' : 'hidden')}
                ref={ref}
            >
                {
                    !isImageBalloonEditModeOpen ? 
                    (
                        <>
                            <div>
                                <input
                                    className='image-url-input'
                                    placeholder='Image URL'
                                    value={url}
                                    onChange={(event) => setUrl(event.target.value)}
                                />
                            </div>
                            <div
                                className='text-button'
                                onClick={isUrlEditMode ? handleOnEditComplete : handleOnAdd}
                            >
                                {!isUrlEditMode ? 'add' : 'edit'}
                            </div>
                            <div className='text-button' onClick={handleOnClose} >
                                X
                            </div>
                        </>
                    ):
                    (
                        <>
                            <div className='icon-button' onClick={handleOnEdit}>
                                <EditIcon />
                            </div>
                            <div className='icon-button' onClick={handleOnDelete}>
                                <DeleteIcon />
                            </div>
                        </>
                    )
                }
            </div>
        </PortalBody>
    );
};

export default BalloonImage;
