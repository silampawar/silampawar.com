import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import RecentWork from './recentWork';

export default combineReducers({
  messages,
  auth,
  RecentWork
});
