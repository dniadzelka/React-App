import { initialState } from './initialState';
import { SEARCH_TEXT } from '../actionTypes';

export const searchTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TEXT:
            return Object.assign({}, state, {
                searchText: action.text
            });
        default:
            return state;
    }
}