import React from "react";
import Image from "next/image";
import googleImage from "../../src/img/Partners/google.png";
import amazoneImage from "../../src/img/Partners/amazon.png";
import dropboxImage from "../../src/img/Partners/dropbox.png";
import microsoftImage from "../../src/img/Partners/microsoft.png";
import uberImage from "../../src/img/Partners/uber.png";
import styles from "../../src/styles/Home.module.css";
import Buttons from "../Buttons/Buttons";
import PartnerStyles from "./Partners.module.css";

const Partners = () => {
  return (
    <>
      <div className="Partners">
        <h1
          className={`${PartnerStyles.PartnersHeading} text-center pt-20 text-5xl font-normal`}
        >
          Partners
        </h1>
        <p
          className={`${PartnerStyles.PartnersPara} text-center pt-2 text-xl text-black-400 leading-10 xl:w-1/5 md:w-1/2 sm:w-1/2 m-auto`}
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>{" "}
        <section
          // className={`${styles.PartnersSection}  text-gray-600 body-font`}
          className={`${PartnerStyles.PartnersSection}   text-gray-600 body-font`}
        >
          <div class="container  py-24 mx-auto text-center ">
            <div class="flex flex-wrap -m-4 justify-center">
              {/* lg:w-1/4 md:w-1/2 */}
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={googleImage} alt="googleIcon" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={amazoneImage} alt="amazone" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={microsoftImage} alt="microsoft" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={uberImage} alt="uber" />
                </div>
                {/*  */}
              </div>
            </div>
            {/* section-section partners */}
            <div class="flex flex-wrap -m-4 justify-center">
              <div class="">
                <div>
                  <Image src={dropboxImage} alt="dropbox" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={googleImage} alt="google" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={uberImage} alt="uber" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={amazoneImage} alt="amazone" />
                </div>
                {/*  */}
              </div>
            </div>
            <div className={`${styles.Tryforfree} text-center mt-20 `}>
              <Buttons
                title="Try For Free"
                color="#2091F9"
                padding="50px"
                paddingtopbottom="16px"
                width="236px"
              />
            </div>
          </div>
        </section>
      </div>

      {/* this section should display at md and sm screen 3-partners */}
      <section
        className={`${PartnerStyles.Clients} lg:w-1/1 md:w-1/1  text-gray-600 body-font`}
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={googleImage}
                  alt="googleIcon"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={microsoftImage}
                  alt="microsoft"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={amazoneImage}
                  alt="amazone"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.Tryforfree} text-center mt-20 `}>
            <Buttons
              title="Try For Free"
              color="#2091F9"
              padding="50px"
              paddingtopbottom="16px"
              width="236px"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
