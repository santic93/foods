import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Categories } from '../components/Categories'
import { Categorie } from '../components/Categorie'
import Favorite from '../components/Favorite'
import { RandomMeals } from '../components/RandomMeals'
import { InfoFood } from '../components/InfoFood'

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='' element={<Categories />} />
      <Route path='categorie/:id' element={<Categorie />} />
      <Route path='/favorites' element={<Favorite />} />
      <Route path='/randomMeals' element={<RandomMeals />} />
      <Route path='categorie/:categoryId/info/:mealId' element={<InfoFood />} />
    </Routes>
  </>
  )
}
