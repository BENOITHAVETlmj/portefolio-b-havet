import React from "react";
import styles from "./AnimatedThumbnails.module.scss";
import classNames from "classnames/bind";
import { useParams } from "next/navigation";
import Link from "next/link";
import Cards from "../Cards/Cards";

const cx = classNames.bind(styles);

type AnimatedThumbnailsProps = {
  cards: {
    imageUrlPortrait?: string;
    imageUrlLandscape?: string;
    title?: string;
    description?: string;
    hasRadiusBorder?: boolean;
    hoverText?: string;
    hoverLink?: string;
    size?: string;
    marginTop?: string;
    marginBottom?: string;
    slug: string;
  }[];
};

export const AnimatedThumbnails: React.FC<AnimatedThumbnailsProps> = ({
  cards,
}) => {
  const isOdd = cards.length % 2 !== 0;
  const { locale } = useParams();

  return (
    <section className={cx("animated-thumbnails")} id="projects">
      <div
        className={cx("animated-thumbnails__grid", {
          "odd-number": isOdd,
        })}
      >
        {cards.map((card, index) => (
          <div key={index}>
            <Cards
              {...card}
              key={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
