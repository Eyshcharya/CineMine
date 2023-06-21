import { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { useGetMvGenreIdQuery } from '../Features/MovieSlice';
import { useGetTvGenreIdQuery } from '../Features/TvShowSlice';

import MoviesOnGenre from './Movies/MoviesOnGenre';
import TvShowsOnGenre from './TvShows/TvShowsOnGenre';

const Genre = () => {
  const [genre, setGenre] = useState('');
  const [genreID, setGenreID] = useState('');

  const { data: MovieGenre } = useGetMvGenreIdQuery();
  const { data: TvGenre } = useGetTvGenreIdQuery();

  const type = JSON.parse(localStorage.getItem('TypeHolder'));

  const handleMvGenreBtn = (id, name) => {
    setGenre(name);
    setGenreID(id);
  };
  const handleTvGenreBtn = (id, name) => {
    setGenre(name);
    setGenreID(id);
  };
  // useEffect(() => {
  //   setGenreID(genreID);

  // }, [genreID]);
  console.log(genreID);

  return (
    <>
      <div className='library'>
        <div>
          <Sidebar />
        </div>
        <div className='library-layout'>
          {type === 'movies' ? (
            <>
              <div className='library-head' id='genre-head'>
                <h3>Popular Movie Genres : </h3>
              </div>
              <div className='genre-list'>
                {MovieGenre?.genres?.map((genre) => {
                  return (
                    <>
                      <button
                        key={genre.id}
                        onClick={() => {
                          handleMvGenreBtn(genre.id, genre.name);
                        }}
                      >
                        {genre.name}
                      </button>
                    </>
                  );
                })}
              </div>
              <div className='selected-genre'>
                <h2>{genre}</h2>
              </div>
              {genreID && <MoviesOnGenre id={genreID} />}
            </>
          ) : (
            <>
              <div className='library-head' id='genre-head'>
                <h3>Popular Tv Show Genres : </h3>
              </div>
              <div className='genre-list'>
                {TvGenre?.genres?.map((genre) => {
                  return (
                    <>
                      <button
                        key={genre.id}
                        onClick={() => {
                          handleTvGenreBtn(genre.id, genre.name);
                        }}
                      >
                        {genre.name}
                      </button>
                    </>
                  );
                })}
              </div>
              <div className='selected-genre'>
                <h2>{genre}</h2>
              </div>
              {genreID && <TvShowsOnGenre id={genreID} />}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Genre;

//  {
//    TvGenre?.genres?.map((genre) => {
//      return (
//        <button
//          key={genre.id}
//          onClick={() => {
//            handleTvGenreBtn(genre.id, genre.name);
//          }}
//        >
//          {genre.name}
//        </button>
//      );
//    });
//  }
