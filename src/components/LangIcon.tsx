import { useState } from "react";
import { Hover } from "./Buttons";
import clsx from "clsx";

export default function Lang (props: { name?: string; data?: string; green?: boolean; onClick?: () => void })  {
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
					"m-1 inline-flex bg-opacity-70 py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200 border font-trip",
					props.green ? "text-my-green border-my-green" : "text-my-blue border-my-blue"
				)}
			>
				{props.name || "..."}
			</div>
		</div>
	);
};