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
    loading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=74ebb35c&s=matrix')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  }

  searchMovies = (term, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=74ebb35c&s=${term}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      );
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container main-content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Spinner /> : <MovieList movies={movies} />}
      </main>
    );
  }
}

export { Main };
