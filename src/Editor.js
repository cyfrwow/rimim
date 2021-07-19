/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import {
    SlatePlugins,
    // createEditorPlugins,
    // serializeHTMLFromNodes,
    HeadingToolbar,
    createSlatePluginsComponents,
    createSlatePluginsOptions,
    // deserializeHTMLToDocumentFragment,
    // deserializeMD,
    // useStoreEditorRef,
} from '@udecode/slate-plugins';
import Toolbar from './toolbar';
import _plugins from './plugins';
// import TurndownService from 'turndown';
// import { gfm } from 'turndown-plugin-gfm';
// import { editableProps } from './config/pluginOptions';
import { initialValueCombobox } from './config/initialValues';
// import { MENTIONABLES } from './config/mentionables';
// import { useComboboxControls } from './combobox/hooks/useComboboxControls';
// import { useComboboxOnKeyDown } from './combobox/hooks/useComboboxOnKeyDown';
// import { useComboboxIsOpen } from './combobox/selectors/useComboboxIsOpen';
// import { useComboboxStore } from './combobox/useComboboxStore';
// import { TagCombobox } from './tag/components/TagCombobox';
import { TagElement } from './tag/components/TagElement';
import { ThematicBreakElement } from './hr/components/ThematicBreakElement';
// import { createTagPlugin } from './tag/createTagPlugin';
import { createThematicBreakPlugin } from './hr/createThematicBreakPlugin';
import { ELEMENT_TAG } from './tag/defaults';
import { ELEMENT_HR } from './hr/defaults';
// import { useTagOnChange } from './tag/hooks/useTagOnChange';
// import { useTagOnSelectItem } from './tag/hooks/useTagOnSelectItem';
import { BalloonLink } from './components';
import './Editor.css';

const id = 'slate-plugins-editor';
const components = createSlatePluginsComponents({
    [ELEMENT_TAG]: TagElement,
    [ELEMENT_HR]: ThematicBreakElement,
});
const options = createSlatePluginsOptions();

// const turndownService = new TurndownService({
//     headingStyle: 'atx',
//     codeBlockStyle: 'fenced',
//     emDelimiter: '*',
// })
//     .use([gfm])
//     .addRule('strikethrough', {
//         filter: ['del', 's', 'strike'],
//         replacement: function (content) {
//             return '~~' + content + '~~';
//         },
//     })
//     .addRule('underline', {
//         filter: ['u'],
//         replacement: function (content) {
//             return '__' + content + '__';
//         },
//     });

// Handle multiple combobox
// const useComboboxOnChange = () => {
//     const editor = useStoreEditorRef(id);

//     const tagOnChange = useTagOnChange(editor, MENTIONABLES);
//     const isOpen = useComboboxIsOpen();
//     const closeMenu = useComboboxStore((state) => state.closeMenu);

//     return useCallback(
//         () => () => {
//             let changed = false;
//             changed = tagOnChange();

//             if (changed) return;

//             if (!changed && isOpen) {
//                 closeMenu();
//             }
//         },
//         [closeMenu, isOpen, tagOnChange]
//     );
// };

// Handle multiple combobox
// const ComboboxContainer = () => {
//     useComboboxControls();

//     return <TagCombobox />;
// };

function Editor({
    onChange,
    // initialValue = '',
    // inputFormat = 'html',
    outputFormat = 'slate',
}) {
    // const comboboxOnChange = useComboboxOnChange();

    // const tagOnSelect = useTagOnSelectItem();

    // Handle multiple combobox
    // const comboboxOnKeyDown = useComboboxOnKeyDown({
    //     onSelectItem: tagOnSelect,
    // });

    const plugins = useMemo(
        () => [..._plugins, createThematicBreakPlugin()],
        []
    );

    // const editor = useMemo(
    //     () => createEditorPlugins({ id, plugins, options, components }),
    //     []
    // );

    const [value, setValue] = useState('');
    // const [htmlValue, setHtmlValue] = useState(null);
    // const [markdownValue, setMarkdownValue] = useState(null);

    // useEffect(() => {
    //     console.log(inputFormat, initialValue);
    //     if (inputFormat === 'html') {
    //         console.log('in html');
    //         setValue([
    //             {
    //                 children: deserializeHTMLToDocumentFragment(editor, {
    //                     plugins,
    //                     element: initialValue,
    //                 }),
    //             },
    //         ]);
    //     } else if (inputFormat === 'markdown') {
    //         setValue(deserializeMD(editor, initialValue));
    //     } else if (inputFormat === 'slate') {
    //         setValue(initialValue);
    //     }
    // }, [inputFormat, initialValue]);

    useEffect(() => {
        if (value) {
            if (outputFormat === 'slate') {
                onChange && onChange(value);
                return;
            }
            // const html = serializeHTMLFromNodes(editor, {
            //     plugins,
            //     nodes: value,
            // });
            // setHtmlValue(html);
        }
    }, [value]);

    // useEffect(() => {
    //     if (htmlValue && outputFormat === 'html') {
    //         onChange && onChange(htmlValue);
    //         return;
    //     }
    //     if (htmlValue) setMarkdownValue(turndownService.turndown(htmlValue));
    // }, [htmlValue]);

    // useEffect(() => {
    //     if (markdownValue) onChange && onChange(markdownValue);
    // }, [markdownValue]);

    function handleOnChange(slateObject) {
        setValue(slateObject);
    }

    const editableProps = {
        placeholder: 'Type…',
        autoFocus: true,
    };

    return (
        <div className='container'>
            <HeadingToolbar>
                <Toolbar />
            </HeadingToolbar>
            <BalloonLink />
            <SlatePlugins
                id={id}
                plugins={plugins}
                components={components}
                options={options}
                initialValue={initialValueCombobox}
                editableProps={editableProps}
                onChange={(newValue) => handleOnChange(newValue)}
            >
                {/* <ComboboxContainer /> */}
            </SlatePlugins>
        </div>
    );
}

export default Editor;
