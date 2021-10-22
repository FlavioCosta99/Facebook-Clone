import { IUser } from '../../ts/auth_interfaces';
import { Auth_ActionType } from '../ts/action-types';
import {
  I_LOGIN_FAILURE,
  I_REGISTER_FAILURE,
  I_LOGIN_SUCCESS,
  ILOGOUT,
  IUPDATE_CURRENT,
  I_AUTH_LOADING,
} from '../ts/interfaces';

const initialState = {
  user: {
    id: '2',
    name: 'Flávio',
    email: 'fadc99@hotmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  isLoggedIn: true,
  auth_error: null,
  loading: false,
};

interface IInitialState {
  user: IUser | null;
  isLoggedIn: boolean;
  auth_error: { type: String; message: String } | null;
  loading: boolean;
}
type Action =
  | I_AUTH_LOADING
  | I_LOGIN_SUCCESS
  | I_LOGIN_FAILURE
  | I_REGISTER_FAILURE
  | IUPDATE_CURRENT
  | ILOGOUT;

const authReducer = (
  state: IInitialState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case Auth_ActionType.AUTH_LOADING:
      return {
        ...state,
        auth_error: null,
      };
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
        auth_error: { type: 'login', message: payload },
        loading: false,
      };
    case Auth_ActionType.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        auth_error: { type: 'register', message: payload },
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
      return { ...state };
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
