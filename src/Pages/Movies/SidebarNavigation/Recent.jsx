import Sidebar from '../../../Components/Sidebar';
import { FireIcon, LibraryIcon } from '../../../assets/icon';
import { useGetLatestMovieQuery } from '../../../Features/MovieSlice';
import List from '../../../Components/List';
import { Link } from 'react-router-dom';

const Recent = () => {
  const { data } = useGetLatestMovieQuery();

  return (
    <>
      <div className='library'>
        <div>
          <Sidebar />
        </div>
        <div className='library-layout'>
          <div className='library-head'>
            <FireIcon />
            <h3>Recent Movies</h3>
            <Link to='/movies'>
              <LibraryIcon />
            </Link>
          </div>
          <div className='library-list'>
            {data?.results?.map((movie) => {
              return <List key={movie.id} {...movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Recent;
