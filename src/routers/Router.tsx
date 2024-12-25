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
import Reservation from "../pages/Revertation/Reservation";
import Checkout from "../pages/Checkout/Checkout";
import Congratulation from "../pages/Congratulations/Congratulation";

type TypeLayout = { type: "DEFAULT" } | { type: "AUTH" } | undefined;
export interface Router {
  name: string;
  element: ReactNode;
  path: string;
  layout?: TypeLayout;
  status: boolean;
}

export const routers: Router[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    layout: { type: "DEFAULT" },
    status: true,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    layout: { type: "DEFAULT" },
    status: true,
  },
  {
    name: "Menu",
    path: "/menu",
    element: <Menu />,
    layout: { type: "DEFAULT" },
    status: true,
  },
  {
    name: "Order Online",
    path: "/order_online",
    element: <OrderOnline />,
    layout: { type: "DEFAULT" },
    status: true,
  },
  {
    name: "Reservation",
    path: "/reservation",
    element: <Reservation />,
    layout: { type: "DEFAULT" },
    status: true,
  },
  {
    name: "Checkout",
    path: "/checkout/:invoiceDetailId",
    element: <Checkout />,
    layout: { type: "DEFAULT" },
    status: false,
  },
  {
    name: "Congratulations",
    path: "/congratulations",
    element: <Congratulation />,
    layout: { type: "DEFAULT" },
    status: false,
  },
  {
    name: "Sign-In",
    path: "/signIn",
    element: <SignIn />,
    layout: { type: "AUTH" },
    status: true,
  },
  {
    name: "Sign-Up",
    path: "/signUp",
    element: <SignUp />,
    layout: { type: "AUTH" },
    status: true,
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
