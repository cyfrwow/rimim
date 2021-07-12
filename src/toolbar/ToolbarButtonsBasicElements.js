import {
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  ToolbarElement,
  ELEMENT_DEFAULT,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/slate-plugins";

export const ToolbarButtonsBasicElements = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <>
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_DEFAULT)}
        icon={"P"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H1)}
        icon={"H1"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H2)}
        icon={"H2"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H3)}
        icon={"H3"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H4)}
        icon={"H4"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H5)}
        icon={"H5"}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H6)}
        icon={"H6"}
      />
    </>
  );
};
