import Sidebar from '../../../Components/Sidebar';
import { FireIcon, LibraryIcon } from '../../../assets/icon';
import { useGetUpcomingTvShowQuery } from '../../../Features/TvShowSlice';
import List from '../../../Components/List';
import { Link } from 'react-router-dom';

const UpcomingTv = () => {
  const { data } = useGetUpcomingTvShowQuery();

  return (
    <>
      <div className='library'>
        <div>
          <Sidebar />
        </div>
        <div className='library-layout'>
          <div className='library-head'>
            <FireIcon />
            <h3>Upcoming Tv Shows</h3>
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
export default UpcomingTv;
