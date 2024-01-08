import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrowIcon from "../../public/image/arrow-left.png";
import rightArrowIcon from "../../public/image/arrowRight.png";
import "../../src/styles/Home.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "100%",
        textAlign: "end",
        marginTop: "300px",
      }}
      // onClick={onClick}
    >
      <Image
        src={rightArrowIcon}
        alt="arrowIcon"
        width="80px"
        height="60px"
        onClick={onClick}
      />
      {/* <Image src={rightArrowIcon} alt="arrowIcon" width="80px" height="60px" /> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{
        ...style,
        // display: "block",
        marginTop: "610px",
        // background: "",
        position: "absolute",
        cursor: "pointer",
        zIndex: "1",
      }}
    >
      <Image
        src={leftArrowIcon}
        alt="arrowIcon"
        width="80px"
        height="60px"
        onClick={onClick}
      />
    </div>
  );
}

const SliderBox = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    src={d.img}
                    alt="image1"
                    width="400px"
                    height="400px"
                  />
                </div>

                <div className="flex flex-col justify-center items-center gap-5 p-4">
                  <h2 className=" text-3xl font-bold">{d.name}</h2>
                  <p>{d.title}</p>
                  <p className="text-center w-96 m-auto">{d.Text}</p>
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
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
  {
    name: `Warm Invitation`,
    img: `/image/sliderImage.png`,
    title: `You’re invited to SIGNAL 2021`,
    Text: `Join us for the digital engagement event of the year bringing together 50,000+ developers, product leaders and visionaries to talk about the future of customer engagement.. `,
  },
];

export default SliderBox;
