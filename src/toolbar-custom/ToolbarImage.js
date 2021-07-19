import {
    insertImage,
    useStoreEditorRef,
    useEventEditorId,
    ToolbarButton,
} from '@udecode/slate-plugins';
const ToolbarImage = ({ getImageUrl, ...props }) => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));
    return (
        <ToolbarButton
            onMouseDown={async (event) => {
                if (!editor) return;
                event.preventDefault();
                let url;

                if (getImageUrl) {
                    url = await getImageUrl();
                } else {
                    url = window.prompt('Enter the URL of the image:');
                }

                if (!url) return;
                insertImage(editor, url);
            }}
            {...props}
        />
    );
};

export default ToolbarImage;
