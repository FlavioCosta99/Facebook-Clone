import { Router } from 'express';
import { requiresUser, validateRequest } from '../middleware';
import { createUserSchema } from '../schema/user.schema';
import {
  createUserHandler,
  getCurrentUser,
} from '../controller/user.controller';

var usersRouter = Router();
//Get current user
//GET /api/users
usersRouter.get('/', requiresUser, getCurrentUser);

//Register user
//POST /api/user
usersRouter.post('/', validateRequest(createUserSchema), createUserHandler);

export default usersRouter;
