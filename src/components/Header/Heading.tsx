import React, { useEffect, useRef } from "react";
import Nav from "../Navigation/Nav";
import styles from "./scss/Heading.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Heading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    let prevScrollHeigth = window.scrollY;

    const handleScroll = () => {
      const currentScrollHeight = window.scrollY;

      if (!headingRef.current) {
        return;
      }

      if (prevScrollHeigth > currentScrollHeight) {
        headingRef.current.style.transform = "translateY(0)";
      } else {
        headingRef.current.style.transform = "translateY(-200px)";
        headingRef.current.style.boxShadow =
          "rgba(149, 157, 165, 0.2) 0px 8px 24px";
      }

      if (currentScrollHeight === 0) {
        headingRef.current.style.boxShadow = "unset";
      }

      prevScrollHeigth = currentScrollHeight;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cx("heading_container")} ref={headingRef}>
      <Nav />
    </header>
  );
};

export default Heading;
