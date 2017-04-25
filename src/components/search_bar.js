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
  render() {
    return <input/>;
  }
}

export default SearchBar;
