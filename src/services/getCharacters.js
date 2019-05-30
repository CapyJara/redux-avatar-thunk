const defaultImg = 'https://i.etsystatic.com/11766013/c/783/621/0/85/il/042295/1788855159/il_340x270.1788855159_4rxo.jpg';

export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => {
      return characters.map(character => ({
        id: character._id,
        name: character.name,
        image: character.photoUrl || defaultImg
      }));
    });
};

