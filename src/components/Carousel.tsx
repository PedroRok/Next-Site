import { title } from "process";
import MyButton from "./MyButton";
import clsx from "clsx";

export default function Carousel() {
    return (
        <div className="flex flex-row justify-center">
            <Card title="Marco Túlio" review="Frase bonitinha de review é isso ai tmj multiline de preferência pq nois n é de ferro né patrão" desc="Youtuber e Empresário" image="c" />
        </div>
    );
}




const Card = (props: { title: string; review: string; desc:string; image: string }) => {    
    return (
        <div className="flex justify-between text-slate-50 ">
            <div className="w-[12rem] h-[12rem] relative mr-5">
                <img className="p-1 border border-opacity-75 rounded-3xl border-slate-50" src="https://picsum.photos/500/500" alt="a" />
            </div>
            <div className="self-center w-[20rem]">
                <h1 className="text-3xl truncate">
                    {props.title}
                </h1>
                <h3 className="text-sm opacity-75">
                    {clsx("-" , props.desc)}
                </h3>
                <h2 className="overflow-auto font-sans text-xl max-h-[3.9rem]">
                    {props.review}
                </h2>
                
                <div className="mt-3">
                    <MyButton buttonName={"Rede social"}/>
                </div>
            </div>
        </div>
    )
    /**
    @todo: REFAZER O BOTÃO DE REDE SOCIAL E AS REAÇÕES COM HOVER
    **/
}