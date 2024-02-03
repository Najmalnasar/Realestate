import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings inneridth flexCenter f-container">
        <div className="flexColStart f-left">
          <img
            src="icon1.jpg"
            alt="img"
            width={120}
            style={{ borderRadius: "10px" }}
          />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">India, Kerela, pin : 622312</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
