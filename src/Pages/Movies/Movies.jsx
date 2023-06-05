import { useGetPopularMovieQuery } from '../../Features/MovieSlice';

const Movies = () => {
  const { data } = useGetPopularMovieQuery();
  return <div></div>;
};
export default Movies;
