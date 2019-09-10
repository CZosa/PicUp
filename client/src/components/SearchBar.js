import React from 'react';
import '../styles/searchbar.css';

class SearchBar extends React.Component {
  render() { 
    return (
      <div className="segment">
        <form className="form">
          <div className="field">
            <label className="input_text">Search for images: </label>
            <input className="input_area" type="text" />
          </div>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;