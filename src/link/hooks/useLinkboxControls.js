import { useMemo } from 'react';
import { useLinkboxIsOpen } from '../selectors/useLinkboxIsOpen';
import { useLinkboxStore } from '../useLinkboxStore';

export const useLinkboxControls = () => {
    const isOpen = useLinkboxIsOpen();
    const link = useLinkboxStore((state) => state.link);
    const closeMenu = useLinkboxStore((state) => state.closeMenu);

    return useMemo(
        () => ({
            closeMenu,
            isOpen,
            link,
        }),
        [closeMenu, isOpen, link]
    );
};
