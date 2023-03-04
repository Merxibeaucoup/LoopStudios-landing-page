import React from "react";
import { creationItems_mobile } from "../data/creationItems";
import CreationsList from "./CreationsList";

const Creations = () => {
  return (
    <>
      <section className="creations">
        <h2 className="creations__header">Our creations</h2>

        <div className="creations__list">
          {creationItems_mobile.map((item) => {
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
