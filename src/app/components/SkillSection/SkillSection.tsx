"use client"
import React, { useState } from "react";
import "./SkillSection.css"
import trophy from "../../assets/trophy.png"
const SkillSection = () => {
  const [active,setActive] = useState(1);
  return (
    <section className="featured-properties canvas py-32 overflow-hidden">
      <div className="">
        <div className="sm:px-28 px-15">
        <div className="grid grid-cols-12 ">
          <div
            className="col-span-12 lg:col-span-5 2xl:col-span-4 mx-10 aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
              <span className="text-orange text-xl">Resume</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                All over my details find here...
              </h3>
            </div>
            <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
              <button
                data-tab="about_me_tab"
                className={`tab-btn justify-between items-center inline-flex group py-3 px-2 rounded-lg duration-200 hover:bg-black hover:text-white ${active == 1 && 'active-tab'}`}
                onClick={() => setActive(1)}
              >
                About me
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
              </button>
              <button
                data-tab="experience_tab"
                className={`tab-btn justify-between items-center inline-flex group py-3 px-2 rounded-lg duration-200 hover:bg-black hover:text-white ${active == 2 && 'active-tab'}`}
                onClick={() => setActive(2)}
              >
                Experience
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
              </button>
              <button
                data-tab="education_tab"
                className={`tab-btn justify-between items-center inline-flex group py-3 px-2 rounded-lg duration-200 hover:bg-black hover:text-white ${active == 3 && 'active-tab'}`}
                onClick={() => setActive(3)}
              >
                Education
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
              </button>
              <button
                data-tab="skills_tab"
                className={`tab-btn justify-between items-center inline-flex group py-3 px-2 rounded-lg duration-200 hover:bg-black hover:text-white ${active == 4 && 'active-tab'}`}
                onClick={() => setActive(4)}
              >
                Skills
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
              </button>
              <button
                data-tab="awards_tab"
                className={`tab-btn justify-between items-center inline-flex group py-3 px-2 rounded-lg duration-200 hover:bg-black hover:text-white ${active == 5 && 'active-tab'}`}
                onClick={() => setActive(5)}
              >
                Awards
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
              </button>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-7 2xl:col-span-8  aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {active == 1 && <div id="about_me_tab" className="tab-content m-10 sm:m-0 relative active">
              <div className="grid grid-cols-1 ">
                <h5 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                    Who i am?
                </h5>
                <h4 className="text-black-800 text-2xl lg:text-[22px] font-bold font-Syne mb-6">
                  Based in India
                </h4>
                <article className="text-balance w-100 mb-7">
                <span className="  text-wrap">
                I am a software developer with over 3 years of hands-on experience in web development.
                 Throughout his career,
                I have demonstrated proficiency in crafting various types of web products, showcasing his versatility and adaptability in the field
                </span>
                </article>
                <ul className="flex-col gap-3 inline-flex">
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Name
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      Nishant Jangid
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Nationality
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      Indian
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Phone
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      +91 8209971208
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Email
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      nishantsharma39262@gmail.com
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Experience
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      4+ years
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Freelance
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      Available
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Language
                    </span>
                    <span className="text-black-800 text-sm 2xl:text-xl lg:text-2xl md:text-xl font-bold font-Syne leading-8">
                      Hindi, English
                    </span>
                  </li>
                </ul>
              </div>
            </div>}

            {active == 2 && 
            <div id="experience_tab" className="tab-content m-10 sm:m-0 relative">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Experience
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 text-white">
                <div className="bg-black pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black  flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    10/2023 – Running
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-2">
                      Morfdesk LLP
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Backend Developer
                    </h4>
                  </div>
                </div>

                <div className="bg-black pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black  flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    10/2021 – 08/2023
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-2">
                      Thinker Technology
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Full Stack Developer
                    </h4>
                  </div>
                </div>

                <div className="bg-black pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    04/2021 – 09/2021
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-2">
                      Ramlogics Technosoft Pvt. Ltd.
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Web Developer
                    </h4>
                  </div>
                </div>
              </div>
            </div>}

            {active == 3 && <div id="education_tab" className="tab-content m-10 sm:m-0 ">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Education
              </h4>

              <div className="grid grid-cols-1 gap-6">
                <div className="pt-[30px] px-7 pb-7 bg-black text-white rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    10/2021 – 05/2023
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-2">
                      Apex University
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Master's in Computer Application
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black text-white rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    07/2017 – 07/2020
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-2">
                      Jaipur National University
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Bachlore's of Computer Application
                    </h4>
                  </div>
                </div>
              </div>
            </div>}
            {active == 4 && <div id="skills_tab" className="tab-content m-10 sm:m-0">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Skills
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" color="#50c6e3" fill="none">
                <path d="M8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" stroke="currentColor" stroke-width="1.5" />
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      React JS
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (90%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                    <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                    </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Nodejs
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (70%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                  <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      MongoDB
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (70%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-white rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"></path><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      AWS
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (40%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                  <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      MySQL
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (90%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-white rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                 <path fill="#4db6ac" d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Prisma
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (60%)
                    </p>
                  </div>
                </div>
                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                  <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Javascript
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (80%)
                    </p>
                  </div>
                </div>
                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                  <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                </svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Tailwind
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (50%)
                    </p>
                  </div>
                </div>
                <div className="pt-[30px] px-7 pb-7 bg-black text-white hover:text-black rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#f5a623" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M9.5 16L9.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M11 8V6M13.5 8V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M11 18V16M13.5 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 12H14.5C15.3284 12 16 12.6716 16 13.5V14.5C16 15.3284 15.3284 16 14.5 16H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 8L14.5 8C15.3284 8 16 8.67157 16 9.5V10.5C16 11.3284 15.3284 12 14.5 12H9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Blockchain
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (30%)
                    </p>
                  </div>
                </div>
              </div>
            </div>}
            {active == 5 && <div id="awards_tab" className="tab-content m-10 sm:m-0">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Awards
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-black text-white rounded-2xl transition-all hover:shadow-2xl hover:bg-white hover:text-black group flex flex-wrap flex-col gap-8">
                  <div className="flex items-start justify-between">
                    <img src={trophy.src} alt="icons" className="w-10 hover:from-black" />
                    <span className="font-normal text-sm font-Inter text-black-text-800">
                      2023
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Winner
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Best Developer of the Year
                    </h4>
                  </div>
                </div>
              </div>
            </div>}

            {/* <span className="flex justify-end mt-14 -mr-3">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                  fill="#FFB646"
                ></path>
              </svg>
            </span> */}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
