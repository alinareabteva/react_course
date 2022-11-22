import React, { Fragment } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Posts from './components/posts/posts'
import Post from './components/post/post'
import Home from './components/home/home'
import Contacts from './components/contacts/contacts'
import Error from './components/error/error'

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        exact: true,
        element: <Home />,
      },
      {
        path: '/posts/',
        exact: true,
        element: <Posts />,
      },
      {
        path: '/posts/:postId',
        element: <Post />
      },
      {
        path: '/contacts/',
        exact: true,
        element: <Contacts />,
      },
    ]
  },
]);


const LessonRouterComponent = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default LessonRouterComponent;
