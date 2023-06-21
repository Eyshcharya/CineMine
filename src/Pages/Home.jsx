import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

import { useGetTrendingMoviesQuery } from '../Features/MovieSlice';

import TrendingMovies from './Movies/TrendingMovies';
import TrendingTvShows from './TvShows/TrendingTvShows';
import Search from '../Components/Search';

const Home = () => {
  const [isMovieBtn, setIsMovieBtn] = useState(true);
  const [isTvBtn, setIsTvBtn] = useState(false);
  const [search, setSearch] = useState('');
  const [isSearchBtn, setIsSearchBtn] = useState(false);

  const { isError, isLoading } = useGetTrendingMoviesQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Something went wrong!</h2>;
  }

  const handleMovieBtn = () => {
    setIsMovieBtn(true);
    setIsTvBtn(false);
  };
  const handleTvBtn = () => {
    setIsTvBtn(true);
    setIsMovieBtn(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearchBtn(true);
  };

  return (
    <div>
      <div className='page-container'>
        <div className='head'>
          <Navbar />
          {/* <Sidebar /> */}
          <h1>CineMine</h1>
          <h3>Grab a snack, We gotcha !</h3>
          <form action=''>
            <div className='form'>
              <input
                className='search'
                type='text'
                placeholder=' Search Movie / TV Show'
                name='search'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                className='search-btn'
                type='submit'
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </form>

          <section>
            <div className='wave wave1'></div>
            <div className='wave wave2'></div>
            <div className='wave wave3'></div>
            <div className='wave wave4'></div>
          </section>
        </div>
        {isSearchBtn ? (
          <>
            <Search search={search} />
          </>
        ) : (
          <>
            <div className='page-text'>
              <h3>Trending Now </h3>
              <button onClick={handleMovieBtn}> Movies</button>
              <button onClick={handleTvBtn}>TV Shows</button>
            </div>
            {isMovieBtn && <TrendingMovies />}
            {isTvBtn && <TrendingTvShows />}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
