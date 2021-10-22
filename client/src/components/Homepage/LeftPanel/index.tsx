import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../ts/auth_interfaces';
import Avatar from '../../Avatar';

const left_menu_info = [
  {
    img: 'https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png',
    name: 'Friends',
  },
  {
    img: 'https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png',
    name: 'Groups',
  },
  {
    img: 'https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png',
    name: 'Pages',
  },
  {
    img: 'https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png',
    name: 'Marketplace',
  },
  {
    img: 'https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png',
    name: 'Watch',
  },
  {
    img: 'https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png',
    name: 'Memories',
  },
];

const shortcuts = [
  {
    img: 'https://www.facebook.com/rsrc.php/v3/y2/r/zVvRrO8pOtu.png',
    name: 'Page1',
  },
];

export default function LeftPanel() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );
  return (
    <div className="left_panel mt-4 p-2">
      <ul>
        <li className="flex items-center mb-4 p-3 cursor-pointer hover:bg-gray-400 rounded-lg">
          <Avatar
            avatar={user.avatar}
            style={{ height: '40px', width: '40px' }}
          />
          <p className="text-xl ml-2"> {user.name}</p>
        </li>
        {left_menu_info.map((inf) => (
          <li className="flex items-center mb-2 p-1 cursor-pointer hover:bg-gray-400 rounded-lg">
            <img
              className="hu5pjgll bixrwtb6"
              src={inf.img}
              style={{ height: '40px', width: '40px' }}
              alt=""
            />
            <p className="text-lg ml-2"> {inf.name}</p>
          </li>
        ))}
      </ul>
      <div className="divider" />
      <ul>
        <h1 className="text-gray-100 ml-2 mb-2"> Your shortcuts </h1>
        {shortcuts.map((shrt) => (
          <li className="flex items-center mb-2 p-1 cursor-pointer hover:bg-gray-400 rounded-lg">
            <img
              className="hu5pjgll bixrwtb6"
              src={shrt.img}
              style={{ height: '40px', width: '40px' }}
              alt=""
            />
            <p className="text-lg ml-2">{shrt.name} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
