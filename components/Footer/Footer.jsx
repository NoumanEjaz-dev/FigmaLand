import React from "react";
import Image from "next/image";
import facebook from "../../src/img/Twitter.png";
import Link from "next/link";
import styles from "../../src/styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <footer class="text-white body-font bg-gray-800">
        <div class="container lg:w-8/12 m-auto px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class=" w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 ">
            <a class="flex title-font font-normal items-center md:justify-start justify-center text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M23 27.1366C27.2282 27.1366 30.6667 23.6981 30.6667 19.4699C30.6667 15.2417 27.2282 11.8032 23 11.8032C18.7718 11.8032 15.3333 15.2417 15.3333 19.4699C15.3333 23.6981 18.7718 27.1366 23 27.1366ZM23 15.6366C25.1141 15.6366 26.8333 17.3558 26.8333 19.4699C26.8333 21.584 25.1141 23.3032 23 23.3032C20.8859 23.3032 19.1667 21.584 19.1667 19.4699C19.1667 17.3558 20.8859 15.6366 23 15.6366Z"
                  fill="white"
                />
                <path
                  d="M21.8884 42.1134C22.2128 42.3451 22.6015 42.4696 23.0001 42.4696C23.3987 42.4696 23.7874 42.3451 24.1117 42.1134C24.6944 41.7013 38.389 31.8133 38.3334 19.4699C38.3334 11.0155 31.4545 4.1366 23.0001 4.1366C14.5457 4.1366 7.66675 11.0155 7.66675 19.4603C7.61117 31.8133 21.3057 41.7013 21.8884 42.1134ZM23.0001 7.96993C29.3423 7.96993 34.5001 13.1277 34.5001 19.4795C34.5403 27.9857 26.0897 35.6236 23.0001 38.1287C19.9123 35.6217 11.4598 27.9818 11.5001 19.4699C11.5001 13.1277 16.6578 7.96993 23.0001 7.96993Z"
                  fill="white"
                />
              </svg>
              <span class="ml-3 text-base ">
                7480 Mockingbird Hill undefined{" "}
              </span>
            </a>
            {/* mobile-number section */}
            <a
              className={`${styles.contact} flex title-font font-normal items-center md:justify-start justify-center text-white`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
              >
                <path
                  d="M23.3333 1.7616H11.6667C9.24584 1.7616 7.29167 3.71576 7.29167 6.1366V29.4699C7.29167 31.8908 9.24584 33.8449 11.6667 33.8449H23.3333C25.7542 33.8449 27.7083 31.8908 27.7083 29.4699V6.1366C27.7083 3.71576 25.7542 1.7616 23.3333 1.7616ZM20.4167 30.9283H14.5833V29.4699H20.4167V30.9283ZM25.1563 26.5533H9.84376V6.1366H25.1563V26.5533Z"
                  fill="white"
                />
              </svg>

              <span class="ml-3 text-base">(239) 555-0108</span>
            </a>
            {/*  */}
            <a
              className={`${styles.mediaIcons} flex title-font font-normal items-center md:justify-start justify-center text-white mt-6`}
            >
              <svg
                className="mr-4"
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
              >
                <path
                  d="M37.1449 10.4819C35.9201 11.0103 34.5873 11.3905 33.2144 11.5386C34.6398 10.6918 35.7072 9.35399 36.2163 7.77617C34.8788 8.57184 33.4135 9.12978 31.8855 9.42524C31.2469 8.7425 30.4745 8.1986 29.6165 7.82743C28.7584 7.45626 27.8332 7.26577 26.8983 7.26784C23.1158 7.26784 20.0739 10.3338 20.0739 14.0963C20.0739 14.6246 20.1379 15.153 20.242 15.6613C14.5783 15.3651 9.52702 12.6593 6.16884 8.51665C5.55694 9.56179 5.23629 10.7518 5.24023 11.9629C5.24023 14.3324 6.44502 16.4218 8.28221 17.6506C7.19952 17.6079 6.14219 17.3103 5.19621 16.782V16.8661C5.19621 20.1842 7.54173 22.934 10.6678 23.5664C10.0808 23.7189 9.47701 23.7969 8.87059 23.7986C8.4263 23.7986 8.00603 23.7545 7.58175 23.6945C8.44631 26.4003 10.9639 28.3655 13.9619 28.4296C11.6164 30.2668 8.67846 31.3475 5.48839 31.3475C4.91602 31.3475 4.38768 31.3275 3.83932 31.2634C6.86529 33.2047 10.4556 34.3254 14.3221 34.3254C26.8743 34.3254 33.7427 23.9266 33.7427 14.9008C33.7427 14.6046 33.7427 14.3084 33.7227 14.0122C35.0516 13.0396 36.2163 11.8348 37.1449 10.4819Z"
                  fill="white"
                />
              </svg>
              {/*  */}
              <svg
                className="mr-4"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M36.2103 4.78613H6.7512C6.04274 4.78613 5.47037 5.3585 5.47037 6.06696V35.5261C5.47037 36.2345 6.04274 36.8069 6.7512 36.8069H36.2103C36.9188 36.8069 37.4911 36.2345 37.4911 35.5261V6.06696C37.4911 5.3585 36.9188 4.78613 36.2103 4.78613ZM32.5119 14.1322H29.9543C27.949 14.1322 27.5607 15.0848 27.5607 16.4857V19.5717H32.3478L31.7234 24.4029H27.5607V36.8069H22.5695V24.4069H18.3948V19.5717H22.5695V16.0094C22.5695 11.8747 25.0951 9.62127 28.7855 9.62127C30.5546 9.62127 32.0716 9.75336 32.5159 9.8134V14.1322H32.5119Z"
                  fill="white"
                />
              </svg>
              {/*  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M36.1981 4.78613H6.73898C6.03052 4.78613 5.45815 5.3585 5.45815 6.06696V35.5261C5.45815 36.2345 6.03052 36.8069 6.73898 36.8069H36.1981C36.9066 36.8069 37.4789 36.2345 37.4789 35.5261V6.06696C37.4789 5.3585 36.9066 4.78613 36.1981 4.78613ZM14.9563 32.0718H10.2052V16.7899H14.9563V32.0718ZM12.5828 14.7006C12.0381 14.7006 11.5057 14.5391 11.0529 14.2365C10.6 13.9339 10.247 13.5038 10.0386 13.0006C9.83018 12.4974 9.77565 11.9437 9.8819 11.4095C9.98816 10.8754 10.2504 10.3847 10.6356 9.99956C11.0207 9.61443 11.5114 9.35216 12.0455 9.24591C12.5797 9.13965 13.1334 9.19418 13.6366 9.40261C14.1398 9.61104 14.5699 9.964 14.8725 10.4169C15.1751 10.8697 15.3366 11.4021 15.3366 11.9468C15.3326 13.4678 14.0998 14.7006 12.5828 14.7006ZM32.7439 32.0718H27.9968V24.639C27.9968 22.8659 27.9648 20.5884 25.5272 20.5884C23.0576 20.5884 22.6773 22.5176 22.6773 24.5109V32.0718H17.9342V16.7899H22.4892V18.8793H22.5532C23.1857 17.6785 24.7347 16.4097 27.0482 16.4097C31.8593 16.4097 32.7439 19.5757 32.7439 23.6904V32.0718Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div class="flex-grow flex flex-wrap  -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-normal text-white tracking-widest mb-3 text-xl">
                Pages
              </h2>
              <nav class="list-none mb-16 ">
                <li>
                  <a class="text-white leading-10">Home</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Product</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Pricing</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">About</a>
                </li>
                <li>
                  <a class="text-white leading-10  ">Contact</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-normal text-white tracking-widest mb-3 text-xl">
                Tomothy{" "}
              </h2>
              <nav class="list-none mb-16">
                <li>
                  <a class="text-white leading-10 ">Eleanor Edwards</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Ted Robertson</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Annette Russell</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Jennie Mckinney</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Gloria Richards</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-normal text-white tracking-widest mb-3 text-xl">
                Jane Black
              </h2>
              <nav class="list-none mb-16">
                <li>
                  <a class="text-white leading-10 ">Philip Jones</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Product</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Colleen Russell</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Marvin Hawkins</a>
                </li>
                <li>
                  <a class="text-white leading-10 ">Bruce Simmmons</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
