import React, { useEffect, useState } from "react";
import { creationItems_mobile } from "../data/creationItems";
import { creationItems_desktop } from "../data/creationItems";
import CreationsList from "./CreationsList";

const Creations = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 992);

  const updateScreen = () => {
    setDesktop(window.innerWidth < 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <>
      <section className="creations">
        <h2 className="creations__header">Our creations</h2>

        <div className="creations__list">
          {/* if screen size < 992 show mobile images + data  , else show desktop images + data */}
          {isDesktop
            ? creationItems_mobile.map((item) => {
                return <CreationsList item={item} key={item.id} />;
              })
            : creationItems_desktop.map((item) => {
                return <CreationsList item={item} key={item.id} />;
              })}
        </div>
        <div className="creations__button">
          <button className="btn">see all</button>
        </div>
      </section>
    </>
  );
};

export default Creations;
