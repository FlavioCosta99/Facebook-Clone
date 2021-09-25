import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IUser } from '../../ts/auth_interfaces';
import * as api from '../api/auth-api';
import { Auth_ActionType } from '../ts/action-types';

export const signin =
  (formData: any, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: Auth_ActionType.AUTH_FAILURE, payload: null });
    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: Auth_ActionType.AUTH, payload: data });
      history.push('/');
    } catch (error: any) {
      dispatch({
        type: Auth_ActionType.AUTH_FAILURE,
        payload: error.response.data,
      });
    }
  };

export const signup =
  (formData: any, history: any) => async (dispatch: Dispatch) => {
    dispatch({ type: Auth_ActionType.AUTH_FAILURE, payload: null });
    try {
      const { data }: AxiosResponse<IUser> = await api.signUp(formData);
      console.log(data);
      dispatch({ type: Auth_ActionType.AUTH, payload: data });
      //history.push('/');
    } catch (error: any) {
      dispatch({
        type: Auth_ActionType.AUTH_FAILURE,
        payload: error.response.data,
      });
    }
  };

export const getCurrentUser = (history: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getCurrent();
    dispatch({ type: Auth_ActionType.UPDATE_CURRENT, payload: data });
    history.push('/');
  } catch (error) {
    dispatch({ type: Auth_ActionType.LOGOUT });
    history.push('/signin');
    console.log(error);
  }
};
