import pipe from 'ramda/es/pipe';
import create from 'zustand';
import { immer } from './immer.middleware';

export const createStore = () => pipe(immer, create);

// export const action = (type: string) =>

export const action = (draft, actionType) => {
    draft.actionType = actionType;
};

/**
 * Set a value in the store.
 */
export const setStoreValue = (set, storeKey, actionType, merge) => (value) => {
    set((state) => {
        state.noDiff = true;
        if (state[storeKey] !== value) {
            state.noDiff = false;
            state.actionType = actionType;
            if (!merge) {
                state[storeKey] = value;
            } else {
                state[storeKey] = { ...state[storeKey], ...value };
            }
        }
    });
};
