/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import {
    SlatePlugins,
    createEditorPlugins,
    serializeHTMLFromNodes,
    HeadingToolbar,
    createSlatePluginsComponents,
    createSlatePluginsOptions,
    deserializeHTMLToDocumentFragment,
    deserializeMD,
} from '@udecode/slate-plugins';
import Toolbar from './toolbar';
import _plugins from './plugins';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { ThematicBreakElement } from './hr/components/ThematicBreakElement';
import { createThematicBreakPlugin } from './hr/createThematicBreakPlugin';
import { ELEMENT_HR } from './hr/defaults';
import { BalloonLink } from './components';
import './Editor.css';

const id = 'slate-plugins-editor';
const components = createSlatePluginsComponents({
    [ELEMENT_HR]: ThematicBreakElement,
});
const options = createSlatePluginsOptions();
export const editableProps = {
    placeholder: 'Enter some rich text…',
    autoFocus: true,
    spellCheck: true,
    padding: '0 30px',
};

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
})
    .use([gfm])
    .addRule('strikethrough', {
        filter: ['del', 's', 'strike'],
        replacement: function (content) {
            return '~~' + content + '~~';
        },
    })
    .addRule('underline', {
        filter: ['u'],
        replacement: function (content) {
            return '__' + content + '__';
        },
    });

function Editor({
    onChange,
    initialValue = '',
    inputFormat = 'slate',
    outputFormat = 'slate',
}) {
    const plugins = useMemo(
        () => [..._plugins, createThematicBreakPlugin()],
        []
    );

    const editor = useMemo(
        () => createEditorPlugins({ id, plugins, options, components }),
        []
    );

    const [value, setValue] = useState('');
    const [htmlValue, setHtmlValue] = useState(null);
    const [markdownValue, setMarkdownValue] = useState(null);

    useEffect(() => {
        console.log(inputFormat, initialValue);
        if (inputFormat === 'html') {
            console.log('in html');
            setValue([
                {
                    children: deserializeHTMLToDocumentFragment(editor, {
                        plugins,
                        element: initialValue,
                    }),
                },
            ]);
        } else if (inputFormat === 'markdown') {
            setValue(deserializeMD(editor, initialValue));
        } else if (inputFormat === 'slate') {
            setValue(initialValue);
        }
    }, [inputFormat, initialValue]);

    useEffect(() => {
        if (value) {
            if (outputFormat === 'slate') {
                onChange && onChange(value);
                return;
            }
            const html = serializeHTMLFromNodes(editor, {
                plugins,
                nodes: value,
            });
            setHtmlValue(html);
        }
    }, [value]);

    useEffect(() => {
        if (htmlValue && outputFormat === 'html') {
            onChange && onChange(htmlValue);
            return;
        }
        if (htmlValue) setMarkdownValue(turndownService.turndown(htmlValue));
    }, [htmlValue]);

    useEffect(() => {
        if (markdownValue) onChange && onChange(markdownValue);
    }, [markdownValue]);

    function handleOnChange(slateObject) {
        setValue(slateObject);
    }

    // const editableProps = {
    //     placeholder: 'Type…',
    //     autoFocus: true,
    // };

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
                initialValue={initialValue}
                editableProps={editableProps}
                onChange={(newValue) => handleOnChange(newValue)}
            ></SlatePlugins>
        </div>
    );
}

export default Editor;
