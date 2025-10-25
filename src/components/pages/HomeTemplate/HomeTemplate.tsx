"use client";

import React from "react";
import { Hero } from "../../sections/Hero/Hero";
import { Head } from "../../layouts/Head/Head";
import Skills from "../../sections/Skills/Skills";
import TechBanner from "../../TechBanner/TechBanner";
import CvOverlay from "../../CVOverlay/CvOverlay";
import { AnimatedThumbnails } from "../../AnimatedThumbnails/AnimatedThumbnails";
import { payload } from "../../Cards/Cards";
import Contacts from "../../Contacts/Contacts";

const HomeTemplate = () => {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <CvOverlay />
        <TechBanner />
        <Skills />
        <AnimatedThumbnails cards={payload?.cards}/>
        <Contacts />
      </main>
    </>
  );
};

export default HomeTemplate;
