"use client";
import { useEffect, useState } from "react";
import MyButton from "./MyButton";
import Typewriter from 'typewriter-effect';
import clsx from "clsx";

export default function Card(props: { title: string; description: string; image: string, right: boolean}) {


    const [hover, setHover] = useState(false)
    const [showButton, setShowButton] = useState(false)

    const [usingWriter, setUsingWriter] = useState(false)
    const [typewriter, setTypeWriter] = useState(<></>)



    useEffect(() => {
        if (usingWriter) {
          setTypeWriter(
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(50)
                    .typeString(props.description)
                    .callFunction(() => {
                    setShowButton(true)
                    })
                    if (typewriter) 
                        typewriter.start();
                    }}
                />
            )};
      }, [usingWriter]);

    var right:boolean = props.right
    right = useWidth() > 1024 ? props.right : false

    var transformHover = clsx(props.right ? "rotateY(-13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(-3%) translateY(-3%)" : "rotateY(13deg) rotateX(5deg) rotate(-1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-8%)")
    var transformHover = clsx(useWidth() > 1024 ? transformHover : "rotateY(0deg) rotateX(10deg) rotate(0deg) scaleY(0.9) scaleX(0.95) translate(0%) translateY(0%)")

    const imgDiv = (
        <div className="drop-shadow-glow hover:[--glowing:20px] transition-all duration-1000"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
                    >
            <div className="relative min-w-[22rem] min-h-[13.5rem max-h-[13.5rem] border col-span-1 rounded-3xl" style={{
                transform: clsx("perspective(1000px)", hover ? "rotateY(0deg) rotateX(0deg) rotate(0deg) scaleY(1) scaleX(1) translate(0%) translateY(0%)" : transformHover),
                transition: "all 0.5s ease-in-out"
            }}>
                <img className="rounded-3xl p-1 max-h-[13.40rem]" src={props.image} alt="Project Display"/>
            </div>
        </div>
    )

    return (
        <div 
        onMouseEnter={() => {console.log(window.innerWidth)}}
        className="text-center p-5 min-h-[16rem]">
            <div className="grid grid-flow-row lg:grid-flow-col justify-items-center lg:justify-between ">
                {right || imgDiv}
                <div className="flex justify-end lg:items-center m-5 max-h-[10.5rem]">
                    <div className={clsx(props.right ? "lg:text-left" : "lg:text-right")}>
                        <h2 className="font-trip font-semibold tracking-wide ">
                            {props.title}
                        </h2>
                        <div className={clsx("font-trip min-w-[17rem] mt-2 break-normal overflow-hidden hover:overflow-auto opacity-75 transition-all duration-[2s]", usingWriter ? "max-h-[6rem]" : "max-h-[0rem]")}>
                            {typewriter}
                        </div>
                        {usingWriter ? <MyButton className={clsx("mt-3 transition-all duration-500", showButton ? "opacity-100 max-h-[6rem]" : "opacity-0 max-h-[1rem]")}/> : 
                        <span onClick={() => setUsingWriter(true)} className={clsx("cursor-pointer transition-all text-zinc-500 hover:tracking-wide hover:text-slate-50 duration-300 h-[1rem]", usingWriter ? "opacity-0" : "opacity-100")}>Ler mais...</span>}
                    </div>
                </div>
                {right && imgDiv}
            </div>
        </div>
    )
}


const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
};