import CharacterInfo from "../components/CharacterInfo";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://dragonball-api.com/api/characters/${count}`
  );

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="text-primary">Personajes de Dragon Ball</h1>
      </div>

      <div className="card p-3 mb-4">
        <div className="card-body text-center">
          {isLoading && <Loading />}
          {data && !isLoading && <CharacterInfo character={data} />}
        </div>
      </div>

      <div className="text-center">
        <button
          className="btn btn-outline-primary me-2"
          onClick={handleDecrement}
        >
          Anterior
        </button>
        <button className="btn btn-outline-primary" onClick={handleIncrement}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
