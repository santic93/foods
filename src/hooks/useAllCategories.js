import axios from 'axios';
import { useState } from 'react';
const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const useAllCategories = () => {
  const [categoriesFood, setCategoriesFood] = useState();

  const categories = async () => {
    try {
      const resp = await axios.get(url);
      setCategoriesFood(resp.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    categories,
    categoriesFood,
  };
};
