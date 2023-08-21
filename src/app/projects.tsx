import Card from "./components/Card";

export default function Projects() {
    return (
      <div className="group flex-2 w-full max-w-[800px] justify-center animate-fade-in-down text-stone-50">
        <div className="min-w-[20rem] min-h-[0.1rem] bg-slate-50"></div>
        <div className="flex justify-center mt-5 group-hover:[--glowing:20px] drop-shadow-glow transition-all duration-1000">
            <h1 className="flex justify-center font-trip text-center font-bold text-5xl ">
                <span className="tracking-[1rem] group-hover:tracking-[2rem] transition-all duration-1000">PROJETO</span>
                S
            </h1>
            <div className="h-[0rem] group-hover:h-[3rem] w-[0rem] group-hover:w-[0.1rem] bg-slate-50 mx-3 transition-all duration-700"></div>
        </div>
        <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
        <Card title="Lorem Ipsum" description="lorem ipsum dolor sit amet" right={false} />
        <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
        <Card title="Lorem Ipsum" description="lorem ipsum dolor sit amet" right={false} />
        <Card title="Lorem Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
        
      </div>
    );
}