import { createUser, findUser } from '../service/user.service';
import { Request, Response } from 'express';
import { get, omit } from 'lodash';
import log from '../utils/logger';
import { createUserSessionHandler } from './session.controller';
import { UserDocument } from '../model/user.model';

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    if (user) {
      await createUserSessionHandler(req, res);
    } else {
      return res.status(409).send('Email already being used!');
    }
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getCurrentUser(
  req: Request<UserDocument | any>,
  res: Response
) {
  let user = get(req, 'user');
  user = omit(user, 'password');
  //@ts-ignore
  return res.send(user);
}
