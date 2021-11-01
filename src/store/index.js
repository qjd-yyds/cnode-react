import { createStore, combineReducers } from 'redux';
import topic from './reducer/topic';
import topics from './reducer/topics';
import user from './reducer/user';
export default createStore(
  combineReducers({
    topics,
    topic,
    user
  })
);
