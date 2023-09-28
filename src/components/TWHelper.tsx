export default function TWHelper() {
	return (
		<div className={"absolute h-2 items-center justify-center text-white"}>
			<p className="block text-white sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">xs</p>
			<p className="hidden text-white sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</p>
			<p className="hidden text-white sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</p>
			<p className="hidden text-white sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</p>
			<p className="hidden text-white sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
			<p className="hidden text-white sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
		</div>
	);
}
