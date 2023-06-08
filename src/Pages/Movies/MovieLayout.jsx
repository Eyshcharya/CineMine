import {
  useGetLatestMovieQuery,
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
  useGetTrendingMoviesQuery,
  useGetUpcomingMovieQuery,
} from '../../Features/MovieSlice.jsx';
import { Link } from 'react-router-dom';

const MovieLayout = () => {
  const { data: getLatestMovie } = useGetLatestMovieQuery();
  const { data: getPopularMovie } = useGetPopularMovieQuery();
  const { data: getTopRatedMovie } = useGetTopRatedMovieQuery();
  const { data: getTrendingMovie } = useGetTrendingMoviesQuery();
  const { data: getUpcomingMovie } = useGetUpcomingMovieQuery();

  const url = `https://image.tmdb.org/t/p/original`;
  const latestMovie = getLatestMovie?.results[0]?.backdrop_path;
  const PopularMovie = getPopularMovie?.results[0]?.backdrop_path;
  const TopRatedMovie = getTopRatedMovie?.results[0]?.backdrop_path;
  const TrendingMovie = getTrendingMovie?.results[3]?.backdrop_path;
  const UpcomingMovie = getUpcomingMovie?.results[1]?.backdrop_path;

  return (
    <div className='layout-container'>
      <div className='one'>
        <Link to=''>
          <article
            style={{
              backgroundImage: `url(${url + latestMovie})`,
              backgroundSize: `850px`,
            }}
            className='Latest'
          >
            <h4>Latest</h4>
          </article>
        </Link>
        <Link to=''>
          <article
            style={{
              backgroundImage: `url(${url + PopularMovie})`,
              backgroundSize: `535px`,
            }}
            className='Popular'
          >
            <h4>Popular</h4>
          </article>
        </Link>
      </div>
      <div className='two'>
        <Link to=''>
          <article
            style={{
              backgroundImage: `url(${url + TopRatedMovie})`,
              backgroundSize: `505px`,
            }}
            className='Top-rated'
          >
            <h4> Top-rated </h4>
          </article>
        </Link>
        <Link to=''>
          <article
            style={{
              backgroundImage: `url(${url + TrendingMovie})`,
              backgroundSize: `505px`,
            }}
            className='Trending'
          >
            <h4>Trending</h4>
          </article>
        </Link>
        <Link to=''>
          <article
            style={{
              backgroundImage: `url(${url + UpcomingMovie})`,
              backgroundSize: `505px`,
            }}
            className='Upcoming'
          >
            <h4>Upcoming</h4>
          </article>
        </Link>
      </div>
    </div>
  );
};
export default MovieLayout;
