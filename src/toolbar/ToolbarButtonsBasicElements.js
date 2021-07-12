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

// import Select from "react-select";

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted pink",
//     color: state.isSelected ? "red" : "blue",
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 150,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   },
// };
export const ToolbarButtonsBasicElements = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));

  //   const options = [
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_DEFAULT)}
  //           icon={"P"}
  //         />
  //       ),
  //       label: "Normal",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H1)}
  //           icon={"H1"}
  //         />
  //       ),
  //       label: "Heading 1",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H2)}
  //           icon={"H2"}
  //         />
  //       ),
  //       label: "Heading 2",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H3)}
  //           icon={"H3"}
  //         />
  //       ),
  //       label: "Heading 3",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H4)}
  //           icon={"H4"}
  //         />
  //       ),
  //       label: "Heading 4",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H5)}
  //           icon={"H5"}
  //         />
  //       ),
  //       label: "Heading 5",
  //     },
  //     {
  //       value: (
  //         <ToolbarElement
  //           type={getSlatePluginType(editor, ELEMENT_H6)}
  //           icon={"H6"}
  //         />
  //       ),
  //       label: "Heading 6",
  //     },
  //   ];

  return (
    <>
      {/* <Select options={options} styles={customStyles} /> */}
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
