import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import RecentWork from './recentWork';
import RecentPost from './recentPost';

export default combineReducers({
  messages,
  auth,
  RecentWork,
  RecentPost
});
