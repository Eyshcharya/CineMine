import { Link } from 'react-router-dom';

import {
  HomeIcon,
  MovieIcon,
  TvIcon,
  GenreIcon,
  FavIcon,
  FireIcon,
  StarsIcon,
  RecentIcon,
  UpcomingIcon,
} from '../assets/icon.jsx';

const Sidebar = () => {
  const type = JSON.parse(localStorage.getItem('TypeHolder')) || [];
  const handleMovie = (movie) => {
    console.log(movie);
    localStorage.setItem('TypeHolder', JSON.stringify(movie));
  };
  const handleTv = (tv) => {
    console.log(tv);
    localStorage.setItem('TypeHolder', JSON.stringify(tv));
  };

  return (
    <>
      <div className='sidebar'>
        <h4>Library</h4>
        <>
          <Link to={`/${type}/trending`}>
            <FireIcon /> Trending
          </Link>
          <Link to={`/${type}/top_rated`}>
            <StarsIcon /> Top Rated
          </Link>
          <Link to={`/${type}/recent`}>
            <RecentIcon /> Recent
          </Link>
          <Link to={`/${type}/upcoming`}>
            <UpcomingIcon /> Upcoming
          </Link>
        </>

        <hr />
        <h4>Site Map</h4>

        <Link to='/'>
          <HomeIcon /> Home
        </Link>
        <Link to='/movies'>
          <button
            onClick={() => {
              handleMovie('movies');
            }}
          >
            <MovieIcon /> Movies
          </button>
        </Link>
        <Link to='/tv'>
          <button
            onClick={() => {
              handleTv('tv');
            }}
          >
            <TvIcon /> TV Shows
          </button>
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
    </>
  );
};
export default Sidebar;
