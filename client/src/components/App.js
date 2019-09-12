import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import PictureList from './PictureList';
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
        <PictureList images={this.state.pictures} />
      </div>
    )
  }
}

export default App;