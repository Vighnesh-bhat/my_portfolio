import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Replace with your desired image and alt text.
 */
import image from "../images/computer-8779036_1280 copy.jpg";

const imageAltText = "Random coding environment";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div   style={{ 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", // Centers the div both horizontally and vertically
    textAlign: "center",                // Centers the text content within the div
    width: "45rem" 
  }}>
        <h1 style={{ color: "white" }}>{name}</h1>
        <h2 style={{ color: "white" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} className="bounce-arrow" style={{ height: "3rem", width: "3rem" }} alt="Scroll down" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
