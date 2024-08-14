import React from "react";
import calenderIcon from "../assets/images/svg/calender-icon.svg";
import locationIcon from "../assets/images/svg/location-icon.svg";
import buildingIcon from "../assets/images/svg/building-icon.svg";

const AboutMe = () => {
  return (
    <>
      <section id="about" className="my-[100px]">
        <div className="container mx-auto px-4 md:px-10 lg:px-12 2xl:px-24">
          <div className="about-group">
            <h2 className="font-poppins font-bold lg:text-xl text-[30px] text-heading-color text-center mb-4">
              About Me
            </h2>
            <p className="font-poppins text-link-color font-sm text-center md:max-w-[80%] mx-auto">
              Motivated Front-End Developer with strong skills in HTML, CSS,
              JavaScript, and React.js. Experienced in applying responsive
              design principles, proficient with Git, and adept in using
              Bootstrap and Tailwind CSS for modern, efficient web development.
              Committed to excellence and proactive problem-solving.
            </p>
          </div>
          <div className="work-experience-group my-14">
            <h2 className="font-poppins font-bold lg:text-lg text-[27px] mb-6 text-heading-color text-center">
              Work Experience
            </h2>
            <div className="experience-card border-b border-light-grey pb-6 flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row gap-1 justify-between sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  Front End Developer Trainee
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  Full Time
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 justify-between sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Radial Code Pvt. Ltd.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Hisar
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    June 2023 - May 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="education-group">
            <h2 className="font-poppins font-bold lg:text-lg text-[27px] mb-6 text-heading-color text-center">
              Education
            </h2>
            <div className="graduation-group pb-6 mb-7 border-b border-light-grey">
              <div className="flex flex-col sm:flex-row gap-1 justify-between sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  BACHELOR OF SCIENCE
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  66%
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 justify-between sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Guru Jambheshwar University
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Hisar
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    2018 - 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="intermediate-group pb-6 mb-7 border-b border-light-grey">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  INTERMEDIATE
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  79.6%
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      HBSE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Luhari Ragho, Hisar
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    2017 - 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="tenth-group pb-6 border-b border-light-grey">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  10th
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  86.8%
                </span>
              </div>
              <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex  items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      HBSE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Luhari Ragho, Hisar
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    2015 - 2016
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="certification-group mt-14">
            <h2 className="font-poppins font-bold lg:text-lg text-[27px] mb-6 text-heading-color text-center">
              Certifications
            </h2>
            <div className="certification-card border-b border-light-grey pb-6 mb-7">
              <div className="flex justify-between  flex-col sm:flex-row sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  Front End Development
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  Full Time
                </span>
              </div>
              <div className="flex justify-between  flex-col sm:flex-row sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Radial Code Pvt. Ltd.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Hisar
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    June 2023 - May 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="certification-card border-b border-light-grey pb-6">
              <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                <h3 className="font-poppins lg:text-xlg text-[20px] text-link-color font-bold ">
                  DCA
                </h3>
                <span className="font-poppins lg:text-xlg text-[20px] text-green-500 font-semibold ">
                  Full Time
                </span>
              </div>
              <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                <div className="location-group flex items-center gap-6">
                  <div className="company-name flex items-center gap-2">
                    <span>
                      <img src={buildingIcon} alt="building" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Hartron Skill Centre
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <span className="font-poppins text-light-grey font-medium">
                      Hansi
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={calenderIcon} alt="calender" />
                  </span>
                  <span className="font-poppins font-semibold text-light-grey">
                    June 2022 - june 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
