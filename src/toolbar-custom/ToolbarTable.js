import {
    ToolbarButton,
    ELEMENT_TABLE,
    useStoreEditorState,
    useEventEditorId,
    getSlatePluginType,
    getPreventDefaultHandler,
} from '@udecode/slate-plugins';

export const ToolbarTable = ({ transform, header, ...props }) => {
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const type = getSlatePluginType(editor, ELEMENT_TABLE);

    // const isTable =
    //     !!(editor !== null && editor.selection) &&
    //     someNode(editor, {
    //         match: {
    //             type,
    //         },
    //     });

    return (
        <ToolbarButton
            // active={isTable}
            onMouseDown={
                !!type && editor
                    ? getPreventDefaultHandler(transform, editor, {
                          header,
                      })
                    : undefined
            }
            {...props}
        />
    );
};
