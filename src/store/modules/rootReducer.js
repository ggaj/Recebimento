import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import receipt from './receipt/reducer';

export default combineReducers({
  auth,
  user,
  receipt,
});
