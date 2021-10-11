import HomeSvg from '../../utils/Home';
import FriendsSVG from '../../utils/Friends';
import WatchSVG from '../../utils/Watch';
import GroupsSVG from '../../utils/Groups';
import GamingSVG from '../../utils/Gaming';
import { NavLink } from 'react-router-dom';

const CenterMenu = () => {
  return (
    <div className="flex items-center centerMenu">
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

export default CenterMenu;
