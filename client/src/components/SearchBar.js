import React from 'react';
import '../styles/searchbar.css';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() { 
    return (
      <div className="segment">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="field">
            <label className="input_text">Search for images: </label>
            <input 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} 
              className="input_area" 
              type="text" 
            />
          </div>
        </form>
      </div>
    );
  }
}
 
export default SearchBar;