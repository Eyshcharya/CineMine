import { useGetSingleMovieQuery } from '../Features/MovieSlice';

const SingleItem = () => {
  const id = JSON.parse(localStorage.getItem('IdHolder')) || [];

  const { data: getMovie } = useGetSingleMovieQuery(id);

  // const {data:getTvShow}=useGetSingleTvShowQuery(id)

  const title = getMovie?.original_title;
  const backDrop = getMovie?.backdrop_path;

  const backgroundImg = `https://image.tmdb.org/t/p/original/${backDrop}`;

  return (
    <div
      className='movie-container bg'
      style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(2, 107, 228, 0.332),
          rgba(10, 193, 249, 0.312),
          rgba(134, 185, 230, 0.282),
          rgba(207, 224, 234, 0.238)),
                  url(${backgroundImg})`,
        minHeight: '115vh',
        margin: '0',
      }}
    >
      <h4>{title}</h4>
    </div>
  );
};
export default SingleItem;
