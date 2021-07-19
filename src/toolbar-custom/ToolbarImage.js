import {
    useStoreEditorRef,
    useEventEditorId,
    ToolbarButton,
    getSelectionText
} from '@udecode/slate-plugins';
import { useEditorStore } from '../store/editorStore';

const ToolbarImage = ({ getImageUrl, ...props }) => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));
    const setEditorSelection = useEditorStore(
        (state) => state.setEditorSelection
    );
    const setEditorSelectionText = useEditorStore(
        (state) => state.setEditorSelectionText
    );
    const isImageOpen = useEditorStore((state) => state.isImageOpen);
    const setIsImageOpen = useEditorStore((state) => state.setIsImageOpen);

    return (
        <ToolbarButton
            onMouseDown={async (event) => {
                if (!editor) return;
                event.preventDefault();

                //TODO get selection position (optional)
                setEditorSelection(editor.selection);

                // TODO toggle ballon image component
                setIsImageOpen(!isImageOpen);
            }}
            {...props}
        />
    );
};

export default ToolbarImage;
