"use client";

import Link from "next/link";
import { navLinks } from "@/constant";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";
import Button from "../ui/Button";
import { useState } from "react";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const smoothlyScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-1">
            <h1 className="text-black font-semibold uppercase text-xl">
              RiccoJobs
            </h1>

            <MdAdsClick className="text-orange-500 text-3xl" />
          </div>
        </Link>

        <ul className="flex gap-16 items-center max-md:hidden">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => smoothlyScroll(link.routeId)}
              className="cursor-pointer"
            >
              {link.name}
            </li>
          ))}
        </ul>

        <div className="max-md:flex justify-center items-center gap-10">
          <Link href={"/create"}>
            <Button>Post a Job</Button>
          </Link>

          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>

          {openMobileMenu && (
            <ul className="md:hidden bg-orange-500 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md">
              {navLinks.map((link, index) => (
                <Link
                  href={link.routeId}
                  key={index}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
