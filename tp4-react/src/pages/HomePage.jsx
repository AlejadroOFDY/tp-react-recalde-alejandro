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
    <>
      <h1>Personajes de Dragon Ball</h1>
      {isLoading && <Loading />}
      {data && !isLoading && <CharacterInfo character={data} />}
      <div>
        <button onClick={handleDecrement}>Anterior</button>

        <button onClick={handleIncrement}>Siguiente</button>
      </div>
    </>
  );
};
