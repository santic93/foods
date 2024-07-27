import { Link, Route, Routes } from 'react-router-dom';
import { Categorie } from './components/Categorie';
import { Categories } from './components/Categories';
import Favorite from './components/Favorite';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Categories />} />
        <Route path='categorie/:id' element={<Categorie />} />
        <Route path='/Favorites' element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
