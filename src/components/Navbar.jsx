import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain logo-transparent-bg' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Brandon &nbsp; <span className='sm:block hidden'>| Full Stack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.id);
                if (link.id === "resume") {
                  // Redirect to the resume link
                  window.location.href = "https://drive.google.com/file/d/1yJVl2-s7o5kRvzmEN5KCvFyWOm-GURTa/view?usp=drive_link"; // Replace with your actual resume link
                } else {
                  // Scroll to the section with the corresponding ID
                  const section = document.getElementById(link.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {link.title}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                    if (link.id === "resume") {
                      // Redirect to the resume link
                      window.location.href = "https://drive.google.com/file/d/1yJVl2-s7o5kRvzmEN5KCvFyWOm-GURTa/view?usp=drive_link"; // Replace with your actual resume link
                    } else {
                      // Scroll to the section with the corresponding ID
                      const section = document.getElementById(link.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
