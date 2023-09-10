import MyButton from "./MyButton";
import clsx from "clsx";
const Flickity = require('react-flickity-component');

export default function Carousel() {

    var cards = [
        <Card title="Spok" review="Frase bonitinha de review é isso ai tmj 1 multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />,
        <Card title="Marco Túlio" review="Frase bonitinha de review é isso ai tmj 2 multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />,
        <Card title="LGGJ" review="Frase bonitinha de review é isso ai tmj 3 multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />,
        <Card title="LGGJa" review="Frase bonitinha de review é isso ai tmj 3 multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />,
        <Card title="LGGJd" review="Frase bonitinha de review é isso ai tmj 3 multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />
    ];

    return (
        <CardRoll cards={cards} />
    );
}

const CardRoll = (props: { cards: React.ReactNode[]; }) => {


    return (
        <Flickity className="relative h-[13rem] select-none outline-none"
            options={{
                initialIndex: 2,
                wrapAround: true,
                prevNextButtons: true,
                autoPlay: 1500,
            }}
        >

                {props.cards}
           </Flickity>
    )
}


const Card = (props: { title: string; review: string; desc: string; image: string }) => {
    var randomNum = Math.floor(Math.random() * 100) + 1
    var photo = `https://randomuser.me/api/portraits/men/${randomNum}.jpg`

    return (
        <div className="carousel-cell flex justify-center w-[35rem] text-slate-50 overflow-hidden">
            <img className="relative mr-5 w-[12rem] h-[12rem] p-1 border border-opacity-75 rounded-3xl border-slate-50" src={photo} alt="a" />
            <div className="self-center w-[20rem]">
                <h1 className="text-3xl truncate">
                    {props.title}
                </h1>
                <h3 className="text-sm opacity-75">
                    {clsx("-", props.desc)}
                </h3>
                <h2 className="overflow-auto font-sans text-xl max-h-[3.9rem]">
                    {props.review}
                </h2>

                <div className="mt-3">
                    <MyButton buttonName={"Rede social"} />
                </div>
            </div>
        </div>
    )
    /**
    @todo: REFAZER O BOTÃO DE REDE SOCIAL E AS REAÇÕES COM HOVER
    **/
}