import React from "react";
import SubscribeStyles from "./subscribe.module.css";
import twitter from "../../src/img/Twitter.png";
import Image from "next/image";
import circleImage from "../../src/img/subscribeImages/roundedImage.png";

const Subscribe = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container  py-24 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="w-full">
              <div className={`${SubscribeStyles.box} `}>
                {/* <span className=" float-right -mt-6 -mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <circle cx="35" cy="35" r="35" fill="#FF8C6C" />
                    <path
                      d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
                      fill="white"
                    />
                    <path
                      d="M25.2636 40.9552L27.9971 50.6839C28.3427 51.9154 29.3387 52.831 30.5949 53.0727C31.8777 53.319 33.1321 52.8121 33.894 51.818L52.3678 27.7109C53.2092 26.6134 53.3019 25.1876 52.6106 23.9902L24.979 39.9433L25.2636 40.9552Z"
                      fill="white"
                    />
                    <path
                      d="M36.2232 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.9421 32.9646 36.2232 33.4515Z"
                      fill="black"
                    />
                    <path
                      d="M25.2637 40.9554L35.8504 34.8432C36.3379 34.5617 36.5044 33.9387 36.2232 33.4517L24.979 39.9435L25.2637 40.9554Z"
                      fill="url(#paint0_linear_3473_2444)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3473_2444"
                        x1="32.9028"
                        y1="35.4017"
                        x2="33.5069"
                        y2="36.5259"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#F7F7F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span> */}
                <div className={`${SubscribeStyles.SubscribeContainer} `}>
                  <span
                    className={`${SubscribeStyles.iconImage} float-right -mt-5 `}
                    style={{}}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#FF8C6C" />
                      <path
                        d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
                        fill="white"
                      />
                      <path
                        d="M25.2636 40.9552L27.9971 50.6839C28.3427 51.9154 29.3387 52.831 30.5949 53.0727C31.8777 53.319 33.1321 52.8121 33.894 51.818L52.3678 27.7109C53.2092 26.6134 53.3019 25.1876 52.6106 23.9902L24.979 39.9433L25.2636 40.9552Z"
                        fill="white"
                      />
                      <path
                        d="M36.2232 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.9421 32.9646 36.2232 33.4515Z"
                        fill="black"
                      />
                      <path
                        d="M25.2637 40.9554L35.8504 34.8432C36.3379 34.5617 36.5044 33.9387 36.2232 33.4517L24.979 39.9435L25.2637 40.9554Z"
                        fill="url(#paint0_linear_3473_2444)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3473_2444"
                          x1="32.9028"
                          y1="35.4017"
                          x2="33.5069"
                          y2="36.5259"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#F7F7F7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <h1
                    className={`${SubscribeStyles.SubCardHeading} leading-relaxed mb-6 text-center`}
                  >
                    Subscribe to get information, latest news and other
                    interesting offers about WindTravel
                  </h1>
                  <div className="p-10 pb-0 pt-0 mr-28">
                    <div
                      className={`${SubscribeStyles.inputContainer} flex justify-center text-center pb-16 `}
                    >
                      {/* <Image className="" src={circleImage} alt="twiiter" /> */}

                      <svg
                        className={`${SubscribeStyles.SvgImage}  relative top-5 left-9 `}
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                      >
                        <path
                          d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                          stroke="#39425D"
                          stroke-linecap="round"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="20"
                          height="17"
                          rx="4.5"
                          stroke="#39425D"
                        />
                      </svg>
                      <input
                        type="your email"
                        className={` ${SubscribeStyles.input}  bg-white shadow rounded-md py-4 pl-11 text-black w-full xl:w-1/2  outline-none `}
                        placeholder="Your email"
                      />
                      <button
                        className={` ${SubscribeStyles.Subscribebtn} py-4 px-12 text-white rounded-md  ml-4 `}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Subscribe;
