import { Express, Request, Response } from 'express';
import usersRouter from './routes/user.routes';
import sessionsRouter from './routes/session.routes';
import postRouter from './routes/post.routes';
import commentRouter from './routes/comment.routes';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  app.use('/api/users', usersRouter);
  app.use('/api/sessions', sessionsRouter);
  app.use('/api/post', postRouter);
  app.use('/api/comment', commentRouter);
}
