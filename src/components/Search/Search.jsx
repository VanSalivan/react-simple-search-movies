// Dependencies
import React from 'react';

// Externals
import './Search.css'

class Search extends React.Component {
  state = {
    search: '',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className='row search-container'>
        <div className='col s12'>
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
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Искать
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
