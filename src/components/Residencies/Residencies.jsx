import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import SliderButton from "../Slider btn/SliderButton";

const Residencies = () => {
  return (
    <section className="r-wrapper" style={{ backgroundColor: "white" }}>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="blueText">Best Choices</span>
          <span className="primaryText">Popular Recidencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img
                  src={card.image}
                  alt="img"
                  style={{
                    borderRadius: "8px",
                    height: "180px",
                  }}
                />

                <span className="SecondaryText r-price">
                  <span style={{ color: "blue" }}>Rs </span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="SecondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
