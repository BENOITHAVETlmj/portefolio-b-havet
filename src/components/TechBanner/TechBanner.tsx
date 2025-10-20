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
import { Orientation, useOrientation } from "@/src/hooks/useOrientation";

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
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "React Native", url: "https://reactnative.dev/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "npm", url: "https://www.npmjs.com/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "Storyblok", url: "https://www.storyblok.com/" },
  { name: "Storybook", url: "https://storybook.js.org/" },
  { name: "Jest", url: "https://jestjs.io/" },
  { name: "Cypress", url: "https://www.cypress.io/" },
  { name: "Google Analytics", url: "https://analytics.google.com/" },
  { name: "Contentful", url: "https://www.contentful.com/" },
  { name: "Figma", url: "https://www.figma.com/" },
  { name: "Agile", url: "https://www.agilealliance.org/agile101/" },
];

const TechBanner: React.FC = () => {
  const rows = [technos, [...technos].reverse(), technos];
  const orientation = useOrientation();
  const isPortrait = orientation === Orientation.Portrait;
  
  return (
    <div className={cx("banner", {'banner__full-height': !isPortrait})}>
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
          {[...row, ...row].map((tech, index) => {
            const key = tech.name
              .replace(/\s|\./g, "")
              .replace(/Motion$/, "")
              .replace(/js$/i, "js"); 
              const IconComponent = icons[key as keyof typeof icons] as React.ComponentType<{ className?: string }>;

            return (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cx("item")}
              >
                {IconComponent ? <IconComponent className={cx("icon")} /> : <span>⚡</span>}
                <span className={cx("label")}>{tech.name}</span>
                {index !== row.length * 2 - 1 && (
                  <span className={cx("dot")}>•</span>
                )}
              </a>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default TechBanner;
