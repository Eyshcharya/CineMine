import { useGetTrendingMoviesQuery } from '../Features/API/movieApi';
import SingleMovie from './SingleMovie';
const Home = () => {
  const { data } = useGetTrendingMoviesQuery();

  return (
    <div>
      <h3>Home</h3>
      {/* The trending movies are mapped here */}
      {data?.results?.map((movie) => {
        return <SingleMovie key={movie.id} {...movie} />;
      })}
    </div>
  );
};
export default Home;
