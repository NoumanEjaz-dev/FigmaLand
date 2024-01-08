import React from "react";
import Buttons from "../Buttons/Buttons";
// import styles from "../styles/Home.module.css";
import styles from "../../src/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Togglebtn from "../../src/img/Togglebtn.png";
import Togglebutton from "../../components/SwitchButton/SwitchButton";

const Intro = ({ Change, SetChange }) => {
  console.log("hello", Change);

  const changetoggle = () => {
    SetChange(!Change);
  };

  return (
    <>
      <section className={styles.Intro}>
        <div className="screen-bg">
          <div className={`${styles.Heading} items-center pt-64  text-center`}>
            <h1
              className={`${styles.HeroHeading} xl:w-1/4 md:w-1/2 sm:w-1/2 m-auto  lg:text-6xl text-white font-light text-center mb-8`}
            >
              The best products start with Figma
            </h1>
            <p
              className={`${styles.heroPara} text-center text-white xl:w-1/3 sm:w-1/2 m-auto font-normal`}
            >
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
            <p
              className={`${styles.heroParaSm} text-center  text-white sm:hidden m-auto font-normal`}
            >
              {" "}
              Most calendars are designed for teams.{" "}
            </p>
            <div className={`${styles.buttonSection} mt-10 lg:mt-20 pt-5`}>
              <Buttons title="Show/Hide Features" className={styles.btn} />
              <Buttons title="Show/Hide Partners" className={styles.btn} />
              <div className=" mt-3 flex justify-center text-gray-50">
                <Image
                  src={Togglebtn}
                  alt="toggle"
                  className="cursor-pointer"
                  priority
                />
                <p className=" ml-3">Show Both</p>
              </div>
              <div
                className={`${styles.SwitchButton} pt-2 flex justify-center text-gray-50`}
              >
                <p className="mr-3">RTL</p>

                <Togglebutton Change={Change} onToggle={changetoggle} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
