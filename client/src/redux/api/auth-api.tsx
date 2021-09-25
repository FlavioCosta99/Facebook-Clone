import axios from 'axios';

export const signIn = (formData: any) => {
  return axios.post('/user/signin', formData);
};
export const signUp = (formData: any) => {
  return axios.post('/api/users', formData);
};
export const getCurrent = () => {
  return axios.get('/user/getCurrent');
};
