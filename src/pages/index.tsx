import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Feature from "../../components/Features/Feature";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import SliderBox from "../../components/Slider/SliderBox";
import Subscribe from "../../components/Subscribe/Subscribe";
import Infoblock from "../../components/InfoBlock/Infoblock";
import TilesGroup from "../../components/TilesGroup/TilesGroup";

export default function Home() {
  const [isChange, setIsChange] = useState(true);

  return (
    <>
      <main className={`${styles.main} `}>
        <div dir={`${isChange ? "ltr" : "rtl"}`}>
          <div className={styles.background}>
            <Navbar Change={isChange} />
            <HeroSection Change={isChange} SetChange={setIsChange} />
            <Feature />
            <Partners />
            <SliderBox />
            <Footer />
            <Infoblock />
            <TilesGroup />
          </div>
        </div>

        {/* <Subscribe /> */}

        {/* <TilesGroup /> */}

        {/* </div> */}
      </main>
    </>
  );
}
