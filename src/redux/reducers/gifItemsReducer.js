import { initialState } from './initialState';
import { GIF_ITEMS } from './../actionTypes';

export const gifItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GIF_ITEMS:
            return Object.assign({}, state, {
                gifItems: action.gifItems
            });
        default:
            return state;
    }
}