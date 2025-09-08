"use client";

import React from "react";
import { Hero } from "../../sections/Hero/Hero";
import { Head } from "@/components/layouts/Head/Head";
import Skills from "@/components/sections/Skills/Skills";

const HomeTemplate = () => {
  return (
    <>
      <Head />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default HomeTemplate;
