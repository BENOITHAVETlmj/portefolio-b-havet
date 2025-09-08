"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import classNames from "classnames/bind";
import styles from "./Contacts.module.scss";

const cx = classNames.bind(styles);

export const Contacts = () => {
  return (
    <div className={cx("contacts")}>
      <a
        href="https://github.com/BENOITHAVETlmj"
        target="_blank"
        rel="noopener noreferrer"
        className={cx("contacts__item")}
      >
        <Github size={18} />
        <span>Github</span>
      </a>

      <a
        href="https://www.linkedin.com/in/beno%C3%AEt-havet-708752154/"
        target="_blank"
        rel="noopener noreferrer"
        className={cx("contacts__item")}
      >
        <Linkedin size={18} />
        <span>LinkedIn</span>
      </a>

      <a href="mailto:benlmj84@gmail.com" className={cx("contacts__item")}>
        <Mail size={18} />
        <span>Email</span>
      </a>
    </div>
  );
};
