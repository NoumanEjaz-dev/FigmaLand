import React from "react";
import SubscribeStyles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 w-full">
              <div className={`${SubscribeStyles.SubscribeContainer} `}>
                <h1
                  className={`${SubscribeStyles.SubCardHeading} leading-relaxed mb-6 text-center`}
                >
                  Subscribe to get information, latest news and other
                  interesting offers about WindTravel
                </h1>
                <div className="">
                  <div className="flex justify-center text-center pb-16">
                    <svg
                      className=" relative top-5 left-9 "
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
                      className=" bg-white shadow rounded-md py-4 pl-11 text-black w-1/3 outline-none "
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
      </section>
    </>
  );
};
export default Subscribe;
