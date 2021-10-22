import React from 'react';
import { IFriend, IUser } from '../../../ts/auth_interfaces';
import Avatar from '../../Avatar';

const friends: Array<IFriend> = [
  {
    id: '1',
    name: 'José',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '2',
    name: 'José',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '3',
    name: 'José',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '4',
    name: 'José',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '5',
    name: 'José',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '5',
    name: 'a',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
  {
    id: '5',
    name: 'asd',
    avatar:
      'https://i.picsum.photos/id/378/200/200.jpg?hmac=p3D7bBkZrx1JzS7apkMa8wGrQ-IaD9aNykMbpZ0DHDU',
  },
];

export default function Contacts() {
  return (
    <div>
      <h1 className="text-lg text-gray-100 my-4"> Contacts </h1>
      {friends &&
        friends.map((friend: IFriend) => <FriendContainer friend={friend} />)}
    </div>
  );
}

const FriendContainer = ({ friend }: { friend: IFriend }) => {
  return (
    <div className="flex items-center hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
      <div className="relative">
        <Avatar
          avatar={friend.avatar}
          style={{ height: '40px', width: '40px' }}
        />
        <div
          className="absolute right-2 bottom-1 bg-green w-2 h-2 rounded-xl"
          style={{ outline: '2px solid white' }}
        />
      </div>
      <p className="ml-1"> {friend.name}</p>
    </div>
  );
};
