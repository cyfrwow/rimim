import * as React from 'react';
import { getRootClassNames, useEditorRef } from '@udecode/slate-plugins';
import { styled } from '@uifabric/utilities';
import { Transforms } from 'slate';
import { useFocused, useSelected } from 'slate-react';
import { useHotkeys } from '../hooks/useHotkeys';
import { getThematicBreakElementStyles } from './ThematicBreakElement.styles';

const getClassNames = getRootClassNames();

/**
 * TagElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const ThematicBreakElementBase = ({
    attributes,
    children,
    element,
    styles,
    className,
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

    const classNames = getClassNames(styles, {
        className,
        // Other style props
        selected,
        focused,
    });

    return (
        <hr
            {...attributes}
            data-slate-value={element.value}
            className={classNames.root}
            contentEditable={false}
        >
            {/* <div className={`${classNames.link}`} {...onClickProps}>
                #{element.value}
            </div>
            {children} */}
        </hr>
    );
};

/**
 * TagElement
 */
export const ThematicBreakElement = styled(
    ThematicBreakElementBase,
    getThematicBreakElementStyles,
    undefined,
    {
        scope: 'ThematicBreakElement',
    }
);
