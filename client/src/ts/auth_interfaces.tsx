export interface IUser {
  id: string;
  googleId?: string;
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

type User = {
  id: string;
  name: string;
  avatar?: string;
};

export interface ILike extends User {}
export interface IFriend extends User {}

export interface IComment {
  user: User;
  text: string;
  date: Date;
}

export interface IPosts {
  id: string;
  user: User;
  description: string;
  image?: string;
  date: Date;
  likes: Array<ILike>;
  comments: Array<IComment>;
}
