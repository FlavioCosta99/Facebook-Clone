import React from 'react';
import { IUser } from '../../../ts/auth_interfaces';
import Avatar from '../../Avatar';

export default function Rooms() {
  const friends_list: Array<IUser> = [
    {
      id: '1',
      email: 'asd@asd.com',
      name: 'User1',
      createdAt: new Date(),
      updatedAt: new Date(),
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/54e7d4424f53b10ff3d8992cc12c30771037dbf85254784d712f7edc9e4f_640.jpg',
    },
    {
      id: '2',
      email: 'asd@asd.com',
      name: 'User2',
      createdAt: new Date(),
      updatedAt: new Date(),
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/woman-s-face-3400813.jpg',
    },
    {
      id: '3',
      email: 'asd@asd.com',
      name: 'User3',
      createdAt: new Date(),
      updatedAt: new Date(),
      avatar: '',
    },
  ];
  return (
    <div className="w-full bg-white rounded-md shadow-lg flex mt-5 p-4">
      {' '}
      <button className="text-blue-500 border-2 rounded-xl border-blue-500 border-opacity-20 px-2 py-1 flex items-center">
        <i
          data-visualcompletion="css-img"
          className="create_room_icon mr-2"
        ></i>
        Create room
      </button>
      <div className="flex ml-3">
        {friends_list.map((friend) => (
          <Avatar
            avatar={friend.avatar}
            style={{ height: '40px', width: '40px' }}
          />
        ))}
      </div>
    </div>
  );
}
