import { get } from 'lodash';
import { Request, Response } from 'express';
import { createComment } from '../service/comments.service';
import { CommentDocument } from '../model/comment.model';
import Comment from '../model/comment.model';
import { getPost, updatePost } from '../service/post.service';
import Post from '../model/post.model';
import { getComment } from '../service/comments.service';
import { findUser } from '../service/user.service';
import { getPostWithData } from './post.controller';

export async function createCommentHandler(req: Request, res: Response) {
  let user = get(req, 'user');
  let { text, postId }: { text: string; postId: string } = req.body;

  const comment = new Comment({
    user: user._id,
    text: text,
  });
  //create comment
  const created = await createComment(comment);
  let commentId = created._id;
  //Add the comment id to the post
  let post = await getPost({ _id: postId });
  let comments = post?.comments;
  comments?.unshift(commentId);

  let updated_post = await updatePost({ _id: postId }, { comments });
  var result = await getPostWithData(postId);

  return res.send(result);
}

// Function that receives an array of comments ID
// and returns an array of comments of the type CommentDocument
export async function populateComments(comments: Array<CommentDocument>) {
  //create empty array
  var list_comments: any = [];
  for (let i = 0; i < comments.length; i++) {
    let populated_comment = await getComment({ _id: comments[i] });
    if (populated_comment) {
      //populate user that made the comment
      let user = await findUser({ _id: populated_comment.user });
      if (user) {
        populated_comment.user = {
          _id: user._id,
          name: user.name,
          avatar: user.avatar,
        };
        list_comments.push(populated_comment);
      }
    }
  }

  return list_comments;
}
