import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleMovie = (movie) => {
    console.log(movie);
    localStorage.setItem('TypeHolder', JSON.stringify(movie));
  };
  const handleTv = (tv) => {
    console.log(tv);
    localStorage.setItem('TypeHolder', JSON.stringify(tv));
  };

  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>Home</Link>

        <button
          onClick={() => {
            handleMovie('movies');
          }}
        >
          <Link to='/movies'>Movies</Link>
        </button>
        <button
          onClick={() => {
            handleTv('tv');
          }}
        >
          <Link to='/tv'>TV Shows</Link>
        </button>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
};
export default Navbar;
