To get editor ref when dealing with multiple editors, use the following code. The `useEventEditorId('focus')` get the editorId of the editor in focus, and `useStoreEditorRef` is used to get the ref of the editor. Once `ref` is obtained, we are in full control of the editor.
```javascript
const editor = useStoreEditorRef(useEventEditorId('focus'));
```