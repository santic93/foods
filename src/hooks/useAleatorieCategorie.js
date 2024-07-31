import axios from 'axios';
import { useState } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const useAleatorieCategorie = () => {
  const [aleatorie, setAleatori] = useState();

  const aleatorieCat = async () => {

    try {
      const resp = await axios.get(url);
      setAleatori(resp.data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    aleatorie,
    aleatorieCat,
  };
};
