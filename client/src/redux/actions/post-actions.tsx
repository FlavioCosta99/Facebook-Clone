import { Dispatch } from 'redux';
import * as api from '../api/form-api';
import { Posts_ActionType } from '../ts/action-types';

//create post
export const createPost = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.create(formData);
    dispatch({ type: Posts_ActionType.POST_CREATED, payload: data });
  } catch (error: any) {
    console.log(error);
  }
};

//get posts
export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get();
    dispatch({ type: Posts_ActionType.GET_POSTS_SUCCESS, payload: data });
  } catch (err: any) {
    console.log(err);
  }
};

//like or remove like from post
export const likePost = (postId: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.like(postId);
    dispatch({ type: Posts_ActionType.POST_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost =
  (postId: string, text: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.comment({ postId, text });
      dispatch({ type: Posts_ActionType.POST_UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
