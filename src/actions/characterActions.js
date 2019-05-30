import { getCharacters } from '../services/getCharacters';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const fetchCharacters = () => dispatch => {
  return getCharacters()
    .then(character => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: character
      });
    })
    .catch(err => {
      console.log(err);
      return err;
    });

};
