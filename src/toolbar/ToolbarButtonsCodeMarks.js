import {
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  ToolbarMark,
  ToolbarElement,
  ToolbarCodeBlock,
  MARK_CODE,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
} from "@udecode/slate-plugins";

export const ToolbarButtonsCodeMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));
  return (
    <>
      <ToolbarMark type={getSlatePluginType(editor, MARK_CODE)} icon={"<>"} />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={'""'}
      />
      <ToolbarCodeBlock
        type={getSlatePluginType(editor, ELEMENT_CODE_BLOCK)}
        icon={"[]"}
      />
    </>
  );
};
