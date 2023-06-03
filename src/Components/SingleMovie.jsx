import { useGetSingleMovieQuery } from '../Features/MovieSlice';
import { HeartIcon } from '../assets/icon';

const SingleItem = () => {
  const id = JSON.parse(localStorage.getItem('IdHolder')) || [];

  const { data: getMovie } = useGetSingleMovieQuery(id);

  const title = getMovie?.original_title;
  const backDrop = getMovie?.backdrop_path;
  const poster = getMovie?.poster_path;
  const voteRate = getMovie?.vote_average.toFixed(1);
  const runtime = getMovie?.runtime;
  const overview = getMovie?.overview;
  const genres = getMovie?.genres;
  const date = getMovie?.release_date;
  const tagline = getMovie?.tagline;

  const newDate = new Date(date);
  const year = newDate.getFullYear();

  const backgroundImg = `https://image.tmdb.org/t/p/original/${backDrop}`;
  const posterImg = `https://image.tmdb.org/t/p/original/${poster}`;

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
        <section>
          <div className='poster-wave wave1'></div>
        </section>
        <div className='poster'>
          <img src={posterImg} alt='movie-poster' />
        </div>
        <div className='movie-details'>
          <h2>{title}</h2>

          <div className='sub-head'>
            <div className='vote-container'>
              <div className='rate-icon'>
                <img
                  src='https://www.freepnglogos.com/uploads/star-png/star-alt-icon-small-flat-iconset-paomedia-13.png'
                  alt='rate-icon'
                />
              </div>
              <h5>{voteRate}</h5>
            </div>
            <span className='year'>{year}</span>
            <span className='runtime'>{runtime} min</span>
            <div className='heart-icon'>
              <button>
                <HeartIcon />
              </button>
            </div>
            <div className='addToFavoriteText'>
              <p>Add to Favorites</p>
            </div>
          </div>
          <article className='overview'>
            <p>{overview}</p>

            <div className='genres'>
              Genres :
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
export default SingleItem;
