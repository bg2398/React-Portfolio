import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SectionWrapper } from "../hoc";
// ... Rest of your Footer component code

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://www.facebook.com/brandon.guerrero.33?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/_brandon.g98/?igshid=YTQwZjQ0NmI0OA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 hover:text-red-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-guerrero-783161156"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          href="https://github.com/bg2398"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 ml-4" // Add margin-left for spacing
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
