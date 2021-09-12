import { Request, Response } from 'express';
import config from 'config';
import { createAccessToken, createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { sign } from '../utils/jwt.utils';

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
  console.log(accessToken);
  //create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get('refreshTokenTtl'),
  });
  //send refresh & access token back
  return res.send({ accessToken, refreshToken });
}
