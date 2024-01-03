import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayouts from './components/Applayouts';
import Error from './pages/Errors';
import Home from './pages/Home';
import About from './pages/About';

import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    element: <Applayouts />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/hobbies',
        element: <Hobbies />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
