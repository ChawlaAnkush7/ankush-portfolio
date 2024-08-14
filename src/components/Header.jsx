import React, { useState } from "react";
import githubIcon from "../assets/images/svg/github-Icon.svg";
import linkdinIcon from "../assets/images/svg/linkdin-Icon.svg";
import ankushPic from "../assets/images/png/Ankush.jpg";
import openMenu from "../assets/images/svg/open.svg";
import closeMenu from "../assets/images/svg/close.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className=" w-full lg:min-h-screen min-h-[650px] flex flex-col ">
        <div className="container mx-auto px-4 md:px-10 lg:px-12 2xl:px-24 flex items-center justify-between">
          <a
            href="/"
            className="bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second bg-clip-text inline-block text-transparent font-dm-sans text-[40px] font-semibold"
          >
            Ankush
          </a>
          <nav className="flex">
            <ul
              className={`${
                open ? "left-0" : "left-[100%]"
              } max-lg:flex-col max-lg:fixed max-lg:w-full  max-lg:top-0 max-lg:min-h-screen max-lg:bg-green-400 max-lg:justify-center max-lg:text-[25px] max-lg:items-center max-lg:gap-10  max-lg:z-[1] h-full flex gap-7 items-center text-link-color font-dm-sans font-medium transition-all duration-300 ease-linear `}
            >
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
              <li>
                <ul className="flex items-center gap-5">
                  <li>
                    <a href="">
                      <img
                        src={githubIcon}
                        alt="github-link"
                        className="w-full"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={linkdinIcon}
                        alt="linkdin-link"
                        className="w-full h-[30px]"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              className="block relative z-[2] lg:hidden"
              onClick={handleMenu}
            >
              <img src={`${open ? closeMenu : openMenu}`} alt="menu-btn" />
            </button>
          </nav>
        </div>
        <div className="hero-section flex grow pt-10">
          <div className="container mx-auto px-4 md:px-10 lg:px-12 2xl:px-24 flex">
            <div className="grid grid-cols-1 sm:grid-cols-12  gap-6 items-center w-full">
              <div className="hero-left-col sm:col-span-7 order-2 sm:order-1 ">
                <h1 className="font-poppins font-bold lg:text-2xl text-[35px] md:text-[45px] text-heading-color text-center sm:text-start">
                  <span className="sm:block"> Hi 👋,</span>
                  <span className="sm:block"> My name is </span>
                  <span className="sm:block bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second bg-clip-text text-transparent">
                    Ankush Chawla
                  </span>
                  <span className="sm:block"> I build things for web</span>
                </h1>
              </div>
              <div className="hero-right-col w-full flex items-center order-1 sm:order-2 justify-center sm:justify-end sm:col-span-5">
                <div className="rounded-full max-w-[349px] bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] p-2">
                  <img
                    src={ankushPic}
                    alt="Ankush"
                    className="w-full max-w-[270px] sm:max-w-[349px] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
