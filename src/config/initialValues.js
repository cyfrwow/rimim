import { ELEMENT_PARAGRAPH } from '@udecode/slate-plugins';

export const initialValueCombobox = [
    {
        type: ELEMENT_PARAGRAPH,
        children: [
            {
                text: 'Example using useCombobox from downshift with # trigger: ',
            },
            { type: 'tag', children: [{ text: '' }], value: 'tag' },
            { text: '' },
        ],
    },
];
