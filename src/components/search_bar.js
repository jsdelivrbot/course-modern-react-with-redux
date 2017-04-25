import React, { Component } from 'react';

/**
 * A functional component as it takes input and produces output that is a function of input.
 * It contains no state.
 */
/*
 const SearchBar_old = () => {
 return <input/>;
 };
 export default SearchBar;
 */

/**
 * A stateful class based component.
 */
class SearchBar extends Component {
  constructor( props ) {
    super( props );

    this.state = { term: 'Initial value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.setState( { term: e.target.value } )}/>
        <p>The search term '{this.state.term}'</p>
      </div>
    );
  }
}

export default SearchBar;
