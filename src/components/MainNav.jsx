import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
import { HiHashtag } from 'react-icons/hi2';
import { HiMiniMusicalNote } from 'react-icons/hi2';
import { HiMiniPhoneArrowDownLeft } from 'react-icons/hi2';

function MainNav({ display }) {
  const activeStyles = 'text-yellow-500 mx-4 my-2 flex  items-center text-2xl';
  const passiveStyles =
    'mx-4 my-2 flex  items-center text-xl border-b-4 border-transparent duration-500  hover:border-yellow-500 hover:transition-all';
  return (
    <nav>
      <ul
        className={`${
          display
            ? ' pointer-events-auto h-60 '
            : ' md:opacity-1 pointer-events-none h-0 md:h-60'
        } 	 flex w-full flex-col items-center justify-center text-slate-900 transition-all duration-500`}
      >
        <li className={`${display ? 'flex' : 'hidden'}`}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyles : passiveStyles
            }
            to="/"
          >
            <HiHome className="mr-4" />
            <span>Home</span>
          </NavLink>
        </li>
        <li className={`${display ? 'flex' : 'hidden'}`}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyles : passiveStyles
            }
          >
            <HiHashtag className="mr-4" />
            <span>About</span>
          </NavLink>
        </li>

        <li className={`${display ? 'flex' : 'hidden'}`}>
          <NavLink
            to="/hobbies"
            className={({ isActive }) =>
              isActive ? activeStyles : passiveStyles
            }
          >
            <HiMiniMusicalNote className="mr-4" />
            <span>Hobbies</span>
          </NavLink>
        </li>
        <li className={`${display ? 'flex' : 'hidden'}`}>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyles : passiveStyles
            }
          >
            <HiMiniPhoneArrowDownLeft className="mr-4" />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
