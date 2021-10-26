import mongoose from 'mongoose';
import { getComment } from '../service/comments.service';
import { findUser } from '../service/user.service';
import { UserDocument } from './user.model';

export interface CommentDocument extends mongoose.Document {
  user: UserDocument['_id'];
  text: string;
  createdAt: Date;
  updatedAt: Date;
  populateComment: Function;
}

const CommentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model<CommentDocument>('Comment', CommentSchema);
export default Comment;
