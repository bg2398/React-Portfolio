import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import backgroundImage from "../assets/herobg.png";
import blendImage from "../assets/myImage.png";
import { Link, animateScroll as scroll } from "react-scroll";
import ComputersCanvas from "./canvas/Computers.jsx"; // Import your ComputersCanvas component

const Hero = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const [text, setText] = useState("");
  const introText = "Hi, I'm ";
  const nameText = "Brandon";
  const typingSpeed = 180; // Adjust the typing speed (milliseconds per character)

  useEffect(() => {
    let charIndex = 0;
    const typingEffect = setInterval(() => {
      if (charIndex <= introText.length + nameText.length) {
        if (charIndex < introText.length) {
          setText(
            <h1 className={`${styles.heroHeadText} text-white`}>
              {introText.substring(0, charIndex)}
            </h1>
          );
        } else if (charIndex === introText.length) {
          setText(
            <h1 className={`${styles.heroHeadText}`}>
              {introText}
              <span className="text-purple-500">{nameText[0]}</span>
            </h1>
          );
        } else {
          setText(
            <h1 className={`${styles.heroHeadText}`}>
              {introText}
              <span className="text-purple-500">
                {nameText.substring(0, charIndex - introText.length + 1)}
              </span>
            </h1>
          );
        }
        charIndex++;
      } else {
        clearInterval(typingEffect);
      }
    }, typingSpeed);
  }, []);

  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 5, 25, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: isMobile ? "center" : "right",
        borderRadius: "20px", // Add border radius here
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          {text}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a passionate Full Stack Web Developer!
            <br className="sm:block hidden" />
            {/* Ready to be your next hire! */}
          </p>
        </div>
      </div>

      {/* Blend image */}
      <div
        className={`absolute ${
          isMobile
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-0 right-0"
        } ${
          isMobile
            ? "w-[300px] h-[400px]"
            : "w-[610px] h-[780px]"
        }`}
        style={{
          backgroundImage: `url(${blendImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "17px",
          left: isMobile ? "50%" : "unset",
          transform: isMobile ? "translateX(-50%)" : "unset",
          bottom: isMobile ? "0" : "unset",
        }}
      ></div>

      {/* Computers Canvas (only visible on desktop) */}
      {!isMobile && (
        <div
          className="absolute top-0 right-0 w-full h-screen"
          style={{
            zIndex: 1,
          }}
        >
          <ComputersCanvas />
        </div>
      )}
    </section>
  );
};

export default Hero;
