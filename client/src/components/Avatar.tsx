import { CSSProperties } from 'react';
import { IUser } from '../ts/auth_interfaces';

const Avatar = ({ user, style }: { user: IUser; style?: CSSProperties }) => {
  return (
    <>
      {user.avatar ? (
        <img
          className="navbar_avatar"
          style={style}
          alt="avatar"
          src={user.avatar}
        />
      ) : (
        <img
          className="navbar_avatar shadow"
          style={style}
          alt="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
        />
      )}
    </>
  );
};

export default Avatar;
