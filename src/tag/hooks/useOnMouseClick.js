import { useCallback, useMemo, useRef } from 'react';

/**
 * Alternative to onClick: on mouse down/up on the same target
 */
export const useOnMouseClick = (cb) => {
    const isMouseDownRef = useRef(false);

    const onMouseDown = useCallback((e) => {
        e.preventDefault();
        isMouseDownRef.current = true;
    }, []);

    const onMouseUp = useCallback(
        (e) => {
            e.preventDefault();
            if (isMouseDownRef.current) {
                cb();
                isMouseDownRef.current = false;
            }
        },
        [cb]
    );

    return useMemo(
        () => ({
            onMouseDown,
            onMouseUp,
        }),
        [onMouseDown, onMouseUp]
    );
};
