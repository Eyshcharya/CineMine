import {
  useGetPopularTvShowQuery,
  useGetLatestTvShowQuery,
  useGetTopRatedTvShowQuery,
  useGetTrendingTvShowsQuery,
  useGetUpcomingTvShowQuery,
} from '../../Features/TvShowSlice.jsx';
import { Link } from 'react-router-dom';

const TvLayout = () => {
  const { data: getLatestTvShow } = useGetLatestTvShowQuery();
  const { data: getPopularTvShow } = useGetPopularTvShowQuery();
  const { data: getTopRatedTvShow } = useGetTopRatedTvShowQuery();
  const { data: getTrendingTvShow } = useGetTrendingTvShowsQuery();
  const { data: getUpcomingTvShow } = useGetUpcomingTvShowQuery();

  const url = `https://image.tmdb.org/t/p/original`;

  const latestTvShow = getLatestTvShow?.results[0]?.backdrop_path;
  const latId = getLatestTvShow?.results[0]?.id;

  const PopularTvShow =
    getPopularTvShow?.results[1]?.backdrop_path ||
    getPopularTvShow?.results[1]?.poster_path;
  const PopId = getPopularTvShow?.results[1]?.id;

  const TopRatedTvShow = getTopRatedTvShow?.results[0]?.backdrop_path;
  const TopId = getTopRatedTvShow?.results[0]?.id;

  const TrendingTvShow = getTrendingTvShow?.results[0]?.backdrop_path;
  const TrendId = getTrendingTvShow?.results[0]?.id;

  const UpcomingTvShow = getUpcomingTvShow?.results[2]?.backdrop_path;
  const UpId = getUpcomingTvShow?.results[2]?.id;

  const handleBtn = (id) => {
    console.log(id);
    localStorage.setItem('IdHolder', JSON.stringify(id));
  };

  return (
    <div className='layout-container'>
      <div className='one'>
        <Link
          to={`/tv/${latId}`}
          onClick={() => {
            handleBtn(latId);
          }}
        >
          <article
            style={{
              backgroundImage: `url(${url + latestTvShow})`,
              backgroundSize: `850px`,
            }}
            className='Latest'
          >
            <h4>Latest</h4>
          </article>
        </Link>
        <Link
          to={`/tv/${PopId}`}
          onClick={() => {
            handleBtn(PopId);
          }}
        >
          <article
            style={{
              backgroundImage: `url(${url + PopularTvShow})`,
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
          to={`/tv/${TopId}`}
          onClick={() => {
            handleBtn(TopId);
          }}
        >
          <article
            style={{
              backgroundImage: `url(${url + TopRatedTvShow})`,
              backgroundSize: `505px`,
            }}
            className='Top-rated'
          >
            <h4> Top-rated </h4>
          </article>
        </Link>
        <Link
          to={`/tv/${TrendId}`}
          onClick={() => {
            handleBtn(TrendId);
          }}
        >
          <article
            style={{
              backgroundImage: `url(${url + TrendingTvShow})`,
              backgroundSize: `505px`,
            }}
            className='Trending'
          >
            <h4>Trending</h4>
          </article>
        </Link>
        <Link
          to={`/tv/${UpId}`}
          onClick={() => {
            handleBtn(UpId);
          }}
        >
          <article
            style={{
              backgroundImage: `url(${url + UpcomingTvShow})`,
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
export default TvLayout;
