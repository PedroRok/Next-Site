"use client";
import Wakatime from "@/lib/Wakatime";
import { LogoAnimated } from "@components/Logo";
import Carousel from "@components/Carousel";

export default function Home() {

  const wt = new Wakatime();
  wt.importAllData();

  return (
    <main className="">
      <div className="max-w-[850px]">
        <div className="flex justify-between mt-5 place-items-center text-slate-50">
          <div className="flex-col max-w-[50%] m-5 animate-fade-in-left">
            <h1>
              Frase bonitinha <B>bem aqui </B>
              obrigado
            </h1>
            <h2 className="p-1 pl-3 font-sans text-2xl opacity-50">
              Olá blablabla alguma frase bonitinha que eu trabalho com minecraft e
              etecetera bem do dahora aqui tirar o bold da font tbm tmj
            </h2>
            <div className="mt-4">
              <Lang name="Java" />
              <Lang name="JavaScript" />
              <Lang name="TypeScript" />
              <Lang name="Python" />
              <Lang name="Next" />
              <Lang name="React" />
              <Lang name="Tailwind" />
              <Lang name="HTML" />
              <Lang name="CSS" />
              <Lang name="C Lang" />
              <Lang name="..." />
            </div>
          </div>
          <div className="relative h-[30rem] w-[20rem]">
            <LogoAnimated className="scale-150" />
          </div>
        </div>
      </div>
      <div className="lex place-items-center">
        <div className="flex justify-between place-items-center">
          <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
          <h1 className="m-3 text-4xl font-bold text-my-blue">BLABLABLA</h1>
          <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
        </div>
        <Carousel/>
        <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center mt-5" />
      </div>
    </main>
  );
}

const Lang = (props: { name: string }) => {
  return (
    <div className="m-1 inline-flex text-my-blue border border-my-blue bg-opacity-70 py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200">
      {props.name}
    </div>
  );
};

const B = (props: { children: React.ReactNode }) => {
  return <span className="text-my-blue">{props.children}</span>;
}

const L = (props: { link: string; children: React.ReactNode }) => {
  return ( // TODO REDO THIS
    <a target="_blank" href="string" rel="noopener noreferrer" className="transition-all duration-200 rounded-lg hover:bg-my-blue hover:text-slate-50">{props.children}</a>
  );
}