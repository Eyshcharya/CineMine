import { Link } from 'react-router-dom';
import {
  HomeIcon,
  MovieIcon,
  TvIcon,
  GenreIcon,
  FavIcon,
  LibraryIcon,
  FireIcon,
  StarsIcon,
  RecentIcon,
  UpcomingIcon,
} from '../assets/icon.jsx';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h4>Library</h4>
      <Link to=''>
        <FireIcon /> Trending
      </Link>
      <Link to=''>
        <StarsIcon /> Top Rated
      </Link>
      <Link to=''>
        <RecentIcon /> Recent
      </Link>
      <Link to=''>
        <UpcomingIcon /> Upcoming
      </Link>
      <hr />
      <h4>Site Map</h4>

      <Link to='/'>
        <HomeIcon /> Home
      </Link>
      <Link to='/movies'>
        <MovieIcon /> Movies
      </Link>
      <Link to='/tv'>
        <TvIcon /> TV Shows
      </Link>
      <Link to='/genre'>
        <GenreIcon /> Genres
      </Link>
      <Link to='/favorites'>
        <FavIcon />
        Favorites
      </Link>
      <hr />
      <p>2023 &copy; CineMine</p>
    </div>
  );
};
export default Sidebar;
