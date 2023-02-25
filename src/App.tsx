import { Qualifications } from "./components/Qualifications";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <Home />
        <About />
        <Qualifications />
      </div>
    </React.Fragment>
  );
};

export { App };
