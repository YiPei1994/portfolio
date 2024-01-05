import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import MainNav from './MainNav';

function Applayouts() {
  return (
    <div className="flex h-screen w-full flex-col  text-center ">
      <MainNav />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayouts;
