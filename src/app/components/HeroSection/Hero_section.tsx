import React from "react";
import Header from "../Header";
import "./Hero_section.css";

const Hero_section = () => {
  
  return (
    <section className="bg-secondary relative pt-[140px] pb-[125px] hero-container">
      <div className="">
        <Header />
        {/* small intro part */}
        <div className="hero-intro-container sm:pl-28 pl-28 lg:pl-28">
          <div className="">
            <div className="grid grid-cols-1">
              <div className="xl:pt-12">
                <span
                  className="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3 "
                  
                >
                  <span className="mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="2"
                      viewBox="0 0 65 2"
                      fill="none"
                    >
                      <path d="M0 1H65" stroke="#080808"></path>
                    </svg>
                  </span>
                  Hello, I’m
                  {/* <img className="ml-2" src="assets/images/icon/victory.png" alt="icon"> */}
                </span>
                <h1
                  className="relative z-[1] font-Syne text-black-800 font-bold text-[45px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]"
                  
                >
                  Nishant
                </h1>
                <h2
                  className="font-Syne text-black-800 font-bold text-[45px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[120px] mb-[20px]"
                  
                >
                  Jangid
                </h2>
                <p
                  className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]"
                 
                >
                  Software Developer | Based in India
                </p>

                <div className="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
                  <span
                  >
                    <a
                      href="contact.html"
                      className="flex items-center flex-wrap btn-primary mr-2 group text-white p-2 rounded-lg bg-gray-900"
                    >
                      Let’s Talk
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
                  </span>

                  <span
                    data-aos="fade-right"
                    data-aos-delay="1200"
                    className="aos-init aos-animate"
                  >
                    <a
                      href="#work"
                      className="flex items-center flex-wrap btn-primary-outline group p-2 rounded-lg"
                    >
                      My Work
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
                  </span>
                </div>

                <div
                  className="flex flex-wrap items-center aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="1400"
                >
                  <div className="flex flex-wrap items-center">
                    <span className="font-Syne text-black-800 font-bold text-[44px] leading-none">
                      <span
                        className="counter is-visible"
                        style={{ visibility: "visible" }}
                      >
                        0.5
                      </span>
                      k+
                    </span>
                    <span className="text-lg text-black-700 ml-3">
                      Successfull Projects
                    </span>
                    <span className="mx-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="14"
                        viewBox="0 0 2 14"
                        fill="none"
                      >
                        <path
                          d="M1 0L1 14"
                          stroke="#080808"
                          stroke-opacity="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-5 sm:mt-0">
                    <ul className="flex flex-wrap gap-x-4 items-center">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/nishant-jangid-bb1167197/"
                          target="_blank"
                          className="text-black-800 hover:text-orange"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                              fill="currentColor"
                              fill-opacity="0.9"
                            ></path>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://github.com/nishantjangid"
                          target="_blank"
                          className="text-black-800 hover:text-orange"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                              fill="currentColor"
                              fill-opacity="0.9"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className="absolute top-0 right-0 md:max-w-[420px] lg:max-w-[570px] xl:max-w-[650px] 2xl:max-w-[initial] aos-init aos-animate"
          data-aos="fade-left"
          src="/assets/hero.png"
          alt="hero Image"
        />

        <a href="contact.html">

          <svg xmlns="http://www.w3.org/2000/svg" className="messageIcon w-10 h-10 absolute bottom-[200px] lg:bottom-[80px] xl:bottom-[80px] right-[40px] lg:right-[150px] xl:right-[150px]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>

        </a>
      </div>
    </section>
  );
};

export default Hero_section;
