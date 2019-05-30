import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {

  const liStyle = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const characterList = characters.map(character => {
    return (
      <li style={liStyle} key={character.name}>
        <Character character={character} />
      </li>
    );
  });

  const ulStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  };

  return <ul style={ulStyle} >{characterList}</ul>;
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
  ) 
};

export default Characters;
