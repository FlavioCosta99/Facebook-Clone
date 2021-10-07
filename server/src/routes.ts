import { Express, Request, Response } from 'express';

import sessionsRouter from './routes/session.routes';
import usersRouter from './routes/user.routes';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.use('/api/users', usersRouter);
  app.use('/api/sessions', sessionsRouter);
}
