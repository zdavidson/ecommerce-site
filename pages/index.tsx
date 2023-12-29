import type { NextPage } from "next";
import Nav from "../components/Nav";
import { Container } from "@mui/material";
import Hero from "../components/Hero";
import CategoryCardContainer from "../components/CategoryCardContainer";
import ZX9Speaker from "../components/home/ZX9Speaker";
import ZX7Speaker from "../components/home/ZX7Speaker";
import YX1Earphones from "../components/home/YX1Earphones";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
          height: "100vh",
          backgroundSize: "100%",
          color: "white",
        }}
      >
        <Container>
          <Nav />
          <hr></hr>
          <Hero />
        </Container>
      </div>
      <CategoryCardContainer />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
