import React, { useState } from "react";
import "./sass/main.scss";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Sidebar from "./components/Sidebar/sidebar";
import Contact from "./components/Contact/contact";
import Services from "./components/Services/Services";
import About from "./components/About/aboutUs";
import Wavey from "./shared/Wavey/wavey";


function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  const show = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header isOpen={show} />
      <Sidebar toggle={sidebarIsOpen} isOpen={show} />
      <Hero />
      <Wavey />
      <Services />
      <Wavey reverseWavey={true} />
      <About />
      <Contact />
    </>
  );
}

export default App;
