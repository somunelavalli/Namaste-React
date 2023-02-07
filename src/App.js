import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

// const heading = React.createElement("h1",{},"Namaste Everyone!")
// const heading1 = React.createElement("h2", {}, "Hello World 🙏")
// const container = React.createElement("div", {id: "container"}, [heading,heading1])

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: 'restaurant/:restId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);
root.render(<RouterProvider router={appRouter} />);
