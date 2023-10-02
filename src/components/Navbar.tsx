"use client";
import React, { startTransition, useState, useEffect } from "react";
import { Logo } from "@/assets/logo";
import { MyButton, NavButton, NavButtonIcon } from "./Buttons";
import { English, Portuguese } from "@/assets/langIcons";
import { useLocale, useTranslations } from "next-intl";
import When from "./When";
import { selectNextLang } from "@/i18n/settings";
import {usePathname, useRouter} from "next-intl/client";

export default function Navbar() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [active, setActive] = useState(false);
	const t = useTranslations();

	const handleClick = () => {
		setActive(!active);
	};

	const changeLang = () => {
		startTransition(() => {
			router.replace(pathname, { locale: selectNextLang(locale) });
		});
	};

	return (
		<nav className="w-full max-w-[900px]">
			<nav className="flex items-center justify-between pt-3">
				<a
					href="/"
					className="group font-trip tracking-widest inline-flex items-center text-my-blue p-2 mr-4 text-5xl opacity-90 font-[900] uppercase animate-fade-in-down"
				>
					<Logo
						size={0.2}
						className="fill-my-blue hover:cursor-pointer hover:scale-105 transition-all [--glowing:4px] hover:[--glowing:1px] ease-in-out duration-1000 drop-shadow-glow-blue"
					/>
					<div className="transition-all ease-in-out delay-150 duration-1000 font-thin tracking-normal drop-shadow-glow [--glowing-color:#00d2ff77] text-xl w-[0%] group-hover:w-[40%] overflow-hidden">
						PedroL.
					</div>
				</a>
				<div>
					<button
						className="inline-flex p-3 my-1 ml-auto text-white outline-none hover:bg-cyan-800 hover:rounded lg:hidden hover:text-white"
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
					<div
						className={`${active ? "" : "hidden"} 
            relative w-full
            lg:flex lg:flex-grow lg:w-full transition duration-500 ease-in-out`}
					>
						<div className="absolute flex flex-col items-start w-full mr-5 lg:relative lg:flex-row lg:items-center lg:h-full lg:gap-5">
							<NavButton link="/">{t("misc.nav.home")}</NavButton>
							<NavButton link="/projects">{t("misc.nav.projects")}</NavButton>
							<NavButtonIcon onClick={changeLang}>
								<When if={locale === "br"}>
									<Portuguese />
								</When>
								<When if={locale === "en"}>
									<English />
								</When>
							</NavButtonIcon>
							{/* <Link href={pathname} lang="br" locale="br">BR</Link>  */}
							{/* <Link href={pathname} lang="en" locale="en">EN</Link>  */}
						</div>
					</div>
				</div>
			</nav>
			<div className="min-w-[20rem] min-h-[1px] bg-stone-50 opacity-50" />
		</nav>
	);
}
