import {
    ToolbarButton,
    useStoreEditorState,
    useEventEditorId,
    getSelectionText,
} from '@udecode/slate-plugins';
import { useEditorStore } from '../store/editorStore';

export const ToolbarLink = ({ getLinkUrl, ...props }) => {
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const isLinkOpen = useEditorStore((state) => state.isLinkOpen);
    const setIsLinkOpen = useEditorStore((state) => state.setIsLinkOpen);
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );
    const setEditorSelectionText = useEditorStore(
        (state) => state.setEditorSelectionText
    );

    // const isLink =
    //     !!(editor !== null && editor.selection) &&
    //     someNode(editor, {
    //         match: {
    //             type,
    //         },
    //     });

    return (
        <ToolbarButton
            // active={isLink}
            className={'toolbar-link'}
            onMouseDown={async (event) => {
                if (!editor || !editor.selection) return;
                event.preventDefault();
                //toggle ballon link component
                setIsLinkOpen(!isLinkOpen);
                //get selection text from editor
                setEditorSelectionText(getSelectionText(editor));
                //get selection position
                setEditorSelection(editor.selection);
            }}
            {...props}
        />
    );
};
