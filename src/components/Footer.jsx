import React from "react";
import githubIcon from "../assets/images/svg/github-icon.svg";
import linkdinIcon from "../assets/images/svg/linkdin-icon.svg";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="pt-12">
        <div className="container mx-auto px-4 md:px-10 lg:px-12 2xl:px-24 ">
          <div className="flex md:flex-row flex-col items-center justify-between w-full border-b border-light-grey pb-6">
            <a
              href="/"
              className="bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second bg-clip-text inline-block text-transparent font-dm-sans text-[40px] font-semibold"
            >
              Ankush
            </a>
            <div className="flex flex-wrap gap-4 items-center justify-center lg::gap-16 md:gap-8 font-poppins text-xsm">
              <a href="tel:+91 9992200615">+91 9992200615</a>
              <a href="mailto:chawlaankush04@gmail.com" target="_blank">
                chawlaankush04@gmail.com
              </a>
              <ul className="flex items-center gap-5">
                <li>
                  <a href="">
                    <img src={githubIcon} alt="github-link" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={linkdinIcon} alt="linkdin-link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-wrap gap-4 md:gap-12 items-center justify-center py-10 text-link-color font-dm-sans font-medium">
            <li>
              <a
                href="/"
                className="relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#techstack"
                className="relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
