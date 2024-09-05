import { createStore, combineReducers } from 'redux';
import authReducer from '../redux/reducers/authReducer';
import postsReducer from '../redux/reducers/postsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer);

export default store;
