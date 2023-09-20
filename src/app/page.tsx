"use client";
import { CodingActivity, LangProps, Language, dataCode, dataLang } from "@/lib/Wakatime";
import { LogoAnimated } from "@components/Logo";
import Carousel from "@components/Carousel";
import { JSX, useEffect, useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [language, setLanguage ] = useState<Language | undefined>(undefined)
  const [activity, setActivity ] = useState<CodingActivity | undefined>(undefined)

  useEffect(() => {
    async function getLangs() {
      const data = await dataLang()
      setLanguage(data)
    }
    async function getActivity() {
      const data = await dataCode()
      setActivity(data)
    }
    getActivity()
    getLangs()
    
  }, [])

  function getLangsCard() {
    let langs: JSX.Element[] = []
    for (let i = 0; i < 6; i++) {
      let lg = language?.data[i];
        langs.push(<Lang key={i} name={lg?.name || undefined} data={lg?.hours+" horas"}/>)
    }
    return langs
  }

  function getTotalCoded() {
    return activity?.data.grand_total.human_readable_total
  }
  
  /*
  <Lang name="Java" data={getDataByName("Java")} />
              <Lang name="JavaScript" data={getDataByName("JavaScript")} />
              <Lang name="TypeScript" data={getDataByName("TypeScript")} />
              <Lang name="Python" data={getDataByName("Python")} />
              
              <Lang name="HTML" data={getDataByName("HTML")} />
              <Lang name="CSS" data={getDataByName("CSS")} />
              <Lang name="C Lang" data={getDataByName("C")} />
              */

  return (
    <main className="">
      <div className="max-w-[850px]">
        
        <div className="flex justify-between mt-5 place-items-center text-slate-50">
          <div className="flex-col max-w-[50%] m-5 animate-fade-in-left">
            <h1>
              Frase bonitinha <B>bem aqui </B>
              obrigado
            </h1>
            <h2 className="p-1 font-sans text-[1.4rem] opacity-50">
              Opa, tudo bem? Meu nome é Pedro Lucas, mas pode me chamar de <B>Rok</B>, comecei a programar em 2019 e desde então isso é minha paixão.
              Com um total de <B hover="aaaaaa">{getTotalCoded() || "..."}</B> codificando, eu tenho experiência com:
            </h2>
            <div className="mt-4">
              {getLangsCard()}
              <Lang name="Next" green={true}/>
              <Lang name="React" green={true}/>
              <Lang name="Tailwind" green={true}/>
              <Lang name="Spigot" green={true}/>
              
              <Lang name="..."green={true} />
            </div>
          </div>
          <div className="relative h-[30rem] w-[20rem]">
            <LogoAnimated className="scale-150" />
          </div>
        </div>
      </div>
      <div className="place-items-center w-[850px] overflow-hidden">
        <div className="flex justify-between place-items-center">
          <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
          <h1 className="m-3 text-4xl font-bold text-my-blue">AVALIAÇÕES</h1>
          <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center" />
        </div>
        <Carousel/>
        <div className="w-full h-[1px] bg-stone-50 opacity-50 self-center mt-5" />
      </div>
      
    </main>
  );
}

const Lang = (props: { name?: string, data?: string, green?: boolean}) => {
  return (
    <div className="relative inline-flex group">
      {props.data && <div className="absolute opacity-0 flex group-hover:visible group-hover:opacity-100 transition-all duration-300 text-center w-[100%] -top-5 text-sm overflow-visible">{props.data}</div>}
      <div className={clsx("m-1 inline-flex bg-opacity-70 py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200 border", props.green ? "text-my-green border-my-green" :  "text-my-blue border-my-blue" )}>
        {props.name || "..."}
        
      </div>
    </div>
  );
};

const B = (props: { children: React.ReactNode, hover?:string }) => {
  return <span className="text-my-blue relative group">
    {props.children}
    </span>;
}

const L = (props: { link: string; children: React.ReactNode }) => {
  return ( // TODO REDO THIS
    <a target="_blank" href="string" rel="noopener noreferrer" className="transition-all duration-200 rounded-lg hover:bg-my-blue hover:text-slate-50">{props.children}</a>
  );
}