"use client";
import { useState } from "react";

export default function Card(props: { title: string; description: string; right: boolean}) {

    const [hover, setHover] = useState(false)
    const textAlign = !props.right ? "text-right" : "text-left";

    var transformNeutral = `rotateY(0deg) rotateX(0deg) rotate(0deg) scaleY(1) scaleX(1) translate(0%) translateY(0%)`
    var transformHover = props.right ? `rotateY(-13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(-3%) translateY(-3%)` : `rotateY(13deg) rotateX(5deg) rotate(-1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-3%)`

    const imgDiv = (
        <div className="drop-shadow-glow hover:[--glowing:20px] transition-all duration-1000 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
                    >
            <div className="relative min-w-[20rem] -max-w-[20rem] max-h-[11.5rem] border col-span-1 rounded-3xl" style={{
                transform: `perspective(1000px) ${!hover ? transformHover : transformNeutral}`,
                transition: "all 0.5s ease-in-out"
            }}>
                <img className="rounded-3xl p-1 max-h-[11.40rem]" src="https://picsum.photos/1920/1080" alt="teste"/>
            </div>
            
        </div>
    )

    return (
        <div className="text-center p-5">
            <div className="grid grid-flow-col justify-between">
                {!props.right ? imgDiv : null}
                <div className="flex justify-end items-center m-5 max-h-[10.5rem]">
                    <div className={`text-cente ${textAlign}`}>
                        <h2 className="font-trip">
                            {props.title}
                        </h2>
                        <span className="font-trip min-w-[20rem] break-normal overflow-auto max-h-[6em] hover:overflow-auto">
                            {props.description}
                        </span>
                    </div>
                </div>
                {props.right ? imgDiv : null}
            </div>
        </div>
    )
}