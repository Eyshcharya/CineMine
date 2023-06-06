import { useGetTrendingMoviesQuery } from '../Features/MovieSlice';
const SlideShow = ({ category }) => {
  const { data: getTrendingMovies } = useGetTrendingMoviesQuery();
  return (
    <div className='slideshow'>
      <div className='slideshow-slider'>
        {category === 'cinemine'
          ? getTrendingMovies?.results?.map((movie) => (
              <div className='slide' key={movie.id}>
                {movie.id}
              </div>
            ))
          : category === 'latest'
          ? 'latest'
          : 'null'}

        <div className='slide'></div>
      </div>
    </div>
  );
};
export default SlideShow;
