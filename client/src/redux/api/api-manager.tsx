import axios from 'axios';

const URL = 'http://localhost:5000';

export const Init = () => {
  axios.defaults.baseURL = URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.withCredentials = true;
};
