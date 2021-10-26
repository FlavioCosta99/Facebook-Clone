import {
  DocumentDefinition,
  FilterQuery,
  SortValues,
  UpdateQuery,
} from 'mongoose';
import Post, { PostDocument } from '../model/post.model';

export async function createPost(input: DocumentDefinition<PostDocument>) {
  try {
    return Post.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findPosts(query: FilterQuery<PostDocument>, sort?: any) {
  let posts = await Post.find(query).sort(sort).lean();
  return posts;
}

export async function getPost(query: FilterQuery<PostDocument>) {
  return Post.findOne(query).lean();
}

export async function updatePost(
  query: FilterQuery<PostDocument>,
  update: UpdateQuery<PostDocument>
) {
  return Post.updateOne(query, update);
}
