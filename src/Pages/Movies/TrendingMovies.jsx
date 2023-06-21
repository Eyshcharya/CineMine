import { useGetTrendingMoviesQuery } from '../../Features/MovieSlice';
import TrendingList from '../../Components/TrendingList';

const TrendingMovies = () => {
  const { data } = useGetTrendingMoviesQuery();

  return (
    <div>
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
