import Sidebar from '../../Components/Sidebar';
import MovieLayout from './MovieLayout';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <Sidebar />
      <div className='main-layout'>
        <MovieLayout />
      </div>
    </>
  );
};
export default Movies;
