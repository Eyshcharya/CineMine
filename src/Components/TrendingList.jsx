import { Link } from 'react-router-dom';

const TrendingList = ({ id, original_title, vote_average, poster_path }) => {
  const url = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const handleBtn = (id) => {
    // console.log(id);
    localStorage.setItem('IdHolder', JSON.stringify(id));
  };
  return (
    <div className='movie'>
      <div className='movie-poster'>
        <div className='rate-badge'>
          <div className='rate-icon'>
            <img
              src='https://www.freepnglogos.com/uploads/star-png/star-alt-icon-small-flat-iconset-paomedia-13.png'
              alt='rate-icon'
            />
          </div>
          <h5>{vote_average.toFixed(1)}</h5>
        </div>
        <button
          onClick={() => {
            handleBtn(id);
          }}
        >
          {original_title ? (
            <Link to={`/movies/${id}`}>
              <img src={url} alt='movie-poster' />
            </Link>
          ) : (
            <Link to={`/tv/${id}`}>
              <img src={url} alt='movie-poster' />
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default TrendingList;
