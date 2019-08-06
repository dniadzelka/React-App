
// import { combineReducers } from 'redux';
import { SEARCH_TEXT } from './actionTypes';

const initialState = {
    searchText: 'Redux working'
};

function searchTextReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_TEXT:
            return Object.assign({}, state, {
                searchText: action.text
            });
        default:
            return state;
    }
}

const rootReducer = searchTextReducer;

export default rootReducer;
