import { createStore, setStoreValue } from '../store/createStore';

export const LinkboxKey = {
    LINK: 'A',
    SLASH_COMMAND: 'slash_command',
};

export const useLinkboxStore = createStore()((set) => ({
    key: LinkboxKey.SLASH_COMMAND,
    setKey: setStoreValue(set, 'key', 'setKey'),

    link: '',
    setLink: setStoreValue(set, 'link', 'setLink'),

    targetRange: null,
    setTargetRange: setStoreValue(set, 'targetRange', 'setTargetRange'),

    linkbox: null,
    setLinkbox: setStoreValue(set, 'linkbox', 'setLinkbox'),

    closeMenu: () => {
        set((state) => {
            state.targetRange = null;
            state.link = '';
        });
    },
}));
