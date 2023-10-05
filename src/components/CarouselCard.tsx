import clsx from "clsx";
import { getSocialMedia } from "./SocialMedia";
import { FooterButton, MyButton } from "./Buttons";

/* eslint-disable @next/next/no-img-element */
export default function Card(props: { title: string; review: string; desc: string; image: string; social: { type: string; url: string }[]}) {


	const socials = props.social.map((element) => {
		return (
			<MyButton key={element.type} link={element.url}>{getSocialMedia(element.type)}</MyButton>
		)
	});
	return (
		<div className="carousel-cell flex justify-center w-[35rem] text-slate-50 overflow-hidden">
			<img
				className="relative mr-5 w-[8rem] h-[8rem] sm:w-[12rem] sm:h-[12rem] p-1 border border-opacity-75 rounded-3xl border-slate-50"
				src={props.image}
				alt="avatar"
			/>
			<div className="self-center w-[10rem] sm:w-[20rem]">
				<h1 className="text-2xl sm:text-3xl truncate">{props.title}</h1>
				<h3 className="text-xs sm:text-sm opacity-75">{clsx("-", props.desc)}</h3>
				<h2 className="overflow-auto font-sans text-base sm:text-xl max-h-[3.0rem] sm:max-h-[3.9rem]">{props.review}</h2>

				<div className="sm:mt-3 flex scale-80 sm:scale-100">
					{socials}
				</div>
			</div>
		</div>
	);
	/**
    @todo: REFAZER O BOTÃO DE REDE SOCIAL E AS REAÇÕES COM HOVER
    **/
};
