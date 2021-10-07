import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt.utils';
import { reIssueAccessToken } from '../service/session.service';

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken) return next();

  const { decoded, expired } = decode(accessToken);
  if (decoded) {
    // @ts-ignore
    req.user = decoded;
    return next();
  }
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    if (newAccessToken) {
      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
      });
      const { decoded } = decode(newAccessToken);
      // @ts-ignore
      req.user = decoded;
    } else {
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');
    }
    return next();
  }

  return next();
};

export default deserializeUser;
