import React, { useState } from 'react';
import { IUser } from '../../../../ts/auth_interfaces';
import { IPosts } from '../../../../ts/posts_interfaces';
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
      {post.image && (
        <img
          src={`http://localhost:5000/api/post/image/${post.image}`}
          alt="post"
        />
      )}
      <FeedbackBar
        setShowComments={(e: boolean) => setShowComments(e)}
        showComments={showComments}
        post={post}
      />
      <InteractionBar
        post={post}
        userId={user._id}
        showComments={showComments}
        setShowComments={(e: boolean) => setShowComments(e)}
      />
      {showComments && (
        <CommentSection
          postId={post._id}
          comments={post.comments}
          user={user}
        />
      )}
    </div>
  );
}
