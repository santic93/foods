import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFoodInfo } from '../hooks/useFoodInfo';
import { RandomMeals } from './RandomMeals';

export const InfoFood = () => {
  const pat = useParams();
  const { food, foodDetails } = useFoodInfo();
  useEffect(() => {
    food(pat.mealId);
  }, []);

  return <RandomMeals details={foodDetails}/>;
};
