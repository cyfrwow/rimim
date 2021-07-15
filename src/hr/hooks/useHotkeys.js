import { useCallback, useEffect } from 'react';
import hotkeys from 'hotkeys-js';

export const useHotkeys = (keys, callback, deps = []) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoisedCallback = useCallback(callback, deps);

    useEffect(() => {
        hotkeys.filter = () => {
            return true;
        };
        hotkeys(keys, memoisedCallback);

        return () => hotkeys.unbind(keys);
    }, [keys, memoisedCallback]);
};
