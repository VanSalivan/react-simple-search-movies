// Dependencies
import React from 'react';

// Externals
import './MovieCard.css';

const MovieCard = (props) => {
  const {
    Title: title,
    Year: year,
    imdID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className='movie-card'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          {poster === 'N/A' ? (
            <img
              className='activator'
              src={`https://via.placeholder.com/300x430?text=${title}`}
              alt={title}
            />
          ) : (
            <img className='activator' src={poster} alt={title} />
          )}
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {title}
          </span>
          <p>
            {year} <span className='right'>{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };
