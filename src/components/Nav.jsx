import { useState } from "react";
import Logo from "./assets/Logo"; // Make sure your Logo component is React-compatible

const navItems = [
  {
    label: "About us",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Use cases",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between w-full items-center px-5 lg:px-24 pt-10">
        <a href="#">
          <Logo />
        </a>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-full h-full flex justify-end items-center"
        >
          <div
            className={`${
              menuOpen ? "opacity-0" : "opacity-100"
            } rounded-md h-[2px] absolute w-[35px] bg-brand-dark transform transition-opacity`}
            style={{ top: "50%", transform: "translateY(-50%)" }}
          ></div>
          <div
            className={`${
              menuOpen ? "top-1/2 rotate-45" : "top-2"
            } rounded-md h-[2px] absolute w-[35px] bg-brand-dark transform transition-transform`}
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(-50%)" : "none",
            }}
          ></div>
          <div
            className={`${
              menuOpen ? "top-1/2 -rotate-45" : "bottom-2"
            } rounded-md h-[2px] absolute w-[35px] bg-brand-dark transform transition-transform`}
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-50%)" : "none",
            }}
          ></div>
        </div>

        <div className="hidden md:flex gap-10 items-center justify-between">
          {navItems.map(({ href, label }, index) => (
            <a key={index} href={href} className="capitalize">
              {label}
            </a>
          ))}
          <button className="bg-white hover:bg-brand-dark hover:text-white transition-colors border border-brand-dark text-brand-dark px-9 py-">
            Request a quote
          </button>
        </div>
      </div>
      <div className={`${menuOpen ? '' : 'hidden'} flex flex-col gap-3 border-b-brand-primary border-b-2 py-10 px-5 lg:p-24`}>
        {navItems.map(({ href, label }, index) => (
          <a key={index} href={href} className="capitalize">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
