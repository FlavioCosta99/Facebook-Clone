import { object, string } from 'yup';

export const createPostSchema = object({
  body: object({
    description: string().required('Description is required'),
  }),
});
