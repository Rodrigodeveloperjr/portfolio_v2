import { Qualifications } from "./components/Qualifications";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import React from "react";
import { Services } from "./components/Services";
import { Knowledge } from "./components/Knowledge";
import { MyProjects } from "./components/MyProjects";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <Home />
        <About />
        <Qualifications />
        <Services />
        <Knowledge />
        <MyProjects />
      </div>
    </React.Fragment>
  );
};

export { App };
