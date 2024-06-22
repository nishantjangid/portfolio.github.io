import React from "react";
import "./SpecialtiesSection.css";
const SpecialtiesSection = () => {
  return (
    <section className="py-32 text-white">
      <div className="sm:px-28 lg:px-28 px-15 m-10 sm:m-0">
        <div className="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center aos-init aos-animate">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Services</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <p className="paragraph">
            I specialize in UI/UX design, responsive development, and API integration, ensuring seamless user experiences across all devices. Additionally, I provide reliable software maintenance and support for long-term success.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                className="px-6 py-7 bg-white text-black rounded-lg transition-all hover:shadow-2xl hover-box group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black mb-8">
                  <img src="/assets/api-icon.gif" alt="icon" className="w-10"/>
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 transition-all"
                  >
                    API <br /> Development
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="px-6 py-7 box-color text-black rounded-lg transition-all hover:shadow-2xl hover:bg-white group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1513_4913)">
                      <path
                        d="M23.25 24H6.75C6.55109 24 6.36032 23.921 6.21967 23.7803C6.07902 23.6397 6 23.4489 6 23.25V10.5C6 10.3011 6.07902 10.1103 6.21967 9.96967C6.36032 9.82902 6.55109 9.75 6.75 9.75H23.25C23.4489 9.75 23.6397 9.82902 23.7803 9.96967C23.921 10.1103 24 10.3011 24 10.5V23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24ZM7.5 22.5H22.5V11.25H7.5V22.5Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M6.75 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L10.5 0C11.2956 0 12.0587 0.316071 12.6213 0.87868C13.1839 1.44129 13.5 2.20435 13.5 3V7.5C13.5 7.69891 13.421 7.88968 13.2803 8.03033C13.1397 8.17098 12.9489 8.25 12.75 8.25C12.5511 8.25 12.3603 8.17098 12.2197 8.03033C12.079 7.88968 12 7.69891 12 7.5V3C12 2.60218 11.842 2.22064 11.5607 1.93934C11.2794 1.65804 10.8978 1.5 10.5 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H6.75C6.94891 16.5 7.13968 16.579 7.28033 16.7197C7.42098 16.8603 7.5 17.0511 7.5 17.25C7.5 17.4489 7.42098 17.6397 7.28033 17.7803C7.13968 17.921 6.94891 18 6.75 18Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M5.25 8.25C4.65326 8.25 4.08097 8.01295 3.65901 7.59099C3.23705 7.16903 3 6.59674 3 6V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3C3.94891 3 4.13968 3.07902 4.28033 3.21967C4.42098 3.36032 4.5 3.55109 4.5 3.75V6C4.5 6.19891 4.57902 6.38968 4.71967 6.53033C4.86032 6.67098 5.05109 6.75 5.25 6.75C5.44891 6.75 5.63968 6.67098 5.78033 6.53033C5.92098 6.38968 6 6.19891 6 6V3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3C6.94891 3 7.13968 3.07902 7.28033 3.21967C7.42098 3.36032 7.5 3.55109 7.5 3.75V6C7.5 6.59674 7.26295 7.16903 6.84099 7.59099C6.41903 8.01295 5.84674 8.25 5.25 8.25Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M11.25 18C10.6533 18 10.081 17.7629 9.65901 17.341C9.23705 16.919 9 16.3467 9 15.75V13.5C9 13.3011 9.07902 13.1103 9.21967 12.9697C9.36032 12.829 9.55109 12.75 9.75 12.75C9.94891 12.75 10.1397 12.829 10.2803 12.9697C10.421 13.1103 10.5 13.3011 10.5 13.5V15.75C10.5 15.9489 10.579 16.1397 10.7197 16.2803C10.8603 16.421 11.0511 16.5 11.25 16.5C11.4489 16.5 11.6397 16.421 11.7803 16.2803C11.921 16.1397 12 15.9489 12 15.75V13.5C12 13.3011 12.079 13.1103 12.2197 12.9697C12.3603 12.829 12.5511 12.75 12.75 12.75C12.9489 12.75 13.1397 12.829 13.2803 12.9697C13.421 13.1103 13.5 13.3011 13.5 13.5V15.75C13.5 16.3467 13.2629 16.919 12.841 17.341C12.419 17.7629 11.8467 18 11.25 18Z"
                        fill="#FFB646"
                      ></path>
                      <path
                        d="M9.75 8.25C9.55109 8.25 9.36032 8.17098 9.21967 8.03033C9.07902 7.88968 9 7.69891 9 7.5V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3C9.94891 3 10.1397 3.07902 10.2803 3.21967C10.421 3.36032 10.5 3.55109 10.5 3.75V7.5C10.5 7.69891 10.421 7.88968 10.2803 8.03033C10.1397 8.17098 9.94891 8.25 9.75 8.25Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M18 18C17.8873 17.9995 17.7762 17.9736 17.6749 17.9242C17.5737 17.8749 17.4848 17.8034 17.415 17.715L14.415 13.965C14.3109 13.8085 14.2694 13.6187 14.2987 13.4331C14.3279 13.2475 14.4258 13.0796 14.5729 12.9627C14.72 12.8458 14.9056 12.7883 15.093 12.8017C15.2804 12.8151 15.456 12.8983 15.585 13.035L18.585 16.785C18.6721 16.8953 18.7265 17.0279 18.742 17.1677C18.7574 17.3074 18.7333 17.4487 18.6723 17.5754C18.6113 17.702 18.5159 17.809 18.397 17.8841C18.2781 17.9592 18.1406 17.9993 18 18Z"
                        fill="#FFB646"
                      ></path>
                      <path
                        d="M15 18C14.8594 17.9994 14.7218 17.9592 14.6029 17.8841C14.484 17.809 14.3887 17.7021 14.3277 17.5754C14.2667 17.4487 14.2425 17.3074 14.258 17.1677C14.2734 17.0279 14.3278 16.8953 14.415 16.785L17.415 13.035C17.4725 12.9485 17.5473 12.8749 17.6347 12.8189C17.7221 12.7628 17.8203 12.7255 17.9228 12.7093C18.0254 12.6932 18.1303 12.6985 18.2307 12.725C18.3311 12.7514 18.425 12.7985 18.5063 12.8631C18.5876 12.9277 18.6545 13.0085 18.703 13.1004C18.7514 13.1922 18.7803 13.2932 18.7877 13.3968C18.7951 13.5003 18.7809 13.6043 18.746 13.7022C18.7111 13.8 18.6563 13.8895 18.585 13.965L15.585 17.715C15.5151 17.8034 15.4263 17.8749 15.325 17.9243C15.2237 17.9736 15.1126 17.9995 15 18Z"
                        fill="#FFB646"
                      ></path>
                      <path
                        d="M11.25 21H9.75C9.55109 21 9.36032 20.921 9.21967 20.7803C9.07902 20.6397 9 20.4489 9 20.25C9 20.0511 9.07902 19.8603 9.21967 19.7197C9.36032 19.579 9.55109 19.5 9.75 19.5H11.25C11.4489 19.5 11.6397 19.579 11.7803 19.7197C11.921 19.8603 12 20.0511 12 20.25C12 20.4489 11.921 20.6397 11.7803 20.7803C11.6397 20.921 11.4489 21 11.25 21Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M20.25 21H14.25C14.0511 21 13.8603 20.921 13.7197 20.7803C13.579 20.6397 13.5 20.4489 13.5 20.25C13.5 20.0511 13.579 19.8603 13.7197 19.7197C13.8603 19.579 14.0511 19.5 14.25 19.5H20.25C20.4489 19.5 20.6397 19.579 20.7803 19.7197C20.921 19.8603 21 20.0511 21 20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21Z"
                        fill="#ffffff"
                        fillOpacity="0.9"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1513_4913">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    UI/UX <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="px-6 py-7  bg-white text-black  rounded-lg transition-all hover:shadow-2xl  hover-box group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                    <img alt="image" src="/assets/web-design-gif" className="w-8" />
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Website <br /> design
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="px-6 py-7  box-color text-black  rounded-lg transition-all hover:shadow-2xl hover:bg-white group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.499 17.7501C10.3663 17.75 10.236 17.7147 10.1215 17.6479C10.0069 17.581 9.91206 17.4849 9.84672 17.3695C9.78139 17.254 9.74787 17.1232 9.74957 16.9906C9.75128 16.8579 9.78816 16.7281 9.85644 16.6143L12.8564 11.6143C12.9071 11.5298 12.9739 11.4561 13.053 11.3974C13.1322 11.3387 13.2221 11.2962 13.3177 11.2722C13.4133 11.2483 13.5126 11.2434 13.6101 11.2579C13.7076 11.2723 13.8012 11.3059 13.8857 11.3565C13.9702 11.4072 14.0439 11.474 14.1026 11.5531C14.1613 11.6323 14.2039 11.7222 14.2278 11.8178C14.2517 11.9133 14.2566 12.0127 14.2422 12.1102C14.2277 12.2076 14.1942 12.3013 14.1435 12.3858L11.1435 17.3858C11.0767 17.497 10.9823 17.5891 10.8693 17.6529C10.7563 17.7168 10.6288 17.7502 10.499 17.7501Z"
                      fill="#FFB646"
                    ></path>
                    <path
                      d="M8 17.75C7.82438 17.7504 7.65425 17.6888 7.51953 17.5762L4.51953 15.0762C4.43516 15.0057 4.36729 14.9176 4.32071 14.8181C4.27414 14.7185 4.25 14.6099 4.25 14.5C4.25 14.3901 4.27414 14.2815 4.32071 14.182C4.36729 14.0824 4.43516 13.9943 4.51953 13.9239L7.51953 11.4239C7.67243 11.2972 7.86929 11.2364 8.06697 11.2546C8.26465 11.2729 8.44704 11.3687 8.57418 11.5212C8.70132 11.6737 8.76285 11.8703 8.74528 12.0681C8.72772 12.2658 8.63249 12.4485 8.48047 12.5762L6.17188 14.5L8.48047 16.4239C8.5989 16.5225 8.68404 16.6553 8.72431 16.8041C8.76457 16.953 8.758 17.1106 8.70548 17.2555C8.65297 17.4004 8.55707 17.5257 8.43083 17.6142C8.3046 17.7027 8.15416 17.7501 8 17.75Z"
                      fill="#FFB646"
                    ></path>
                    <path
                      d="M16 17.7499C15.8459 17.75 15.6954 17.7026 15.5692 17.6141C15.4429 17.5256 15.347 17.4003 15.2945 17.2554C15.242 17.1105 15.2355 16.9529 15.2757 16.8041C15.316 16.6552 15.4011 16.5225 15.5195 16.4238L17.8281 14.4999L15.5195 12.5761C15.4435 12.5131 15.3806 12.4358 15.3345 12.3484C15.2885 12.2611 15.2601 12.1656 15.251 12.0672C15.2419 11.9689 15.2523 11.8698 15.2816 11.7755C15.311 11.6812 15.3586 11.5936 15.4218 11.5178C15.4851 11.442 15.5627 11.3794 15.6502 11.3336C15.7376 11.2878 15.8333 11.2597 15.9316 11.251C16.03 11.2423 16.1291 11.253 16.2233 11.2827C16.3175 11.3123 16.4049 11.3603 16.4805 11.4238L19.4805 13.9238C19.5649 13.9942 19.6327 14.0823 19.6793 14.1819C19.7259 14.2814 19.75 14.39 19.75 14.4999C19.75 14.6098 19.7259 14.7184 19.6793 14.818C19.6327 14.9175 19.5649 15.0057 19.4805 15.0761L16.4805 17.5761C16.3458 17.6888 16.1756 17.7503 16 17.7499Z"
                      fill="#FFB646"
                    ></path>
                    <path
                      d="M21 21.75H3C2.53604 21.7494 2.09125 21.5649 1.76319 21.2368C1.43512 20.9087 1.25056 20.464 1.25 20V4C1.25056 3.53604 1.43512 3.09125 1.76319 2.76319C2.09125 2.43512 2.53604 2.25056 3 2.25H21C21.464 2.25056 21.9087 2.43512 22.2368 2.76319C22.5649 3.09125 22.7494 3.53604 22.75 4V20C22.7494 20.464 22.5649 20.9087 22.2368 21.2368C21.9087 21.5649 21.464 21.7494 21 21.75ZM3 3.75C2.93373 3.75013 2.87022 3.77651 2.82336 3.82336C2.77651 3.87022 2.75013 3.93373 2.75 4V20C2.75013 20.0663 2.77651 20.1298 2.82336 20.1766C2.87022 20.2235 2.93373 20.2499 3 20.25H21C21.0663 20.2499 21.1298 20.2235 21.1766 20.1766C21.2235 20.1298 21.2499 20.0663 21.25 20V4C21.2499 3.93373 21.2235 3.87022 21.1766 3.82336C21.1298 3.77651 21.0663 3.75013 21 3.75H3Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M22 8.75H2C1.80109 8.75 1.61032 8.67098 1.46967 8.53033C1.32902 8.38968 1.25 8.19891 1.25 8C1.25 7.80109 1.32902 7.61032 1.46967 7.46967C1.61032 7.32902 1.80109 7.25 2 7.25H22C22.1989 7.25 22.3897 7.32902 22.5303 7.46967C22.671 7.61032 22.75 7.80109 22.75 8C22.75 8.19891 22.671 8.38968 22.5303 8.53033C22.3897 8.67098 22.1989 8.75 22 8.75Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M5 6.5C5.55228 6.5 6 6.05228 6 5.5C6 4.94772 5.55228 4.5 5 4.5C4.44772 4.5 4 4.94772 4 5.5C4 6.05228 4.44772 6.5 5 6.5Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M8 6.5C8.55228 6.5 9 6.05228 9 5.5C9 4.94772 8.55228 4.5 8 4.5C7.44772 4.5 7 4.94772 7 5.5C7 6.05228 7.44772 6.5 8 6.5Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M11 6.5C11.5523 6.5 12 6.05228 12 5.5C12 4.94772 11.5523 4.5 11 4.5C10.4477 4.5 10 4.94772 10 5.5C10 6.05228 10.4477 6.5 11 6.5Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                  </svg>
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Webflow <br /> development
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="px-6 py-7  bg-white text-black  rounded-lg transition-all hover:shadow-2xl hover-box group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <img alt="image" src="/assets/software-solution.gif" className="w-10" />
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Software <br /> Solution
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>

              <div
                className="px-6 py-7  box-color text-black  rounded-lg transition-all hover:shadow-2xl hover:bg-white group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="w-12 h-12 bg-black rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0776 0.993896H11.327C10.2601 0.993896 9.39209 1.8619 9.39209 2.92874V10.4249L10.3379 9.63522V4.56203H22.0666V21.0708C22.0666 21.6161 21.6229 22.0598 21.0776 22.0598H11.327C10.7816 22.0598 10.3379 21.6161 10.3379 21.0708V21.0149H9.39209V21.0708C9.39209 22.1377 10.26 23.0056 11.327 23.0056H21.0776C22.1445 23.0056 23.0125 22.1377 23.0125 21.0708V2.92874C23.0125 1.86186 22.1445 0.993896 21.0776 0.993896ZM10.3379 3.61622V2.92874C10.3379 2.38339 10.7816 1.93971 11.327 1.93971H21.0776C21.623 1.93971 22.0666 2.38339 22.0666 2.92874V3.61622H10.3379Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.25446 10.7192V2.92886C9.25446 1.78604 10.1841 0.856445 11.3269 0.856445H21.0776C22.2204 0.856445 23.15 1.786 23.15 2.92886V21.0709C23.15 22.2138 22.2204 23.1433 21.0776 23.1433H11.3269C10.184 23.1433 9.25446 22.2138 9.25446 21.0709V20.8774H10.4754V21.0709C10.4754 21.5403 10.8575 21.9224 11.3269 21.9224H21.0775C21.5469 21.9224 21.929 21.5403 21.929 21.0709V4.69974H10.4754V9.69971L9.25446 10.7192ZM9.39203 2.92886C9.39203 1.86202 10.26 0.994023 11.3269 0.994023H21.0776C22.1444 0.994023 23.0124 1.86198 23.0124 2.92886V21.0709C23.0124 22.1378 22.1444 23.0058 21.0776 23.0058H11.3269C10.2873 23.0058 9.43666 22.1817 9.39373 21.1526C9.3926 21.1255 9.39203 21.0983 9.39203 21.0709V21.015H10.3378V21.0709C10.3378 21.6163 10.7815 22.0599 11.3269 22.0599H21.0775C21.6229 22.0599 22.0665 21.6163 22.0665 21.0709V4.56216H10.3378V9.63535L9.39203 10.4251V2.92886ZM10.4754 2.92886V3.47877H21.929V2.92886C21.929 2.4595 21.5469 2.07742 21.0776 2.07742H11.3269C10.8575 2.07742 10.4754 2.4595 10.4754 2.92886ZM10.3378 3.61634H22.0666V2.92886C22.0666 2.38351 21.6229 1.93984 21.0776 1.93984H11.3269C10.7815 1.93984 10.3378 2.38351 10.3378 2.92886V3.61634Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M17.3008 20.3836C17.562 20.3836 17.7737 20.1718 17.7737 19.9107C17.7737 19.6495 17.562 19.4377 17.3008 19.4377H15.1231C14.8619 19.4377 14.6501 19.6495 14.6501 19.9107C14.6501 20.1718 14.8619 20.3836 15.1231 20.3836H17.3008Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M19.5284 20.1733C19.7036 20.451 20.1391 20.4503 20.3147 20.1733C20.5485 19.8289 20.2363 19.3621 19.8289 19.4472C19.5055 19.5043 19.3396 19.9043 19.5284 20.1733Z"
                      fill="#ffffff"
                      fillOpacity="0.9"
                    ></path>
                    <path
                      d="M14.6022 8.76622C14.5955 8.28063 14.3974 7.829 14.0442 7.49461C13.3496 6.8368 12.225 6.86092 11.5375 7.54844L5.83441 13.2515L5.83458 11.2586C5.83415 10.2753 5.0339 9.47498 4.05042 9.47455C3.57412 9.47455 3.1261 9.66028 2.78888 9.99755C2.45182 10.3346 2.26623 10.7825 2.26623 11.2587V11.4851C2.26623 12.8458 1.97375 14.2091 1.39702 15.537C1.01796 16.4097 0.907562 17.3676 1.07777 18.3071C1.2521 19.2694 1.71099 20.1448 2.4047 20.8385L3.16806 21.6018C4.10257 22.5363 5.33011 23.0035 6.55766 23.0035C7.7852 23.0035 9.01274 22.5362 9.94725 21.6018L13.4026 18.1464C14.0901 17.4589 14.1142 16.3344 13.4564 15.6397C13.122 15.2865 12.6704 15.0884 12.1847 15.0817C12.1523 15.0812 12.12 15.0817 12.0878 15.0829C12.107 14.6026 11.9335 14.1158 11.5676 13.7499C11.3574 13.5398 11.1041 13.3885 10.8276 13.3044L14.0797 10.0522C14.4233 9.70873 14.6088 9.25198 14.6022 8.76622ZM13.411 9.38345L9.04451 13.7499L7.48688 15.3075C7.30218 15.4922 7.30218 15.7917 7.48688 15.9764C7.57922 16.0687 7.70024 16.1149 7.82127 16.1149C7.94233 16.1149 8.06331 16.0687 8.15566 15.9764C8.15566 15.9764 9.71144 14.4206 9.71329 14.4187C10.0349 14.0971 10.5781 14.098 10.8987 14.4187C11.2256 14.7455 11.2256 15.2773 10.8987 15.6041L9.34111 17.1618C9.15642 17.3465 9.15642 17.6459 9.34111 17.8306C9.43345 17.923 9.55448 17.9691 9.6755 17.9691C9.79652 17.9691 9.91754 17.923 10.0099 17.8306C10.0099 17.8306 11.5648 16.2757 11.5675 16.273C11.8908 15.9497 12.4571 15.9601 12.7696 16.29C13.0785 16.6162 13.0624 17.149 12.7337 17.4777L9.27838 20.933C7.77815 22.4332 5.33708 22.4332 3.83684 20.933L3.07348 20.1697C1.94792 19.0442 1.63042 17.3736 2.26451 15.9138C2.89322 14.4662 3.212 12.9762 3.212 11.4851C3.212 11.4851 3.212 11.2591 3.212 11.2587C3.212 10.8016 3.59347 10.4204 4.05017 10.4204C4.51237 10.4206 4.88855 10.7968 4.88872 11.2587L4.88842 14.3933C4.88842 14.5846 5.00364 14.757 5.18033 14.8303C5.35698 14.9035 5.56042 14.863 5.69572 14.7278L12.2062 8.21726C12.5348 7.88863 13.0677 7.87251 13.3938 8.18145C13.7327 8.50221 13.7407 9.05379 13.411 9.38345Z"
                      fill="#FFB646"
                    ></path>
                  </svg>
                </div>

                <h4>
                  <a
                    href="projects.html"
                    className="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all"
                  >
                    Maintenance  <br /> & Support
                    <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all"
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          className="transition-all"
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 xl:col-span-4 aos-init aos-animate "
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <div className="px-6 py-9 box-color text-black rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] hover-box mx-auto h-full group">
              <div className="flex flex-wrap justify-end relative">
                <a
                  href="mailto:nishantsharma39262@gmail.com"
                  className="group-hover:animate-arrow-move-up"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3333 56.6666L56.6667 23.3333"
                      stroke="#000000"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M23.3333 23.3333H56.6667V56.6666"
                      stroke="#000000"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="flex flex-col flex-wrap gap-y-2">
                <span className="text-orange text-lg font-normal leading-none">
                  SAY HELLO!
                </span>
                <h4 className="text-black xl:text-[20px] sm:text-[15px] font-bold font-Syne leading-none">
                  nishantsharma39262@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
