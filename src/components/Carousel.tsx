import { data } from "@/lib/Reviews";
import { useTranslations } from "next-intl";
import Card from "./CarouselCard";
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
	return (
		<Flickity
			className="relative h-[13rem] select-none outline-none"
			options={{
				initialIndex: 2,
				wrapAround: true,
				prevNextButtons: true,
				autoPlay: 5000
			}}
		>
			{props.cards}
		</Flickity>
	);
};

