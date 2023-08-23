

export default function MyButton(props: { className?: string }) {

    return (
        <div className={props.className}>
            <button className=" text-my-blue text- border-my-blue py-[0.1rem] px-[0.5rem] border rounded-lg drop-shadow-glow-blue">
                Code
            </button>
        </div>
    )
}