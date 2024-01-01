import { NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
import { HiHashtag } from 'react-icons/hi2';
import { HiMiniPuzzlePiece } from 'react-icons/hi2';
import { HiMiniMusicalNote } from 'react-icons/hi2';
import { HiMiniPhoneArrowDownLeft } from 'react-icons/hi2';

function MainNav() {
  return (
    <nav className=" navbar fixed inset-y-1/3 right-0 h-auto ">
      <ul className="rounded-s-lg  bg-slate-500/25 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block rounded-tl-lg	border-b border-yellow-300 bg-slate-900 p-4'
                : 'block	rounded-tl-lg border-b  	border-transparent p-4 hover:border-b	hover:border-yellow-300 hover:bg-slate-900'
            }
          >
            <HiHome />
          </NavLink>
        </li>
        <li className="border-b  border-transparent p-4 hover:border-b hover:border-yellow-300 hover:bg-slate-900">
          <NavLink to="/about">
            <HiHashtag />
          </NavLink>
        </li>
        <li className="border-b  border-transparent p-4 hover:border-b hover:border-yellow-300 hover:bg-slate-900">
          <NavLink to="/skills">
            <HiMiniPuzzlePiece />
          </NavLink>
        </li>
        <li className="border-b  border-transparent p-4 hover:border-b hover:border-yellow-300 hover:bg-slate-900">
          <NavLink to="/hobbies" className="">
            <HiMiniMusicalNote />
          </NavLink>
        </li>
        <li className="rounded-bl-lg border-t  border-transparent p-4 hover:border-t hover:border-yellow-300 hover:bg-slate-900">
          <NavLink to="/contact">
            <HiMiniPhoneArrowDownLeft />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
