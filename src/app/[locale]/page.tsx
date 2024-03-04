"use client";
import { CodingActivity, Language, dataCode, dataLang } from "@/lib/Wakatime";
import { LogoAnimated } from "@/assets/logo";
import Carousel from "@components/Carousel";
import { JSX, useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Lang from "@/components/LangIcon";
import { Tooltip } from "react-tooltip";


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
			langs.push(<Lang key={i} name={lg?.name || undefined} data={lg?.hours + " " +t("misc.hours")} />);
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
		<main className="overflow-hidden lg:overflow-visible">
			<Tooltip id="default-top" disableStyleInjection place="top" arrowColor="#00d2ff88" style={{
				backgroundColor: "#ffffff00",
				backdropFilter: "blur(0.5rem)",
				borderRadius: "0.5rem",
				zIndex: 1000,
				color: "#00d2ff",
				boxShadow: "0px 0px 5px #00d2ff",
			}}/>
			<div className="max-w-[850px] h-[35rem] flex">
				<div className="flex justify-between mt-5 place-items-center text-slate-50 ">
					<div className="flex-col md:max-w-[50%] justify-center text-center md:text-left m-5">
						<h1 className="text-[2.10rem] uppercase">
							{t.rich("page.title", {
								blue: (chunks) => <B>{chunks}</B>
								} 
							)}
						</h1>
						<h2 className="mt-4 font-sans text-[1.2rem] text-my-dark-gray text-justify
						tracking-tight leading-[1.35rem]">
							{t.rich("page.description", {
								white: (chunks) => <W>{chunks}</W>,
								blue: (chunks) => <B dark={true}>{chunks}</B>,
								waka: () => <L link="https://wakatime.com/@Rok" tooltip="Wakatime">{getTotalCoded() || "..."}</L>,
								brpacks: () => <L link="https://dc.brpacks.net/">Brpacks</L>
							})}
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
								data={more ? t("misc.see_less") : t("misc.see_more") }
							/>
						</div>
					</div>
					<div className="absolute md:relative h-[30rem] w-[20rem] ">
						<LogoAnimated className="scale-150 hidden md:flex" />
					</div>
				</div>
			</div>
			<div className="place-items-center lg:w-[850px] overflow-hidden">
				<div className="flex justify-between place-items-center">
					<div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
					<h1 className="m-3 text-2xl sm:text-4xl font-bold text-my-blue">{t("page.feedback")}</h1>
					<div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
				</div>
				{<Carousel />}
			</div>
		</main>
	);
}

const B = (props: { children: React.ReactNode; dark?: boolean }) => {
	return (
		<span className="inline-block group">
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

const L = (props: { link: string; children: React.ReactNode; tooltip?: string }) => {
	return (
		// TODO REDO THIS
		<a
			target="_blank"
			href={props.link}
			rel="noopener noreferrer"
			className="relative transition-all duration-200 rounded-lg group"
			data-tooltip-id="default-top" data-tooltip-content={props.tooltip}
		>
			<div className="transition-all duration-700 group-hover:text-slate-50">{props.children}</div>
			<div className="absolute w-[100%] h-[1px] border-t border-my-dark-blue  scale-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:border-slate-50 group-hover:scale-[100%]  transition-all duration-700 ease-in-out z-0 " />
		</a>
	);
};
