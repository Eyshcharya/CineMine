import Sidebar from '../../../Components/Sidebar';
import { FireIcon, LibraryIcon } from '../../../assets/icon';
import { useGetTopRatedTvShowQuery } from '../../../Features/TvShowSlice';
import List from '../../../Components/List';
import { Link } from 'react-router-dom';

const TopRatedTv = () => {
  const { data } = useGetTopRatedTvShowQuery();

  return (
    <>
      <div className='library'>
        <div>
          <Sidebar />
        </div>
        <div className='library-layout'>
          <div className='library-head'>
            <FireIcon />
            <h3>Top Rated Tv Shows</h3>
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
export default TopRatedTv;
