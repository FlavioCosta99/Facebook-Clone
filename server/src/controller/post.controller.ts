import { get, template } from 'lodash';
import { Request, Response } from 'express';
import { generateRandomName } from './file.controller';
import {
  createPost,
  findPosts,
  getPost,
  updatePost,
} from '../service/post.service';
import Post, { PostDocument } from '../model/post.model';
import path from 'path';
import Comment, { CommentDocument } from '../model/comment.model';
import { getComment } from '../service/comments.service';
import { populateComments } from './comment.controller';

export async function createPostHandler(req: any, res: Response) {
  let post: PostDocument = new Post();
  post.description = req.body.description;
  let user = get(req, 'user');
  //post.user = { id: user._id, name: user.name, avatar: user.avatar };
  post.user = user._id;
  var name: any = false;
  if (req.files) {
    //if an image is attached
    const file = req.files.file;
    const file_name: string = await generateRandomName();
    //@ts-ignore

    //get path of the image folder
    let dir: any = path.join(global.__basedir + '/public/images/');
    //add the extension to the file name
    name = file_name + '.' + file.name.split('.').pop();

    //save image
    await file.mv(`${dir}/${name}`, (err: any) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  }
  if (name) post.image = name;
  let result = await createPost(post);
  // Removes the freeze from the object by clonning it
  result = JSON.parse(JSON.stringify(result));
  let post_result = new Post(result);
  result.user = await post_result.getUser(post_result.user);
  return res.send(result);
}

export async function getPosts(req: any, res: Response) {
  let posts: any = await findPosts({}, { createdAt: 'desc' });
  await Promise.all(
    posts.map(async (post: any) => {
      let newPost = new Post(post);
      //populate user
      post.user = await newPost.getUser(post.user);
      //populate comments
      post.comments = await populateComments(post.comments);
    })
  );
  return res.send(posts);
}

export function getImage(req: Request, res: Response) {
  res.set('Content-Type', 'image/png');
  return res.sendFile(
    //@ts-ignore
    path.join(global.__basedir + '/public/images/' + req.params.id)
  );
}

export async function likePost(req: Request, res: Response) {
  let user = get(req, 'user');
  let postId = get(req.body, 'postId');
  let post = await getPost({ _id: postId });
  if (post) {
    var newPost = new Post(post);
    let hasLike = await newPost.hasLike(newPost, user._id);
    if (hasLike) {
      newPost.likes = newPost.likes.filter((like) => like.id != user._id);
    } else {
      let user_inf = await newPost.getUser(user._id);
      newPost.likes.push(user_inf);
    }

    await updatePost({ _id: newPost._id }, newPost);
    var result = await getPostWithData(postId);
    return res.send(result);
  }
}

export async function getPostWithData(id: string) {
  var post = await getPost({ _id: id });
  if (post) {
    var res = new Post(post);

    //populate owner of post
    var user = await res.getUser(res.user);
    //populate comments user
    var comments = await populateComments(res.comments);

    res = JSON.parse(JSON.stringify(res));
    res.user = user;
    res.comments = comments;
    console.log(res);
    return res;
  }
}
