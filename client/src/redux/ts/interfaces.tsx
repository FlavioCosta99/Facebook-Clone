import { IUser } from '../../ts/auth_interfaces';
import { Auth_ActionType } from './action-types';

export interface I_LOGIN_SUCCESS {
  type: Auth_ActionType.LOGIN_SUCCESS;
  payload: {
    user: IUser;
    accessToken: String;
    refreshToken: String;
  };
}
export interface I_LOGIN_FAILURE {
  type: Auth_ActionType.LOGIN_FAILURE;
  payload: any;
}
export interface I_REGISTER_FAILURE {
  type: Auth_ActionType.REGISTER_FAILURE;
  payload: any;
}

export interface IUPDATE_CURRENT {
  type: Auth_ActionType.UPDATE_CURRENT;
  payload: any;
}
export interface ILOGOUT {
  type: Auth_ActionType.LOGOUT;
  payload: any;
}
