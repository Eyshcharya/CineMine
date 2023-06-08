import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './src/Pages/Error';
import Home from './src/Pages/Home';
import Favourites from './src/Components/Favourites';
import Genre from './src/Pages/Genre';
import Navbar from './src/Components/Navbar';
import Footer from './src/Components/Footer';
import Movies from './src/Pages/Movies/Movies';
import TvShows from './src/Pages/TvShows/TvShows';
import Contact from './src/Pages/Contact';
import SingleMovie from './src/Components/SingleMovie';
import SingleTvShow from './src/Components/SingleTvShow';
import Sidebar from './src/Components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='favourites' element={<Favourites />} />

        <Route path='movies' element={<Sidebar />}>
          <Route index element={<Movies />} />
          <Route path=':movieID' element={<SingleMovie />} />
        </Route>
        <Route path='tv' element={<Sidebar />}>
          <Route index element={<TvShows />} />
          <Route path=':tvID' element={<SingleTvShow />} />
        </Route>

        <Route path='genre' element={<Genre />} />
        <Route path='contact' element={<Contact />} />
        <Route path='favorites' element={<Favourites />} />

        <Route path='foot' element={<Footer />} />
        <Route path='nav' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
