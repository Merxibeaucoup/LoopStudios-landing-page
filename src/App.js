import React from "react";
import Header from "./components/Header";
import Interactive from "./components/Interactive";
import Showcase from "./components/Showcase";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
