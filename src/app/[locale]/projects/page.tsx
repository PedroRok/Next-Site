"use client";

import { data } from "@/lib/Projects";
import Card from "@components/Card";
import { useTranslations } from "next-intl";
import { use, useEffect, useState } from "react";

export default function Projects() {
	const [active, setActive] = useState(false)
	const t = useTranslations()

	var right = false;

	let cards = data.map((element) => {
		return (
			<Card
				key={element.id}
				title={t(`projects.list.${element.id}.title`)}
				image={element.image}
				description={t(`projects.list.${element.id}.description`)}
				right={right = !right}
				social={element.social}
				minecraft={element.minecraft}
			/>
		);
	})


	return (
		<div
			onMouseEnter={() => {
				setActive(true);
			}}
			className="w-full max-w-[800px] justify-center animate-fade-in-down text-stone-50"
		>
			<div className="group">
				<div className="flex justify-center mt-5 group-hover:[--glowing:20px] drop-shadow-glow transition-all duration-1000">
					<Line />
					<h1 className="flex justify-center text-3xl sm:text-5xl font-bold text-center font-trip hover:text-my-blue">
						<span
							className={`tracking-[1rem] ${active ? "sm:tracking-[2rem]" : ""} transition-all duration-1000`}
						>
							{t("projects.title")}
						</span>
						<span className="transition-all duration-1000">S</span>
					</h1>
					<Line />
				</div>
			</div>
			{cards}
		</div>
	);
}

const Line = () => {
	return (
		<div
			className={`sm:h-[3rem] w-[1px] bg-stone-50  mx-3 transition-all opacity-50 duration-700 scale-[0%] group-hover:bg-my-blue group-hover:scale-[100%]`}
		/>
	);
};
