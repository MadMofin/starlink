import { P } from "../ui-ux/P";
import { Logo } from "./Logo";

export const TopBar = () => {
  return (
    <div
      className={`
        fixed
        top-0
        left-0
        right-0
        h-[4rem]
        px-8
        py-5
        flex
        gap-5
        z-20
        bg-brown
        border
        border-textPrimary/10
      `}
    >
      <div className="block lg:hidden">
        <Logo />
      </div>
      <div className="flex flex-1 h-full gap-10 justify-end items-end ">
        <span>Menu 1</span>
        <span>Menu 2</span>
        <span>Menu 3</span>
        <span>Menu 4</span>
      </div>
    </div>
  );
};
