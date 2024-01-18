import React from "react";
import Icon1 from "../../src/img/feature-icons/mdi_brush.svg";
import Icon2 from "../../src/img/feature-icons/mdi_draw.svg";
import Icon3 from "../../src/img/feature-icons/mdi_drawing.svg";
import Image from "next/image";
import styles from "../../src/styles/Home.module.css";
// import videofile from "../../src/video/videotest.mp4";
import FeatureStlye from "./FeatureStyle.module.css";

const Feature = () => {
  return (
    <>
      <div className="Features-Section pb-10">
        <h1
          className={`${FeatureStlye.FeatureHeading} text-center pt-20 text-5xl font-normal gap-7`}
        >
          Features
        </h1>
        <p
          className={`${FeatureStlye.FeaturesPara} text-center pt-2 text-xl text-black-400 leading-10 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 m-auto`}
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <p
          className={`${FeatureStlye.FeaturesParaSm} sm:hidden text-center pt-2 text-xl text-black-400 leading-10 xl:w-1/4 lg:w-1/4 md:w-1/3 sm:w-1/2 m-auto`}
        >
          Most calendars are designed for teams.
        </p>
        {/*  */}
        <section
          className={`${FeatureStlye.container} block sm:hidden text-gray-600 body-font pt-10`}
        >
          <div className="mx-auto flex flex-col w-11/12 justify-center items-center">
            <video
              className={`${FeatureStlye.video} block sm:hidden`}
              controls
              width="1100"
              height="660"
            >
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Any additional content here */}
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div className={`${FeatureStlye.ContainerBox}  px-5 py-20 mx-auto`}>
            <div
              className={`${FeatureStlye.services} flex flex-wrap md:w-7/12 lg:w-8/12 xl:w-7/12 w-10/12 m-auto`}
            >
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-7">
                <div class="h-full text-center">
                  <Image src={Icon3} alt="Icon3" />

                  <h1
                    className={`${FeatureStlye.FeatureService}  text-2xl text-black pb-3`}
                  >
                    OpenType features Variable fonts{" "}
                  </h1>

                  <p
                    className={`${FeatureStlye.FeatureServicePara} leading-7 text-black`}
                  >
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-7">
                <div class="h-full text-center">
                  <Image src={Icon2} alt="Icon2" />
                  <h1
                    className={`${FeatureStlye.FeatureDesign} text-2xl text-black pb-3`}
                  >
                    Design with real data{" "}
                  </h1>

                  <p
                    className={`${FeatureStlye.FeatureServicePara} leading-7 text-black`}
                  >
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/3 lg:mb-0 p-6 ">
                <div class="h-full text-center">
                  <Image src={Icon1} alt="Icon1" />
                  <h1
                    className={`${FeatureStlye.FeatureService}  text-2xl text-black pb-3`}
                  >
                    Fastests ways to take action{" "}
                  </h1>

                  <p
                    className={`${FeatureStlye.FeatureServicePara} leading-7 text-black`}
                  >
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-col w-9/12 justify-center items-center ">
            <video className={styles.video} controls width="1100" height="660">
              <source src="path" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section> */}
        <section className="text-gray-600 body-font">
          <div
            className={`${FeatureStlye.VideoContainer}  container mx-auto flex flex-col w-9/12 justify-center items-center`}
          >
            <video
              className={`${FeatureStlye.video} hidden sm:block `}
              controls
              width="1100"
              height="660"
            >
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Any additional content here */}
          </div>
        </section>
      </div>
    </>
  );
};
export default Feature;
