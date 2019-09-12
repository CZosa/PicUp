import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import '../styles/app.css';

class App extends React.Component {
  state = {
    pictures: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    
    this.setState({ pictures: response.data.results });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="img_amount">
          There are {this.state.pictures.length} pictures available!
        </div>
      </div>
    )
  }
}

export default App;