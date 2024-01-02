import { footer_links } from "@/utils/helpers/footer.helper";
import Link from "next/link";
import React from "react";

interface LinkItem {
  link: string;
  href: string;
}

interface FooterItem {
  name: string;
  links: LinkItem[];
}

export default function Footer() {
  return (
    <div>
      <div className="flex items-start justify-evenly mx-[7em] my-[2em]">
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

      <div></div>
    </div>
  );
}
