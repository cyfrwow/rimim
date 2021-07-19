import { createStore, setStoreValue } from './createStore';

export const useEditorStore = createStore()((set) => ({
    isLinkOpen: false,
    isImageOpen: false,
    setIsLinkOpen: setStoreValue(set, 'isLinkOpen', 'setIsLinkOpen'),
    setIsImageOpen: setStoreValue(set, 'isImageOpen', 'setIsImageOpen'),

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
