import { useGetTrendingMoviesQuery } from '../Features/API/movieApi';
import Navbar from './Navbar';
import TrendingList from './TrendingList';
import TrendingTvShows from './TrendingTvShows';
const Home = () => {
  const { data, isError, isLoading } = useGetTrendingMoviesQuery();

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

        <div className='page-text'>
          <h3> Trending Movies</h3>
        </div>
        {/* The trending movies are mapped here */}
        <div className='movie-container'>
          {data?.results?.map((movie) => {
            return <TrendingList key={movie.id} {...movie} />;
          })}
        </div>
        <TrendingTvShows />
      </div>
    </div>
  );
};
export default Home;
