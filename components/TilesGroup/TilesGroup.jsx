import React from "react";
import Image from "next/image";
// import googleImage from "../../src/img/Partners/google.png";
// import amazoneImage from "../../src/img/Partners/amazon.png";
// import dropboxImage from "../../src/img/Partners/dropbox.png";
// import microsoftImage from "../../src/img/Partners/microsoft.png";
// import uberImage from "../../src/img/Partners/uber.png";

import Img1 from "../../src/img/TilesGroup/AKA-1.png";
import Img2 from "../../src/img/TilesGroup/AKA-2.png";
import Img3 from "../../src/img/TilesGroup/AKA-3.png";
import Img4 from "../../src/img/TilesGroup/AKA-4.png";
import Img5 from "../../src/img/TilesGroup/AKA-5.png";
import Img6 from "../../src/img/TilesGroup/AKA-6.png";
import Img7 from "../../src/img/TilesGroup/AKA-7.png";
import Img8 from "../../src/img/TilesGroup/AKA-8.png";
import Img9 from "../../src/img/TilesGroup/AKA-9.png";
import Img10 from "../../src/img/TilesGroup/AKA.png";
import Buttons from "../Buttons/Buttons";
import TilesGroupStyle from "./TilesGroup.module.css";

const TilesGroup = () => {
  return (
    <>
      <div className="Partners pt-10">
        <section
          // className={`${styles.PartnersSection}  text-gray-600 body-font`}
          className={`${TilesGroupStyle.PartnersSection}   text-gray-600 body-font`}
        >
          <div class="container pt-16 mx-auto text-center w-4/5 ">
            <div
              className={`${TilesGroupStyle.PartnersPara} flex justify-between text-center pt-2 w-4/5 m-auto p-12 `}
            >
              <h1 className=" uppercase font-sans font-bold ">Our Agencies</h1>
              <p className=" capitalize font-sans font-semibold flex items-center ">
                How we Work
                <svg
                  className=" pt-1 ml-2 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#084C61"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>{" "}
            <div class="flex flex-wrap -m-4 justify-center pb-14">
              {/* lg:w-1/4 md:w-1/2 */}
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img1} alt="googleIcon" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img2} alt="amazone" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img3} alt="microsoft" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img4} alt="uber" />
                </div>
                {/*  */}
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img5} alt="uber" />
                </div>
                {/*  */}
              </div>
            </div>
            {/* section-section partners */}
            <div class="flex flex-wrap -m-4 justify-center">
              <div class="">
                <div>
                  <Image src={Img6} alt="dropbox" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img7} alt="google" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img8} alt="uber" />
                </div>
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img9} alt="amazone" />
                </div>
                {/*  */}
              </div>
              <div class="">
                <div class="h-full flex flex-col items-center text-center">
                  <Image src={Img10} alt="amazone" />
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* this section should display at md and sm screen 3-partners */}
      <section
        className={`${TilesGroupStyle.Clients} lg:w-1/1 md:w-1/1  text-gray-600 body-font`}
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={Img1}
                  alt="googleIcon"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={Img2}
                  alt="microsoft"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <Image
                  src={Img3}
                  alt="amazone"
                  height={"160px"}
                  width={"280px"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TilesGroup;
