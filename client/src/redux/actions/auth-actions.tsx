import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IUser } from '../../ts/auth_interfaces';
import * as api from '../api/auth-api';
import { Auth_ActionType } from '../ts/action-types';

export const signin = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: Auth_ActionType.LOGIN_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: Auth_ActionType.LOGIN_FAILURE,
      payload: error.response.data,
    });
  }
};

export const signup = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const { data }: AxiosResponse<IUser> = await api.signUp(formData);
    dispatch({ type: Auth_ActionType.LOGIN_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: Auth_ActionType.REGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const getCurrentUser = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getCurrent();
    dispatch({ type: Auth_ActionType.UPDATE_CURRENT, payload: data });
  } catch (error) {
    dispatch({ type: Auth_ActionType.LOGOUT });
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    await api.logout();
    dispatch({ type: Auth_ActionType.LOGOUT });
  } catch (err) {
    console.log(err);
  }
};
