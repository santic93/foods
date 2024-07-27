import axios from 'axios';
import { useState } from 'react';
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export const useNameCategorie = (name = '') => {
  const [categorieName, setCategorieName] = useState();

  const categorie = async (name) => {
    try {
      const resp = await axios.post(`${url}${name}`);
      setCategorieName(resp.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    categorie,
    categorieName,
  };
};
