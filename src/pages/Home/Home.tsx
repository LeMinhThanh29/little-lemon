import React from "react";
import Hero from "../../components/Section/Hero/Hero";
import classNames from "classnames/bind";
import styles from "./scss/Home.module.scss";
import Highlights from "../../components/Section/Highlights/Highlights";
import Testimonials from "../../components/Section/Testimonials/Testimonials";
import About from "../../components/Section/About/About";
const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("home_container")}>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
