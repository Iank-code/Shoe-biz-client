import { footer_links } from "@/utils/helpers/footer.helper";
import twitterImg from "./../../../public/footer/svg/twitter.svg";
import facbookImg from "./../../../public/footer/svg/facebook.svg";
import linkedinImg from "./../../../public/footer/svg/linkedin.svg";
import instagramImg from "./../../../public/footer/svg/instagram.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface LinkItem {
  link: string;
  href: string;
}

interface FooterItem {
  name: string;
  links: LinkItem[];
}

const marketImgs = [
  { img: twitterImg, href: "twitter.com" },
  { img: facbookImg, href: "facebook.com" },
  { img: instagramImg, href: "instagram.com" },
  { img: linkedinImg, href: "linkedin.com" },
];

export default function Footer() {
  return (
    <div>
      <div className="flex items-start justify-evenly mx-[7em] my-[2em] mobile:grid mobile:grid-cols-2 mobile:gap-3 mobile:mx-[2em] mobile:place-items-start">
        {footer_links.map((items: FooterItem, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <strong className="uppercase">{items.name}</strong>
              {items.links.map((link: LinkItem, linkIndex: number) => {
                return (
                  <div key={linkIndex}>
                    <Link href={link.href}>{link.link}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="bg-[#D9D9D9] py-[2em] mobile:px-[1em]">
        <div className="flex items-start justify-center gap-[15em] mobile:gap-[1em] mobile:flex-col">
          <div className="flex flex-col gap-4">
            <strong className="uppercase text-2xl">join our list</strong>
            <span>Receive the latest offers and new arrivals</span>

            <div className="flex gap-3 mt-[4em] mobile:mt-[1em]">
              {marketImgs.map((icon, index) => {
                return (
                  <a href={icon.href} target="_black">
                    <Image alt={icon.href} src={icon.img} height={50} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <form className="flex gap-2 mobile:flex-col">
              <input
                type="text"
                placeholder="Enter email address"
                className="border rounded-md py-2 px-3 outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-3 outline-none rounded-md mobile:py-1 mobile:w-[100px]"
              >
                Join Us
              </button>
            </form>
            <span className="text-[14px] ">
              By signing up you&apos;re agreeing to our Terms & Conditions and
              Privacy Policy
            </span>

            <strong className="mt-[5em] mobile:mt-[1em]">
              All Rights Reserve
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
