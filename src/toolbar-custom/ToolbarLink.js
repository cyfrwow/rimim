var slatePluginsCommon = require('@udecode/slate-plugins-common');
var slatePluginsCore = require('@udecode/slate-plugins-core');
var slatePluginsLink = require('@udecode/slate-plugins-link');
var slatePluginsToolbar = require('@udecode/slate-plugins-toolbar');
export const ToolbarLink = ({ getLinkUrl, ...props }) => {
    const editor = slatePluginsCore.useStoreEditorState(
        slatePluginsCore.useEventEditorId('focus')
    );
    const type = slatePluginsCore.getSlatePluginType(
        editor,
        slatePluginsLink.ELEMENT_LINK
    );
    const isLink =
        !!(editor !== null && editor !== void 0 && editor.selection) &&
        slatePluginsCommon.someNode(editor, {
            match: {
                type,
            },
        });
    return (
        <slatePluginsToolbar.ToolbarButton
            active={isLink}
            onMouseDown={async (event) => {
                if (!editor) return;
                event.preventDefault();
                let prevUrl = '';
                const linkNode = slatePluginsCommon.getAbove(editor, {
                    match: {
                        type,
                    },
                });

                if (linkNode) {
                    prevUrl = linkNode[0].url;
                }

                let url;

                if (getLinkUrl) {
                    url = await getLinkUrl(prevUrl);
                } else {
                    url = window.prompt(`Enter the URL of the link:`, prevUrl);
                }

                if (!url) {
                    linkNode &&
                        editor.selection &&
                        slatePluginsCommon.unwrapNodes(editor, {
                            at: editor.selection,
                            match: {
                                type: slatePluginsCore.getSlatePluginType(
                                    editor,
                                    slatePluginsLink.ELEMENT_LINK
                                ),
                            },
                        });
                    return;
                } // If our cursor is in middle of a link, then we don't want to inser it inline

                const shouldWrap =
                    linkNode !== undefined &&
                    slatePluginsCommon.isCollapsed(editor.selection);
                slatePluginsLink.upsertLinkAtSelection(editor, {
                    url,
                    wrap: shouldWrap,
                });
            }}
            {...props}
        />
    );
};
