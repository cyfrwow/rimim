import { createStore, setStoreValue } from './createStore';

export const useEditorStore = createStore()((set) => ({
    isLinkOpen: false,
    setIsLinkOpen: setStoreValue(set, 'isLinkOpen', 'setIsLinkOpen'),

    isImageBalloonOpen: false,
    isImageBalloonEditModeOpen: false,
    setIsImageBalloonOpen: setStoreValue(set, 'isImageBalloonOpen', 'setIsImageBalloonOpen'),
    setIsImageBalloonEditModeOpen: setStoreValue(set, 'isImageBalloonEditModeOpen', 'setIsImageBalloonEditModeOpen'),

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
