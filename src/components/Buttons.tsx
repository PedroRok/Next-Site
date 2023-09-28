import clsx from "clsx";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const NavButton = (props: { children: React.ReactNode; link: string }) => {
	const path = usePathname();
	return (
		<div className="mt-5 group hover:cursor-pointer">
			<Link
				className={clsx(
					"w-full mx-1 lg:mx-0 lg:my-1 px-3 py-2 rounded items-center justify-center group-hover:drop-shadow-glow-blue group-hover:text-my-blue transition-all duration-500 ease-in-out",
					path === props.link ? "text-my-blue drop-shadow-glow-blue" : "text-white"
				)}
				href={props.link}
			>
				{props.children}
			</Link>
			{Line({ show: path === props.link, className: "mt-5" })}
		</div>
	);
};

export const NavButtonIcon = (props: { children: React.ReactNode; onClick: () => void }) => {
	return (
		<div onClick={props.onClick} className="group mt-[1.125rem] hover:cursor-pointer">
			<div className="items-center justify-center w-full text-white transition-all duration-500 ease-in-out rounded group-hover:drop-shadow-glow-blue group-hover:text-my-blue">
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

export const MyButton = ({
	showIcon = true,
	...props
}: {
	className?: string;
	showIcon?: boolean;
	buttonName: string;
}) => {
	return (
		<div className={`${props.className}`}>
			<button className="inline-flex text-white bg-my-blue py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-80 hover:opacity-100 transition-all ease-in-out duration-200">
				{props.buttonName}
				{showIcon && <Image src="img/github.svg" alt="Github Logo" width={20} height={20} />}
			</button>
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

export const Hover = (props: { children: React.ReactNode }) => {
	return (
		<div className="absolute border-r bg-slate-950 border rounded-md opacity-75 p-1 py-[0.5rem] border-my-shadow-blue border-opacity-75 -translate-y-12 text-ellipsis">
			<div className="truncate text-slate-50 font-trip">{props.children}</div>
			<div className="left-[39px] bg-slate-950 absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 border-r border-b border-my-blue border-opacity-75" />
		</div>
	);
};
