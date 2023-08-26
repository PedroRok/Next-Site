"use client";
import React, { useState } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function Navbar(props: any) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="w-full max-w-[900px]">
      <nav className="flex justify-between  items-center pt-3 animate-fade-in-down">
        <div className="group font-trip tracking-widest inline-flex items-center text-my-blue p-2 mr-4 text-5xl opacity-90 font-[900] uppercase animate-fade-in-down">
          <img src="/img/logo.svg" alt="Rok" className="hover:cursor-pointer hover:scale-105 transition-all hover:[--glowing:1px] ease-in-out duration-1000 drop-shadow-glow-blue max-w-[6.5rem] fill-my-blue"/>
          <div className="transition-all ease-in-out delay-150 duration-1000 font-thin tracking-normal drop-shadow-glow [--glowing-color:#00d2ff77] text-xl w-[0%] group-hover:w-[50%] overflow-hidden"> 
            PedroL.
          </div>
        </div>
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
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            } 
            relative w-full
            lg:flex lg:flex-grow lg:w-full transition duration-500 ease-in-out animate-fade-in-down`}
          >
            <div className="lg:relative absolute lg:flex-row w-full lg:items-center items-start flex flex-col lg:h-full lg:gap-5 mr-5">
              <NavButton name="Home" link="/"/>
              <NavButton name="About" link="/about"/>
              <NavButton name="Contact" link="/contact"/>
              <NavButton name="Projects" link="/projects"/>
            </div>
          </div>
        </div>
      </nav>
      <div className="min-w-[20rem] min-h-[1px] bg-stone-50 opacity-50"></div>
    </nav>
  );
}

const NavButton = (props: { name: string; link: string }) => {
  const path = usePathname();
  return (
    <div 
    className="group mt-5 hover:cursor-pointer">
      <Link
        className={clsx("w-full mx-1 lg:mx-0 lg:my-1 px-3 py-2 rounded font-thin items-center justify-center group-hover:drop-shadow-glow-blue group-hover:text-my-blue transition-all duration-500 ease-in-out", path === props.link ? "text-my-blue drop-shadow-glow-blue" : "text-white")}
        href={props.link}
      >
        {props.name}
      </Link>
      <div className={clsx("transition-all ease-in-out duration-500 relative min-h-[1px] translate-y-[1px] w-auto rounded-lg bg-my-blue mt-5 drop-shadow-glow-blue [--glowing:20px] group-hover:opacity-100 group-hover:scale-[100%]", path === props.link ? "scale-[100%] opacity-100" : "scale-0 opacity-0")}></div>
    </div>
  );
};
