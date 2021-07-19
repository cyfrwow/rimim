import produce, { setAutoFreeze } from 'immer';
import { combine } from 'zustand/middleware';

export const immer = (config) => (set, get, api) =>
    config((fn) => set(produce(fn)), get, api);

export const immerMutable = (config) => (set, get, api) =>
    config(
        (fn) => {
            setAutoFreeze(false);
            set(produce(fn));
            setAutoFreeze(true);
        },
        get,
        api
    );

export const combineAndImmer = (initialState, config) => {
    return combine(initialState, immer(config));
};
