import { useGetTrendingTvShowsQuery } from '../../Features/TvShowSlice';
import TrendingList from '../../Components/TrendingList';

const TrendingTvShows = () => {
  const { data } = useGetTrendingTvShowsQuery();

  return (
    <div>
      <hr />
      <div className='TrendingTvShows'>
        <h2> • Trending TV Shows</h2>
      </div>

      {/* The trending TV Shows are mapped here */}
      <div className='tvShow-container'>
        {data?.results?.map((tvs) => {
          return <TrendingList key={tvs.id} {...tvs} />;
        })}
      </div>
    </div>
  );
};
export default TrendingTvShows;
