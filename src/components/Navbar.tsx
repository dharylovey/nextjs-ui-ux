"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/components/HamburgerMenu";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 p-4">
        <h1 className="text-3xl font-semibold ">Logo</h1>
        <div className="flex gap-10">
          <ul className="flex gap-4 text-3xl">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <li key={idx} className="hidden sm:block">
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
                      className="text-slate-800 font-semibold text-2xl transition duration-100 hover:text-primary antialiased"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="hidden sm:block gap-4">
            <div className="flex gap-3">
              <Button >
                <Link href="/login">Login</Link>
              </Button>
              <Button variant={"secondary"}>
                <Link href="/signup">Signup</Link>
              </Button>
            </div>
          </div>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
}
