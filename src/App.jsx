import { Link, Route, Routes } from 'react-router-dom';
import { Categorie } from './components/Categorie';
import { Categories } from './components/Categories';
import Favorite from './components/Favorite';
import { RandomMeals } from './components/RandomMeals';
import { InfoFood } from './components/InfoFood';

function App() {
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
  );
}

export default App;
