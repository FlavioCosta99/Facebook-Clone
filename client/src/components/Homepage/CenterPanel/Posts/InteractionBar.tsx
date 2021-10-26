import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../../../redux/actions/post-actions';
import { IPosts } from '../../../../ts/posts_interfaces';

export default function InteractionBar({
  post,
  userId,
  setShowComments,
  showComments,
}: {
  post: IPosts;
  userId: string;
  setShowComments: Function;
  showComments: boolean;
}) {
  let hasLike = post.likes.find((like) => like.id === userId) || null;

  const dispatch = useDispatch();
  const like = () => {
    dispatch(likePost(post._id));
  };

  return (
    <div className=" border-t-2 border-gray-400 p-2 flex justify-center">
      <ul className="flex justify-between w-3/4">
        <li className="flex items-center cursor-pointer" onClick={() => like()}>
          <i
            data-visualcompletion="css-img"
            className={hasLike ? 'like_active mr-2' : 'like mr-2'}
          />
          <p className={hasLike ? 'text-blue-800' : ''}> Like </p>
        </li>
        <li
          className="flex items-center cursor-pointer"
          onClick={() => setShowComments(!showComments)}
        >
          <i data-visualcompletion="css-img" className="comment mr-2" />
          <p> Comment </p>
        </li>
        <li className="flex items-center cursor-pointer">
          <i data-visualcompletion="css-img" className="share mr-2" />
          <p> Share </p>
        </li>
      </ul>
    </div>
  );
}
