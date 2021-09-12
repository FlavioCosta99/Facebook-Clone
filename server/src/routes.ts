import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler } from './controller/session.controller';
import {
  createUserSchema,
  createUserSessionSchema,
} from './schema/user.schema';
import validateRequest from './middleware/valideRequest';

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

  //Logout
  //DELETE /api/sessions
}
