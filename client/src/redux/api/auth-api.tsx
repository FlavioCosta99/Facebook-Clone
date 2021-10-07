import axios from 'axios';

export const signIn = (formData: any) => {
  return axios.post('/api/sessions', formData);
};
export const signUp = (formData: any) => {
  return axios.post('/api/users', formData);
};
export const getCurrent = () => {
  return axios.get('/api/users');
};
export const logout = () => {
  return axios.delete('/api/sessions');
};
