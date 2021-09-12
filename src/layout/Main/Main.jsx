// Dependencies
import React from 'react';

// Externals
import './Main.css';
import MovieList from '../../components/MovieList';
import Spinner from '../../components/Spinner';
import { Search } from '../../components/Search/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=74ebb35c&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (term) => {
    fetch(`http://www.omdbapi.com/?apikey=74ebb35c&s=${term}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='container main-content'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <MovieList movies={this.state.movies} /> : <Spinner />}
      </main>
    );
  }
}

export { Main };
