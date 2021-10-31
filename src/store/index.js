import { createStore, combineReducers } from 'redux';
import topic from './reducer/topic';
import topics from './reducer/topics';

export default createStore(
  combineReducers({
    topics,
    topic
  })
);
