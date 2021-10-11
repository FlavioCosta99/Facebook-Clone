import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { Auth_ActionType } from '../../redux/ts/action-types';
import { IUser } from '../../ts/auth_interfaces';
import CenterMenu from './CenterMenu';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import './Navbar.css';

export default function Navbar() {
  const { isLoggedIn, user }: { isLoggedIn: boolean; user: IUser } =
    useSelector((state: State) => state.authReducer);

  if (isLoggedIn) {
    return (
      <nav className="bg-white shadow-lg fixed w-full navbar_main">
        <div style={{ height: '100%' }}>
          <div className="flex justify-between">
            <div className="flex space-x-7 w-full justify-center navbar">
              <LeftMenu />
              <div className="navbar_secondmenu">
                <CenterMenu />
                <RightMenu user={user} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}
