import {
  DocumentDefinition,
  FilterQuery,
  SortValues,
  UpdateQuery,
} from 'mongoose';
import Comment, { CommentDocument } from '../model/comment.model';

export async function createComment(
  input: DocumentDefinition<CommentDocument>
) {
  try {
    return await Comment.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getComment(query: FilterQuery<CommentDocument>) {
  return await Comment.findOne(query).lean();
}
