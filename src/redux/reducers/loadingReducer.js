import { initialState } from './initialState';
import { LOADING } from './../actionTypes';

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        default:
            return state;
    }
}