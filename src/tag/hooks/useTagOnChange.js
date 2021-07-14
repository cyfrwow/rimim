import { useCallback } from 'react';
import shallow from 'zustand/shallow';
import { useComboboxOnChange } from '../../combobox/hooks/useComboboxOnChange';
import { ComboboxKey, useComboboxStore } from '../../combobox/useComboboxStore';

export const useTagOnChange = (editor, data) => {
    const comboboxOnChange = useComboboxOnChange({
        editor,
        key: ComboboxKey.TAG,
        trigger: '#',
    });
    const { maxSuggestions, setItems } = useComboboxStore(
        ({ maxSuggestions, setItems }) => ({
            maxSuggestions,
            setItems,
        }),
        shallow
    );

    return useCallback(() => {
        const res = comboboxOnChange();
        if (!res) return false;

        const { search } = res;

        const items = data
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .slice(0, maxSuggestions)
            .map((item) => ({
                key: item.value,
                text: item.name,
            }));

        setItems(items);

        return true;
    }, [comboboxOnChange, data, maxSuggestions, setItems]);
};
