import { FC, useCallback, useEffect, useState } from "react";
import LeftArrow from "../../assets/icons/LeftArrow";
import RightArrow from "../../assets/icons/RightArrow";
import styles from "./Hero.module.css";
import "animate.css";
import TextButton from "../Buttons/TextButton";

// image import
import bg1 from "../../assets/bg-img/curly_hair_white-1.jpg";
import bg2 from "../../assets/bg-img/curly_hair_girl-1.jpg";
import bg3 from "../../assets/bg-img/monigote.jpg";

const sliders = [
  {
    id: 1,
    bgImg: bg1,
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: "true",
  },
  {
    id: 2,
    bgImg: bg2,
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: "false",
  },
  {
    id: 3,
    bgImg: bg3,
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: "false",
  },
];
// animate__fadeIn
// animate__lightSpeedInRight
const HeroSection: FC = () => {
  const [arrIndex, setArrIndex] = useState(0);
  // const [animate, setAnimate] = useState("animate__fadeIn");

  const sectionHeight = "720px";

  const handleNext = useCallback(() => {
    if (arrIndex === sliders.length - 1) {
      setArrIndex(0);
    } else {
      setArrIndex((prevState) => prevState + 1);
      // setAnimate("animate__fadeIn");
    }
  }, [arrIndex]);

  const handlePrev = () => {
    if (arrIndex === 0) {
      setArrIndex(sliders.length - 1);
    } else {
      setArrIndex((prevState) => prevState - 1);
      // setAnimate("animate__lightSpeedInLeft");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <div style={{ height: "calc(100vh - 8rem)" }}>
      <div className="w-full bg-gray500 flex justify-center top-8 z-20 absolute">
        <div className="flex flex-1 overflow-hidden relative">
          <div className="slide-section w-full h-full flex">
            <div className="each-slide relative h-full w-full">
              {/* Loop Start */}
              {sliders.map((slider, index) => {
                return (
                  index === arrIndex && (
                    <div
                      key={slider.id}
                      style={{
                        backgroundImage: `url(${slider.bgImg})`,
                        height: sectionHeight,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        opacity: "0.4",
                      }}
                      className="animate__animated animate__fadeIn"
                    >
                      <div
                        className={`${
                          slider.rightText === "true"
                            ? styles.rightTextSection
                            : styles.leftTextSection
                        }`}
                      >
                        <span className={styles.subtitle}>
                          {slider.subtitle}
                        </span>
                        <h1
                          className={`${styles.title} ${
                            slider.rightText === "true" && "text-right"
                          }`}
                        >
                          {slider.titleUp} <br />
                          {slider.titleDown}
                        </h1>
                        <TextButton value="Shop Now" />
                      </div>
                    </div>
                  )
                );
              })}
              {/* Loop End */}
            </div>
          </div>
          <span
            className="absolute top-80 left-5 hover:bg-gray300 rounded-full p-2 cursor-pointer outline-none"
            onClick={handlePrev}
          >
            <LeftArrow />
          </span>
          <span
            className="absolute top-80 right-5 hover:bg-gray300 rounded-full p-2 cursor-pointer outline-none"
            onClick={handleNext}
          >
            <RightArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
