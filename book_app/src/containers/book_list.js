import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/action_select_book';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map( book =>
                                   <li key={book.title}
                                       className="list-group-item"
                                       onClick={() => this.props.selectBook( book )}>
                                     {book.title}
                                   </li> );
  }
}

// Whatever is returned will show up as props on the BookList container
function mapStateToProps( state ) {
  return {
    books: state.books
  };
}

// Whatever is returned will show up as props on the BookList container
// i.e. this.props.selectBook will be available in the BookList
function mapDispatchToProps( dispatch ) {
  // Whenever selectBook is called the result should be passed to all our reducers
  // This is the purpose of bindActionCreators.
  return bindActionCreators( { selectBook: selectBook }, dispatch );
}

// Promote BookList from a component to a container. It provides state from redux as props
// and actions from redux as props.
export default connect( mapStateToProps, mapDispatchToProps )( BookList );
