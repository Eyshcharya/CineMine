import { useSearchQuery } from '../Features/ApiSlice';
import List from './TrendingList';
const Search = ({ search }) => {
  const { data } = useSearchQuery(search);

  return (
    <>
      <div className='page-text'>
        <h3>Search Results</h3>
      </div>
      <div className='movie-container'>
        {data?.results?.map((movie) => {
          return <List key={movie.id} {...movie} />;
        })}
      </div>
    </>
  );
};
export default Search;
