import { Request, Response } from 'express';
import config from 'config';
import {
  createAccessToken,
  createSession,
  updateSession,
  findSessions,
  deleteSession,
} from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { sign } from '../utils/jwt.utils';
import { get, omit } from 'lodash';
import { UserDocument } from '../model/user.model';
import { removeCookies } from '../utils/sessions';

export async function createUserSessionHandler(req: Request, res: Response) {
  //validate the email and password
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }
  //Create a session
  const session = await createSession(user._id, req.get('user-agent') || '');
  //create access token
  const accessToken = await createAccessToken({ user, session });
  //create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get('refreshTokenTtl'),
  });
  //send refresh & access token back
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
  });
  return res.send({ user });
}

export async function deleteUserSession(req: Request, res: Response) {
  const sessionId = get(req, 'user.session');
  await deleteSession({ _id: sessionId });
  removeCookies(res);
  return res.sendStatus(200);
}

export async function getUserSessionsHandler(
  req: Request<UserDocument | any>,
  res: Response
) {
  const userId = get(req, 'user._id');
  const sessions = await findSessions({ user: userId, valid: true });
  return res.send(sessions);
}
