import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.props.term}
          onChange={e => this.props.onSearchChanged( e.target.value )}/>
      </div>
    );
  }
}

export default SearchBar;
