"use client";

import classNames from "classnames/bind";
import React from "react";
import styles from "./Head.module.scss";
import { Nav } from "../Nav/Nav";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import Logo from "../../Logo/Logo";
import { useBelowLaptop } from "../../../hooks/useMediaQuery";

const cx = classNames.bind(styles);

export const Head = () => {
  const isMobile = useBelowLaptop();
  return (
    <header className={cx("header")}>
      <Logo src="/images/bhash_logo.png" />
      <div className={cx("header__content")}>
        {isMobile && <ThemeToggle />}
        <Nav />
      </div>
    </header>
  );
};
