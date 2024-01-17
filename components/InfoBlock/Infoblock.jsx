import React from "react";
import InfoBlockStyles from "./InfoBlock.module.css";

const Infoblock = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 xl:w-7/12 lg:w-9/12 md:w-11/12 mx-auto">
          <h1 class="font-bold text-xl uppercase title-font text-gray-700">
            Our work
          </h1>
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-80  md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                {/* <h1 class="font-bold text-xl uppercase title-font text-gray-700">
                  Our work
                </h1> */}
                <span class="mt-1 text-black text-base font-medium uppercase ">
                  Early Childhood Development
                </span>
              </div>
              <div class="md:flex-grow">
                {/* <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2> */}
                <p className={`${InfoBlockStyles.InfoPara} leading-relaxed`}>
                  Globally, the AKDN’s activities in early childhood development
                  provide 750,000 children aged pre-natal-8 with quality early
                  learning opportunities, annually.
                </p>
                <a
                  className={`${InfoBlockStyles.SeeMore} inline-flex items-center mt-4`}
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#084C61"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="lg:w-80  md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="mt-1 text-black text-base font-medium uppercase ">
                  Primary & Secondary{" "}
                </span>
              </div>
              <div class="md:flex-grow">
                <p className={`${InfoBlockStyles.InfoPara}`}>
                  Globally, the AKDN’s activities in early childhood development
                  provide 750,000 children aged pre-natal-8 with quality early
                  learning opportunities, annually.
                </p>
                <a
                  className={`${InfoBlockStyles.SeeMore} inline-flex items-center mt-4`}
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#084C61"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Infoblock;
