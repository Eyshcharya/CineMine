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
  const latId = getLatestMovie?.results[0]?.id;

  const PopularMovie = getPopularMovie?.results[0]?.backdrop_path;
  const PopId = getPopularMovie?.results[0]?.id;

  const TopRatedMovie = getTopRatedMovie?.results[0]?.backdrop_path;
  const TopId = getTopRatedMovie?.results[0]?.id;

  const TrendingMovie = getTrendingMovie?.results[3]?.backdrop_path;
  const TrendId = getTrendingMovie?.results[3]?.id;

  const UpcomingMovie = getUpcomingMovie?.results[1]?.backdrop_path;
  const UpId = getUpcomingMovie?.results[1]?.id;

  const handleBtn = (id) => {
    // console.log(id);
    localStorage.setItem('IdHolder', JSON.stringify(id));
  };

  return (
    <>
      <div className='layout-container'>
        <div className='one'>
          <Link
            to={`/movies/${latId}`}
            onClick={() => {
              handleBtn(latId);
            }}
          >
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
          <Link
            to={`/movies/${PopId}`}
            onClick={() => {
              handleBtn(PopId);
            }}
          >
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
          <Link
            to={`/movies/${TopId}`}
            onClick={() => {
              handleBtn(TopId);
            }}
          >
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
          <Link
            to={`/movies/${TrendId}`}
            onClick={() => {
              handleBtn(TrendId);
            }}
          >
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
          <Link
            to={`/movies/${UpId}`}
            onClick={() => {
              handleBtn(UpId);
            }}
          >
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
    </>
  );
};
export default MovieLayout;
