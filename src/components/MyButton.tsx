export default function MyButton({
  showIcon = true,
  ...props
}: {
  className?: string;
  showIcon?: boolean;
  buttonName: string;
}) {
  return (
    <div className={`${props.className}`}>
      <button className="inline-flex text-white bg-my-blue py-[0.1rem] px-[0.5rem] rounded-lg drop-shadow-glow-blue hover:scale-[105%] opacity-80 hover:opacity-100 transition-all ease-in-out duration-200">
        {props.buttonName}
        {showIcon && (
          <img src="img/github.svg" className="ml-1 pt-[0.1rem] w-5" />
        )}
      </button>
    </div>
  );
}
