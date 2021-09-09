import { Auth_ActionType } from './action-types';

export interface IAUTH {
  type: Auth_ActionType.AUTH;
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
export interface IAUTH_FAILURE {
  type: Auth_ActionType.AUTH_FAILURE;
  payload: any;
}
