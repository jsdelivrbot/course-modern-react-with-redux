import React, { Component } from 'react';

class SearchBar extends Component {
  constructor( props ) {
    super( props );

    this.state = { term: 'musictheory' };
  }

  onInputChange( term ) {
    this.setState( { term: term } );
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange( e.target.value )}/>
      </div>
    );
  }
}

export default SearchBar;
