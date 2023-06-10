import { Link } from 'react-router-dom';
import { useState } from 'react';
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

const Sidebar = (props) => {
  return (
    <>
      <div className='sidebar'>
        <h4>Library</h4>
        <Link to='/movies/trending'>
          <FireIcon /> Trending
        </Link>
        <Link to='/movies/top_rated'>
          <StarsIcon /> Top Rated
        </Link>
        <Link to='/movies/recent'>
          <RecentIcon /> Recent
        </Link>
        <Link to='/movies/upcoming'>
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
    </>
  );
};
export default Sidebar;
