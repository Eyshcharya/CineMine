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
import Trending from './src/Pages/Movies/SidebarNavigation/Trending';
import TopRated from './src/Pages/Movies/SidebarNavigation/TopRated';
import Recent from './src/Pages/Movies/SidebarNavigation/Recent';
import Upcoming from './src/Pages/Movies/SidebarNavigation/Upcoming';
import TrendingTv from './src/Pages/TvShows/SidebarNavigation/TrendingTv';
import TopRatedTv from './src/Pages/TvShows/SidebarNavigation/TopRatedTv';
import RecentTv from './src/Pages/TvShows/SidebarNavigation/RecentTv';
import UpcomingTv from './src/Pages/TvShows/SidebarNavigation/UpcomingTv';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='favourites' element={<Favourites />} />

        <Route path='movies'>
          <Route index element={<Movies />} />
          <Route path='trending' element={<Trending />} />
          <Route path='top_rated' element={<TopRated />} />
          <Route path='recent' element={<Recent />} />
          <Route path='upcoming' element={<Upcoming />} />
          <Route path=':movieID' element={<SingleMovie />} />
        </Route>
        <Route path='tv'>
          <Route index element={<TvShows />} />
          <Route path='trending' element={<TrendingTv />} />
          <Route path='top_rated' element={<TopRatedTv />} />
          <Route path='recent' element={<RecentTv />} />
          <Route path='upcoming' element={<UpcomingTv />} />
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
