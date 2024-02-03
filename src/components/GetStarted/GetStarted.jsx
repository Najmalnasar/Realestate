import React from "react";
import "./getstarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" style={{ backgroundColor: "white" }}>
      <div className="paddings innerwidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Us</span>
          <span className="SecondaryText">
            Subscribe and find super attractive price from us
            <br />
            find your residence soon
          </span>
          <button className="button">
            <a href="">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
