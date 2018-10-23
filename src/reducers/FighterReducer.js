import { FETCH_FIGHTER } from '../actions/FighterActions';

export default function( state = {}, action) {
  switch(action.type){
    case FETCH_FIGHTER:
      return action.payload;
    default:
      return state;
  }
}
