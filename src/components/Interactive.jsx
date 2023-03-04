import React, { useState } from "react";

const Interactive = () => {
  const [state] = useState({
    img: "/images/mobile/image-interactive.jpg",
    heading: "The leader in interactive VR",
    description:
      " Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.",
  });

  return (
    <>
      <section className="interactive">
        <div className="interactive__img">
          <img src={state.img} alt={state.img} />
        </div>
        <div className="interactive__content">
          <h2 className="interactive__content-heading">{state.heading}</h2>
          <p className="interactive__content-paragraph">{state.description}</p>
        </div>
      </section>
    </>
  );
};

export default Interactive;
