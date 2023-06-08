import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/tv'>TV Shows</Link>
        <Link to='/genre'>Genres</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
};
export default Navbar;
