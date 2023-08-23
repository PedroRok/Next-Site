"use client";
import { useEffect, useState } from "react";
import MyButton from "./MyButton";
import Typewriter from 'typewriter-effect';

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


    const textAlign = !props.right ? "text-right" : "text-left";

    var transformNeutral = `rotateY(0deg) rotateX(0deg) rotate(0deg) scaleY(1) scaleX(1) translate(0%) translateY(0%)`
    var transformHover = props.right ? `rotateY(-13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(-3%) translateY(-3%)` : `rotateY(13deg) rotateX(5deg) rotate(-1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-8%)`

    const imgDiv = (
        <div className="drop-shadow-glow hover:[--glowing:20px] transition-all duration-1000"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
                    >
            <div className="relative min-w-[20rem] min-h-[13.5rem] -max-w-[20rem] max-h-[13.5rem] border col-span-1 rounded-3xl" style={{
                transform: `perspective(1000px) ${!hover ? transformHover : transformNeutral}`,
                transition: "all 0.5s ease-in-out"
            }}>
                <img className="rounded-3xl p-1 max-h-[13.40rem]" src={props.image} alt="teste"/>
            </div>
        </div>
    )

    return (
        <div className="text-center p-5 h-[16rem] max-h-[16rem]">
            <div className="grid grid-flow-col justify-between">
                {!props.right ? imgDiv : null}
                <div className="flex justify-end items-center m-5 max-h-[10.5rem]">
                    <div className={`${textAlign}`}>
                        <h2 className="font-trip font-semibold tracking-wide ">
                            {props.title}
                        </h2>
                        
                        <div className={`font-trip min-w-[17rem] mt-2  ${usingWriter ? "max-h-[6rem]" : "max-h-[0rem]"} break-normal overflow-hidden hover:overflow-auto opacity-75 transition-all duration-[2s]`}>
                            {typewriter}
                        </div>
                        {usingWriter ? <MyButton className={`mt-3 transition-all duration-500 ${showButton ? "opacity-100 max-h-[6rem]" : "opacity-0 max-h-[1rem]"}`}/> : 
                        <span onClick={() => setUsingWriter(true)} className={`cursor-pointer transition-all text-zinc-500 hover:tracking-wide hover:text-slate-50 duration-300 ${usingWriter ? "opacity-0" : "opacity-100"}`}>Ler mais...</span>}
                        
                    </div>
                    
                </div>
                {props.right ? imgDiv : null}
            </div>
        </div>
    )
}