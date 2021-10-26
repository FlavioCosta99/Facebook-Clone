import mongoose from 'mongoose';
import { findUser } from '../service/user.service';
import { CommentDocument } from './comment.model';
import { UserDocument } from './user.model';

interface ILike {
  id: string;
  name: string;
  avatar?: string;
}

export interface PostDocument extends mongoose.Document {
  user: UserDocument['_id'];
  description: string;
  image?: string;
  likes: Array<ILike>;
  comments: Array<CommentDocument>;
  createdAt: Date;
  updatedAt: Date;
  getUser: Function;
  hasLike: Function;
}

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    image: { type: String, required: false },
    likes: {
      type: [{ id: String, name: String, avatar: String }],
      required: false,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
      },
    ],
  },
  { timestamps: true }
);

// Gets User info
PostSchema.methods.getUser = async function (id: any) {
  let user = await findUser({ _id: id });
  return { id: user?._id, name: user?.name, avatar: user?.avatar };
};

// Method to check if a user has like on a post
PostSchema.methods.hasLike = async function (
  post: PostDocument,
  userId: string
) {
  let hasLike = false;
  post.likes.find((like) => {
    if (like.id == userId) hasLike = true;
  });
  return hasLike;
};

const Post = mongoose.model<PostDocument>('Post', PostSchema);
export default Post;
