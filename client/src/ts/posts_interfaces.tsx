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
  createdAt: Date;
  updatedAt: Date;
}

export interface IPosts {
  _id: string;
  user: User;
  description: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  likes: Array<ILike>;
  comments: Array<IComment>;
}
