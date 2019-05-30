import { FETCH_CHARACTERS } from '../actions/characterActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
