import { Qualifications } from "../../components/Qualifications";
import { MyProjects } from "../../components/MyProjects";
import { Knowledge } from "../../components/Knowledge";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { About } from "../../components/About";
import { Home } from "../../components/Home";
import { Container } from "./style";
import React from "react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Home />
        <About />
        <Qualifications />
        <Services />
        <Knowledge />
        <MyProjects />
        <Contact />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export { Dashboard };
