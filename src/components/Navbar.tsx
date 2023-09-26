"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "@/assets/logo";
import githubIcon from "@/assets/githubIcon";
import { NavButton, NavButtonIcon } from "./NavbarButtons";
import discordIcon from "@/assets/discordIcon";
import emailIcon from "@/assets/emailIcon";

export default function Navbar(props: any) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="w-full max-w-[900px]">
      <nav className="flex justify-between items-center pt-3 animate-fade-in-down">
        <a href="/" className="group font-trip tracking-widest inline-flex items-center text-my-blue p-2 mr-4 text-5xl opacity-90 font-[900] uppercase animate-fade-in-down">
          <Logo size={0.2} className="fill-my-blue hover:cursor-pointer hover:scale-105 transition-all hover:[--glowing:1px] ease-in-out duration-1000 drop-shadow-glow-blue max-w-[6.5rem"/>
          <div className="transition-all ease-in-out delay-150 duration-1000 font-thin tracking-normal drop-shadow-glow [--glowing-color:#00d2ff77] text-xl w-[0%] group-hover:w-[40%] overflow-hidden">
            PedroL.
          </div>
        </a>
        <div>
          <button
            className="my-1 inline-flex p-3 hover:bg-cyan-800 hover:rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${active ? "" : "hidden"} 
            relative w-full
            lg:flex lg:flex-grow lg:w-full transition duration-500 ease-in-out`}
          >
            <div className="lg:relative absolute lg:flex-row w-full lg:items-center items-start flex flex-col lg:h-full lg:gap-5 mr-5">
              <NavButton link="/" >Home</NavButton>
              <NavButton link="/projects" >Projects</NavButton>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-w-[20rem] min-h-[1px] bg-stone-50 opacity-50" />
    </nav>
  );
}
