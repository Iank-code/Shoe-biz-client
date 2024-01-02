import React from "react";
import Image from "next/image";
import "./landingTop.css"

import landingImg from "./../../../public/landing/airforce1.png";
import landingUp from "./../../../public/landing/airforce1-up.png";
import landingDown from "./../../../public/landing/airforce1-down.png";

import fashionImg from "./../../../public/landing/marketing/fashion.jpg";
import fitnesstImg from "./../../../public/landing/marketing/fitness.jpg";
import officialImg from "./../../../public/landing/marketing/official.jpg";

const marketImgs = [
  { img: fitnesstImg, name: "FITNESS" },
  { img: fashionImg, name: "FASHION" },
  { img: officialImg, name: "OFFICIAL" },
];

export default function LandingTop() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <Image src={landingImg} alt="landingImg" height={450} />
          <Image src={landingUp} alt="landingUp" height={500} />
          <Image src={landingDown} alt="landingDown" height={700} />
        </div>

        <p className="flex items-center justify-center mb-[1em] mobile:text-[9px] mobile:px-[1em]">
          <strong>Step into Style</strong>: Unleash Your Sole with the Latest
          Nike, Puma, and More.
        </p>
      </div>

      <div className="flex items-center px-[2em] mobile:px-[1em] mt-[1em] justify-center gap-[3em] mobile:flex-col">
        {marketImgs.map((image, index) => {
          
          return (
            <div key={index}>
              <Image
                src={image.img}
                alt={image.name}
                className="rounded-[2em] h-[500px] w-[500px] mobile:h-[350px] mobile:w-[350px]"
              />
              <span
                style={{
                  position: "relative",
                  bottom: "4em",
                  left: "7em",
                  color: "white",
                  letterSpacing: "11px",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
                className="top-landing"
              >
                {image.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
