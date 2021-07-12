import {
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  ToolbarList,
  ELEMENT_UL,
  ELEMENT_OL,
} from "@udecode/slate-plugins";
export const ToolbarButtonsList = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));
  return (
    <>
      <span className="toolbar__button">
        <ToolbarList
          type={getSlatePluginType(editor, ELEMENT_UL)}
          icon={"UL"}
        />
      </span>
      <span className="toolbar__button">
        <ToolbarList
          type={getSlatePluginType(editor, ELEMENT_OL)}
          icon={"OL"}
        />
      </span>
    </>
  );
};
