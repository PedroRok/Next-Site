"use client";

import Card from "@components/Card";
import { useState } from "react";

export default function Projects() {
	const [active, setActive] = useState(false);

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
					<h1 className="flex justify-center text-5xl font-bold text-center font-trip hover:text-my-blue">
						<span
							className={`tracking-[1rem] ${active ? "tracking-[2rem]" : ""} transition-all duration-1000`}
						>
							PROJETO
						</span>
						<span className="transition-all duration-1000">S</span>
					</h1>
					<Line />
				</div>
			</div>

			<Card
				title="Cool Project 1"
				image="https://picsum.photos/1920/1080"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias"
				right={true}
			/>
			<Card
				title="Youtuber Project"
				image="https://picsum.photos/1920/1081"
				description="lorem ipsum dolor sit amet"
				right={false}
			/>
			<Card
				title="Lorem Ipsum"
				image="https://picsum.photos/1920/1082"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias"
				right={true}
			/>
			<Card
				title="Meu Site"
				image="https://picsum.photos/1920/1083"
				description="lorem ipsum dolor sit amet"
				right={false}
			/>
			<Card
				title="Python Bot"
				image="https://picsum.photos/1920/1084"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias"
				right={true}
			/>
		</div>
	);
}

const Line = () => {
	return (
		<div
			className={`h-[3rem] w-[1px] bg-stone-50  mx-3 transition-all opacity-50 duration-700 scale-[0%] group-hover:bg-my-blue group-hover:scale-[100%]`}
		/>
	);
};
