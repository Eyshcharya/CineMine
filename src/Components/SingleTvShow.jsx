import { useGetSingleTvShowQuery } from '../Features/TvShowSlice';
import { HeartIcon, StarIcon } from '../assets/icon';
import Navbar from './Navbar';

const SingleTvShow = () => {
  const id = JSON.parse(localStorage.getItem('IdHolder')) || [];

  const { data: getTvShow } = useGetSingleTvShowQuery(id);

  const title = getTvShow?.name;
  const backDrop = getTvShow?.backdrop_path;
  const poster = getTvShow?.poster_path;
  const voteRate = getTvShow?.vote_average.toFixed(1);
  const seasons = getTvShow?.number_of_seasons;
  const overview = getTvShow?.overview;
  const genres = getTvShow?.genres;
  const date = getTvShow?.first_air_date;
  const tagline = getTvShow?.tagline;

  const newDate = new Date(date);
  const year = newDate.getFullYear();

  const backgroundImg = `https://image.tmdb.org/t/p/original${backDrop}`;
  const posterImg = `https://image.tmdb.org/t/p/original${poster}`;

  return (
    <div>
      <div
        className='movie-container bg'
        style={{
          backgroundImage: `linear-gradient(230deg, rgba(255, 255, 255, 0.6), rgba(0, 0, 203, 0.5), rgba(1, 1, 122, 0.8)),
                  url(${backgroundImg})`,
          minHeight: '140vh',
          margin: '0',
        }}
      >
        <div className='shared-navbar'>
          <Navbar />
        </div>
        <div className='poster'>
          <img src={posterImg} alt='tv-poster' />
        </div>
        <div className='movie-details'>
          <h2>{title}</h2>

          <div className='sub-head'>
            <div className='vote-container'>
              <div className='rate-icon'>
                <StarIcon />
              </div>
              <h5>{voteRate}</h5>
            </div>
            <span className='year'>{year}</span>
            <span className='runtime'>
              {seasons > 1 ? `${seasons} seasons` : `${seasons} season`}
            </span>
            <div className='heart-icon'>
              <button>
                <HeartIcon />
              </button>
            </div>
            <div className='addToFavoriteText'>
              <p>Add to Favorites</p>
            </div>
            <div className='addToFavoriteText'></div>
          </div>
          <article className='overview'>
            <p>{overview}</p>
            <div className='genres'>
              {genres?.length > 1 ? ` Genres : ` : `Genre : `}

              {genres?.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </div>

            <div>Released on: {date}</div>
            <div className='tagline'> {tagline && `"${tagline}"`}</div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default SingleTvShow;
