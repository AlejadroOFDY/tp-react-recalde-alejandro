import { useState } from "react";

export const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount((value) => value + 1);
  };
  return (
    <>
      <h1>Mi contador es {count}</h1>
      <button onClick={handleIncrement}>+1</button>
    </>
  );
};
