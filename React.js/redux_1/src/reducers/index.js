import {combineReducers} from 'redux';
import counter from './counterReducer';
import gallery from './galleryReducer'

const rootReducer = combineReducers({counter,gallery});

export default rootReducer;