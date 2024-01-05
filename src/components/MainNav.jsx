import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { HiMiniUser } from 'react-icons/hi2';
import { HiHashtag } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { HiMiniHome } from 'react-icons/hi2';

function NavList() {
  return (
    <ul className="my-2 flex flex-col items-center gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/"
          className="flex items-center text-slate-900 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
        >
          <HiMiniHome className="mr-3 text-2xl" />
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/about"
          className="flex items-center text-slate-900 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
        >
          <HiMiniUser className="mr-3 text-2xl" />
          About
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/hobbies"
          className="flex items-center  text-slate-900 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
        >
          <HiHashtag className="mr-3 text-2xl" />
          Hobbies
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/contact"
          className="flex items-center  text-slate-900 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
        >
          <HiPhone className="mr-3 text-2xl" />
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
}

export default function MainNav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 768 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="text-blue-gray-900 fixed top-0 mx-auto  overflow-hidden rounded-none bg-slate-100 px-6 py-3">
      <div className="m-auto flex max-w-screen-xl  items-center justify-between">
        <Typography variant="h6" className="mr-4  cursor-pointer   py-1.5">
          <Link to="/" className="flex items-center">
            <img className="h-10" src="../src/assets/logo.png" alt="logo" />
            <h6 className="ml-5 text-slate-900">Ynnovation & Performance</h6>
          </Link>
        </Typography>
        <div className="hidden md:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit text-slate-900 hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
