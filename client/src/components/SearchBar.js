import React from 'react';

class SearchBar extends React.Component {
  render() { 
    return (
      <div className="segment">
        <form className="form">
          <div className="field">
            <label>Search for images: </label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;