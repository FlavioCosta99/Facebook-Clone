import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import postsReducer from './posts-reducer';

const appReducer = combineReducers({
  authReducer,
  postsReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
