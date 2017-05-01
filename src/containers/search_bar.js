import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor( props ) {
    super( props );
    this.state = { term: '' };

    //This is needed to make sure the this in onInputChange is the class this rather than invokers this
    this.onInputChange = this.onInputChange.bind( this );
    this.onFormSubmit = this.onFormSubmit.bind( this );
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onFormSubmit( event ) {
    event.preventDefault();
  }

  onInputChange( event ) {
    this.setState( { term: event.target.value } );
  }
}
