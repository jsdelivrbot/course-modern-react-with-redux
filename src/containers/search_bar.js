import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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
    this.props.fetchWeather( this.state.term );
    this.setState( { term: '' } );
  }

  onInputChange( event ) {
    this.setState( { term: event.target.value } );
  }
}

// Whatever is returned will show up as props on the SearchBar container
// i.e. this.props.fetchWeather will be available in the SearchBar
function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { fetchWeather: fetchWeather }, dispatch );
}

// Promote SearchBar from a component to a container. It provides state from redux as props
// and actions from redux as props.
export default connect( null, mapDispatchToProps )( SearchBar );
