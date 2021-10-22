import React, { useState } from 'react';
import { IPosts, IUser } from '../../../../ts/auth_interfaces';
import CommentSection from './CommentSection';
import FeedbackBar from './FeedbackBar';
import InteractionBar from './InteractionBar';
import PostHeader from './PostHeader';

export default function PostContainer({
  post,
  user,
}: {
  post: IPosts;
  user: IUser;
}) {
  const [showComments, setShowComments] = useState<boolean>(false);

  return (
    <div className="w-full bg-white rounded-md shadow-lg flex flex-col mt-5 ">
      <PostHeader post={post} />
      {post.image && <img src={post.image} alt="Post Image" />}
      <FeedbackBar
        setShowComments={(e: boolean) => setShowComments(e)}
        showComments={showComments}
        post={post}
      />
      <InteractionBar />
      {showComments && <CommentSection comments={post.comments} user={user} />}
    </div>
  );
}
