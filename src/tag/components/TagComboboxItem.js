import * as React from 'react';

export const TagComboboxItem = ({ item }) => {
    return !item.data?.isNew ? (
        item.text
    ) : (
        <div className='inline-flex items-center'>
            New "<span className='font-medium'>{item.text}</span>" tag
        </div>
    );
};
