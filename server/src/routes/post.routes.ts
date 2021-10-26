import { Router } from 'express';

import { createPostSchema } from '../schema/post.schema';
import { requiresUser, validateRequest } from '../middleware';
import {
  createPostHandler,
  getPosts,
  getImage,
  likePost,
} from '../controller/post.controller';
import Post from '../model/post.model';

var postRouter = Router();

//Create post
//POST /api/post
postRouter.post(
  '/',
  [requiresUser, validateRequest(createPostSchema)],
  createPostHandler
);

//get posts
//GET /api/post
postRouter.get('/', requiresUser, getPosts);

//get post images
//GET /api/post/image/:id
postRouter.get('/image/:id', getImage);

//like or remove like from post
//POST /api/post/like
postRouter.post('/like', likePost);

export default postRouter;
