import { IUser } from '../../ts/auth_interfaces';
import { isLoggedIn, setAuthToken, removeAuthToken } from '../api/api-manager';
import { Auth_ActionType } from '../ts/action-types';
import {
  IAUTH,
  IAUTH_FAILURE,
  ILOGOUT,
  IUPDATE_CURRENT,
} from '../ts/interfaces';

const initialState = {
  user: null,
  isLoggedIn: isLoggedIn(),
  auth_error: null,
};

interface IInitialState {
  user: IUser | null;
  isLoggedIn: boolean;
  auth_error: [string] | string | null;
}
type Action = IAUTH | IUPDATE_CURRENT | ILOGOUT | IAUTH_FAILURE;

const authReducer = (
  state: IInitialState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case Auth_ActionType.AUTH:
      setAuthToken(payload.token);
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        auth_error: null,
      };
    case Auth_ActionType.UPDATE_CURRENT:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        auth_error: null,
      };
    case Auth_ActionType.AUTH_FAILURE:
      return {
        ...state,
        auth_error: payload,
      };
    case Auth_ActionType.LOGOUT:
      removeAuthToken();
      return {
        isLoggedIn: false,
        user: null,
        auth_error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
