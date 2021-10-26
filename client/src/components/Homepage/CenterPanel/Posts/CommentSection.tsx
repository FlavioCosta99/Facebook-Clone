import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../../../redux/actions/post-actions';
import { IUser } from '../../../../ts/auth_interfaces';
import { IComment } from '../../../../ts/posts_interfaces';
import Avatar from '../../../Avatar';

export default function CommentSection({
  comments,
  user,
  postId,
}: {
  comments: Array<IComment>;
  user: IUser;
  postId: string;
}) {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(commentPost(postId, text));
    setText('');
  };
  return (
    <div className="px-3 py-5 border-t-2 border-gray-400">
      <div className="flex m-2">
        <div className="mr-2 my-1">
          <Avatar avatar={user.avatar} />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            placeholder="Write a comment..."
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            className="bg-gray-400 text-gray-100 placeholder-gray-100 rounded-lg w-full p-2 focus:outline-none"
          />
        </form>
      </div>
      {comments &&
        comments.map((comment: IComment, i: number) => (
          <CommentContainer key={i} comment={comment} />
        ))}
    </div>
  );
}

const CommentContainer = ({ comment }: { comment: IComment }) => {
  return (
    <div className="m-2">
      <div className="flex pt-3 pb-0 ">
        <div className="mr-2 my-1">
          <Avatar avatar={comment.user.avatar} />
        </div>
        <div className="flex flex-col bg-gray-400 rounded-lg p-2 ">
          <h1 className="font-bold">{comment.user.name}</h1>
          <p> {comment.text}</p>
        </div>
      </div>
      <p className="font-thin text-sm" style={{ marginLeft: '45px' }}>
        {moment(new Date(comment.createdAt)).fromNow()}
      </p>
    </div>
  );
};
