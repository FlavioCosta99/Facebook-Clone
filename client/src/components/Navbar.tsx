import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State } from '../redux/reducers';
import { Auth_ActionType } from '../redux/ts/action-types';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: State) => state.authReducer.isLoggedIn
  );
  const history = useHistory();
  const logout = () => {
    dispatch({ type: Auth_ActionType.LOGOUT });
    history.push('/signin');
  };
  if (isLoggedIn) {
    return (
      <nav className="bg-gray">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-4 "
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
}
