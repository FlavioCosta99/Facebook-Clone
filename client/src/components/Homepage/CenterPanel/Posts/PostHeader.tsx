import moment from 'moment';
import React from 'react';
import { IPosts } from '../../../../ts/posts_interfaces';
import Avatar from '../../../Avatar';

export default function PostHeader({ post }: { post: IPosts }) {
  return (
    <div className="p-4">
      <div className="flex">
        <Avatar
          avatar={post.user.avatar}
          style={{ height: '40px', width: '40px' }}
        />
        <div>
          <h1 className="font-bold"> {post.user.name}</h1>
          <p className="text-sm font-thin">
            {moment(new Date(post.createdAt)).fromNow()}
          </p>
        </div>
      </div>
      {post.description && <p className="mt-3"> {post.description} </p>}
    </div>
  );
}
