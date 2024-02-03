import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="div padding innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 6, type: "spring" }}
            >
              Empowering <br></br> Your Real Estate
              <br />
              Goals
            </motion.h1>
          </div>

          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you Search
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input className="input-text" type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  style={{ fontWeight: 700 }}
                  start={8200}
                  end={9120}
                  duration={5}
                />
                <span style={{ color: "blue" }}> +</span>
              </span>
              <span className="secondaryText">Premiun Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp
                  style={{ fontWeight: 700 }}
                  start={800}
                  end={1400}
                  duration={4}
                />
                <span style={{ color: "blue" }}> +</span>
              </span>
              <span className="secondaryText">Happy customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp style={{ fontWeight: 700 }} end={23} />
                <span style={{ color: "blue" }}> +</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 6, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
