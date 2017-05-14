import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers( {
                                       posts: PostsReducer,
                                       // formReducer HAS to be applied for the state key "form"
                                       // as the library assumes that all form is hooked up to that
                                       form: formReducer
                                     } );

export default rootReducer;
