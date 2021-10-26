import axios from 'axios';

export const create = (formData: any) => {
  return axios.post('/api/post', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const get = () => {
  return axios.get('/api/post');
};

export const like = (postId: string) => {
  return axios.post('/api/post/like', { postId });
};

export const comment = (data: { postId: string; text: string }) => {
  return axios.post('/api/comment', data);
};
