"use client";

import React from "react";
import { Hero } from "../../sections/Hero/Hero";
import { Head } from "../../layouts/Head/Head";
import Skills from "../../sections/Skills/Skills";
import TechBanner from "../../TechBanner/TechBanner";
import CvOverlay from "../../CVOverlay/CvOverlay";

const HomeTemplate = () => {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <CvOverlay />
        <TechBanner />
        <Skills />
      </main>
    </>
  );
};

export default HomeTemplate;
