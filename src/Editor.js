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
import { initialValueCombobox } from './config/initialValues';
import { TagElement } from './tag/components/TagElement';
import { ThematicBreakElement } from './hr/components/ThematicBreakElement';
import { createThematicBreakPlugin } from './hr/createThematicBreakPlugin';
import { ELEMENT_TAG } from './tag/defaults';
import { ELEMENT_HR } from './hr/defaults';
import { BalloonLink, BalloonImage } from './components';
import './Editor.css';

const id = 'slate-plugins-editor';
const components = createSlatePluginsComponents({
    [ELEMENT_TAG]: TagElement,
    [ELEMENT_HR]: ThematicBreakElement,
});
const options = createSlatePluginsOptions();

function Editor({
    onChange,
    outputFormat = 'slate',
}) {

    const plugins = useMemo(
        () => [..._plugins, createThematicBreakPlugin()],
        []
    );
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value) {
            if (outputFormat === 'slate') {
                onChange && onChange(value);
                return;
            }
        }
    }, [value])

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
            <BalloonImage />
            <SlatePlugins
                id={id}
                plugins={plugins}
                components={components}
                options={options}
                initialValue={initialValueCombobox}
                editableProps={editableProps}
                onChange={(newValue) => handleOnChange(newValue)}
            >
            </SlatePlugins>
        </div>
    );
}

export default Editor;
