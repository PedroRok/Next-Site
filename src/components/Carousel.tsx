import { data } from "@/lib/Reviews";
import { useTranslations } from "next-intl";
import Card from "./CarouselCard";
import { useEffect, useState } from "react";
const Flickity = require("react-flickity-component");

export default function Carousel() {
	const t = useTranslations();


	let cards = data.map((element) => {
		return (
			<Card
				key={element.id}
				title={element.name}
				review={t(`reviews.${element.id}.review`)}
				desc={t(`reviews.${element.id}.about`)}
				image={element.image}
				social={element.social}
			/>
		);
	})

	return <CardRoll cards={cards} />;
}


const CardRoll = (props: { cards: React.ReactNode[] }) => {
	const [buttons, setButtons] = useState(false);
	useEffect(() => {
		window.innerWidth >= 425 ? setButtons(true) : setButtons(false) ;
	}, []);
	return (
		<Flickity
			className="relative w-full sm:h-[13rem] select-none outline-none"
			options={{
				initialIndex: 2,
				wrapAround: true,
				prevNextButtons: buttons,
				autoPlay: 5000
			}}
		>
			{props.cards}
		</Flickity>
	);
};

