import React from "react";
import ankushPic from "../assets/images/png/Ankush.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-section min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 items-center">
            <div className="hero-left-col col-span-7">
              <h1 className="font-poppins font-bold text-2xl text-heading-color">
                <span className="block"> Hi 👋,</span>
                <span className="block">My name is</span>
                <span className="block bg-gradient-to-r from-logo-gradient-first to-logo-gradient-second bg-clip-text text-transparent">
                  Ankush Chawla
                </span>
                <span className="block">I build things for web</span>
              </h1>
            </div>
            <div className="hero-right-col flex items-center justify-end col-span-5">
              <div className="rounded-full max-w-[349px] bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] p-2">
                <img
                  src={ankushPic}
                  alt="Ankush"
                  className="w-full max-w-[349px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
