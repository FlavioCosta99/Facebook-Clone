export interface IUser {
  _id: string;
  googleId?: string;
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
