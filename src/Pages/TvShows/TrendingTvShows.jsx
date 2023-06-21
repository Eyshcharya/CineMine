import { useGetTrendingTvShowsQuery } from '../../Features/TvShowSlice';
import TrendingList from '../../Components/TrendingList';

const TrendingTvShows = () => {
  const { data } = useGetTrendingTvShowsQuery();

  return (
    <div>
      {/* The trending TV Shows are mapped here */}
      <div className='movie-container'>
        {data?.results?.map((tvs) => {
          return <TrendingList key={tvs.id} {...tvs} />;
        })}
      </div>
    </div>
  );
};
export default TrendingTvShows;
