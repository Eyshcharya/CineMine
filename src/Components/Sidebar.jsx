import { Link } from 'react-router-dom';
import {
  HomeIcon,
  MovieIcon,
  TvIcon,
  GenreIcon,
  FavIcon,
} from '../assets/icon.jsx';

const Sidebar = () => {
  return (
    <div className='sidebar'>
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
    </div>
  );
};
export default Sidebar;
