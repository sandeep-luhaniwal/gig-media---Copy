"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { NAVIGATION_LINK_LIST } from "@/utlis/helper";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (

    <div className="max-w-[1410px] mx-auto px-4 flex justify-between items-center pt-6">
      <Link href={"/"}>
        <Image
          className="w-10 md:w-12"
          src={"/images/svg/page-logo.svg"}
          height={72}
          width={72}
          alt="page-lgoo"
        />
      </Link>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Icons icon={"menuToggel"} />
      </div>

      <div
        className={`fixed flex flex-col justify-center items-center top-0 duration-500 w-full h-screen bg-[#FFE0E1] z-50 ${isOpen ? "right-0" : "-right-full"
          }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-4 right-4"
        >
          <Icons icon={"cross"} />
        </div>
        {NAVIGATION_LINK_LIST.map((obj, i) => {
          const isActive = pathname === obj.url;
          return (
            <Link
              key={i}
              href={obj.url}
              onClick={() => setIsOpen(false)}
              className={`text-md md:text-lg lg:text-2xl xl:text-3xl font-semibold px-4 py-3.5 rounded-md duration-300 ${isActive ? "text-[#ff0004]" : "text-black hover:text-[#ff0004]"
                }`}
            >
              {obj.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
