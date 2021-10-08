import { omit, get } from 'lodash';
import { DocumentDefinition, FilterQuery } from 'mongoose';
import User, { UserDocument } from '../model/user.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    let email = get(input, 'email');
    let user = await findUser({ email });
    if (user) {
      return false;
    } else {
      return User.create(input);
    }
    //const newUser = new User(input);
    //const user = await newUser.save();
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument['email'];
  password: string;
}) {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return false;
  }
  return omit(user.toJSON(), 'password');
}
