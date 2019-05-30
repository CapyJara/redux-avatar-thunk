import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map(character => {
    return (
      <li key={character.name}>
        <Character character={character} />
      </li>
    );
  });

  return <ul>{characterList}</ul>;
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
  ) 
};

export default Characters;