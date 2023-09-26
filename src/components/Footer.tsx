import discordIcon from "@/assets/discordIcon";
import { FooterButton, NavButtonIcon } from "./Buttons";
import githubIcon from "@/assets/githubIcon";
import emailIcon from "@/assets/emailIcon";

export default function Footer() {
    return (
        <div className="w-full max-w-[850px]">
            <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center mt-5" />
            <div className="flex justify-between text-slate-300 m-5">
                <span className="place-self-center">© 2023 Rok</span>
                <div className="flex gap-2 place-items-center">
                    <span>Links e Contato:</span>
                    <FooterButton link="https://github.com/Rexblane">{githubIcon()}</FooterButton>
                    <FooterButton link="https://discordapp.com/users/210534961843798016">{discordIcon()}</FooterButton>
                    <FooterButton link="mailto:eu@lucasmellof.com">{emailIcon()}</FooterButton>
                </div>
            </div>
        </div>
    )
}