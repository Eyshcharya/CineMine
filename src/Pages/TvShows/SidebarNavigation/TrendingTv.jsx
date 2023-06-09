import Sidebar from '../../../Components/Sidebar';
import { FireIcon, LibraryIcon } from '../../../assets/icon';
import { useGetTrendingTvShowsQuery } from '../../../Features/TvShowSlice';
import List from '../../../Components/List';
import { Link } from 'react-router-dom';

const TrendingTv = () => {
  const { data } = useGetTrendingTvShowsQuery();

  return (
    <>
      <div className='library'>
        <div>
          <Sidebar />
        </div>
        <div className='library-layout'>
          <div className='library-head'>
            <FireIcon />
            <h3>Trending Tv Shows</h3>
            <Link to='/tv'>
              <LibraryIcon />
            </Link>
          </div>
          <div className='library-list'>
            {data?.results?.map((tv) => {
              return <List key={tv.id} {...tv} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingTv;
