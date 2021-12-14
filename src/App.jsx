import React, { useState } from "react";
import "./sass/main.scss";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Sidebar from "./components/Sidebar/sidebar";

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
    </>
  );
}

export default App;
