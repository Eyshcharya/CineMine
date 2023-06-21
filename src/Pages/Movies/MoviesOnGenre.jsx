import { useGetMvGenreQuery } from '../../Features/MovieSlice';
import List from '../../Components/List';

const MoviesOnGenre = ({ id }) => {
  const { data } = useGetMvGenreQuery(id);

  return (
    <>
      <div className='library-list'>
        {data?.results?.map((movie) => {
          return <List key={movie.id} {...movie} />;
        })}
      </div>
    </>
  );
};
export default MoviesOnGenre;
