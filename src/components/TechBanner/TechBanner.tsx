import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
import styles from "./TechBanner.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiReactquery,
  SiGit,
  SiFramer,
  SiStorybook,
  SiStoryblok,
  SiJest,
  SiCypress,
  SiGoogleanalytics,
  SiContentful,
  SiFigma,
} from "react-icons/si";

const cx = classNames.bind(styles);

const icons = {
  Html: SiHtml5,
  Css: SiCss3,
  Javascript: SiJavascript,
  Typescript: SiTypescript,
  React: SiReact,
  Nextjs: SiNextdotjs,
  ReactNative: SiReactquery,
  Nodejs: SiNodedotjs,
  Npm: SiNpm,
  Git: SiGit,
  Framer: SiFramer,
  Storyblok: SiStoryblok,
  Storybook: SiStorybook,
  Jest: SiJest,
  Cypress: SiCypress,
  GoogleAnalytics: SiGoogleanalytics,
  Contentful: SiContentful,
  Figma: SiFigma,
};

const technos = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "npm",
  "Git",
  "Framer Motion",
  "Storyblok",
  "Storybook",
  "Jest",
  "Cypress",
  "Google Analytics",
  "Contentful",
  "Figma",
  "Agile",
];

const TechBanner: React.FC = () => {
  const rows = [technos, [...technos].reverse(), technos];

  return (
    <div className={cx("banner")}>
      {rows.map((row, i) => (
        <motion.div
          key={i}
          className={cx("track")}
          animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...row, ...row].map((name, index) => {
            const key = name
              .replace(/\s|\./g, "")
              .replace(/Motion$/, "")
              .replace(/js$/i, "js"); 
              const IconComponent = icons[key as keyof typeof icons] as React.ComponentType<{ className?: string }>;

            return (
              <div key={index} className={cx("item")}>
                {IconComponent ? <IconComponent className={cx("icon")} /> : <span>⚡</span>}
                <span className={cx("label")}>{name}</span>
                {index !== row.length * 2 - 1 && (
                  <span className={cx("dot")}>•</span>
                )}
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default TechBanner;
