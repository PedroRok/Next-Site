import { useState } from "react";
import clsx from "clsx";

export default function Lang (props: { name?: string; data?: string; green?: boolean; onClick?: () => void })  {
	return (
		<div className="relative inline-flex justify-center group">
			<div
				onClick={props.onClick}
				className={clsx(
					"m-1 inline-flex bg-opacity-70 py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200 border font-trip",
					props.green ? "text-my-green border-my-green" : "text-my-blue border-my-blue"
				)}
				data-tooltip-id="default-top" data-tooltip-content={props.data}
			>
				{props.name || "..."}
			</div>
		</div>
	);
};