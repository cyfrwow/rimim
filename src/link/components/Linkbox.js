import React, { useEffect } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import {
    getPreventDefaultHandler,
    PortalBody,
    useEditorState,
} from '@udecode/slate-plugins';
import { setElementPositionByRange } from '../../tag/utils/setElementPositionByRange';
import { useLinkboxControls } from '../hooks/useLinkboxControls';
import { useLinkboxIsOpen } from '../selectors/useLinkboxIsOpen';
import { useLinkboxStore } from '../useLinkboxStore';

export const Linkbox = ({ onAddItem }) => {
    // TODO
    const at = useLinkboxStore((state) => state.targetRange);
    const linkbox = useLinkboxControls();
    const isOpen = useLinkboxIsOpen();

    const ref = React.useRef(null);
    const editor = useEditorState();
    // const _editor = useStoreEditorState(useEventEditorId('focus'));
    // console.log(editor === _editor);

    useEffect(() => {
        editor && setElementPositionByRange(editor, { ref, at });
    }, [at, editor]);

    // const menuProps = combobox ? combobox.getMenuProps() : { ref: null };

    // const multiRef = useMergedRef(menuProps.ref, ref);

    if (!linkbox) return null;

    const link = linkbox.link;
    const closeMenu = linkbox.closeMenu;

    return (
        <PortalBody>
            {/* <ComboboxRoot {...menuProps} ref={multiRef} isOpen={isOpen}>
                {isOpen &&
                    items.map((item, index) => {
                        const Item = onRenderItem
                            ? onRenderItem({ item })
                            : item.text;

                        return (
                            <ComboboxItem
                                key={item.key}
                                highlighted={index === itemIndex}
                                {...combobox.getItemProps({
                                    item,
                                    index,
                                })}
                                onMouseDown={
                                    editor &&
                                    getPreventDefaultHandler(
                                        onSelectItem,
                                        editor,
                                        item
                                    )
                                }
                            >
                                {Item}
                            </ComboboxItem>
                        );
                    })}
            </ComboboxRoot> */}
            {isOpen && (
                <div className='link__container'>
                    <input
                        placeholder='URL'
                        value={link}
                        onChange={(e) => onAddItem(e.target.value)}
                    />
                    <span
                        onClick={
                            editor &&
                            getPreventDefaultHandler(onAddItem, editor, link)
                        }
                    >
                        add
                    </span>
                    <span onClick={() => closeMenu()}>x</span>
                </div>
            )}
        </PortalBody>
    );
};
