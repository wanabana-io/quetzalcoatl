import React, { useState } from "react";
import "./sass/main.scss";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Sidebar from "./components/Sidebar/sidebar";
import Contact from "./components/Contact/contact";
import Services from "./components/Services/Services";
import About from "./components/About/aboutUs";
import Footer from "./components/Footer/footer";

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
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
