/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
import clsx from "clsx";
import { Hover, MyButton } from "./Buttons";
import GithubIcon from "@/assets/githubIcon";
import { useTranslations } from "next-intl";
import SiteIcon from "@/assets/siteIcon";
import { getSocialMedia } from "./SocialMedia";

export default function Card(props: {
	title: string;
	description: string;
	image: string;
	right: boolean;
	social?: { type: string; url: string }[];
}) {
	const [hover, setHover] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const [usingWriter, setUsingWriter] = useState(false);
	const [typewriter, setTypeWriter] = useState(<></>);
	const t = useTranslations();


	const socials = props.social?.map((element) => {
		return (
			<MyButton 
			className={clsx(
				"mt-2 transition-all duration-500",
				showButton ? "opacity-100 max-h-[6rem]" : "opacity-0 max-h-[1rem]"
			)}
			key={element.type} link={element.url}>{getSocialMedia(element.type)}</MyButton>
		)
	});


	useEffect(() => {
		if (usingWriter) {
			setTypeWriter(
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.changeDelay(50)
							.typeString(props.description)
							.callFunction(() => {
								setShowButton(true);
							});
						if (typewriter) typewriter.start();
					}}
				/>
			);
		}
	}, [props.description, usingWriter]);

	var right: boolean = props.right;

	var transformHover = clsx(
		props.right
			? "rotateY(-13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(-3%) translateY(-3%)"
			: "rotateY(13deg) rotateX(5deg) rotate(-1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-8%)"
	);

	const imgDiv = (
		<div
			className="drop-shadow-glow hover:[--glowing:20px] transition-all duration-1000"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onMouseOver={() => setHover(true)}
		>
			<div
				className="relative min-w-[22rem] h-[13.5rem] border border-neutral-400 col-span-1 rounded-3xl"
				style={{
					transform: clsx(
						"perspective(1000px)",
						hover
							? "rotateY(0deg) rotateX(0deg) rotate(0deg) scaleY(1) scaleX(1) translate(0%) translateY(0%)"
							: transformHover
					),
					transition: "all 0.5s ease-in-out"
				}}
			>
				<img className="rounded-3xl p-1 max-h-[13.40rem]" src={props.image} alt="Project Display" />
			</div>
		</div>
	);

	return (
		<div className="text-center p-5 min-h-[16rem]">
			<div className="grid grid-flow-row lg:grid-flow-col justify-items-center lg:justify-between ">
				{right || imgDiv}
				<div className="flex justify-end lg:items-center m-5 max-h-[10.5rem]">
					<div className={clsx(props.right ? "lg:text-left" : "lg:text-right")}>
						<h2 className="font-semibold tracking-wide font-trip ">{props.title}</h2>
						<div
							className={clsx(
								"font-trip min-w-[17rem] mt-2 break-normal overflow-hidden hover:overflow-auto opacity-75 transition-all duration-[2s]",
								usingWriter ? "max-h-[6rem]" : "max-h-[0rem]"
							)}
						>
							{typewriter}
						</div>
						{usingWriter ? (
							<div className={clsx("flex", props.right ? "" : "justify-end")}>
	
								{socials}
							</div>
						) : (
							<span
								onClick={() => setUsingWriter(true)}
								className={clsx(
									"cursor-pointer transition-all text-zinc-500 hover:tracking-wide hover:text-slate-50 duration-300 h-[1rem]",
									usingWriter ? "opacity-0" : "opacity-100"
								)}
							>
								{t("misc.see_more")}...
							</span>
						)}
					</div>
				</div>
				{right && imgDiv}
			</div>
		</div>
	);
}
