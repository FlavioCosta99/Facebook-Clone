import { IUser } from '../../ts/auth_interfaces';
import { Auth_ActionType } from '../ts/action-types';
import {
  I_LOGIN_FAILURE,
  I_LOGIN_SUCCESS,
  ILOGOUT,
  IUPDATE_CURRENT,
} from '../ts/interfaces';

const initialState = {
  user: null,
  isLoggedIn: false,
  auth_error: '',
  loading: true,
};

interface IInitialState {
  user: IUser | null;
  isLoggedIn: boolean;
  auth_error: [string] | string | null;
  loading: boolean;
}
type Action = I_LOGIN_SUCCESS | I_LOGIN_FAILURE | IUPDATE_CURRENT | ILOGOUT;

const authReducer = (
  state: IInitialState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case Auth_ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        auth_error: null,
        loading: false,
      };
    case Auth_ActionType.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        auth_error: payload,
        loading: false,
      };
    case Auth_ActionType.UPDATE_CURRENT:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        auth_error: null,
        loading: false,
      };
    case Auth_ActionType.LOGOUT:
      console.log(payload);
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
