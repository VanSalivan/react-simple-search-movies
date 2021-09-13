// Dependencies
import React from 'react';

// Externals
import './Search.css';

class Search extends React.Component {
  state = {
    search: 'batman',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => this.props.searchMovies(this.state.search, this.state.type) // по завершению обновления стейта вызываем функцию
    );
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='Поиск'
            type='search'
            className='validate'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn blue accent-4'
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Искать
          </button>
        </div>

        <p>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>Все</span>
          </label>

          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Фильмы</span>
          </label>

          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Сериалы</span>
          </label>
        </p>
      </div>
    );
  }
}

export { Search };
