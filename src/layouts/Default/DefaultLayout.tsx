import React from "react";
import Main from "../../components/Main/Main";
import Heading from "../../components/Header/Heading";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Heading />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
