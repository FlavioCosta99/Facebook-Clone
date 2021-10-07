export const removeCookies = (res: any) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
};
