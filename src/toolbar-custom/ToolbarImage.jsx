import React from 'react';
import {
    useStoreEditorRef,
    useEventEditorId,
    ToolbarButton,
    getSelectionText,
} from '@udecode/slate-plugins';
import { useEditorStore } from '../store/editorStore';

const ToolbarImage = ({ getImageUrl, ...props }) => {
    // Editor instance
    const editor = useStoreEditorRef(useEventEditorId('focus'));

    // Editor GS
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );
    const setEditorSelectionText = useEditorStore(
        (state) => state.setEditorSelectionText
    );

    // Image balloon GS
    const isImageBalloonOpen = useEditorStore(
        (state) => state.isImageBalloonOpen
    );
    const setIsImageBalloonOpen = useEditorStore(
        (state) => state.setIsImageBalloonOpen
    );
    const setIsImageBalloonEditModeOpen = useEditorStore(
        (state) => state.setIsImageBalloonEditModeOpen
    );

    return (
        <ToolbarButton
            onMouseDown={() => {
                if (editor && editor.selection) {
                    // set selection position in GS
                    setEditorSelection(editor.selection);

                    // set the text under selection in GS
                    setEditorSelectionText(getSelectionText(editor));

                    // turn off edit mode & toggle ballon image component
                    setIsImageBalloonEditModeOpen(false);
                    setIsImageBalloonOpen(!isImageBalloonOpen);
                }
            }}
            {...props}
        />
    );
};

export default ToolbarImage;
