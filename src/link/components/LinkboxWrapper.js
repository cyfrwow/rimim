import * as React from 'react';
import { Linkbox } from './Linkbox';
import { LinkboxKey, useLinkboxStore } from '../useLinkboxStore';
import { useAddItem } from '../hooks/useAddItem';

export const LinkboxComponent = () => {
    const onAddItem = useAddItem();

    return <Linkbox onAddItem={onAddItem} />;
};

export const LinkboxWrapper = () => {
    const key = useLinkboxStore((state) => state.key);

    return (
        <div style={key !== LinkboxKey.LINK ? { display: 'none' } : {}}>
            <LinkboxComponent />
        </div>
    );
};
