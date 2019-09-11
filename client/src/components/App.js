import React from 'react';
import SearchBar from './SearchBar';
import '../styles/app.css';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;