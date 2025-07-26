import React, { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "../pages/Header/Header.tsx";
import { Footer } from "../pages/Footer/Footer.tsx";
import { Main } from "../pages/Main/Main.tsx";
import { AboutMe } from "../pages/AboutMe/AboutMe.tsx";


const DefaultLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

const MinimalLayout = () => (
  <>
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
    ]
  },
  {
    element: <MinimalLayout />,
    children: [
      {
        path: '/about-me',
        element: <AboutMe />
      }
    ]
  }
])