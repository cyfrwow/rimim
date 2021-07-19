const classNames = {
    root: 'slate-hr',
};

export const getThematicBreakElementStyles = ({
    className,
    focused,
    selected,
}) => {
    // const selectedFocused = selected && focused;

    return {
        root: [
            classNames.root,
            {
                lineHeight: '1.5',
                border: 'none',
                borderTop: '2px solid #efefef',
            },
            className,
        ],
    };
};
