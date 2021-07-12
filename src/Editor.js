import { useState, useMemo, useEffect } from "react";
import MonacoEditor from "./MonacoEditor";
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
import htmlfile from "./test";
// import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from "node-html-markdown";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import "./App.css";

const components = createSlatePluginsComponents();
const options = createSlatePluginsOptions();

// const nhm = new NodeHtmlMarkdown(
//   /* options (optional) */ {
//     bulletMarker: "-",
//   },
//   /* customTransformers (optional) */ undefined
// );

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
//   .addRule("codeBlock", {
//     filter: ["pre"],
//     replacement: function (content) {
//       return "```js\n" + content + "\n```";
//     },
//   });

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
          element: props.initialValue,
        }),
      },
    ];
  }, [editor]);

  const [value, setValue] = useState(initialValue);
  const [htmlValue, setHtmlValue] = useState("");
  const [markdownValue, setMarkdownValue] = useState("");

  useEffect(() => {
    if (value) {
      const html = serializeHTMLFromNodes(editor, {
        plugins,
        nodes: value,
      });
      setHtmlValue(html);
    }
  }, [value, editor]);

  useEffect(() => {
    setMarkdownValue(turndownService.turndown(htmlValue));
  }, [htmlValue]);

  function handleOnChange(slateObject) {
    setValue(slateObject);
  }

  const editableProps = {
    placeholder: "Type…",
    autofocus: true,
  };

  return (
    <div className="container">
      <div className="column">
        <h4>Slate editor</h4>
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
      <div className="column">
        <MonacoEditor slateObject={htmlValue} />
      </div>
      <div className="column">
        <textarea className="textArea" value={markdownValue}></textarea>
      </div>
    </div>
  );
}

export default Editor;
