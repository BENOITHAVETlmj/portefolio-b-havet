import React, { useRef } from "react";
import Skill from "./Skill/Skill";
import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const cx = classNames.bind(styles);

const skills = [
  {
    tags: ["SPA", "Mobile App", "PWA", "Performance", 'Tracking', 'Testing'],
    backgroundColor: "#00C9A7",
    dynamicColor: "#FFFFFF",
  },
  {
    tags: [
      "UI/UX Design",
      "User Experience",
      "Design Collaboration",
      "Micro-Interactions",
      "Prototyping",
      "Motion Design"
    ],
    backgroundColor: "#B3B3B3",
    dynamicColor: "#000000",
  },
  {
    tags: [
      "Headless CMS",
      "API Integration",
      "Data management",
      "Scalability",
      "Automation",
      "Continuous Deployment",
      "Architecture",
    ],
    backgroundColor: "#FF6B6B",
    dynamicColor: "#FFFFFF",
  },
];

const Skills = () => {
  const t = useTranslations("Skills");

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const inputRange = skills.map((_, i) => i / (skills.length - 1));
  const outputRange = skills.map((s) => s.backgroundColor);
  const outputColor = skills.map((s) => s.dynamicColor);

  const background = useTransform(scrollYProgress, inputRange, outputRange);
  const colorMV = useTransform(scrollYProgress, inputRange, outputColor);

  const [dynamicColor, setDynamicColor] = React.useState(outputColor[0]);
  React.useEffect(() => {
    const unsubscribe = colorMV.on("change", (v) => setDynamicColor(v));
    return unsubscribe;
  }, [colorMV]);

  return (
    <motion.section
      className={cx("skills")}
      ref={containerRef}
      style={{
        background,
        minHeight: "100vh",
        padding: "4rem 2rem",
      }}
      id="skills"
    >
      <ul>
        {skills.map((skill, i) => (
          <Skill
            key={i}
            {...skill}
            dynamicColor={dynamicColor}
            title={t(`${i}.title`)}
            description={[
              t(`${i}.description1`),
              t(`${i}.description2`),
              t(`${i}.description3`),
            ]}
          />
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
