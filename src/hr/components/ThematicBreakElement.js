import * as React from 'react';
import { useEditorRef } from '@udecode/slate-plugins';
import { Transforms } from 'slate';
import { useFocused, useSelected } from 'slate-react';
import { useHotkeys } from '../hooks/useHotkeys';


/**
 * TagElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const ThematicBreakElement = ({
    attributes,
    element,
}) => {
    const editor = useEditorRef();
    const selected = useSelected();
    const focused = useFocused();

    useHotkeys(
        'backspace',
        () => {
            if (selected && focused && editor.selection) {
                Transforms.move(editor);
            }
        },
        [selected, focused]
    );
    useHotkeys(
        'delete',
        () => {
            if (selected && focused && editor.selection) {
                Transforms.move(editor, { reverse: true });
            }
        },
        [selected, focused]
    );

    return (
        <hr
            {...attributes}
            data-slate-value={element.value}
            contentEditable={false}
        >
            {/* <div className={`${classNames.link}`} {...onClickProps}>
                #{element.value}
            </div>
            {children} */}
        </hr>
    );
};