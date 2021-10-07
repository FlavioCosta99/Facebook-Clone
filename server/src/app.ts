import express from 'express';
import config from 'config';
import log from './utils/logger';
import connect from './utils/connect';
import routes from './routes';
import { deserializeUser } from './middleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();
app.use(cookieParser());
app.use(deserializeUser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.listen(port, host, () => {
  log.info(`Server running at http://${host}:${port}`);
  connect();
  routes(app);
});
