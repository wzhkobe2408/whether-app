import { combineReducers } from 'redux';
import { FETCH_WEATHER } from '../actions';


function weather(state=[],action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload];
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  weather:weather
});

export default rootReducer;
