export const CharacterInfo = ({ character }) => {
  return (
    <>
      <img src={character.image} alt={character.name}></img>
      <h2>{character.name}</h2>
    </>
  );
};

export default CharacterInfo;
