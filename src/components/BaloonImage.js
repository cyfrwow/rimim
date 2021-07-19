import React, { useRef, useState, useEffect } from 'react';
import {
  useStoreEditorState,
  useEventEditorId,
  PortalBody,
  insertImage,
  setPositionAtSelection,
  ELEMENT_LINK,
  getAbove
} from '@udecode/slate-plugins';
import cx from 'classnames';
import { Transforms } from 'slate';
import { useEditorStore } from '../store/editorStore';
import './BalloonLink.css';

const BalloonImage = () => {
  const ref = useRef(null);
  const editor = useStoreEditorState(useEventEditorId('focus'));
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const [selection, setSelection] = useState(null);

  const isImageOpen = useEditorStore((state) => state.isImageOpen);
  const setIsImageOpen = useEditorStore((state) => state.setIsImageOpen);
  const editorSelection = useEditorStore((state) => state.editorSelection);
  const setEditorSelection = useEditorStore(
    (state) => state.setEditorSelection
  );

  useEffect(() => {
    setShow((prevState) => isImageOpen);
  }, [isImageOpen]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!editor) return;

    console.log(editor.selection);
    if (isImageOpen && !show) {
      if (editor.selection) {
        console.log(editor.selection);

        //save the selection
        setSelection({
          anchor: editor.selection.anchor,
          focus: {
            path: editor.selection.focus.path,
            offset: editor.selection.focus.offset,
          },
        });
        //move the ref component to the selection point
        setPositionAtSelection(ref.current);
        //show the image component
        setIsImageOpen(true);
      }
    }
  }, [show, isImageOpen]);

  const handleClick = async (event) => {
    if (!editor) return;
    event.preventDefault();

    //select the previous selection which is lost when focusing on textbox
    Transforms.select(editor, selection ?? editorSelection);

    //insert link at the location, using the saved new url
    insertImage(editor, value);

    //close the link component
    setIsImageOpen(false);

    //reset store value
    setEditorSelection(null);
    //reset local state
    setValue('');
  };

  return (
    <PortalBody>
      <div
        className={cx('link__container', show ? 'show' : '')}
        ref={ref}
      >
        <input
          className='link__input'
          placeholder='URL'
          value={value}
          autoFocus
          onChange={(event) => setValue(event.target.value)}
        />
        <span className='link__button' onClick={(event) => handleClick(event)}>
          add
        </span>
        <span className='link__button' onClick={() => setShow(false)}>
          X
        </span>
      </div>
    </PortalBody>
  );
};

export default BalloonImage;
