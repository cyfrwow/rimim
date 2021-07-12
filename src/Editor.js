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
import remarkGFM from "remark-gfm";
import unified from "unified";
import parse from "remark-parse";
import slate from "remark-slate";
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
  })
  .addRule("underline", {
    filter: ["u"],
    replacement: function (content) {
      return "__" + content + "__";
    },
  });

function Editor({
  onChange,
  initialValue = "",
  inputFormat = "html",
  outputFormat = "markdown",
}) {
  const id = "slate-plugins-editor";
  const editor = useMemo(
    () => createEditorPlugins({ id, plugins, options, components }),
    []
  );

  const [value, setValue] = useState(null);
  const [htmlValue, setHtmlValue] = useState(null);
  const [markdownValue, setMarkdownValue] = useState(null);

  useEffect(() => {
    switch (inputFormat) {
      case "html":
        setValue([
          {
            children: deserializeHTMLToDocumentFragment(editor, {
              plugins,
              element: initialValue,
            }),
          },
        ]);
        break;
      case "markdown":
        unified()
          .use(parse)
          .use(remarkGFM)
          .use(slate)
          .process(initialValue, (err, slateObject) => {
            if (err) throw err;
            setValue(slateObject.result);
          });
        break;
      default:
        setValue(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (value) {
      if (outputFormat === "slate") {
        onChange && onChange(value);
        return;
      }
      const html = serializeHTMLFromNodes(editor, {
        plugins,
        nodes: value,
      });
      setHtmlValue(html);
    }
  }, [value]);

  useEffect(() => {
    if (htmlValue && outputFormat === "html") {
      onChange && onChange(htmlValue);
      return;
    }
    if (htmlValue) setMarkdownValue(turndownService.turndown(htmlValue));
  }, [htmlValue]);

  useEffect(() => {
    if (markdownValue) onChange && onChange(markdownValue);
  }, [markdownValue]);

  function handleOnChange(slateObject) {
    setValue(slateObject);
  }

  const editableProps = {
    placeholder: "Type…",
    autoFocus: true,
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
        initialValue={value}
        editableProps={editableProps}
        onChange={(newValue) => handleOnChange(newValue)}
      />
    </div>
  );
}

export default Editor;
