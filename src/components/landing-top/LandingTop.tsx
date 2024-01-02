import React from "react";
import landingImg from "./../../../public/landing/airforce1.png";
import landingUp from "./../../../public/landing/airforce1-up.png";
import landingDown from "./../../../public/landing/airforce1-down.png";
import Image from "next/image";

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
      <div></div>
    </div>
  );
}
