

export default function MyButton(props: { className?: string }) {

    return (
        <div className={`${props.className}`}>
            <button className="inline-flex text-my-blue text- border-my-blue py-[0.1rem] px-[0.5rem] border rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-75 hover:opacity-100 transition-all ease-in-out duration-200">
                Code
                <img src="img/github.svg" className="ml-1 pt-[0.1rem] w-5"/>
            </button>
        </div>
    )
}