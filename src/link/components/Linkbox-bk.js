import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import './Linkbox.css';

function Linkbox({ link = '', onAdd, show = false }) {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(show);
    }, [show]);

    useEffect(() => {
        setValue(link);
    }, [link]);

    const handleClick = () => {
        onAdd(value);
    };

    return (
        <div className={cx('link__container', isOpen ? 'show' : '')}>
            <input
                placeholder='URL'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span onClick={handleClick}>add</span>
            <span onClick={setIsOpen(false)}>x</span>
        </div>
    );
}

export default Linkbox;
