import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    const getFetch = async () => {
      try {
        setState({
          ...state,
          isLoading: true,
        });

        const response = await fetch(url);
        const data = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setState({
          data: data,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (url) {
      getFetch();
    }
  }, [url]); // ✅ Se ejecuta cuando la URL cambia

  return { ...state };
};
