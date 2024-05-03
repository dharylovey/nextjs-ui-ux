"use client";

import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamburgerMenu() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClickMenu = (event: any) => {
    event.stopPropagation();
    setNav((prevNav) => !prevNav);
  };

  return (
    <div className="block sm:hidden">
      <button onClick={handleClick} className="text-2xl">
        {nav ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      <div
        className={`${
          nav ? "flex" : "hidden"
        } absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}
      >
        <ul className="flex flex-col justify-center items-center flex-1 gap-2 p-5 bg-white dark:bg-slate-900 rounded-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li className="mb-2" key={link.href}>
                {isActive ? (
                  <Link
                    href={link.href}
                    className="text-primary font-semibold text-2xl antialiased"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleClickMenu}
                    className="text-slate-800 font-semibold text-2xl transition duration-100 hover:text-primary antialiased"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
