import React from "react";
const MyWorkSection = () => {
  return (
    <section className="bg-[#ffffff] py-[120px]">
      <div className="sm:px-28 px-15">
        <div className="grid grid-cols-12 m-10 gap-6">
          <div className="col-span-12 aos-init aos-animate" data-aos="fade-up">
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My recent{" "}
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  w
                </span>
                ork
              </h3>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="rounded-[20px] overflow-hidden mb-6">
              <img src="/portfolio.github.io/assets/project-snaps/project1.png" alt="image"/>
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  NFT
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a className="transition-all" href="project-details.html">
                    NFT Marketplace
                  </a>
                </h4>
                <a
                  className="group-hover:animate-arrow-move-up"
                  href="project-details.html"
                >
                
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="rounded-[20px] overflow-hidden mb-6">
              <img src="/portfolio.github.io/assets/project-snaps/project1.png" alt="project1" />
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  CRM
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a className="transition-all" href="project-details.html">
                    Hotel Management System
                  </a>
                </h4>
                <a
                  className="group-hover:animate-arrow-move-up"
                  href="project-details.html"
                >
                  
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-span-12 mt-12 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="flex group">
            <a
              href="/"
              className="flex items-center justify-center border-b border-t border-[#3d5a80] border-opacity-40 flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none grow"
            >
              View All Project
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
