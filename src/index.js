import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import PostsList from './components/posts_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsList}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector( '.container' ) );
