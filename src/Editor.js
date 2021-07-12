/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import {
  SlatePlugins,
  createEditorPlugins,
  serializeHTMLFromNodes,
  HeadingToolbar,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  deserializeHTMLToDocumentFragment,
} from "@udecode/slate-plugins";
import Toolbar from "./toolbar";
import plugins from "./plugins";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import "./Editor.css";

const components = createSlatePluginsComponents();
const options = createSlatePluginsOptions();

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
})
  .use([gfm])
  .addRule("strikethrough", {
    filter: ["del", "s", "strike"],
    replacement: function (content) {
      return "~~" + content + "~~";
    },
  });

function Editor(props) {
  const id = "slate-plugins-editor";
  const editor = useMemo(
    () => createEditorPlugins({ id, plugins, options, components }),
    []
  );
  const initialValue = useMemo(() => {
    return [
      {
        children: deserializeHTMLToDocumentFragment(editor, {
          plugins,
          element: props.initialValue ?? "<p></p>",
        }),
      },
    ];
  }, [editor, props.initialValue]);

  const [value, setValue] = useState(initialValue);
  const [htmlValue, setHtmlValue] = useState(null);
  const [markdownValue, setMarkdownValue] = useState(null);

  useEffect(() => {
    if (value && editor && props.onChange) {
      const html = serializeHTMLFromNodes(editor, {
        plugins,
        nodes: value,
      });
      setHtmlValue(html);
    }
  }, [value]);

  useEffect(() => {
    if (htmlValue) setMarkdownValue(turndownService.turndown(htmlValue));
  }, [htmlValue]);

  useEffect(() => {
    if (markdownValue) props.onChange && props.onChange(markdownValue);
  }, [markdownValue]);

  function handleOnChange(slateObject) {
    setValue(slateObject);
  }

  const editableProps = {
    placeholder: "Type…",
    autofocus: true,
  };

  return (
    <div className="container">
      <HeadingToolbar>
        <Toolbar />
      </HeadingToolbar>
      <SlatePlugins
        id={id}
        plugins={plugins}
        components={components}
        options={options}
        autofocus={true}
        initialValue={value}
        editableProps={editableProps}
        onChange={(newValue) => handleOnChange(newValue)}
      />
    </div>
  );
}

export default Editor;
