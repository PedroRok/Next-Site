import Card from "./components/Card";

export default function Projects() {
    return (
      <div className="group flex-2 w-full max-w-[800px] justify-center animate-fade-in-down text-stone-50">
        
        <div className="flex justify-center mt-5 group-hover:[--glowing:20px] drop-shadow-glow transition-all duration-1000">
          <div className="h-[3rem] w-[1px] bg-stone-50 mx-3 transition-all duration-700 scale-[0%] group-hover:scale-[100%]"></div>
          <h1 className="flex justify-center font-trip text-center font-bold text-5xl after:hover:animate-pulse hover:text-my-blue  ">
              <span className="tracking-[1rem] group-hover:tracking-[2rem] transition-all duration-1000">PROJETO</span>
              <span className="transition-all duration-1000">S</span>
          </h1>
          <div className="h-[3rem] w-[1px] bg-stone-50 mx-3 transition-all duration-700 scale-[0%] group-hover:scale-[100%]"></div>
        </div>
        <Card title="Lorem Ipsum" image="https://picsum.photos/1920/1080" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
        <Card title="Lorem Ipsum" image="https://picsum.photos/1920/1081" description="lorem ipsum dolor sit amet" right={false} />
        <Card title="Lorem Ipsum" image="https://picsum.photos/1920/1082" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
        <Card title="Lorem Ipsum" image="https://picsum.photos/1920/1083" description="lorem ipsum dolor sit amet" right={false} />
        <Card title="Lorem Ipsum" image="https://picsum.photos/1920/1084" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor autem, perspiciatis vel impedit iure eius et eos libero nisi exercitationem rerum alias" right={true} />
      </div>
    );
}
