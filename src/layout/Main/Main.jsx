// Dependencies
import React from 'react';

// Externals
import './Main.css';
import MovieList from '../../components/MovieList';
import Spinner from '../../components/Spinner';
import { Search } from '../../components/Search/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      )
      .catch((err) => {
        console.error(err);
        this.setState({
          loading: false,
        });
      });
  }

  searchMovies = (term, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}${
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
