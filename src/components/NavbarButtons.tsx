import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavButton = (props: { children: React.ReactNode; link: string }) => {
  const path = usePathname();
  return (
    <div className="group mt-5 hover:cursor-pointer">
      <Link
        className={clsx(
          "font-bold w-full mx-1 lg:mx-0 lg:my-1 px-3 py-2 rounded items-center justify-center group-hover:drop-shadow-glow-blue group-hover:text-my-blue transition-all duration-500 ease-in-out",
          path === props.link
            ? "text-my-blue drop-shadow-glow-blue"
            : "text-white"
        )}
        href={props.link}
      >
        {props.children}
      </Link>
      {Line({show: path === props.link, className:"mt-5"})}
    </div>
  );
};

export const NavButtonIcon = (props: { children: React.ReactNode; link: string }) => {
  return (
    <div className="group mt-[1.125rem] hover:cursor-pointer ">
      <div className="w-full rounded items-center justify-center group-hover:drop-shadow-glow-blue text-white group-hover:text-my-blue transition-all duration-500 ease-in-out">
        {props.children}
      </div>
      {Line({className:"mt-[1.125rem]"})}
    </div>
  );
};

const Line = (props: {show?:boolean, className?:string}) => {
  return (
    <div
        className={clsx( props.className,
          "transition-all ease-in-out relative duration-500 min-h-[1px] translate-y-[1px] w-auto rounded-lg bg-my-blue [--glowing:20px] group-hover:opacity-100 group-hover:scale-[100%]",
          props.show
            ? "scale-[100%] opacity-100"
            : "drop-shadow-glow-blue scale-0 opacity-0"
        )}
      />
  )
}