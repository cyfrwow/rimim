import {
    ToolbarButton,
    ELEMENT_TABLE,
    someNode,
    // insertTable,
    useStoreEditorState,
    useEventEditorId,
    getSlatePluginType,
    getPreventDefaultHandler,
    insertNodes,
    getEmptyTableNode,
} from '@udecode/slate-plugins';

export const ToolbarTable = ({ transform, header, ...props }) => {
    const editor = useStoreEditorState(useEventEditorId('focus'));
    const type = getSlatePluginType(editor, ELEMENT_TABLE);

    const isTable =
        !!(editor !== null && editor !== void 0 && editor.selection) &&
        someNode(editor, {
            match: {
                type,
            },
        });

    return (
        <ToolbarButton
            active={isTable}
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
