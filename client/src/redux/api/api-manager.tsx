import axios from 'axios';

const URL = 'http://localhost:5000';
const TOKEN_NAME = 'token_WarnMe';

export const Init = () => {
  axios.defaults.baseURL = URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';
  const storedToken = localStorage.getItem(TOKEN_NAME);
  if (storedToken !== null) setAuthToken(storedToken);
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  localStorage.clear();
  axios.defaults.headers.common['Authorization'] = null;
};

export const isLoggedIn = () => {
  return localStorage.getItem(TOKEN_NAME) !== null;
};
