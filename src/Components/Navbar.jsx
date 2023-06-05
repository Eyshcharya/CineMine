const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <a href='/'>Home</a>
        <a href='/movies'>Movies</a>
        <a href='/tv'>TV Shows</a>

        <a href='/genre'>Genres</a>

        {/* <a href='/favourites'>Favourites</a>
        <p> </p>
        <a href='/contact'>Contact Us</a> */}
      </div>
    </nav>
  );
};
export default Navbar;
