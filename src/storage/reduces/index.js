import { combineReducers } from 'redux';
import buscaVideosReducer from './buscaVideoReducer';
import reproduzVideoReducer from './reproduzVideoReducer';

//combina todos os reducers existentes
const rootReducer = combineReducers({
    buscaVideosReducer,
    reproduzVideoReducer
});

export default rootReducer;

