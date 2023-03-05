import React, { useState } from "react";

const Showcase = () => {
  const [state] = useState({
    text: "Immersive experiences that deliver",
  });

  return (
    <>
      <section className="showcase">
        <div className="showcase__overlay">
          <h1>{state.text}</h1>
        </div>
      </section>
    </>
  );
};

export default Showcase;
