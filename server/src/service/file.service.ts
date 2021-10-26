import {
  DocumentDefinition,
  FilterQuery,
  LeanDocument,
  UpdateQuery,
} from 'mongoose';
import Session, { SessionDocument } from '../model/session.model';
import { UserDocument } from '../model/user.model';
import config from 'config';
import { sign, decode } from '../utils/jwt.utils';
import { get } from 'lodash';
import { findUser } from '../service/user.service';
import FileManager, { FileDocument } from '../model/file.model';

export async function findFile(query: FilterQuery<FileDocument>) {
  return FileManager.findOne(query).lean();
}

export async function createFile(input: DocumentDefinition<FileDocument>) {
  try {
    return FileManager.create({ input });
  } catch (err: any) {
    throw new Error(err);
  }
}
