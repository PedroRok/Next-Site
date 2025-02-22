import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'react-tooltip/dist/react-tooltip.css';

export const NavButton = (props: { children: React.ReactNode; link: string }) => {
	const path = usePathname().replace("en/","").replace("en", "");
	return (
		<div className="mt-5 group hover:cursor-pointer">
			<Link
				className={clsx(
					"w-full mx-1 lg:mx-0 lg:my-1 px-2 md:px-3 py-2 rounded items-center justify-center group-hover:drop-shadow-glow-blue group-hover:text-my-blue transition-all duration-500 ease-in-out text-xs md:text-base lg:text-base",
					path=== props.link ? "text-my-blue drop-shadow-glow-blue" : "text-white"
				)}
				href={props.link}
			>
				{props.children}
			</Link>
			{Line({ show: path === props.link, className: "mt-5" })}
		</div>
	);
};

export const NavButtonIcon = (props: { children: React.ReactNode; onMouseEnter?: () => void; onMouseLeave?: () => void; onClick: () => void }) => {
	const t = useTranslations();
	return (
	
		<div 
		onMouseEnter={props.onMouseEnter}
		onMouseLeave={props.onMouseLeave}
		onClick={props.onClick} className="group mt-[1.125rem] hover:cursor-pointer" >
			<div className="items-center justify-center w-full text-white transition-all duration-500 ease-in-out rounded group-hover:drop-shadow-glow-blue group-hover:text-my-blue" data-tooltip-id="default" data-tooltip-content={t("lang")} >
				{props.children}
			</div>
			{Line({ className: "mt-[1.40rem]" })}
		</div>
	);
};

export const FooterButton = (props: { children: React.ReactNode; link: string }) => {
	return (
		<div>
			<Link
				target="_blank"
				href={props.link}
				className="relative items-center justify-center w-full text-white transition-all duration-500 ease-in-out rounded  group-hover:drop-shadow-glow-blue hover:text-my-blue hover:cursor-pointer"
			>
				{props.children}
			</Link>
		</div>
	);
};

export const MyButton = (
	props: {
	className?: string;
	children?: React.ReactNode;
	link?: string;
	buttonName?: string;
	onClick?: () => void;
}) => {
	return (
		<div className={`${props.className}`}>
			<a href={props.link} target="_blank" className="cursor-pointer inline-flex scale-90 py-[0.1rem] px-[0.1rem] sm:px-[0.5rem] rounded-lg drop-shadow-glow hover:scale-[105%] opacity-80 hover:opacity-100 transition-all ease-in-out duration-200"
			onClick={props.onClick}
			>
				{props.buttonName}
				{props.children}
			</a>
		</div>
	);
};


const Line = (props: { show?: boolean; className?: string }) => {
	return (
		<div
			className={clsx(
				props.className,
				"transition-all ease-in-out relative duration-500 min-h-[1px] translate-y-[1px] w-auto rounded-lg bg-my-blue [--glowing:20px] group-hover:opacity-100 group-hover:scale-[100%]",
				props.show ? "scale-[100%] opacity-100" : "drop-shadow-glow-blue scale-0 opacity-0"
			)}
		/>
	);
};
