export default function emailIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
				<rect width="18" height="14" x="3" y="5" strokeDasharray="64" strokeDashoffset="64" rx="1">
					<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
				</rect>
				<path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5L12 12L21 6.5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.6s"
						dur="0.4s"
						values="24;0"
					/>
				</path>
			</g>
		</svg>
	);
}
