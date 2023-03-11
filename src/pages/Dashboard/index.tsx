import { Qualifications } from "../../components/Qualifications";
import { MyProjects } from "../../components/MyProjects";
import { Knowledge } from "../../components/Knowledge";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { About } from "../../components/About";
import { Home } from "../../components/Home";
import React, { useState } from "react";
import { Container } from "./style";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  setTimeout(() => setIsVisible(false), 2500);

  return isVisible ? (
    <Loading />
  ) : (
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
