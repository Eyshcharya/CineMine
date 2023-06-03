import Navbar from '../Components/Navbar';
import { useGetTrendingMoviesQuery } from '../Features/MovieSlice';

import TrendingMovies from './Movies/TrendingMovies';
import TrendingTvShows from './TvShows/TrendingTvShows';

const Home = () => {
  const { isError, isLoading } = useGetTrendingMoviesQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div>
      <div className='page-container'>
        <div className='head'>
          <Navbar />
          <h1>CineMine</h1>
          <h3>Grab a snack, We gotcha !</h3>
          <form action=''>
            <div className='form'>
              <input
                className='search'
                type='text'
                placeholder=' Search Movie / TV Show'
                name=''
                id=''
              />
              <button className='search-btn' type='submit'>
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
        <TrendingMovies />
        <TrendingTvShows />
      </div>
    </div>
  );
};
export default Home;
