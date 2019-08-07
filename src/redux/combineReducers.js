import { combineReducers } from 'redux';
import { searchTextReducer } from './reducers/searchTextReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { gifItemsReducer } from './reducers/gifItemsReducer';

const rootReducer = combineReducers({ searchTextReducer, loadingReducer, gifItemsReducer });

export default rootReducer;
