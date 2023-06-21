import Sidebar from './Sidebar';
import { useState } from 'react';
import List from './List';

const Favourites = () => {
  const [isMovieBtn, setIsMovieBtn] = useState(true);
  const [isTvBtn, setIsTvBtn] = useState(false);

  const [favMovieArray, setFavMovieArray] = useState(
    JSON.parse(localStorage.getItem('MovieArray')) || []
  );

  const [favTvArray, setFavTvArray] = useState(
    JSON.parse(localStorage.getItem('TvArray')) || []
  );

  const handleMovieBtn = () => {
    setIsMovieBtn(true);
    setIsTvBtn(false);
  };
  const handleTvBtn = () => {
    setIsTvBtn(true);
    setIsMovieBtn(false);
  };
  const handleClearBtn = () => {
    if (isMovieBtn) {
      setFavMovieArray([]);
      localStorage.setItem('MovieArray', JSON.stringify(favMovieArray));
    } else if (isTvBtn) {
      setFavTvArray([]);
      localStorage.setItem('TvArray', JSON.stringify(favTvArray));
    }
  };
  return (
    <>
      <div className='main-layout'>
        <div className='library'>
          <div>
            <Sidebar />
          </div>
          <div className='favorite-layout'>
            <div className='favorite-head'>
              <h3>Your Favorite </h3>
              <button onClick={handleMovieBtn}> Movies</button>
              <button onClick={handleTvBtn}>TV Shows</button>
              <button onClick={handleClearBtn} className='remove-btn'>
                Remove All
              </button>
            </div>

            <div className='library-list'>
              {isMovieBtn &&
                (favMovieArray.length > 0 ? (
                  favMovieArray?.map((movie) => {
                    return <List key={movie.id} {...movie} />;
                  })
                ) : (
                  <>
                    <h2>No Favorite Movies</h2>
                  </>
                ))}
              {isTvBtn &&
                (favTvArray.length ? (
                  favTvArray?.map((tv) => {
                    return <List key={tv.id} {...tv} />;
                  })
                ) : (
                  <>
                    <h2>No Favorite Tv Shows</h2>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Favourites;
