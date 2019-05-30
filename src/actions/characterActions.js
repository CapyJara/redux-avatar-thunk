import { getCharacters } from '../services/getCharacters';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchCharacters,
  FETCH_CHARACTERS
] = createAction('FETCH_CHARACTERS', getCharacters);
