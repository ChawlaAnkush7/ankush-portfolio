import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MyTechStack from "./components/MyTechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#191919]"> */}
      <Header />
      <AboutMe />
      <MyTechStack />
      <Projects />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default App;
