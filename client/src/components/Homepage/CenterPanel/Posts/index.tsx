import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../../redux/actions/post-actions';
import { State } from '../../../../redux/reducers';
import { IUser } from '../../../../ts/auth_interfaces';
import { IPosts } from '../../../../ts/posts_interfaces';
import PostContainer from './PostContainer';

export default function Posts() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );
  const { posts }: { posts: Array<IPosts> } = useSelector(
    (state: State) => state.postsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {posts &&
        posts?.map((post: IPosts) => (
          <PostContainer key={post._id} post={post} user={user} />
        ))}
    </div>
  );
}
