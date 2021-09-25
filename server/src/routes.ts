import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import {
  createUserSchema,
  createUserSessionSchema,
} from './schema/user.schema';
import { requiresUser, validateRequest } from './middleware';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  //Register user
  //POST /api/user
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  //Login
  //POST /api/sessions
  app.post(
    '/api/sessions',
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  //Get current user
  //GET /api/sessions
  app.get('/api/sessions', requiresUser, getUserSessionsHandler);

  //Logout
  //DELETE /api/sessions
  app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);
}
