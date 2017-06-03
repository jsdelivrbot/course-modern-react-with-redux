import React, { Component } from 'react';
import BookDetail from '../containers/book_detail';
import BookList from '../containers/book_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
