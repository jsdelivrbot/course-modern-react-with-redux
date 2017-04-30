import { combineReducers } from 'redux';
import ActiveBookReducer from './reducer_active_book';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers( {
                                       books: BooksReducer,
                                       active_book: ActiveBookReducer
                                     } );

export default rootReducer;
