/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import { useEffect, useRef, useState } from "react";


//  * Desk image
//  *
//  * Below is a sample desk image. Feel free to update this to an image of your choice,
//  * updating below imageAltText to string that represents what you see in that image.
//  *
//  * Need an image? Check out https://unsplash.com to download a photo you
//  * freely use on your site.
 
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My resume",
    description:
      "Google deive link of my latest resume.",
    url: "https://drive.google.com/file/d/11EdsucM4T3piHhR_Tet7OB5aAz222UPh/view?usp=sharing",
  },
  {
    title: "Virtual Interview Practice Platform",
    description:
      "Developed a web-based application to help users practice interview questions with real-time feedback.",
    url: "https://github.com/Vighnesh-bhat/minor_project",
  },
  {
    title: "Train Booking System",
    description:
      "User-friendly train booking application which enables users to search for trains, book seats, and manage bookings seamlessly.",
    url: "https://github.com/Vighnesh-bhat/trainBookingSystem",
  },
  {
    title: "Complaint Flow",
    description:
      "The Hostel Complaint Management System is a web-based application developed using Flask.",
    url: "https://github.com/Vighnesh-bhat/complaint_flow",
  },
];

const Portfolio = () => {

  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            className={isVisible ? "slideInLeft" : ""}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
