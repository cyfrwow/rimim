import React from 'react';
import { BsLink45Deg as LinkIcon } from 'react-icons/bs';
import { ToolbarLink } from '../toolbar-custom/ToolbarLink';

export const ToolbarLinkElement = () => {
    return (
        <ToolbarLink
            icon={<LinkIcon />}
            tooltip={{
                content: 'Add link',
                arrow: true,
                delay: 0,
                duration: [200, 0],
                hideOnClick: true,
                offset: [0, 17],
                placement: 'bottom',
            }}
        />
    );
};
