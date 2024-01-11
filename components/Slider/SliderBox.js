import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrowIcon from "../../public/image/arrow-left.png";
import rightArrowIcon from "../../public/image/arrowRight.png";
import styles from "../../src/styles/Home.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

// ... (Your other imports and components)

// Updated SampleNextArrow component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.arrow}
      style={{
        ...style,
        fontSize: "50px",
        cursor: "pointer",
        // maringTop: "100px",

        // color: "black !important", // Set arrow color to black
        // fontSize: "30px !important", // Set arrow font size to 30px
        // textAlign: "end",
        // marginTop: "285px",
        // width: "80px",
        // cursor: "pointer",
        // direction: "rtl",
        position: "absolute",
      }}
      onClick={onClick}
    >
      {/* <AiOutlineArrowLeft
        color="gray"
        className="arrowIcons"
        style={{ marginTop: "13px" }}
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="61"
        viewBox="0 0 60 61"
        fill="none"
      >
        <path
          d="M58.2818 28.7243H9.38636L20.6358 17.4749L17.9842 14.8233L2.20804 30.5994L17.9842 46.3756L20.6358 43.724L9.38612 32.4743H58.2818V28.7243Z"
          fill="#636363"
        />
      </svg>
    </div>
  );
}

// Updated SamplePrevArrow component
function SamplePrevArrow(props) {
  const isSmallScreen = () => window.innerWidth < 1024;

  const { className, style, onClick } = props;
  return (
    <div
      className={styles.arrow}
      style={{
        ...style,

        float: "right",
        fontSize: "50px",
        width: "20px",
        cursor: "pointer",
        // width: "70px",
        position: "relative",
        right: "50px",
        top: "660px",
      }}
      onClick={onClick}
    >
      {/* <AiOutlineArrowRight color="gray" className="arrowIcons" /> */}
      <svg
        color="gray"
        className="arrowIcons"
        // style={{ marginTop: "13px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="33"
        viewBox="0 0 57 33"
        fill="none"
      >
        <path
          d="M0.718185 18.4749L49.6136 18.4749L38.3642 29.7243L41.0158 32.3759L56.7919 16.5998L41.0158 0.823656L38.3642 3.47525L49.6138 14.7249L0.718185 14.7249V18.4749Z"
          fill="#636363"
        />
      </svg>
    </div>
  );
}

const SliderBox = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return <div className={`${styles.customDot} `}></div>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-3/4 m-auto pb-36 ">
        <h1 className={`${styles.SliderHeading} text-center`}>FEATURED VIDEOS</h1>
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <div className="flex justify-center m-2 items-center">
                  <Image
                    src={d.img}
                    alt="image1"
                    width="400px"
                    height="400px"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-5 p-4">
                  <h2
                    className={`${styles.TitleName} text-3xl font-bold text-center`}
                  >
                    {" "}
                    {d.name}
                  </h2>
                  <p className={`${styles.InvitedText} text-center`}>
                    {d.title}
                  </p>
                  <p className={`${styles.sliderText} text-center m-auto`}>
                    {d.Text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    name: `Warm Invitation card-1`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation card-2`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation card-3`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation card-4`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation card-5`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation card-6`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
];

export default SliderBox;
