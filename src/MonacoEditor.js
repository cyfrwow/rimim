import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function MonacoEditor({ slateObject }) {
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current &&
      editorRef.current.getAction("editor.action.formatDocument").run();
  }, [slateObject]);

  const editorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    setTimeout(function () {
      editor.getAction("editor.action.formatDocument").run();
    }, 200);
  };

  return (
    <div className="column">
      <h4>Slate To HTML</h4>
      <Editor
        height="90vh"
        className="editor"
        options={{ wordWrap: true }}
        defaultLanguage="html"
        onMount={editorDidMount}
        value={JSON.stringify(slateObject)}
      />
    </div>
  );
}
