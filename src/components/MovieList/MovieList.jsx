// Dependencies
import React from 'react';

// Externals
import './MovieList.css';
import MovieCard from '../MovieCard';

const MovieList = (props) => {
  const { movies = [] } = props;

  return (
    <div className='movie-list'>
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </div>
  );
};

export { MovieList };
