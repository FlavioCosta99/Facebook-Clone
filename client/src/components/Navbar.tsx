import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State } from '../redux/reducers';
import { Auth_ActionType } from '../redux/ts/action-types';
import { logout } from '../redux/actions/auth-actions';
import FormField from './FormField';
import HomeSvg from '../utils/Home';
import FriendsSVG from '../utils/Friends';
import WatchSVG from '../utils/Watch';
import GroupsSVG from '../utils/Groups';
import GamingSVG from '../utils/Gaming';

export default function Navbar() {
  const { isLoggedIn }: any = useSelector((state: State) => state.authReducer);

  if (isLoggedIn) {
    return (
      <nav
        className="bg-white shadow-lg fixed w-full"
        style={{ height: '115px' }}
      >
        <div className="p-3" style={{ height: '100%' }}>
          <div className="flex justify-between">
            <div className="flex space-x-7 w-full justify-center">
              <LeftMenu />
              <CenterMenu />
              <RightMenu />
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}

const LeftMenu = () => {
  return (
    <div
      className="fixed left-3 top-0 flex items-center"
      style={{ height: '115px' }}
    >
      <img
        src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
        alt="facebook logo"
        style={{ height: '50px' }}
      />
      <label className="search_box flex p-2 rounded-lg ml-2">
        <div className="mr-2 flex items-center">
          <i data-visualcompletion="css-img" className="search_box"></i>{' '}
        </div>
        <input
          name="search"
          type="text"
          required={true}
          placeholder="Facebook search"
          value={''}
          onChange={() => {}}
        />
      </label>
    </div>
  );
};

const RightMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutfunc = () => {
    dispatch(logout(history));
  };
  return (
    <div
      className="fixed right-3 top-0 flex justify-center items-center"
      style={{ height: '115px' }}
    >
      <button
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-4 "
        onClick={() => logoutfunc()}
      >
        Logout
      </button>
    </div>
  );
};

const CenterMenu = () => {
  return (
    <div className="hidden md:flex items-center">
      <NavLink
        exact
        to="/"
        activeClassName="navbar_link--active"
        className="navbar_link py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
        style={{ margin: '5px' }}
        aria-current="page"
      >
        <span>
          <HomeSvg
            style={{
              height: '28px',
              width: '28px',
            }}
          />
        </span>
      </NavLink>
      <NavLink
        to="/friends"
        activeClassName="navbar_link--active"
        className="navbar_link py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
        style={{ margin: '5px' }}
        aria-current="page"
      >
        <span>
          <FriendsSVG style={{ height: '28px', width: '28px' }} />
        </span>
      </NavLink>

      <NavLink
        to="/watch"
        activeClassName="navbar_link--active"
        className="navbar_link py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
        style={{ margin: '5px' }}
        aria-current="page"
      >
        <span>
          <WatchSVG style={{ height: '28px', width: '28px' }} />
        </span>
      </NavLink>
      <NavLink
        to="/groups"
        activeClassName="navbar_link--active"
        className="navbar_link py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
        style={{ margin: '5px' }}
        aria-current="page"
      >
        <span>
          <GroupsSVG style={{ height: '28px', width: '28px' }} />
        </span>
      </NavLink>
      <NavLink
        to="/gaming"
        activeClassName="navbar_link--active"
        className="navbar_link py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
        style={{ margin: '5px' }}
        aria-current="page"
      >
        <span>
          <GamingSVG style={{ height: '28px', width: '28px' }} />
        </span>
      </NavLink>
    </div>
  );
};
