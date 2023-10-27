/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

import Typewriter from "typewriter-effect";
import clsx from "clsx";
import { MyButton } from "./Buttons";
import { useTranslations } from "next-intl";
import { getSocialMedia } from "./SocialMedia";
import MinecraftIcon from "@/assets/minecraftIcon";
import Lang from "./LangIcon";

export interface CardProps {
	title: string;
	description: string;
	image: string;
	right: boolean;
	minecraft?: boolean;
	langs?: string[];
	libs?: string[];
	social?: { type: string; url: string }[];
}

export default function Card(props: CardProps) {
	const [hover, setHover] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const [usingWriter, setUsingWriter] = useState(false);
	const [typewriter, setTypeWriter] = useState(<></>);

	const [small, setSmall] = useState(false);

	const t = useTranslations();

	const langs = props.langs?.map((element) => {
		return (
			<Lang key={element} name={element} />
		);
	});
	const libs = props.libs?.map((element) => {
		return (
			<Lang key={element} name={element} green={true} />
		);
	});

	useEffect(() => {
		setSmall(window.innerWidth < 1024);
		window.addEventListener("resize", () => {
			setSmall(window.innerWidth < 1024);
		});

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

	const socials = props.social?.map((element) => {
		return (
			<MyButton
				className="mt-2 transition-all duration-500 max-h-[6rem] drop-shadow-sm"
				key={element.type}
				link={element.url}
			>
				{getSocialMedia(element.type, false)}
			</MyButton>
		);
	});

	const socialOverlay = <div className={clsx("absolute mr-2 sm:mr-0", right || small ? "right-0" : "")}>{socials}</div>;

	var transformHover = clsx(
		props.right
			? "rotateY(-13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(-3%) translateY(-3%)"
			: "rotateY(13deg) rotateX(5deg) rotate(-1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-8%)"
	);

	if (small) transformHover = "rotateY(0deg) rotateX(13deg)  scaleY(.9) scaleX(.95)";

	const imgDiv = (
		<div
			className="drop-shadow-glow hover:[--glowing:20px] transition-all duration-1000"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onMouseOver={() => setHover(true)}
		>
			<div
				className="relative sm:min-w-[22rem] sm:h-[13.5rem] border border-neutral-400 col-span-1 rounded-3xl"
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
				{socialOverlay}
				<img className="rounded-3xl p-1 max-h-[13.40rem]" src={props.image} alt="Project Display" />
			</div>
		</div>
	);

	return (
		<div className="text-center p-5 min-h-[16rem] mt-10">
			<div className="grid grid-flow-row lg:grid-flow-col justify-items-center lg:justify-between ">
				{(!small && right) || imgDiv}
				<div className="flex justify-end lg:items-center m-2 lg:m-5 max-h-[10.5rem]">
					<div className={clsx(props.right ? "lg:text-left" : "lg:text-right")}>
						<div className="inline-flex items-center">
							{props.minecraft && (!small && (right || <MinecraftIcon />))}
							<h2 className="font-semibold tracking-wide font-trip ">{props.title}</h2>
							{props.minecraft && (small || right) && <MinecraftIcon />}
						</div>
						<div
							className={clsx(
								"font-trip min-w-[17rem] mt-2 break-normal overflow-hidden hover:overflow-auto opacity-75 transition-all duration-[2s]",
								usingWriter ? "max-h-[6rem]" : "max-h-[0rem]"
							)}
						>
							{typewriter}
						</div>
						{usingWriter ? (
							<div
								className={clsx("flex-col mt-2 transition-all duration-500",
								showButton ? "opacity-100 max-h-[6rem]" : "opacity-0 max-h-[1rem]", props.right ? "" : "justify-end", small ? "justify-center" : "")}
							>
								{langs}
								{libs}
							</div>
						) : (
							<span
								onClick={() => setUsingWriter(true)}
								className={clsx(
									"cursor-pointer transition-all text-zinc-500 hover:tracking-wide hover:text-slate-50 duration-300 h-[1rem]",
									usingWriter ? "opacity-0" : "opacity-100"
								)}
							>
								{t("misc.see_more")}
							</span>
						)}
					</div>
				</div>
				{!small && right && imgDiv}
			</div>
		</div>
	);
}
