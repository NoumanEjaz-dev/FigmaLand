import React from "react";
import Image from "next/image";
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
// sm screen //
import Icon1 from "../../src/img/TilesGroup/SmScreen/1 (1).png";
import Icon2 from "../../src/img/TilesGroup/SmScreen/1 (2).png";
import Icon3 from "../../src/img/TilesGroup/SmScreen/1 (3).png";
import Icon4 from "../../src/img/TilesGroup/SmScreen/1 (4).png";
import Icon5 from "../../src/img/TilesGroup/SmScreen/1 (5).png";
import Icon6 from "../../src/img/TilesGroup/SmScreen/1 (6).png";
import Icon7 from "../../src/img/TilesGroup/SmScreen/1 (7).png";
import Icon8 from "../../src/img/TilesGroup/SmScreen/1 (8).png";
import Icon9 from "../../src/img/TilesGroup/SmScreen/1 (9).png";
import Icon10 from "../../src/img/TilesGroup/SmScreen/heath-Services.png";
// sm screen //
import Buttons from "../Buttons/Buttons";
import TilesGroupStyle from "./TilesGroup.module.css";

const TilesGroup = () => {
  return (
    <>
      <div className="Tiles pt-10">
        <section
          // className={`${styles.PartnersSection}  text-gray-600 body-font`}
          className={`${TilesGroupStyle.TilesSection}   text-gray-600 body-font  `}
        >
          <div
            className={`${TilesGroupStyle.TilesContainer}    pt-9 mx-auto text-center w-4/5 hidden md:hidden  lg:block shadow pb-16 p-2 `}
          >
            <div
              className={`${TilesGroupStyle.TilesPara} flex justify-between text-center w-4/5 m-auto pt-8 pb-14 pr-5 pl-5 `}
            >
              <h1 className=" uppercase font-sans font-bold ">Our Agencies</h1>
              <p
                className={`${TilesGroupStyle.HowWeWork} capitalize font-sans font-semibold flex items-center  `}
              >
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
        <section
          className={`${TilesGroupStyle.smScreen}  sm:block lg:hidden shadow p-5 md:w-3/5 w-5/5  m-auto`}
        >
          <div
            className={`${TilesGroupStyle.container}  lg:w-1/4 bg-white p-7 `}
          >
            <div
              className={`${TilesGroupStyle.HeadSection} flex justify-between `}
            >
              <h1 className=" uppercase font-sans font-bold ">Our Agencies</h1>
              <p
                className={`${TilesGroupStyle.arrowIcon}   capitalize font-sans font-semibold flex items-center `}
              >
                See More
                <svg
                  className={`${TilesGroupStyle.svgImg}  pt-1 ml-2 font-bold `}
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
            </div>
            <div className={`${TilesGroupStyle.TilesItems}  `}>
              <ul>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2  ">
                  <Image src={Icon2} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga khan Academies
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon3} alt="Icon3" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga khan Agency For Habitat
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon4} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5">
                    Aga Khan Agency for Microfinance
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon8} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga Khan Education Servicess
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon1} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga Khan Foundation
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon5} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5">
                    Aga Khan Fund for Economic Development
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon10} alt="Icon1" width="43px" />

                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga Khan Health Services
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2">
                  <Image src={Icon9} alt="Icon1" width="43px" />
                  <p className="pl-3 text-sm font-medium ps-5 capitalize">
                    Aga Khan Trust for Culture
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3 border-b-2  ">
                  <Image src={Icon6} alt="Icon1" width="43px" />
                  <p className="pl-2 text-sm font-medium ps-4 capitalize">
                    Aga Khan University
                  </p>
                </li>
                <li className=" no-underline flex text-center items-center pl-0 p-4 pb-3  ">
                  <Image src={Icon7} alt="Icon1" width="43px" />
                  <p className="pl-2 text-sm font-medium ps-4 capitalize">
                    University of Central Asia
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* this section should display at md and sm screen 3-partners */}
    </>
  );
};

export default TilesGroup;
