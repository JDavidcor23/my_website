import { useState } from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Proyects } from "./components/Form/Proyects";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
