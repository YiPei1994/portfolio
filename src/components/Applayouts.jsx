import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Applayouts() {
  return (
    <div className="flex h-screen w-full flex-col  text-center">
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayouts;
