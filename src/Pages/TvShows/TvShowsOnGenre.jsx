import { useGetTvGenreQuery } from '../../Features/TvShowSlice';
import List from '../../Components/List';

const TvShowsOnGenre = ({ id }) => {
  const { data } = useGetTvGenreQuery(id);
  return (
    <>
      <div className='library-list'>
        {data?.results?.map((tvs) => {
          return <List key={tvs.id} {...tvs} />;
        })}
      </div>
    </>
  );
};
export default TvShowsOnGenre;
