import { Router } from 'express';
import { requiresUser, validateRequest } from '../middleware';
import { createCommentSchema } from '../schema/comment.schema';
import { createCommentHandler } from '../controller/comment.controller';

var commentRouter = Router();

//Create comment
//POST /api/Comment
commentRouter.post(
  '/',
  [requiresUser, validateRequest(createCommentSchema)],
  createCommentHandler
);

export default commentRouter;
