import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainNav from './MainNav';

function Applayouts() {
  return (
    <div>
      <Header />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayouts;
