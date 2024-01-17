import React from "react";
import Buttons from "../Buttons/Buttons";
import Image from "next/image";
import Link from "next/link";
import Togglebtn from "../../src/img/Togglebtn.png";
import Togglebutton from "../SwitchButton/SwitchButton";
import HeroStyle from "./HeroStyle.module.css";

const HeroSection = ({ Change, SetChange }) => {
  console.log("hello", Change);

  const changetoggle = () => {
    SetChange(!Change);
  };

  return (
    <>
      <section className={HeroStyle.Intro}>
        <div className="screen-bg">
          <div
            className={`${HeroStyle.Heading} items-center pt-64  text-center`}
          >
            {/* xl:w-1/3 lg:w-1/3  md:w-1/2 sm:w-1/2  */}
            <h1
              className={`${HeroStyle.HeroHeading} m-auto  lg:text-6xl text-white font-light text-center mb-8`}
            >
              The best products start with Figma
            </h1>
            <p
              className={`${HeroStyle.heroPara} text-center text-white xl:w-1/3 md:w-1/2 m-auto font-normal`}
            >
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
            <p
              className={`${HeroStyle.heroParaSm} text-center  text-white m-auto font-normal`}
            >
              {" "}
              Most calendars are designed for teams.{" "}
            </p>
            <div className={`${HeroStyle.buttonSection} mt-10 lg:mt-20 pt-5`}>
              <Buttons
                title="Show/Hide Features"
                color="#2091F9"
                className={HeroStyle.btn}
              />
              <Buttons
                title="Show/Hide Partners"
                color="#2091F9"
                className={HeroStyle.btn}
              />
              <div className=" mt-3 flex justify-center text-gray-50">
                <Image
                  src={Togglebtn}
                  alt="toggle"
                  className="cursor-pointer"
                  priority
                />
                <p className=" ml-2 ps-2 ">Show Both</p>
              </div>
              <div
                className={`${HeroStyle.SwitchButton} pt-2 flex justify-center text-gray-50`}
              >
                <p className={`${HeroStyle.rtl_btn} mr-3 pe-3 `}>RTL</p>

                <Togglebutton Change={Change} onToggle={changetoggle} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
