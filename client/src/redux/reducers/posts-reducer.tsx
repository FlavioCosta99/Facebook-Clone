import { IPosts } from '../../ts/posts_interfaces';
import { Posts_ActionType } from '../ts/action-types';
import {
  IGET_POSTS_FAILURE,
  IGET_POSTS_REQUEST,
  IGET_POSTS_SUCCESS,
  IPOST_CREATED,
  IPOST_UPDATE,
} from '../ts/interfaces_posts';

const initialState = {
  posts: [],
  loading: true,
};

interface IInitialState {
  posts: Array<IPosts | null>;
  loading: boolean;
}
type Action =
  | IGET_POSTS_REQUEST
  | IGET_POSTS_SUCCESS
  | IGET_POSTS_FAILURE
  | IPOST_CREATED
  | IPOST_UPDATE;

const postReducer = (
  state: IInitialState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case Posts_ActionType.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        posts: [null],
      };
    case Posts_ActionType.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case Posts_ActionType.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [null],
      };
    case Posts_ActionType.POST_CREATED:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
      };
    case Posts_ActionType.POST_UPDATE:
      let index = state.posts.findIndex((post) => post?._id === payload._id);
      state.posts[index] = payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postReducer;
