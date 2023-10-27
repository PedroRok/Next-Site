"use client";
import DiscordIcon from "@/assets/discordIcon";
import { FooterButton, NavButtonIcon } from "./Buttons";
import GithubIcon from "@/assets/githubIcon";
import EmailIcon from "@/assets/emailIcon";
import { useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations();
	return (
		<div className="w-full max-w-[850px]">
			<div className="w-full h-[1px] bg-stone-50 opacity-50 self-center mt-5" />
			<div className="flex justify-between m-3 sm:m-5 text-slate-300">
				<span className="place-self-center scale-75 sm:scale-100">© 2023 Rok</span>
				<div className="flex gap-1 sm:gap-2 place-items-center translate-x-6 sm:translate-x-0 scale-75 sm:scale-100 ">
					<span> 
						{t("misc.footer")}
					</span>
					<FooterButton link="https://github.com/Rexblane">
						<GithubIcon animated={true} />
					</FooterButton>
					<FooterButton link="https://discordapp.com/users/210534961843798016">
						<DiscordIcon />
					</FooterButton>
					<FooterButton link="mailto:pedrolucasnmm@gmail.com">
						<EmailIcon />
					</FooterButton>
				</div>
			</div>
		</div>
	);
}
