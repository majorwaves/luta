import { combineReducers } from 'redux';
import FighterReducer from './FighterReducer';

const rootReducer = combineReducers({
  fighter: FighterReducer
})

export default rootReducer;
