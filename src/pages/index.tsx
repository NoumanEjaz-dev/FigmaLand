import Head from "next/head";
import Link from "next/link";
// import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import styles from "../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/HeroSection/Intro";
import { title } from "process";
import Feature from "../../components/Features/Feature";
import Partners from "../../components/Partners/Partners";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.background}>
          <Navbar />
          <Intro />
          <Feature />
          <Partners />
        </div>
      </main>
    </>
  );
}
