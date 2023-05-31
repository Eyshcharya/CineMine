import { useGetTrendingTvShowsQuery } from '../Features/API/movieApi';
import TrendingList from './TrendingList';
const TrendingTvShows = () => {
  const { data } = useGetTrendingTvShowsQuery();
  return (
    <div>
      <div className='TrendingTvShows'>
        <h3> Trending TV Shows</h3>
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
