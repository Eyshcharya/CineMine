import Sidebar from '../../Components/Sidebar';
import MovieLayout from './MovieLayout';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <Sidebar />
      <div className='main-layout'>
        <p>
          Popular Genres :<Link to=''>Adventure</Link>
          <Link to=''>Thriller</Link>
          <Link to=''>Horror</Link>
          <Link to=''>Romance</Link>
          <Link to=''>Sci-Fi</Link>
          <Link to=''>Comedy</Link>
          <Link to=''>Drama</Link>
        </p>
        <MovieLayout />
      </div>
    </>
  );
};
export default Movies;
