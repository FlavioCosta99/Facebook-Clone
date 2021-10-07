import { Router } from 'express';
import {
  createUserSessionHandler,
  deleteUserSession,
  getUserSessionsHandler,
} from '../controller/session.controller';
import { createUserSessionSchema } from '../schema/user.schema';
import { requiresUser, validateRequest } from '../middleware';

var sessionRouter = Router();

//Login
//POST /api/sessions
sessionRouter.post(
  '/',
  validateRequest(createUserSessionSchema),
  createUserSessionHandler
);

//Get all user sessions
sessionRouter.get('/', requiresUser, getUserSessionsHandler);

//Logout
//DELETE /api/sessions
sessionRouter.delete('/', requiresUser, deleteUserSession);

export default sessionRouter;
