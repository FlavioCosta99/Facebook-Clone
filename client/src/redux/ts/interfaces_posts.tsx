import { IUser } from '../../ts/auth_interfaces';
import { Posts_ActionType } from './action-types';

export interface IGET_POSTS_REQUEST {
  type: Posts_ActionType.GET_POSTS_REQUEST;
  payload: {
    user: IUser;
    accessToken: String;
    refreshToken: String;
  };
}
export interface IGET_POSTS_SUCCESS {
  type: Posts_ActionType.GET_POSTS_SUCCESS;
  payload: any;
}

export interface IGET_POSTS_FAILURE {
  type: Posts_ActionType.GET_POSTS_FAILURE;
  payload: any;
}
export interface IPOST_CREATED {
  type: Posts_ActionType.POST_CREATED;
  payload: any;
}

export interface IPOST_UPDATE {
  type: Posts_ActionType.POST_UPDATE;
  payload: any;
}
