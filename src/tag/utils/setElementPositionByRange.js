import { ReactEditor } from 'slate-react';

/**
 * Set element position below a range.
 */
export const setElementPositionByRange = (editor, { ref, at }) => {
    if (!at) return;

    const el = ref.current;
    if (!el) return;

    const domRange = ReactEditor.toDOMRange(editor, at);
    const rect = domRange.getBoundingClientRect();
    el.style.top = `${rect.top + window.pageYOffset + 24}px`;
    el.style.left = `${rect.left + window.pageXOffset}px`;
};
