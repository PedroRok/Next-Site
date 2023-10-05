"use client";
import React, { startTransition, useState, useEffect } from "react";
import { Logo } from "@/assets/logo";
import { MyButton, NavButton, NavButtonIcon } from "./Buttons";
import { English, Portuguese } from "@/assets/langIcons";
import { useLocale, useTranslations } from "next-intl";
import When from "./When";
import { selectNextLang } from "@/i18n/settings";
import { usePathname, useRouter } from "next-intl/client";
import SunIcon from "@/assets/sunIcon";

export default function Navbar() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations();

	const changeLang = () => {
		startTransition(() => {
			router.replace(pathname, { locale: selectNextLang(locale) });
		});
	};

	return (
		<nav className="w-full max-w-[850px]">
			<nav className="flex items-center justify-between pt-3">
				<a
					href="/"
					className="group font-trip tracking-widest inline-flex items-center text-my-blue p-2 mr-4 text-5xl opacity-90 font-[900] uppercase animate-fade-in-down"
				>
					<Logo
						size={0.2}
						className="fill-my-blue hover:cursor-pointer hover:scale-105 transition-all [--glowing:4px] hover:[--glowing:1px] ease-in-out duration-1000 drop-shadow-glow-blue"
					/>
					<div className="transition-all hidden sm:flex ease-in-out delay-150 duration-1000 font-thin tracking-normal drop-shadow-glow [--glowing-color:#00d2ff77] text-xl w-[0%] group-hover:w-[40%] overflow-hidden ">
						PedroL.
					</div>
				</a>
				<div>
					<div className="relative flex flex-grow w-full transition duration-500 ease-in-out">
						<div className="flex w-full mr-5 relative flex-row items-center h-full lg:gap-5">
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
						</div>
					</div>
				</div>
			</nav>
			<div className="min-w-[20rem] min-h-[1px] bg-stone-50 opacity-50" />
		</nav>
	);
}
