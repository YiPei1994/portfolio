import React, { useEffect, useState } from 'react';
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

function NavList({ setOpenNav, openNav }) {
  return (
    <ul className="my-2 flex flex-col items-center gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/"
          className="flex items-center text-sky-300 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
          onClick={() => setOpenNav(!openNav)}
        >
          <HiMiniHome className="mr-3 text-2xl" />
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/about"
          className="flex items-center  text-sky-300 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
          onClick={() => setOpenNav(!openNav)}
        >
          <HiMiniUser className="mr-3 text-2xl" />
          About
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/hobbies"
          className="flex items-center text-sky-300  transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
          onClick={() => setOpenNav(!openNav)}
        >
          <HiHashtag className="mr-3 text-2xl" />
          Hobbies
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <NavLink
          to="/contact"
          className="flex items-center text-sky-300  transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
          onClick={() => setOpenNav(!openNav)}
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
  const [isScrolled, setIsScrolled] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 768 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`text-blue-gray-900 navbar fixed top-0  mx-auto overflow-hidden rounded-none border-none bg-slate-900  px-6 py-3 ${
        isScrolled ? 'xl:bg-slate-900/75' : 'xl:bg-inherit'
      }`}
    >
      <div className="m-auto flex max-w-screen-xl  items-center justify-between text-sky-300">
        <Link to="/" className="flex items-center">
          <h6 className="ml-5 text-4xl italic ">YP.</h6>
        </Link>

        <div className="hidden md:block">
          <div className=" md:mb-0 md:mt-0 md:flex md:items-center md:gap-6">
            <NavLink
              to="/"
              className="flex items-center text-sky-300 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
            >
              <HiMiniHome className="mr-3 text-2xl" />
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="flex items-center  text-sky-300 transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
            >
              <HiMiniUser className="mr-3 text-2xl" />
              About
            </NavLink>

            <NavLink
              to="/hobbies"
              className="flex items-center text-sky-300  transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
            >
              <HiHashtag className="mr-3 text-2xl" />
              Hobbies
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center text-sky-300  transition-colors hover:text-yellow-500 aria-[current=page]:text-yellow-500"
            >
              <HiPhone className="mr-3 text-2xl" />
              Contact
            </NavLink>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit text-sky-300 hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
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
        <NavList setOpenNav={setOpenNav} openNav={openNav} />
      </Collapse>
    </Navbar>
  );
}
