import mongoose from 'mongoose';
import { PostDocument } from './post.model';

export interface FileDocument extends mongoose.Document {
  post: PostDocument['_id'];
  name: string;
}

const FileSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  name: { type: String, required: true },
});

const FileManager = mongoose.model<FileDocument>('FileManager', FileSchema);
export default FileManager;
