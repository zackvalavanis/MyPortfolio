import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "../pages/Header/Header.tsx";
import { Footer } from "../pages/Footer/Footer.tsx";
import { Main } from "../pages/Main/Main.tsx";
import { AboutMe } from "../pages/AboutMe/AboutMe.tsx";

export const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/about-me',
        element: <AboutMe />
      }
    ]
  }
])