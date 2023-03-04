import React, { useState } from "react";

const Showcase = () => {
  const [state] = useState({
    text: "Immersive experiences that deliver",
  });

  /** Style */
  const showcaseStyles = {
    background: "url(/images/mobile/image-hero.jpg)",
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70rem",
  };

  return (
    <>
      <section className="showcase" style={showcaseStyles}>
        <div className="showcase__overlay">
          <h1>{state.text}</h1>
        </div>
      </section>
    </>
  );
};

export default Showcase;
