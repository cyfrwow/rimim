import {
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  ToolbarMark,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
} from "@udecode/slate-plugins";

export const ToolbarButtonsBasicMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <>
      <ToolbarMark type={getSlatePluginType(editor, MARK_BOLD)} icon={"B"} />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_ITALIC)}
        icon={<i>I</i>}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_UNDERLINE)}
        icon={<u>U</u>}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_STRIKETHROUGH)}
        icon={<del>S</del>}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_SUPERSCRIPT)}
        clear={getSlatePluginType(editor, MARK_SUBSCRIPT)}
        icon={"sup"}
      />
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_SUBSCRIPT)}
        clear={getSlatePluginType(editor, MARK_SUPERSCRIPT)}
        icon={"sub"}
      />
    </>
  );
};
