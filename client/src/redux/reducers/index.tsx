import { combineReducers } from 'redux';

import authReducer from './auth-reducer';

const appReducer = combineReducers({
  authReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
