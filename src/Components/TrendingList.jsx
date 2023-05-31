import { PlayIcon, StarIcon } from '../assets/icons';

StarIcon;
const TrendingList = ({
  original_title,
  vote_average,
  poster_path,
  release_date,
  original_name,
  first_air_date,
}) => {
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;

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
        <div className='layer'>
          <div className='layer-container'>
            <div className='play-icon'>
              <a href=''>
                <PlayIcon />
              </a>
            </div>

            {original_title ? (
              <>
                <h3>{original_title}</h3>
                <h6>{release_date}</h6>
              </>
            ) : (
              <>
                <h3>{original_name}</h3>
                <h6>{first_air_date}</h6>
              </>
            )}
          </div>
        </div>
        <img src={url} alt='movie-poster' />
      </div>
    </div>
  );
};
export default TrendingList;
