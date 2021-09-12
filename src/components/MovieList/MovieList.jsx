import React from 'react';

// Externals
import './MovieList.css';
import MovieCard from '../MovieCard';

const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

export { MovieList };
