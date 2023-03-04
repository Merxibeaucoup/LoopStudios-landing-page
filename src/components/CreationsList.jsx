import React from "react";

const CreationsList = ({ item }) => {
  return (
    <article>
      <div className="creations__list__box-img">
        <img src={item.img} alt="img for creations" />
      </div>
      <h3>{item.description}</h3>
    </article>
  );
};

export default CreationsList;
