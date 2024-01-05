import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/HeroSection/Intro";
import { title } from "process";
import Feature from "../../components/Features/Feature";
import Partners from "../../components/Partners/Partners";
import Toggle from "../../components/SwitchButton/SwitchButton";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChange, setIsChange] = useState(true);

  return (
    <>
      <main className={`${styles.main}`}>
        {/* <div dir="rtl"> */}
        <div
          dir={`${isChange ? "ltr" : "rtl"}`}
          // onClick={() => setIsChange(!isChange)}
        >
          <div className={styles.background}>
            <Navbar />
            <Intro Change={isChange} SetChange={setIsChange} />
            <Feature />
            <Partners />
          </div>
        </div>

        {/* </div> */}
      </main>
    </>
  );
}
