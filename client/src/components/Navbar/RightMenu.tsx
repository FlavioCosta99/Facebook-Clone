import { IUser } from '../../ts/auth_interfaces';
import { logout } from '../../redux/actions/auth-actions';
import FormField from '../FormField';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import { CSSProperties } from 'react';

const RightMenu = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutfunc = () => {
    dispatch(logout(history));
  };
  return (
    <div
      className="fixed right-3 top-0 flex justify-center items-center rightMenu"
      style={{ height: '75px' }}
    >
      <div className="flex items-center">
        <Avatar user={user} />
        <p className="text-base mr-3"> {user.name}</p>
      </div>
      <div>
        <Dropdown
          classNameButton="p-2 bg-white bg-gray-400 rounded-md flex items-center"
          styleButton={{ borderRadius: '50%', height: '40px', width: '40px' }}
          buttonText={<div className="arrow_down" />}
          classNameDropdown="p-2 mt-2 rounded-md shadow-xl w-44 bg-white"
          styleDropdown=""
        >
          <ul>
            <li className="flex mt-2 items-center ml-2">
              <Avatar user={user} style={{ height: '40px', width: '40px' }} />
              <div>
                <p className="text-xl">{user.name}</p>
                <p className="text-xs"> See your profile </p>
              </div>
            </li>
            <div className="divider" />
            <li
              className="flex items-center cursor-pointer"
              onClick={() => logoutfunc()}
            >
              <div
                style={{ borderRadius: '50%', height: '30px', width: '30px' }}
                className="bg-gray-400 flex items-center justify-center mr-2"
              >
                <i
                  data-visualcompletion="css-img"
                  className="button_logout "
                ></i>
              </div>
              Log off
            </li>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
};

export default RightMenu;

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
