import { useState } from 'react';
import MainNav from './MainNav';
import { HiBars3 } from 'react-icons/hi2';
import { HiMiniXMark } from 'react-icons/hi2';

function Header() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="t-0 fixed flex	w-full flex-wrap items-center justify-between bg-slate-100 px-10 py-3">
      <div className="flex items-center">
        <img className="h-10" src="../src/assets/logo.png" alt="logo" />
        <h6 className="ml-5 text-slate-900">Ynnovation & Performance</h6>
      </div>
      <button onClick={() => setDisplay((d) => !d)}>
        {!display ? (
          <HiBars3 className="text-3xl text-slate-900" />
        ) : (
          <HiMiniXMark className="text-3xl text-slate-900" />
        )}
      </button>
      <MainNav display={display} />
    </div>
  );
}

export default Header;
