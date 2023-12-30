import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import Home from ".";
import CategoryCardContainer from "../components/CategoryCardContainer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import YX1Earphones from "../components/home/YX1Earphones";
import ZX7Speaker from "../components/home/ZX7Speaker";
import ZX9Speaker from "../components/home/ZX9Speaker";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import CategoryPageHeader from "../components/shared/CategoryPageHeader";

const Headphones: NextPage = () => {
  return (
    <div>
      <Nav />
      <CategoryPageHeader category="headphones" />
      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Headphones;
