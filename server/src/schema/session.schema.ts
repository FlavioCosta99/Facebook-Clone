import { object, string } from 'yup';

export const createUserSessionSchema = object({
  body: object({
    password: string().required('Password is required'),
    email: string().required('Email is required'),
  }),
});
