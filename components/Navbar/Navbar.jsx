import React, { useState, useEffect } from "react";
import Link from "next/link";
// import Logo from "../src/img/dark.png";
import Logo from "../../src/img/dark.png";
import Image from "next/image";
import Lindedin from "../../src/img/linkedin.png";
import Facebook from "../../src/img/facebook.png";
import Twitter from "../../src/img/Twitter.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../../src/styles/Home.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} fixed w-full`}
        style={{
          backgroundColor: scrollPosition > 0 ? "#60a5fa" : "transparent",
          height: "120px",
        }}
      >
        <div
          className={`${styles.NavbarContainer} flex justify-evenly items-center text-white h-full px-6 pt-14`}
        >
          <div className="flex">
            <div className={`${styles.logoSm} `}>
              <Link href="/">
                <Image src={Logo} alt="logo-1" priority />
              </Link>
            </div>
            <ul className="hidden md:flex items-center">
              <Link href="/">
                <li
                  className={`${styles.list} nav-items ml-4 font-sans text-base hover:border-b`}
                >
                  Home
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${styles.list} nav-items ml-8 font-sans text-base hover:border-b`}
                >
                  Product
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${styles.list} nav-items ml-8 font-sans text-base hover:border-b`}
                >
                  Pricing
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${styles.list} nav-items ml-8 font-sans text-base hover:border-b`}
                >
                  About{" "}
                </li>
              </Link>
              <Link href="/">
                <li
                  className={`${styles.list} nav-items ml-8 font-sans text-base hover:border-b`}
                >
                  Contact
                </li>
              </Link>
              <div className={`${styles.logoCenter}`}>
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="logo-end"
                    className="cursor-pointer ml-10"
                    priority
                  />
                </Link>
              </div>
            </ul>
          </div>
          <div className=" hidden md:flex">
            <Link href="/">
              <Image
                src={Twitter}
                alt="twitter"
                className="cursor-pointer ml-4"
                priority
              />
            </Link>
            <li class={styles.li}></li>
            <Link href="/">
              <Image
                src={Facebook}
                alt="logo"
                className="cursor-pointer ml-6"
                priority
              />
            </Link>
            <li className={styles.li}></li>

            <Link href="/">
              <Image
                src={Lindedin}
                alt="logo"
                className="cursor-pointer ml-6"
                priority
              />
            </Link>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
            {/* <AiOutlineMenu size={25} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
            >
              <path
                d="M6.66663 8H33.3333V10.6667H6.66663V8ZM13.3333 14.6667H33.3333V17.3333H13.3333V14.6667ZM21.6666 21.3333H33.3333V24H21.6666V21.3333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          // w-[65%]
          // fixed left-[-100%] top-0 p-10 ease-in duration-500
          className={
            menuOpen
              ? "fixed left-0 top-0 w-72  md:hidden h-screen bg-blue-400 p-10 ease-in duration-500"
              : "fixed -left-56 top-0 p-10 ease-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} className="text-white" />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul className="text-white">
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer font-sans"
                >
                  Home
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer font-sans"
                >
                  Product
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer font-sans"
                >
                  Pricing
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer font-sans"
                >
                  About
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer font-sans"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-row justify-start pt-18 items-cente">
            <Link href="/">
              <Image
                src={Facebook}
                alt="facebook"
                className="cursor-pointer ml-2"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                src={Lindedin}
                alt="Linkedin"
                className="cursor-pointer ml-2"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                src={Twitter}
                alt="Twitter"
                className="cursor-pointer ml-2 "
                priority
              />
            </Link>
          </div>
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width="170"
              className="cursor-pointer md:hidden"
              priority
            />
          </Link>
        </div>
      </nav>
      {/*  */}
      {/* <div className="text-center font-light text-white">
        <h1>The best products start with Figma</h1>
      </div> */}
      {/* <div className="text-center font-light text-white">
        <h1>The best products start with Figma</h1>
      </div> */}
    </>
  );
};

export default Navbar;
