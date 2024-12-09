import { ReactNode } from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import OrderOnline from "../pages/OrderOnline/OrderOnline";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import DefaultLayout from "../layouts/Default/DefaultLayout";
import { Outlet } from "react-router-dom";
import AuthenLayout from "../layouts/Auth/AuthenLayout";
type TypeLayout = { type: "DEFAULT" } | { type: "AUTH" } | undefined;
export interface Router {
  name: string;
  element: ReactNode;
  path: string;
  layout?: TypeLayout;
}

export const routers: Router[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    layout: { type: "DEFAULT" },
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    layout: { type: "DEFAULT" },
  },
  {
    name: "Menu",
    path: "/menu",
    element: <Menu />,
    layout: { type: "DEFAULT" },
  },
  {
    name: "Order Online",
    path: "/order_online",
    element: <OrderOnline />,
    layout: { type: "DEFAULT" },
  },
  {
    name: "Sign-In",
    path: "/signIn",
    element: <SignIn />,
    layout: { type: "AUTH" },
  },
  {
    name: "Sign-Up",
    path: "/signUp",
    element: <SignUp />,
    layout: { type: "AUTH" },
  },
];

export const Layout = ({ type }: { type?: TypeLayout }) => {
  switch (type?.type) {
    case "DEFAULT":
      return <DefaultLayout />;
    case "AUTH":
      return <AuthenLayout />;
    default:
      return (
        <>
          <Outlet />
        </>
      );
  }
};
