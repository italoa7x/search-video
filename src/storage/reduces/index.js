import { combineReducers } from 'redux';
import buscaVideosReducer from './buscaVideoReducer';

//combina todos os reducers existentes
const rootReducer = combineReducers({
    buscaVideosReducer
});

export default rootReducer;

