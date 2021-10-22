import moment from 'moment';
import React from 'react';
import { IComment, IUser } from '../../../../ts/auth_interfaces';
import Avatar from '../../../Avatar';

export default function CommentSection({
  comments,
  user,
}: {
  comments: Array<IComment>;
  user: IUser;
}) {
  return (
    <div className="px-3 py-5 border-t-2 border-gray-400">
      <div className="flex m-2">
        <div className="mr-2 my-1">
          <Avatar avatar={user.avatar} />
        </div>
        <input
          placeholder="Write a comment..."
          className="bg-gray-400 text-gray-100 placeholder-gray-100 rounded-lg w-full p-2 focus:outline-none"
        />
      </div>
      {comments &&
        comments.map((comment: IComment) => (
          <CommentContainer comment={comment} />
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
        {moment(
          comment.date.setTime(comment.date.getTime() - 24 * 60 * 60 * 1000 * 5)
        ).fromNow()}
      </p>
    </div>
  );
};
