import { nav_top_url } from "@/utils/helpers/url.helper";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Sidebar({ setOpenSideBar }: any) {
  return (
    <AnimatePresence>
      <motion.aside
        className="h-[100vh] w-[250px] pt-[2.3em] px-[1.5em] bg-white text-black z-[999] absolute"
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        exit={{ width: 0, transition: { delay: 1, duration: 0.5 } }}
      >
        <div className="flex justify-between mb-[2em]">
          <span>Shoe biz </span>
          <IconX
            className="hidden mobile:flex "
            onClick={() => {
              setOpenSideBar(false);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          {nav_top_url.map((link, index) => {
            return (
              <Link href={link} key={index}>
                {link}
              </Link>
            );
          })}
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
