"use client";

import React from "react";
import { Hero } from "../../sections/Hero/Hero";
import { Head } from "../../layouts/Head/Head";
import Skills from "../../sections/Skills/Skills";
import TechBanner from "../../TechBanner/TechBanner";

const HomeTemplate = () => {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <TechBanner />
        <Skills />
      </main>
    </>
  );
};

export default HomeTemplate;
