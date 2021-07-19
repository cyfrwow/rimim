import { createStore, setStoreValue } from './createStore';

export const useEditorStore = createStore()((set) => ({
    isLinkOpen: false,
    setIsLinkOpen: setStoreValue(set, 'isLinkOpen', 'setIsLinkOpen'),

    editorSelection: null,
    setEditorSelection: setStoreValue(
        set,
        'editorSelection',
        'setEditorSelection'
    ),

    editorSelectionText: null,
    setEditorSelectionText: setStoreValue(
        set,
        'editorSelectionText',
        'setEditorSelectionText'
    ),
}));
