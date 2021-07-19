import { useLinkboxStore } from '../useLinkboxStore';

export const useLinkboxIsOpen = () =>
    // useLinkboxStore((state) => !!state.targetRange && state.items.length > 0);
    useLinkboxStore((state) => !!state.targetRange);
