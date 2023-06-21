import Sidebar from '../../Components/Sidebar';
import { Link } from 'react-router-dom';
import TvLayout from './TvLayout';
const TvShows = () => {
  const type = 'tv';
  return (
    <>
      <Sidebar type={type} />
      <div className='main-layout'>
        <TvLayout />
      </div>
    </>
  );
};
export default TvShows;
