export const CharacterInfo = ({ character }) => {
  return (
    <div className="text-center">
      <img
        src={character.image}
        alt={character.name}
        className="img-fluid rounded-circle mb-3 shadow"
        style={{ maxWidth: "200px", border: "4px solid #0d6efd" }}
      />
      <h2 className="text-primary">{character.name}</h2>
      {character.ki && (
        <p className="text-muted">
          <strong>Ki:</strong> {character.ki}
        </p>
      )}
      {character.race && (
        <p className="text-muted">
          <strong>Raza:</strong> {character.race}
        </p>
      )}
      {character.gender && (
        <p className="text-muted">
          <strong>Género:</strong> {character.gender}
        </p>
      )}
    </div>
  );
};

export default CharacterInfo;
