"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  // group-hover:animate-fade-in-left animate-fade-out-left
  return (
    <nav className="flex justify-between w-full max-w-[900px] items-center p-3 animate-fade-in-down">
      <div className="group font-trip tracking-widest inline-flex items-center text-[#00d2ff] p-2 mr-4 text-5xl opacity-90 font-[900] uppercase animate-fade-in-down">
        <Link className="drop-shadow-glow [--glowing-color:#00d2ff77]" href="/">
          Rok
        </Link>
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
          <div className="lg:relative absolute lg:flex-row w-full lg:items-center items-start flex flex-col lg:h-full lg:gap-5">
            <NavButton name="Home" link="/" />
            <NavButton name="About" link="/" />
            <NavButton name="Contact" link="/" />
            <NavButton name="Blog" link="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavButton = (props: { name: String; link: Url }) => {
  return (
    <Link
      className="w-full mx-1 lg:mx-0 lg:my-1 px-3 py-2 rounded text-white font-bold items-center justify-center
    hover:bg-cyan-800 hover:text-white transition duration-300 ease-in-out"
      href={props.link}
    >
      {props.name}
    </Link>
  );
};
