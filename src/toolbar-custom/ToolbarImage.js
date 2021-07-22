import {
    useStoreEditorRef,
    useEventEditorId,
    ToolbarButton,
    ELEMENT_IMAGE,
    getSlatePluginType,
    someNode,
    getSelectionText,
} from '@udecode/slate-plugins';
import { useEditorStore } from '../store/editorStore';

const ToolbarImage = ({ getImageUrl, ...props }) => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );

    const isImageOpen = useEditorStore((state) => state.isImageOpen);
    const setIsImageOpen = useEditorStore((state) => state.setIsImageOpen);
    const setEditorSelectionText = useEditorStore(
        (state) => state.setEditorSelectionText
    );
    const type = getSlatePluginType(editor, ELEMENT_IMAGE);
    const isImage =
        !!(editor !== null && editor !== void 0 && editor.selection) &&
        someNode(editor, {
            match: {
                type,
            },
        });

    return (
        <ToolbarButton
            active={isImage}
            className={'toolbar-image'}
            onMouseDown={async (event) => {
                if (!editor) return;
                event.preventDefault();

                //TODO get selection position (optional)
                setEditorSelection(editor.selection);

                //get selection text from editor
                setEditorSelectionText(getSelectionText(editor));

                // TODO toggle ballon image component
                setIsImageOpen(!isImageOpen);
            }}
            {...props}
        />
    );
};

export default ToolbarImage;
