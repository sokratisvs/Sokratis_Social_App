import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import reducers
import rootReducer from './reducers/index';

//dummy data
import comments from './data/comments';
import config from './data/config';
import posts from './data/posts';

const defaultState = {
    posts: posts,
    comments: comments
};

const store = createStore (
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;