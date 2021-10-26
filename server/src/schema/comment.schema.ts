import { object, string } from 'yup';

export const createCommentSchema = object({
  body: object({
    text: string().required('Text is required'),
  }),
});
