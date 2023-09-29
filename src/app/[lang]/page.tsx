"use client";
import { CodingActivity, LangProps, Language, dataCode, dataLang } from "@/lib/Wakatime";
import { LogoAnimated } from "@/assets/logo";
import Carousel from "@components/Carousel";
import { JSX, useEffect, useState } from "react";
import clsx from "clsx";
import { Hover } from "@/components/Buttons";
import { useTranslations } from "next-intl";

export default function Home() {
	const [language, setLanguage] = useState<Language | undefined>(undefined);
	const [activity, setActivity] = useState<CodingActivity | undefined>(undefined);
	const [more, setMore] = useState(false);
	
	useEffect(() => {
		async function getLangs() {
			const data = await dataLang();
			setLanguage(data);
		}
		async function getActivity() {
			const data = await dataCode();
			setActivity(data);
		}
		getActivity();
		getLangs();
	}, []);

	function getLangsCard(qtd: number) {
		let langs: JSX.Element[] = [];
		for (let i = 0; i < qtd; i++) {
			let lg = language?.data[i];
			langs.push(<Lang key={i} name={lg?.name || undefined} data={lg?.hours + " horas"} />);
		}
		return langs;
	}

	function getTotalCoded() {
		return activity?.data.grand_total.human_readable_total.replace(",", ".");
	}

	let knowledge = ["Next", "React", "Tailwind", "Spigot", "Forge", "Fabric"];

	function getOtherKnowledge(qnt: number) {
		let langs: JSX.Element[] = [];
		for (let i = 0; i < qnt; i++) {
			if (!knowledge[i]) break;
			let lg = knowledge[i];
			langs.push(<Lang key={i} name={lg} green={true} />);
		}
		return langs;
	}

	const t = useTranslations();
	
	return (
		<main className="">
			<div className="max-w-[850px] h-[35rem] flex">
				<div className="flex justify-between mt-5 place-items-center text-slate-50">
					<div className="flex-col max-w-[50%] m-5 animate-fade-in-left">
						<h1 className="text-[2.60rem] text-justify">
							{t("title")}
							Programador <B>Fullstack</B> <B>criativo</B> e <B>eficiente</B>!
						</h1>
						<h2 className="mt-4 font-sans text-[1.4rem] text-my-dark-gray text-justify">
							Opa, tudo bem? Meu nome é <W>Pedro Lucas</W>, mas pode me chamar de <W>Rok</W>, programo
							desde 2019 e desde então isso tem sido minha paixão. Programando, tenho um total de{" "}
							<B dark={true}>{<L link="https://wakatime.com/@Rok">{getTotalCoded()}</L> || "..."}</B>{" "}
							contabilizados, faço <W>Ciência da Computação</W> na <W>UFES</W>, trabalhei com grandes
							Youtubers Brasileiros e atualmente estou trabalhando na equipe{" "}
							<B dark={true}>
								<L link="https://www.youtube.com/@AuthenticGames">AuthenticGames</L>
							</B>
							.
						</h2>
						<div className="mt-4">
							{getLangsCard(more ? 10 : 6)}
							{getOtherKnowledge(more ? 10 : 5)}
							<Lang
								name={clsx(more ? "<-" : "...")}
								onClick={() => {
									setMore(!more);
								}}
								green={true}
								data={more ? "Ver menos" : "Ver mais"}
							/>
						</div>
					</div>
					<div className="relative h-[30rem] w-[20rem]">
						<LogoAnimated className="scale-150" />
					</div>
				</div>
			</div>
			<div className="place-items-center w-[850px] overflow-hidden">
				<div className="flex justify-between place-items-center">
					<div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
					<h1 className="m-3 text-4xl font-bold text-my-blue">AVALIAÇÕES</h1>
					<div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
				</div>
				<Carousel />
			</div>
		</main>
	);
}
// <div className="absolute opacity-0 flex group-hover:visible group-hover:opacity-100 transition-all duration-300 text-center w-[100%] -top-5 text-sm overflow-visible">{props.data}</div>
const Lang = (props: { name?: string; data?: string; green?: boolean; onClick?: () => void }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="relative inline-flex justify-center group"
		>
			{props.data && hover && <Hover>{props.data}</Hover>}
			<div
				onClick={props.onClick}
				className={clsx(
					"m-1 inline-flex bg-opacity-70 py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200 border",
					props.green ? "text-my-green border-my-green" : "text-my-blue border-my-blue"
				)}
			>
				{props.name || "..."}
			</div>
		</div>
	);
};

const B = (props: { children: React.ReactNode; hover?: string; dark?: boolean }) => {
	return (
		<span className="inline-block group">
			<div className="relative group">{props.hover && <Hover>{props.hover}</Hover>}</div>
			<span
				className={clsx("inline relative group", props.dark ? "text-my-dark-blue" : "text-my-blue")}
			>
				{props.children}
			</span>
		</span>
	);
};

const W = (props: { children: React.ReactNode }) => {
	return <span className="text-gray-300">{props.children}</span>;
};

const L = (props: { link: string; children: React.ReactNode }) => {
	return (
		// TODO REDO THIS
		<a
			target="_blank"
			href={props.link}
			rel="noopener noreferrer"
			className="relative transition-all duration-200 rounded-lg group"
		>
			{/* <a className="transition-all duration-700 group-hover:text-slate-50">{props.children}</a> */}
			<div className="absolute w-[100%] h-[1px] border-t border-my-dark-blue  scale-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:border-slate-50 group-hover:scale-[100%]  transition-all duration-700 ease-in-out z-0 " />
		</a>
	);
};
