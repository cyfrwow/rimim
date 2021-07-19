import {
    useStoreEditorRef,
    useEventEditorId,
    BalloonToolbar,
    ToolbarMark,
    getSlatePluginType,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_UNDERLINE,
} from '@udecode/slate-plugins';

const BallonToolbarMarks = () => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));

    const arrow = false;
    const theme = 'dark';
    const direction = 'top';
    const hiddenDelay = 0;
    const tooltip = {
        arrow: true,
        delay: 0,
        duration: [200, 0],
        hideOnClick: false,
        offset: [0, 17],
        placement: 'top',
    };

    return (
        <BalloonToolbar
            direction={direction}
            hiddenDelay={hiddenDelay}
            theme={theme}
            arrow={arrow}
        >
            <ToolbarMark
                type={getSlatePluginType(editor, MARK_BOLD)}
                icon={'B'}
                tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
            />
            <ToolbarMark
                type={getSlatePluginType(editor, MARK_ITALIC)}
                icon={'I'}
                tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
            />
            <ToolbarMark
                type={getSlatePluginType(editor, MARK_UNDERLINE)}
                icon={'U'}
                tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
            />
        </BalloonToolbar>
    );
};

export default BallonToolbarMarks;
