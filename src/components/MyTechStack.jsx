import React from "react";
import htmlIcon from "../assets/images/svg/html-icon.svg";
import cssIcon from "../assets/images/svg/css-icon.svg";
import jsIcon from "../assets/images/svg/js-icon.svg";
import bootstrapIcon from "../assets/images/svg/bootstrap-icon.svg";
import tailwindIcon from "../assets/images/svg/tailwind-icon.svg";
import vsCodeIcon from "../assets/images/svg/vs-code.svg";
import githubIcon from "../assets/images/svg/github-fill-icon.svg";
import reactIcon from "../assets/images/svg/react-icon.svg";
import netlifyIcon from "../assets/images/svg/netlify.svg";
import vercelIcon from "../assets/images/svg/vercel-icon.svg";
const MyTechStack = () => {
  return (
    <>
      <section id="techstack" className="py-10">
        <div className="container px-4 md:px-10 lg:px-12 2xl:px-24 mx-auto">
          <h2 className="font-poppins font-bold lg:text-xl text-[30px] text-heading-color text-center mb-4">
            My Tech Stack
          </h2>
          <p className="font-poppins text-sm text-link-color text-center">
            Technologies I’ve been working with recently
          </p>
          <div className="techskills-group grid grid-cols-5 gap-6 mt-16">
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={htmlIcon} alt="html" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={cssIcon} alt="css" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={jsIcon} alt="javascript" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={bootstrapIcon} alt="bootstrap" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={tailwindIcon} alt="tailwind" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={reactIcon} alt="react" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={vsCodeIcon} alt="vs-code" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={githubIcon} alt="github" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={netlifyIcon} alt="netlify" className="w-full" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="" className="max-w-[150px]">
                <img src={vercelIcon} alt="vercel" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyTechStack;
