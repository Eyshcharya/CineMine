import { useGetTrendingMoviesQuery } from '../Features/MovieSlice';
import TrendingList from './TrendingList';

const TrendingMovies = () => {
  const { data } = useGetTrendingMoviesQuery();

  return (
    <div>
      <div className='page-text'>
        <h2> • Trending Movies</h2>
      </div>

      {/* The trending movies are mapped here */}
      <div className='movie-container'>
        {data?.results?.map((movie) => {
          return <TrendingList key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};
export default TrendingMovies;
