import React from "react";
import projectCardData from "./common/Helper";

const Projects = () => {
  return (
    <>
      <section id="projects" className="my-[100px] py-10">
        <div className="container px-4 md:px-10 lg:px-12 2xl:px-24 mx-auto">
          <h2 className="font-poppins font-bold lg:text-xl text-[30px] text-heading-color text-center mb-4">
            Projects
          </h2>
          <p className="font-poppins text-sm text-link-color text-center">
            Things I’ve built so far
          </p>
          <div className="projects-cards grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-14">
            {projectCardData.map((data, index) => {
              return (
                <div key={index}>
                  <div className="project-card shadow-project rounded-[20px]">
                    <img
                      src={data.projectImg}
                      alt="project"
                      className="w-full"
                    />
                    <div className="bg-white p-3 sm:p-4 lg:p-7 !pb-6 rounded-br-[20px] rounded-bl-[20px]">
                      <h3 className="font-poppins font-medium lg:text-xlg text-[20px] text-black capitalize">
                        {data.projectTitle}
                      </h3>
                      <p className="font-poppins font-light lg:text-xmd text-xsm mb-6 mt-4">
                        {data.projectDetail}
                      </p>
                      <p className="font-poppins mb-2">
                        <span>{data.techStack}</span>
                        <span className="font-light text-xsm">
                          {data.stackSkills}
                        </span>
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <span>
                            <img src={data.liveIcon} alt="live-icon" />
                          </span>
                          <a
                            href="/"
                            className="underline font-poppins font-medium"
                          >
                            {data.livePreview}
                          </a>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>
                            <img src={data.smallGitIcon} alt="github-icon" />
                          </span>
                          <a
                            href="/"
                            className="underline font-poppins font-medium"
                          >
                            {data.viewCode}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
