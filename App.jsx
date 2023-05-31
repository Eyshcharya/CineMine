import Error from './src/Components/Error';
import Home from './src/Components/Home';
import Favourites from './src/Components/Favourites';
import Genre from './src/Components/Genre';
import Navbar from './src/Components/Navbar';
import Footer from './src/Components/Footer';
import Movies from './src/Components/Movies';
import TvShows from './src/Components/TvShows';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './src/Components/Contact';
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='favourites' element={<Favourites />} />
        <Route path='genre' element={<Genre />} />
        <Route path='movies' element={<Movies />} />
        <Route path='tvshows' element={<TvShows />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
