import axios from 'axios';
import { useState } from 'react';
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const useFoodInfo = (name = '') => {
  const [foodDetails, setFood] = useState();
  const food = async (name) => {
    try {
      const resp = await axios.post(`${url}${name}`);
      setFood(resp.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    food,
    foodDetails,
  };
};
