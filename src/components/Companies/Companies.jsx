import React from "react";
import "./companies.css";
const Compaines = () => {
  return (
    <section className="c-wrapper" style={{ background: "white" }}>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="skyline.png" alt="img" />
        <img src="asset.jpeg" alt="img" />

        <img
          src="radison.jpeg"
          alt="img"
          style={{ border: "2px solid black" }}
        />
        <img src="Sobha-reserve-1.png" alt="" />
      </div>
    </section>
  );
};

export default Compaines;
