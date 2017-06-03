import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import CreatePost from './containers/posts/create_post';
import ListPosts from './containers/posts/list_posts';
import ShowPost from './containers/posts/show_post';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

// Note that <Switch> will pick the first route that matches the url
// So more specific routes should occur earlier in order.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={CreatePost}/>
          <Route path="/posts/:id" component={ShowPost}/>
          <Route path="/" component={ListPosts}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector( '.container' ) );
